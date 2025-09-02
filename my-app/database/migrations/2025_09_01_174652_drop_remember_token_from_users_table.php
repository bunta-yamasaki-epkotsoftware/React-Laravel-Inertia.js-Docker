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
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('remember_token', 'email_verified_at'); // 複数なら ['col1','col2']
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->rememberToken(); // 元に戻す定義
            $table->timestamp('email_verified_at')->nullable(); // 元に戻す定義
        });
    }
};
