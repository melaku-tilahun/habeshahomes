<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePropertyRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->can('create', \App\Models\Property::class);
    }

    public function rules(): array
    {
        return [
            'region_id' => ['nullable', 'integer', 'exists:regions,id'],
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'min:20'],
            'listing_type' => ['required', 'string', 'in:holiday_let,rent,sale'],
            'property_type' => ['required', 'string', 'in:apartment,house,villa,commercial,land,condo'],
            'price' => ['required', 'numeric', 'min:0'],
            'price_period' => ['nullable', 'string', 'in:night,month,year,total'],
            'currency' => ['nullable', 'string', 'in:ETB,USD,EUR'],
            'latitude' => ['nullable', 'numeric', 'between:-90,90'],
            'longitude' => ['nullable', 'numeric', 'between:-180,180'],
            'address' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:100'],
            'sub_city' => ['nullable', 'string', 'max:100'],
            'bedrooms' => ['nullable', 'integer', 'min:0', 'max:50'],
            'bathrooms' => ['nullable', 'numeric', 'min:0', 'max:50'],
            'square_meters' => ['nullable', 'numeric', 'min:0'],
            'floor_number' => ['nullable', 'integer'],
            'is_furnished' => ['nullable', 'boolean'],
            'amenities' => ['nullable', 'array'],
            'amenities.*' => ['string', 'max:50'],
            'status' => ['nullable', 'string', 'in:draft,published'],
        ];
    }
}
