<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductRequest;
use App\Http\Requests\Admin\BlogRequest;
use App\Models\Category;
use App\Models\Customer;
use App\Models\File;
use App\Models\Blog;
use App\Repositories\Eloquent\BlogRepository;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    private $blogRepository;

    public function __construct(
        BlogRepository $blogRepository
    ) {
        $this->blogRepository = $blogRepository;
    }

    public function index(ProductRequest $request)
    {
        /*return view('admin.pages.product.index', [
            'products' => $this->productRepository->getData($request, ['translations', 'categories'])
        ]);*/

        return view('admin.nowa.views.news.index', [
            'data' => $this->blogRepository->getData($request),
        ]);
    }

    public function create()
    {
        $blog = $this->blogRepository->model;
        $url = locale_route('blogs.store', [], false);
        $method = 'POST';

        return view('admin.nowa.views.news.form', [
            'url' => $url,
            'method' => $method,
            'blog' => $blog,
        ]);
    }


    public function store(BlogRequest $request)
    {
        // dd($request->all());
        $saveData = Arr::except($request->except('_token'), []);
        //$saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];
        $customer = $this->blogRepository->create($saveData);


        // dd($saveData);


        // Save Files
        if ($request->hasFile('images')) {
            $customer = $this->blogRepository->saveFiles($customer->id, $request);
        }

        return redirect(locale_route('blogs.index', $customer->id))->with('success', __('admin.create_successfully'));
    }

    /**
     * Display the specified resource.
     *
     * @param string $locale
     * @param Product $product
     *
     * @return Application|Factory|View
     */
    public function show(string $locale, Customer $product)
    {
        return view('admin.pages.product.show', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param string $locale
     * @param Category $category
     *
     * @return Application|Factory|View
     */
    public function edit(string $locale, Blog $blog)
    {
        $url = locale_route('blogs.update', $blog, false);
        $method = 'PUT';


        return view('admin.nowa.views.news.form', [
            'blog' => $blog,
            'url' => $url,
            'method' => $method,
        ]);
    }


    public function update(BlogRequest $request, string $locale, Blog $blog)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];


        //dd($staff->id);

        if ($this->blogRepository->update($blog->id, $saveData)) {
        }

        $this->blogRepository->saveFiles($blog->id, $request);


        return redirect(locale_route('blogs.index', $blog->id))->with('success', __('admin.update_successfully'));
    }

    public function destroy(string $locale, $blog)
    {
        if (!$this->blogRepository->delete($blog)) {
            return redirect(locale_route('blogs.index', $blog))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(locale_route('blogs.index'))->with('success', __('admin.delete_message'));
    }

    public function docDelete($locale, $id)
    {
        $file = File::query()->where('id', $id)->firstOrFail();
        $id = $file->fileable_id;
        //dd($file);
        if (Storage::exists('public/Customer/' . $file->fileable_id . '/files/' . $file->title)) {
            Storage::delete('public/Customer/' . $file->fileable_id . '/files/' . $file->title);
        }

        $file->delete();
        return redirect(locale_route('customer.edit', $id))->with('success', __('admin.delete_message'));
    }
}
