<?php

// app/Http/Controllers/API/AuthController.php
namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{
    // Inscription d'un nouvel utilisateur
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Password::min(8)],
            'telephone' => 'nullable|string|max:20',
            'adresse' => 'nullable|string|max:255',
            'ville' => 'nullable|string|max:100',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'telephone' => $request->telephone,
            'adresse' => $request->adresse,
            'ville' => $request->ville,
        ]);

        $token = $user->createToken('shea_market_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'user' => $user,
            'token' => $token,
            'message' => 'Inscription réussie'
        ], 201);
    }

    // Connexion de l'utilisateur
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($user->email_verified_at === null) {
            return response()->json([
                'success' => false,
                'message' => 'Veuillez vérifier votre email'
        ], 403);
}

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'success' => false,
                'message' => 'Identifiants incorrects'
            ], 401);
        }

        $user = User::where('email', $request->email)->first();
        $token = $user->createToken('shea_market_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'user' => $user,
            'token' => $token,
            'message' => 'Connexion réussie'
        ]);
    }

    // Déconnexion
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'success' => true,
            'message' => 'Déconnexion réussie'
        ]);
    }

    // Récupération du profil utilisateur
    public function profile(Request $request)
    {
        return response()->json([
            'success' => true,
            'user' => $request->user()
        ]);
    }
}