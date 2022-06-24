<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PageRequest;
use App\Http\Requests\Admin\DoctorRequest;
use App\Models\File;
use App\Models\Page;
use App\Models\Doctor;
use App\Repositories\Eloquent\PageSectionRepository;
use App\Repositories\Eloquent\DoctorRepository as DoctorRepository;
use App\Repositories\PageRepositoryInterface;
use App\Repositories\DoctorRepositoryInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;

class DoctorsController extends Controller
{

    /**
     * @var PageRepositoryInterface
     */
    private $doctorRepository;

    /**
     * @param PageRepositoryInterface $pageRepository
     */
    public function __construct(
        DoctorRepository $doctorRepository
    ) {
        $this->doctorRepository = $doctorRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(PageRequest $request)
    {
        /*return view('admin.pages.product.index', [
            'products' => $this->productRepository->getData($request, ['translations', 'categories'])
        ]);*/

        return view('admin.nowa.views.doctors.index', [
            'data' => $this->doctorRepository->getData($request),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        $doctor = $this->doctorRepository->model;
        $url = locale_route('doctors.store', [], false);
        $method = 'POST';

        /*return view('admin.pages.product.form', [
            'product' => $product,
            'url' => $url,
            'method' => $method,
            'categories' => $this->categories
        ]);*/

        return view('admin.nowa.views.doctors.form', [
            'url' => $url,
            'method' => $method,
            'doctor' => $doctor,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductRequest $request
     *
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function store(DoctorRequest $request)
    {

        //dd($request->all());
        $saveData = Arr::except($request->except('_token'), []);
        //$saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $customer = $this->doctorRepository->create($saveData);


        //dd($saveData);


        // Save Files
        if ($request->hasFile('images')) {
            $customer = $this->doctorRepository->saveFiles($customer->id, $request);
        }

        return redirect(locale_route('doctors.index', $customer->id))->with('success', __('admin.create_successfully'));
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
    public function edit(string $locale, Doctor $doctor)
    {
        $url = locale_route('doctors.update', $doctor->id, false);
        $method = 'PUT';

        /*return view('admin.pages.product.form', [
            'product' => $product,
            'url' => $url,
            'method' => $method,
            'categories' => $this->categories
        ]);*/

        return view('admin.nowa.views.doctors.form', [
            'doctor' => $doctor,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ProductRequest $request
     * @param string $locale
     * @param Product $product
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function update(DoctorRequest $request, string $locale, Doctor $doctor)
    {
        //dd($request->all());
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];


        //dd($doctor->id);

        if ($this->doctorRepository->update($doctor->id, $saveData)) {
        }

        $this->doctorRepository->saveFiles($doctor->id, $request);


        return redirect(locale_route('doctors.index', $doctor->id))->with('success', __('admin.update_successfully'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param string $locale
     * @param Product $product
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(string $locale, Doctor $doctor)
    {
        if (!$this->doctorRepository->delete($doctor->id)) {
            return redirect(locale_route('doctor.index', $doctor->id))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(locale_route('doctor.index'))->with('success', __('admin.delete_message'));
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
