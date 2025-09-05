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
        $shops = Shop::with('reviews')
            ->take(5)
            ->get();

        //新着のレビューを５件取得
        $newReviews = Review::with('shop','user')
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();
        // dd($newReviews);
        // Log::info('新着レビュー', ['reviews' => $newReviews]);

        return Inertia::render('Home', ['shops' => $shops, 'newReviews' => $newReviews]);
    }

    public function detail($id) {

        //店舗情報の取得
        $shop = Shop::find($id);

        //クエリパラメーターからステータスを取得
        $status = request('status');

        //レビューの取得
        $reviews = Review::with('user')
            ->where('shop_id', $id)
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Shop/Detail', ['shop' => $shop, 'reviews' => $reviews, 'status' => $status]);
    }
}
