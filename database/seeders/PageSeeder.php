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
            // about us
            [
                'key' => 'purpose'
            ],
            [
                'key' => 'ethics'
            ],
            [
                'key' => 'politics'
            ],
            [
                'key' => 'management'
            ],
            [
                'key' => 'recognition'
            ],
            // servies
            [
                'key' => 'services'
            ],
            [
                'key' => 'stators'
            ],
            [
                'key' => 'certification'
            ],
            [
                'key' => 'comprecognition'
            ],
            // documentation
            [
                'key' => 'owner-application'
            ],
            [
                'key' => 'evaluation'
            ],
            [
                'key' => 'circulars'
            ],
            //our team
            [
                'key' => 'office'
            ],
            [
                'key' => 'inspectors'
            ],
            [
                'key' => 'career'
            ],

            // contact

            // [
            //     'key' => 'contact'
            // ],


            [
                'key' => 'about'
            ],
            [
                'key' => 'contact'
            ],
            [
                'key' => 'products'
            ]


        ];

        // Insert Pages
        Page::insert($pages);
    }
}
