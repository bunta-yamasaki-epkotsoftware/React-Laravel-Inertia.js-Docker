<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ShopController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReviewController;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/sample', function () {
    return Inertia::render('Sample');
})->name('sample');

//HOME
Route::get('/', [ShopController::class, 'index'])->name('shop.index');
//店舗詳細
Route::get('/shop/{id}', [ShopController::class, 'detail'])->name('shop.detail');

//レビュー投稿
Route::middleware('auth')->group(function () {
    Route::get('/review/create/{id}', [ReviewController::class, 'create'])->name('review.create');
    ROute::post('/review/store', [ReviewController::class, 'store'])->name('review.store');
});

require __DIR__.'/auth.php';
