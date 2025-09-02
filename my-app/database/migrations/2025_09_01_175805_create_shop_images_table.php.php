<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('shop_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('shop_id')->constrained('shops'); // shopsテーブルのidと紐づける
            $table->string('file_name'); // 画像の名前
            $table->string('file_path'); // 画像のパス
            $table->string('file_type'); // 画像のタイプ
            $table->integer('file_size'); // 画像のサイズ
            $table->string('file_extension'); // 画像の拡張子
            $table->string('file_mine'); // 画像のMIMEタイプ
            $table->string('file_original_name'); //画像のオリジナル名
            $table->string('file_original_path'); //画像のオリジナルパス
            $table->unsignedBigInteger('thumbnail_id')->nullable(); // サムネイル画像のID（nullable）
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shop_images');
    }
};
