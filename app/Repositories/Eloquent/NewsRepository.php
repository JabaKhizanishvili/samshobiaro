<?php

/**
 *  app/Repositories/Eloquent/ProductRepository.php
 *
 * Date-Time: 30.07.21
 * Time: 10:36
 * @author Vakho Batsikadze <vakhobatsikadze@gmail.com>
 */

namespace App\Repositories\Eloquent;


use App\Models\File;
use App\Models\Page;
use App\Models\Staff;
use App\Models\Doctor;
use App\Models\News;
use App\Models\Vacancy;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\PageRepositoryInterface;
use App\Repositories\NewsRepositoryInterface;
use App\Repositories\StaffRepositoryInterface;
use App\Repositories\DoctorRepositoryInterface;
use App\Repositories\VacancyRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use ReflectionClass;


class NewsRepository extends BaseRepository implements NewsRepositoryInterface
{
    /**
     * @param Page $model
     */
    public function __construct(News $model)
    {
        parent::__construct($model);
    }
}
