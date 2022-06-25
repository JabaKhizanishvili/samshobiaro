<?php


namespace App\Http\Requests\Admin;

use App\Models\Language;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        // Check if method is get,fields are nullable.
        if ($this->method() === 'GET') {
            return [];
        }

        return [
            config('translatable.fallback_locale') . '.name' => 'required',
            //'slug' => ['required', 'alpha_dash', Rule::unique('vacancies', 'slug')->ignore($this->vacancy)],
        ];
    }
}
