<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function index(){
        $doctors = Doctor::with(['hospital', 'speciality'])->get();

        $doctors = Doctor::select('id', 'name', 'image', 'hospital_id', 'speciality_id', 'available_days', 'start_time', 'end_time', 'max_patients_per_day')->with(['hospital:id,name,image', 'speciality:id,name'])->get();

        return response()->json(['success' => true, 'doctors' => $doctors, 'message' => 'Doctors retrieved successfully.'], 200);
    }

    public function show($id){
        $doctor = Doctor::with(['hospital', 'speciality'])->findOrFail($id);

        return response()->json(['success' => true, 'doctor' => $doctor, 'message' => 'Doctor details retrieved successfully.'], 200);
    }
}
