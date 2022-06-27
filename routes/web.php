<?php

/**
 *  routes/web.php
 *
 * Date-Time: 03.06.21
 * Time: 15:41
 * @author Insite LLC <hello@insite.international>
 */

use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\LanguageController;
use App\Http\Controllers\Admin\EvaluationController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\TranslationController;
use App\Http\Controllers\CKEditorController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Client\ContactController;
use App\Http\Controllers\Client\AboutUsController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Client\ServiceController;
use App\Http\Controllers\Client\DocumentationController;
use App\Http\Controllers\Client\OurTeamController;
use App\Http\Controllers\Client\LoginPageController;




Route::post('ckeditor/image_upload', [CKEditorController::class, 'upload'])->name('upload');

Route::redirect('', config('translatable.fallback_locale'));
Route::prefix('{locale?}')
    ->middleware(['setlocale'])
    ->group(function () {
        Route::prefix('adminpanel')->group(function () {
            Route::get('login', [LoginController::class, 'loginView'])->name('loginView');
            Route::post('login', [LoginController::class, 'login'])->name('login');


            Route::middleware('auth')->group(function () {
                Route::get('logout', [LoginController::class, 'logout'])->name('logout');

                Route::redirect('', 'adminpanel/doctors');

                // Language
                Route::resource('language', LanguageController::class);
                Route::get('language/{language}/destroy', [LanguageController::class, 'destroy'])->name('language.destroy');

                // Translation
                Route::resource('translation', TranslationController::class);

                // Category
                // Route::resource('category', \App\Http\Controllers\Admin\CategoryController::class);
                // Route::get('category/{category}/destroy', [\App\Http\Controllers\Admin\CategoryController::class, 'destroy'])->name('category.destroy');
                //
                // Product
                Route::resource('product', \App\Http\Controllers\Admin\ProductController::class);
                Route::get('product/{product}/destroy', [\App\Http\Controllers\Admin\ProductController::class, 'destroy'])->name('product.destroy');
                //                // Gallery
                Route::resource('gallery', GalleryController::class);
                Route::get('gallery/{gallery}/destroy', [GalleryController::class, 'destroy'])->name('gallery.destroy');



                // Slider
                Route::resource('slider', SliderController::class);
                Route::get('slider/{slider}/destroy', [SliderController::class, 'destroy'])->name('slider.destroy');

                // Page
                Route::resource('page', PageController::class);
                Route::get('page/{page}/destroy', [PageController::class, 'destroy'])->name('page.destroy');
                Route::get('page/doc/{doc}/destroy', [PageController::class, 'docDelete'])->name('page.delete-doc');


                Route::get('setting/active', [SettingController::class, 'setActive'])->name('setting.active');
                // Setting
                Route::resource('setting', SettingController::class);
                Route::get('setting/{setting}/destroy', [SettingController::class, 'destroy'])->name('setting.destroy');

                //gallery
                Route::resource('gallery', GalleryController::class);
                // Route::get('gallery', [GalleryController::class, 'index'])->name('gallery.index');
                Route::post('addimg', [GalleryController::class, 'img'])->name('galleryaddimg');
                Route::get('delimg', [GalleryController::class, 'delImg'])->name('gallerydelimg');



                Route::resource('customer', \App\Http\Controllers\Admin\CustomerController::class);
                Route::get('customer/{customer}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'destroy'])->name('customer.destroy');
                Route::get('customer/doc/{doc}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'docDelete'])->name('customer.delete-doc');
                Route::get('customer/subclass/{customer}/create', [\App\Http\Controllers\Admin\CustomerController::class, 'createSubClass'])->name('subclass.create');
                Route::post('customer/subclass/{customer}/store', [\App\Http\Controllers\Admin\CustomerController::class, 'storeSubClass'])->name('subclass.store');
                Route::get('customer/subclass/{customer}/{subclass}/edit', [\App\Http\Controllers\Admin\CustomerController::class, 'editSubClass'])->name('subclass.edit');
                Route::put('customer/subclass/{customer}/{subclass}/edit', [\App\Http\Controllers\Admin\CustomerController::class, 'updateSubClass'])->name('subclass.update');
                Route::get('customer/subclass/{customer}/{subclass}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'destroySubClass'])->name('subclass.destroy');
                Route::get('customer/subclass/{customer}/{subclass}/{doc}/destroy', [\App\Http\Controllers\Admin\CustomerController::class, 'subclassDocDelete'])->name('subclass.delete-doc');

                Route::resource('vacancy', \App\Http\Controllers\Admin\VacancyController::class);
                Route::get('vacancy/{vacancy}/destroy', [\App\Http\Controllers\Admin\VacancyController::class, 'destroy'])->name('vacancy.destroy');
                Route::get('vacancy/doc/{doc}/destroy', [\App\Http\Controllers\Admin\VacancyController::class, 'docDelete'])->name('vacancy.delete-doc');
                Route::get('vacancy/{vacancy}/resumes', [\App\Http\Controllers\Admin\VacancyController::class, 'viewResumes'])->name('vacancy.resumes');

                Route::resource('skill', \App\Http\Controllers\Admin\SkillController::class);
                Route::get('skill/{skill}/destroy', [\App\Http\Controllers\Admin\SkillController::class, 'destroy'])->name('skill.destroy');

                //staff
                Route::resource('staff', \App\Http\Controllers\Admin\StaffController::class);
                Route::get('staff/{staff}/destroy', [\App\Http\Controllers\Admin\StaffController::class, 'destroy'])->name('staff.destroy');

                //news
                Route::resource('blogs', \App\Http\Controllers\Admin\BlogController::class);
                Route::get('blogs/{blogs}/destroy', [\App\Http\Controllers\Admin\BlogController::class, 'destroy'])->name('blogs.destroy');

                //slider
                Route::resource('slider', \App\Http\Controllers\Admin\SliderController::class);
                Route::get('slider/{slider}/destroy', [\App\Http\Controllers\Admin\SliderController::class, 'destroy'])->name('blogs.destroy');

                //doctors
                Route::resource('doctors', \App\Http\Controllers\Admin\DoctorsController::class);
                Route::get('doctors/{doctors}/destroy', [\App\Http\Controllers\Admin\DoctorsController::class, 'destroy'])->name('doctors.destroy');

                //ownerapplications
                Route::resource('ownerapplications', \App\Http\Controllers\Admin\OwnerAppController::class);
                Route::get('appdetails/{id}', [\App\Http\Controllers\Admin\OwnerAppController::class, 'details'])->name('app.details');
                //evaluation
                Route::resource('evaluations', \App\Http\Controllers\Admin\EvaluationController::class);
                Route::get('evaldetails/{id}', [EvaluationController::class, 'details'])->name('eval.details');

                // Password
                Route::get('password', [\App\Http\Controllers\Admin\PasswordController::class, 'index'])->name('password.index');
                Route::post('password', [\App\Http\Controllers\Admin\PasswordController::class, 'update'])->name('password.update');

                Route::resource('classification', \App\Http\Controllers\Admin\ClassificationController::class);
                Route::get('classification/{classification}/destroy', [\App\Http\Controllers\Admin\ClassificationController::class, 'destroy'])->name('classification.destroy');
            });
        });
        Route::middleware(['active'])->group(function () {

            // Home Page
            Route::get('', [HomeController::class, 'index'])->name('client.home.index');
            Route::get('/gallery', [HomeController::class, 'gallery'])->name('client.gallery.index');
            Route::get('/doctors', [HomeController::class, 'doctors'])->name('client.doctors.index');
            Route::get('/news', [\App\Http\Controllers\Client\NewsController::class, 'index'])->name('client.news.index');
            Route::get('/news/{news}', [\App\Http\Controllers\Client\NewsController::class, 'show'])->name('client.news.show');
            Route::get('/services', [HomeController::class, 'services'])->name('client.services.index');
            Route::get('/tips', [HomeController::class, 'tips'])->name('client.tips.index');

            // single tips
            Route::get('/tip/{n}', [HomeController::class, 'tip'])->name('client.tip.index');

            // single doctor
            Route::get('/doctor/{n}', [HomeController::class, 'doctor'])->name('client.doctor.index');

            // Contact Page
            Route::get('/contact', [ContactController::class, 'index'])->name('client.contact.index');
            Route::post('/contact-us', [ContactController::class, 'mail'])->name('client.contact.mail');


            // About Page
            Route::get('about-us', [AboutUsController::class, 'index'])->name('client.about.index');
        });
    });
