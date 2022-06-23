<?php

/**
 *  app/Http/Controllers/Client/ServiceController.php
 *
 * Date-Time: 06.08.21
 * Time: 15:25
 * @author Insite.ge
 */

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index()
    {
        $page = Page::where('key', 'service')->firstOrFail();
        $services = Service::where('status', true)->with(['file', 'translations'])->get();

        return view('client.pages.service.index', [
            'services' => $services,
            'page' => $page
        ]);
    }
}
