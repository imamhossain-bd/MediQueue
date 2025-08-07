<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppointmentController extends Controller
{
    public function index()
    {
        // Logic to retrieve and return a list of appointments
        return response()->json(['message' => 'List of appointments']);
    }


    public function store(Request $request){
        $request->validate([
            'doctor_id' => 'requered|exists:doctors,id',
            'hospital_id' => 'required|exists:hospitals,id',
            'appointment_date' => 'required|date|after_or_equal:today',
        ]);


        $patient = Auth::user();

        $existing = Appointment::where('doctor_id', $request->doctor_id)->where('appointment_date', $request->appointment_date)->count();

        $doctorMax = $request->doctor()->max_patients_per_day ?? 20;

        if($existing >= $doctorMax){
            return response()->json(['message' => 'No serials available on this date for this doctor.'], 400);
        }

        $serialNumber = $existing + 1;

        $appointment = Appointment::create([
            'patient_id' => $patient->id,
            'doctor_id' => $request->doctor_id,
            'hospital_id' => $request->hospital_id,
            'appointment_date' => $request->appointment_date,
            'serial_number' => $serialNumber,
            'status' => 'pending',
        ]);

        return response()->json(['message' => 'Appointment Booked successfully', 'appointment' => $appointment], 201);
    }


    public function myAppointments(){
        $patient = Auth::user();

        $appointments = Appointment::with(['doctor', 'hospital'])->where('patient_id', $patient->id)->orderBy('appointment_date', 'desc')->get();

        return response()->json(['appointments' => $appointments], 200);
    }



}
