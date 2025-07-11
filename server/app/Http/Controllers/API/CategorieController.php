<?php
// app/Http/Controllers/API/CategorieController.php
namespace App\Http\Controllers\API;

use App\Models\Categorie;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategorieController extends Controller
{
    // Liste toutes les catégories
    public function index()
    {
        $categories = Categorie::withCount('produits')
            ->orderBy('nom')
            ->get();
            
        return response()->json([
            'success' => true,
            'data' => $categories
        ]);
    }

    // Affiche une catégorie spécifique
    public function show($id)
    {
        $categorie = Categorie::with('produits')->find($id);
        
        if (!$categorie) {
            return response()->json([
                'success' => false,
                'message' => 'Catégorie non trouvée'
            ], 404);
        }
        
        return response()->json([
            'success' => true,
            'data' => $categorie
        ]);
    }
}