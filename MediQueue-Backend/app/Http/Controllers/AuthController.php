<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){
        $request->validate([
            'name' => 'requires|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'required|in:patient,hospital_staff,admin',
        ]);

        $user = User::create([
            'name'          => $request->name,
            'email'         => $request->email,
            'password'      => Hash::make($request->password),
            'role'          => $request->role,
        ]);

        $token = $user->createToken('api_token')->plainTextToken;

        return response()->json(['token' => $token, 'user'=> $user] + ['message' => 'User resistered successfully'], 201);
    }


    public function login(Request $request){
        $request->validate([
            'email'=> 'required|string|email',
            'password' => 'required|string|min:8',
        ]);

        $user = User::where('email', $request->email)->first();

        if($user && Hash::check($request->password, $user->password)){
            return response()->json(['message' => 'Invalid credentials'], 401);
        }


        $token = $user->createToken('api_token')->plainTextToken;

        return response()->json(['token' => $token, 'user' => $user] + ['message' => 'User logged in successfully'], 200);
    }


    public function logout(Request $request){
        $user = $request->user();

        if($user){
            $user->tokens()->delete();
            return response()->json(['message' => 'User logged out successfully'], 200);
        }

        return response()->json(['message' => 'User not found'], 404);
    }

    public function profile(Request $request)
    {
        return response()->json(['user' => $request->user()]);
    }
}
