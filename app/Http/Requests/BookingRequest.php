<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        $property = $this->route('property');
        $isHolidayLet = $property?->listing_type === 'holiday_let';

        return [
            'check_in' => [
                $isHolidayLet ? 'required' : 'nullable',
                'date',
                'after_or_equal:today',
            ],
            'check_out' => [
                $isHolidayLet ? 'required' : 'nullable',
                'date',
                'after:check_in',
            ],
            'guest_count' => ['nullable', 'integer', 'min:1', 'max:50'],
            'guest_message' => ['nullable', 'string', 'max:1000'],
        ];
    }
}
