<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Page::truncate();
        // Pages array
        $pages = [
            [
                'key' => 'home'
            ],
            [
                'key' => 'doctors'
            ],
            [
                'key' => 'news'
            ],
            [
                'key' => 'aboutus'
            ],
            [
                'key' => 'gallery'
            ],
            [
                'key' => 'contact'
            ],


        ];

        // Insert Pages
        Page::insert($pages);
    }
}
