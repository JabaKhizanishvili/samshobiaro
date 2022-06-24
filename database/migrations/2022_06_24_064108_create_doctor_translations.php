<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDoctorTranslations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('doctor_translations', function (Blueprint $table) {
            // $table->id();
            // $table->timestamps();
            $table->bigIncrements('id');
            $table->bigInteger('doctor_id')->unsigned();
            $table->string('locale')->index();

            $table->string('name')->nullable();
            $table->string('proffesion')->nullable();
            $table->string('experience')->nullable();
            $table->string('text')->nullable();

            $table->unique(['doctor_id', 'locale']);
            $table->foreign('doctor_id')
                ->references('id')
                ->on('doctors')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('doctor_translations');
    }
}
