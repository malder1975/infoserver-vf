<?php


namespace App\Repositories\Interfaces;

use Illuminate\Support\Facades\DB;


interface DislRDORepositoryInteface
{

    //
    public function allrsps();


    //
    public function onlyrsp($rspcode);

}
