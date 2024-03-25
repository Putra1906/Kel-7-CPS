<?php

use App\Http\Controllers\CustomAuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Application;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

    Route::get('/login', [CustomAuthController::class, 'login']);
    Route::get('/registration', [CustomAuthController::class, 'registration']);


