<?php

namespace Tests\Feature;

use App\Models\Property;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Tests\TestCase;

class PropertyCrudTest extends TestCase
{
    use RefreshDatabase;

    public function test_guest_cannot_create_property(): void
    {
        $guest = User::factory()->create(['user_type' => 'guest']);

        $response = $this->actingAs($guest, 'sanctum')
            ->postJson(route('api.properties.store'), [
                'title' => 'Unauthorized Villa Listing',
                'description' => 'A test description of this property listing that is long enough.',
                'listing_type' => 'rent',
                'property_type' => 'villa',
                'price' => 25000,
                'address' => 'Bole Medhanealem',
                'city' => 'Addis Ababa',
            ]);

        $response->assertStatus(403);
    }

    public function test_agent_can_create_property_listing(): void
    {
        Event::fake([\App\Events\PropertyCreated::class]);

        $agent = User::factory()->agent()->create();

        $response = $this->actingAs($agent, 'sanctum')
            ->postJson(route('api.properties.store'), [
                'title' => 'Luxury Bole Apartment',
                'description' => 'A beautiful luxury apartment located in the heart of Bole with uninterrupted power and water.',
                'listing_type' => 'holiday_let',
                'property_type' => 'apartment',
                'price' => 3500,
                'price_period' => 'night',
                'currency' => 'ETB',
                'address' => 'Near Edna Mall',
                'city' => 'Addis Ababa',
                'sub_city' => 'Bole',
                'bedrooms' => 2,
                'bathrooms' => 2,
                'square_meters' => 120,
                'is_furnished' => true,
                'amenities' => ['wifi', 'generator', 'security'],
            ]);

        $response->assertStatus(201)
            ->assertJsonPath('data.title', 'Luxury Bole Apartment');

        $this->assertDatabaseHas('properties', [
            'user_id' => $agent->id,
            'title' => 'Luxury Bole Apartment',
        ]);

        Event::assertDispatched(\App\Events\PropertyCreated::class);
    }

    public function test_public_user_can_view_published_property(): void
    {
        $property = Property::factory()->create(['status' => 'published']);

        $response = $this->getJson(route('api.properties.show', $property));

        $response->assertStatus(200)
            ->assertJsonPath('data.id', $property->id);
    }

    public function test_owner_can_update_property(): void
    {
        Event::fake([\App\Events\PropertyUpdated::class]);

        $agent = User::factory()->agent()->create();
        $property = Property::factory()->create(['user_id' => $agent->id]);

        $response = $this->actingAs($agent, 'sanctum')
            ->putJson(route('api.properties.update', $property), [
                'title' => 'Updated Property Title',
                'description' => 'Updated description that is sufficiently long for validation.',
            ]);

        $response->assertStatus(200)
            ->assertJsonPath('data.title', 'Updated Property Title');

        $this->assertDatabaseHas('properties', [
            'id' => $property->id,
            'title' => 'Updated Property Title',
        ]);
    }

    public function test_non_owner_cannot_update_property(): void
    {
        $owner = User::factory()->agent()->create();
        $otherUser = User::factory()->agent()->create();
        $property = Property::factory()->create(['user_id' => $owner->id]);

        $response = $this->actingAs($otherUser, 'sanctum')
            ->putJson(route('api.properties.update', $property), [
                'title' => 'Hacked Title',
            ]);

        $response->assertStatus(403);
    }

    public function test_owner_can_delete_property(): void
    {
        $owner = User::factory()->agent()->create();
        $property = Property::factory()->create(['user_id' => $owner->id]);

        $response = $this->actingAs($owner, 'sanctum')
            ->deleteJson(route('api.properties.destroy', $property));

        $response->assertStatus(200);
        $this->assertSoftDeleted('properties', ['id' => $property->id]);
    }
}
