<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\DislRdoController;
use App\Http\Controllers\RspController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResources([
    'disl' => 'API/DislRdoController',
    'rsp' => 'RspController'
]);
//Route::resource('disl', '/API/DislRdoController');
//Route::resource('rsp', [RspController::class]);

Route::get('/rsp', [RspController::class, 'index']);//->middleware('auth');
Route::get('/disl', [DislRdoController::class, 'index']);//->middleware('auth');
//Route::get('api/disl', 'DislRdoController@index');
