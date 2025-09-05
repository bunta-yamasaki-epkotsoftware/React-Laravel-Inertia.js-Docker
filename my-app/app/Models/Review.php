<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'shop_id',
        'rating',
        'comment',
    ];

    public function saveReview($request)
    {
        $this->user_id =  1; //テスト用
        $this->shop_id = $request->shop_id;
        $this->rating = $request->rating;
        $this->comment = $request->comment;
        $this->save();

        return $this;
    }

    // Shopモデルとのリレーション
    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }

    // Userモデルとのリレーション
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
