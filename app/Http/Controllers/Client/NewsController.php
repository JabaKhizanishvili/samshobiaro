<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Blog;
use App\Models\Gallery;
use App\Models\Page;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $news = Blog::where("status", 1)->with(['file', 'translations'])->paginate(3);
        $page = Page::where('key', 'news')->firstOrFail();


        return Inertia::render('News/News', [
            "news" => $news,
            "gallery" => Gallery::take(6)->get(),
            "gallerylinks" => asset('storage/images'),
            "blog" =>  Blog::with('latestImage')->paginate(3),
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

    public function show(string $locale, $slug)
    {
        $page = Page::where('key', 'home')->firstOrFail();

        return Inertia::render('SingleNews/SingleNews', [
            // "news" => $news, "lastNews" => $lastNews,
            "news" => Blog::with('latestImage')->find($slug),
            "newsGallery" => Blog::where('id', '!=', $slug)->with('latestImage')->latest()->limit(3)->get(),
            "seo" => [
                "title" => $page->meta_title ?? $page->meta_title,
                "description" => $page->meta_description ?? $page->meta_description,
                "keywords" => $page->meta_keyword ?? $page->meta_keyword,
                "og_title" => $page->meta_og_title,
                "og_description" => $page->meta_og_description,
                //            "image" => "imgg",
                //            "locale" => App::getLocale()
            ]
        ])->withViewData([
            'meta_title' => $page->meta_title ?? $page->meta_title,
            'meta_description' => $page->meta_description ?? $page->meta_description,
            'meta_keyword' => $page->meta_keyword ?? $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }
}
