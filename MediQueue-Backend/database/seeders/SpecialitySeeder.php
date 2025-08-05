<?php


namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Speciality;

class SpecialitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
     public function run()
    {
        $specialities = [
            ['id' => 1, 'name' => 'Pediatrics'],
            ['id' => 2, 'name' => 'Gastroenterology'],
            ['id' => 3, 'name' => 'Neurology'],
            ['id' => 4, 'name' => 'Dermatology'],
            ['id' => 5, 'name' => 'Oncology'],
            ['id' => 6, 'name' => 'ENT'],
            ['id' => 7, 'name' => 'Nephrology'],
            ['id' => 8, 'name' => 'Cardiology'],
            ['id' => 9, 'name' => 'Psychiatry'],
            ['id' => 10, 'name' => 'Orthopedics'],
        ];

        foreach ($specialities as $speciality) {
            Speciality::updateOrCreate(['id' => $speciality['id']], ['name' => $speciality['name']]);
        }
    }
}
