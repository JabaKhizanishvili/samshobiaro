<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Page;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {

        $news = News::where("status", 1)->with(['file', 'translations'])->paginate(3);
        //        dd(1);
        $page = Page::where('key', 'news')->firstOrFail();


        return Inertia::render('News/News', ["news" => $news, "seo" => [
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

    public function show(string $locale, $slug)
    {
        $news = News::where("status", 1)->where("slug", $slug)->with(['file', 'translations'])->firstOrFail();
        $lastNews = News::where("status", 1)->where('slug', '<>', $slug)->latest()->with(["file", "translations"])->take(3)->get();
        $page = Page::where('key', 'news')->firstOrFail();



        return Inertia::render('SingleNews/SingleNews', ["news" => $news, "lastNews" => $lastNews, "seo" => [
            "title" => $news->meta_title ?? $page->meta_title,
            "description" => $news->meta_description ?? $page->meta_description,
            "keywords" => $news->meta_keyword ?? $page->meta_keyword,
            "og_title" => $page->meta_og_title,
            "og_description" => $page->meta_og_description,
            //            "image" => "imgg",
            //            "locale" => App::getLocale()
        ]])->withViewData([
            'meta_title' => $news->meta_title ?? $page->meta_title,
            'meta_description' => $news->meta_description ?? $page->meta_description,
            'meta_keyword' => $news->meta_keyword ?? $page->meta_keyword,
            "image" => $news->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);
    }
}
