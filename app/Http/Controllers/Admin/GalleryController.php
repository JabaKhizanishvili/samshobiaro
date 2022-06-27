<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SettingRequest;
use App\Models\Setting;
use App\Models\Gallery;
use App\Repositories\SettingRepositoryInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;

class GalleryController extends Controller
{
    /**
     * @var SettingRepositoryInterface
     */


    /**
     */
    // public function __construct(
    //     SettingRepositoryInterface  $settingRepository
    // ) {
    //     $this->settingRepository = $settingRepository;
    // }


    /**
     * @param SettingRequest $request
     * @return Application|Factory|View
     */
    public function index(SettingRequest $request, Gallery $img)
    {
        /*return view('admin.pages.setting.index', [
            'settings' => $this->settingRepository->getData($request, ['translations'])
        ]);*/
        return view('admin.nowa.views.gallery.index', [
            "img" => $img->paginate(4),
        ]);
    }

    public function img(Request $request, Gallery $img)
    {
        if ($request->img) {
            $name = $request->file('img')->getClientOriginalName();
            $size = $request->file('img')->getSize();
            // dd($request->file('img'));
            $request->file('img')->storeAs('public/images/', $name);
            $img->create([
                "name" => $name,
                "size" => $size,
                "width" => $request->width,
                "user_id" => $request->session()->get('loggedUser'),
            ]);
            return redirect()->back();
        } else {
            return back();
        }
    }

    public function delImg(Request $request, Gallery $img)
    {
        // $img->remove($request->file('avatar'));
        $res = $img->where('id', $request->input('id'))->delete();
        return back();
    }
    /**
     * @param string $locale
     * @param Setting $setting
     * @return Application|Factory|View
     */


    /**
     * @param string $locale
     * @param Setting $setting
     * @return Application|Factory|View
     */
    public function edit(string $locale, Setting $setting)
    {
        $url = locale_route('setting.update', $setting->id, false);
        $method = 'PUT';

        /*return view('admin.pages.setting.form', [
            'setting' => $setting,
            'url' => $url,
            'method' => $method,
        ]);*/

        return view('admin.nowa.views.setting.form', [
            'setting' => $setting,
            'url' => $url,
            'method' => $method,
        ]);
    }


    /**
     * @param SettingRequest $request
     * @param string $locale
     * @param Setting $setting
     * @return Application|RedirectResponse|Redirector
     */
    public function update(SettingRequest $request, string $locale, Setting $setting)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $this->settingRepository->update($setting->id, $saveData);


        return redirect(locale_route('setting.index', $setting->id))->with('success', __('admin.update_successfully'));
    }


    public function setActive(Request $request)
    {
        //dd($request->all());
        Setting::where('id', $request->get('id'))->update(['active' => $request->get('active')]);
    }
}
