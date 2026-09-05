<?php

namespace App\Services\Property;

use App\Models\Property;
use App\Models\PropertyImage;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

class PropertyImageService
{
    /**
     * Store and process multiple property images.
     *
     * @param Property $property
     * @param array<UploadedFile> $files
     * @return array<PropertyImage>
     */
    public function upload(Property $property, array $files, bool $isPrimary = false): array
    {
        $uploaded = [];
        $currentOrder = (int) $property->images()->max('sort_order') ?? 0;
        $hasPrimary = $property->images()->where('is_primary', true)->exists();

        foreach ($files as $index => $file) {
            $currentOrder++;
            $markAsPrimary = (!$hasPrimary && $index === 0) || ($isPrimary && $index === 0);

            if ($markAsPrimary) {
                $property->images()->update(['is_primary' => false]);
                $hasPrimary = true;
            }

            $uploaded[] = $this->processAndStore($property, $file, $currentOrder, $markAsPrimary);
        }

        return $uploaded;
    }

    /**
     * Process a single uploaded image into thumbnail, medium, and large variants.
     */
    protected function processAndStore(Property $property, UploadedFile $file, int $sortOrder, bool $isPrimary): PropertyImage
    {
        $disk = Storage::disk('public');
        $directory = "properties/{$property->id}";
        $filename = Str::uuid()->toString();
        $extension = $file->getClientOriginalExtension() ?: 'jpg';

        $origPath = $file->storeAs($directory, "{$filename}_orig.{$extension}", 'public');
        $thumbRelativePath = "{$directory}/{$filename}_thumb.{$extension}";
        $medRelativePath = "{$directory}/{$filename}_med.{$extension}";
        $largeRelativePath = "{$directory}/{$filename}_large.{$extension}";

        try {
            $manager = new ImageManager(new Driver());
            $image = $manager->read($file->getRealPath());

            // Thumbnail (300x200 crop)
            $thumb = clone $image;
            $thumb->cover(300, 200);
            $disk->put($thumbRelativePath, (string) $thumb->encode());

            // Medium (800x600)
            $medium = clone $image;
            $medium->scaleDown(width: 800, height: 600);
            $disk->put($medRelativePath, (string) $medium->encode());

            // Large (1600x1200)
            $large = clone $image;
            $large->scaleDown(width: 1600, height: 1200);
            $disk->put($largeRelativePath, (string) $large->encode());
        } catch (\Throwable $e) {
            // Graceful fallback if GD or Intervention throws
            $thumbRelativePath = $origPath;
            $medRelativePath = $origPath;
            $largeRelativePath = $origPath;
        }

        return PropertyImage::create([
            'property_id' => $property->id,
            'original_path' => Storage::url($origPath),
            'thumbnail_path' => Storage::url($thumbRelativePath),
            'medium_path' => Storage::url($medRelativePath),
            'large_path' => Storage::url($largeRelativePath),
            'alt_text' => $property->title,
            'sort_order' => $sortOrder,
            'is_primary' => $isPrimary,
        ]);
    }

    /**
     * Delete an image and its physical files.
     */
    public function delete(PropertyImage $image): void
    {
        $disk = Storage::disk('public');

        foreach ([$image->original_path, $image->thumbnail_path, $image->medium_path, $image->large_path] as $path) {
            if ($path) {
                $relative = str_replace('/storage/', '', parse_url($path, PHP_URL_PATH));
                if ($relative && $disk->exists($relative)) {
                    $disk->delete($relative);
                }
            }
        }

        $property = $image->property;
        $wasPrimary = $image->is_primary;
        $image->delete();

        // If the primary image was deleted, promote the next image
        if ($wasPrimary && $property) {
            $next = $property->images()->first();
            if ($next) {
                $next->update(['is_primary' => true]);
            }
        }
    }
}
