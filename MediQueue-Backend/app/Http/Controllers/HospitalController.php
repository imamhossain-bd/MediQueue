<?php

namespace App\Http\Controllers;

use App\Models\Hospital;
use Illuminate\Http\Request;

class HospitalController extends Controller
{
    public function index()
    {
        $hospitals = Hospital::select('id', 'name', 'address', 'district', 'contact')->get();

        return response()->json(['success' => true, 'hospitals' => $hospitals, 'message' => 'Hospitals retrieved successfully.'], 200);
    }
}
