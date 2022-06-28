<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Certificate;
use App\Models\News;
use App\Models\Blog;
use App\Models\Doctor;
use App\Models\Page;
use App\Models\Product;
use App\Models\Gallery;
use App\Models\Project;
use App\Models\Service;
use App\Models\Slider;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $page = Page::where('key', 'home')->firstOrFail();
        $news = Blog::where("status", 1)->with(['file', 'translations'])->take(6)->get();

        $images = [];
        foreach ($page->sections as $sections) {
            if ($sections->file) {
                $images[] = asset($sections->file->getFileUrlAttribute());
            } else {
                $images[] = null;
            }
        }

        return Inertia::render('Home/Home', [
            "slider" => Slider::where("status", 1)->with(['file', 'translations'])->get(),
            "news" => $news,
            "blog" =>  Blog::with('latestImage')->get(),
            'gallery' => Gallery::take(8)->get(),
            "links" => asset('storage/images'),
            "images" => $images,
            "seo" => [
                "title" => $page->meta_title,
                "description" => $page->meta_description,
                "keywords" => $page->meta_keyword,
                "og_title" => $page->meta_og_title,
                "og_description" => $page->meta_og_description,
                //            "image" => "imgg",
                //            "locale" => App::getLocale()
            ]
        ])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }

    public function gallery()
    {
        $page = Page::where('key', 'home')->firstOrFail();

        return Inertia::render('Gallery/Gallery', [
            "links" => asset('storage/images'),
            'images' => Gallery::all(),
            "seo" => [
                "title" => $page->meta_title,
                "description" => $page->meta_description,
                "keywords" => $page->meta_keyword,
                "og_title" => $page->meta_og_title,
                "og_description" => $page->meta_og_description,
                //            "image" => "imgg",
                //            "locale" => App::getLocale()
            ]
        ])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }

    public function doctors()
    {
        $page = Page::where('key', 'doctors')->firstOrFail();

        $images = [];
        foreach ($page->sections as $sections) {
            if ($sections->file) {
                $images[] = asset($sections->file->getFileUrlAttribute());
            } else {
                $images[] = null;
            }
        }

        return Inertia::render('OurDoctors/OurDoctors', [
            "doctor" => Doctor::with('latestImage')->get(),
            "images" => $images,
            "seo" => [
                "title" => $page->meta_title,
                "description" => $page->meta_description,
                "keywords" => $page->meta_keyword,
                "og_title" => $page->meta_og_title,
                "og_description" => $page->meta_og_description,
                //            "image" => "imgg",
                //            "locale" => App::getLocale()
            ]
        ])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }
    public function services()
    {
        $page = Page::where('key', 'service')->firstOrFail();

        return Inertia::render('Services/Services', ["seo" => [
            "title" => $page->meta_title,
            "description" => $page->meta_description,
            "keywords" => $page->meta_keyword,
            "og_title" => $page->meta_og_title,
            "og_description" => $page->meta_og_description,
            //            "image" => "imgg",
            //            "locale" => App::getLocale()
        ]])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }
    public function tips()
    {
        $page = Page::where('key', 'tips')->firstOrFail();

        return Inertia::render('Tips/Tips', ["seo" => [
            "title" => $page->meta_title,
            "description" => $page->meta_description,
            "keywords" => $page->meta_keyword,
            "og_title" => $page->meta_og_title,
            "og_description" => $page->meta_og_description,
            //            "image" => "imgg",
            //            "locale" => App::getLocale()
        ]])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }


    // single tips pages ------------------------------------------

    public function tip($locale, $n)
    {
        $page = Page::where('key', 'home')->firstOrFail();

        return Inertia::render('SingleTip/Tip' . $n, ["seo" => [
            "title" => $page->meta_title,
            "description" => $page->meta_description,
            "keywords" => $page->meta_keyword,
            "og_title" => $page->meta_og_title,
            "og_description" => $page->meta_og_description,
            //            "image" => "imgg",
            //            "locale" => App::getLocale()
        ]])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }

    // single doctor pages ------------------------------------------

    public function doctor($locale, $n)
    {
        $page = Page::where('key', 'home')->firstOrFail();

        return Inertia::render('OurDoctors/Doctor' . $n, ["seo" => [
            "title" => $page->meta_title,
            "description" => $page->meta_description,
            "keywords" => $page->meta_keyword,
            "og_title" => $page->meta_og_title,
            "og_description" => $page->meta_og_description,
            //            "image" => "imgg",
            //            "locale" => App::getLocale()
        ]])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }
}
