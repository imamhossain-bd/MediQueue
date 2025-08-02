<?php

namespace Database\Seeders;

use App\Models\Hospital;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HospitalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $staff = User::create([
            'name' => 'Labaid Staff',
            'email' => 'staff@gmail.com',
            'password' => bcrypt('password'),
            'role' => 'hospital_staff',
        ]);

        $hospitals = [
            [
                'name' => 'Square Hospital',
                'address' => '18/F, Bir Uttam Qazi Nuruzzaman Sarak, West Panthapath, Dhaka-1205',
                'district' => 'Dhaka',
                'contact' => '10616'
            ],
            [
                'name' => 'Labaid Hospital',
                'address' => 'House 06, Road 04, Dhanmondi, Dhaka-1205',
                'district' => 'Dhaka',
                'contact' => '10606'
            ],
            [
                'name' => 'United Hospital',
                'address' => 'Plot 15, Road 71, Gulshan, Dhaka-1212',
                'district' => 'Dhaka',
                'contact' => '10666'
            ],
            [
                'name' => 'Ibn Sina Hospital',
                'address' => 'House 48, Road 9/A, Dhanmondi, Dhaka-1209',
                'district' => 'Dhaka',
                'contact' => '10615'
            ],
            [
                'name' => 'Dhaka Medical College Hospital',
                'address' => 'Secretariat Road, Bakshibazar, Dhaka-1000',
                'district' => 'Dhaka',
                'contact' => '02-55165088'
            ],
            [
                'name' => 'Popular Diagnostic Center',
                'address' => 'House 16, Road 2, Dhanmondi, Dhaka-1205',
                'district' => 'Dhaka',
                'contact' => '09613-787801'
            ],
            [
                'name' => 'BSMMU (PG Hospital)',
                'address' => 'Shahbagh, Dhaka-1000',
                'district' => 'Dhaka',
                'contact' => '02-9661051'
            ],
            [
                'name' => 'Evercare Hospital',
                'address' => 'Plot 81, Block E, Bashundhara R/A, Dhaka-1229',
                'district' => 'Dhaka',
                'contact' => '10678'
            ],
            [
                'name' => 'Birdem General Hospital',
                'address' => '122 Kazi Nazrul Islam Ave, Shahbagh, Dhaka-1000',
                'district' => 'Dhaka',
                'contact' => '10677'
            ],
            [
                'name' => 'National Heart Foundation',
                'address' => 'Plot 7/2, Section 2, Mirpur, Dhaka-1216',
                'district' => 'Dhaka',
                'contact' => '02-58054708'
            ],
        ];

        foreach($hospitals as $hospital){
            Hospital::create([
                'name' => $hospital['name'],
                'address' => $hospital['address'],
                'district' => $hospital['district'],
                'contact' => $hospital['contact'],
                'user_id' => $staff->id,
            ]);
        }

    }
}
