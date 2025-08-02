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
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('hospital_id')->constrained()->onDelete('cascade');
            $table->foreignId('speciality_id')->constrained()->onDelete('cascade');
            $table->json('available_days')->nullable();
            $table->time('start_time');
            $table->time('end_time');
            $table->integer('max_patients_per_day')->default(20);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctors');
    }
};
