<?php
use App\Http\Controllers\API\ProduitController;
use App\Http\Controllers\API\CategorieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])
        ->middleware('auth:sanctum');
    Route::get('profile', [AuthController::class, 'profile'])
        ->middleware('auth:sanctum');
});

// Routes publiques
Route::get('produits', [ProduitController::class, 'index']);
Route::get('produits/{id}', [ProduitController::class, 'show']);
Route::get('produits/categorie/{categorieId}', [ProduitController::class, 'parCategorie']);
Route::get('produits/rechercher', [ProduitController::class, 'rechercher']);

Route::get('categories', [CategorieController::class, 'index']);
Route::get('categories/{id}', [CategorieController::class, 'show']);

// Routes protégées par authentification
Route::middleware('auth:sanctum')->group(function () {
    // Gestion des produits
    Route::post('produits', [ProduitController::class, 'store']);
    Route::put('produits/{id}', [ProduitController::class, 'update']);
    Route::delete('produits/{id}', [ProduitController::class, 'destroy']);
    
    // Gestion des catégories
    Route::post('categories', [CategorieController::class, 'store']);
    Route::put('categories/{id}', [CategorieController::class, 'update']);
    Route::delete('categories/{id}', [CategorieController::class, 'destroy']);
    
    // Gestion du panier et commandes
    Route::apiResource('panier', PanierController::class);
    Route::apiResource('commandes', CommandeController::class);
});