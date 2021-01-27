<?php

namespace App\Http\Controllers;

use App\Models\RSP;
use App\Models\Vsl;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RspController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {




        $rsp = RSP::select('CODE as RSPCODE', 'NAME as RSPNAME')->whereNotNull('NAME')->where('ISOLD', '=', 0)
            ->where('CODE', 'like', 'ГФ0[1-3]')->orwherein('CODE', ['2038','2009'])
            ->distinct('RSPCODE')->get();

        return response()->json($rsp, 200);


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rsp  $rsp
     * @return \Illuminate\Http\Response
     */
    public function show(Rsp $rsp)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Rsp  $rsp
     * @return \Illuminate\Http\Response
     */
    public function edit(Rsp $rsp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Rsp  $rsp
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Rsp $rsp)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rsp  $rsp
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rsp $rsp)
    {
        //
    }
}
