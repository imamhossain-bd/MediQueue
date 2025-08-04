<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function index(){
        $doctors = Doctor::with(['hospital', 'speciality'])->get();

        return response()->json(['success' => true, 'doctors' => $doctors, 'message' => 'Doctors retrieved successfully.'], 200);
    }

    public function show($id){
        $doctor = Doctor::with(['hospital', 'speciality'])->findOrFail($id);

        return response()->json(['success' => true, 'doctor' => $doctor, 'message' => 'Doctor details retrieved successfully.'], 200);
    }
}
