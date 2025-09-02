<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function index()
    {
        // $shops = Shop::all();
        $shops = Shop::with('reviews')->get();

        //新着のレビューを５件取得
        $newReviews = Review::with('shop','user')
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();
        // dd($newReviews);
        // Log::info('新着レビュー', ['reviews' => $newReviews]);

        return Inertia::render('Home', ['shops' => $shops, 'newReviews' => $newReviews]);
    }
}
