<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomAuthController;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/login',[CustomAuthController::class,'login']);
Route::get('/registration',[CustomAuthController::class,'registration']);