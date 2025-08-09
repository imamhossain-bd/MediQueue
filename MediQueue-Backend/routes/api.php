<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\HospitalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



// Authentication routesRoute::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    // Example: Only Admin
    Route::middleware('role:admin')->get('/admin-only', function () {
        return "This is admin route";
    });

    // Example: Only Doctor
    Route::middleware('role:doctor')->get('/doctor-only', function () {
        return "This is doctor route";
    });
});

// Hospital Routes
Route::get('/hospitals', [HospitalController::class, 'index']);
Route::get('/hospitals/{id}', [HospitalController::class, 'show']);


// Doctor Routes
Route::get('/doctors', [DoctorController::class, 'index']);
Route::get('/doctors/{id}', [DoctorController::class, 'show']);



// Appointment Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/appointments', [AppointmentController::class, 'store']);
    Route::get('/my-appointments', [AppointmentController::class, 'myAppointments']);
});



