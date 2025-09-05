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
        Schema::table('shop_images', function (Blueprint $table) {
            $table->foreign('thumbnail_id')
                  ->references('id')
                  ->on('shop_images')
                  ->onDelete('set null'); // 親が消えたらNULLに
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('shop_images', function (Blueprint $table) {
            $table->dropForeign(['thumbnail_id']);
        });
    }
};
