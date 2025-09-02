<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Shop;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        //modelで定義したfillableに合わせてデータを生成
        return [
            'user_id' => User::factory(), //Userにもデータを再度生成
            'shop_id' => shop::factory(), //Shopにもデータを再度生成
            'rating' => $this->faker->numberBetween(1, 5),
            'comment' => $this->faker->realText(100),
        ];
    }
}
