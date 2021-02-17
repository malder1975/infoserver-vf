<?php


namespace App\Repositories;




use App\Repositories\Interfaces\DislRDORepositoryInteface;

class DislRDORepository implements DislRDORepositoryInteface
{
    protected $disl2;

  /*  public function __construct(Disl $disl2)
    {
        $this->disl2 = $disl2;
    }*/

    public function allrsps()
    {
        return $this->disl2->getAll();
    }

    public function onlyrsp($rspcode)
    {
        return $this->disl2->where($rspcode)->get();
    }

}
