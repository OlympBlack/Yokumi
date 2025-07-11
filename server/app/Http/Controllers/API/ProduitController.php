<?php
// app/Http/Controllers/API/ProduitController.php
namespace App\Http\Controllers\API;

use App\Models\Produit;
use App\Models\Categorie;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class ProduitController extends Controller
{
    // Liste tous les produits
    public function index()
    {
        $produits = Produit::with('categorie')
            ->orderBy('created_at', 'desc')
            ->get();
            
        return response()->json([
            'success' => true,
            'data' => $produits
        ]);
    }

    // Affiche un produit spécifique
    public function show($id)
    {
        $produit = Produit::with('categorie')->find($id);
        
        if (!$produit) {
            return response()->json([
                'success' => false,
                'message' => 'Produit non trouvé'
            ], 404);
        }
        
        return response()->json([
            'success' => true,
            'data' => $produit
        ]);
    }

    // Produits par catégorie
    public function parCategorie($categorieId)
    {
        $categorie = Categorie::find($categorieId);
        
        if (!$categorie) {
            return response()->json([
                'success' => false,
                'message' => 'Catégorie non trouvée'
            ], 404);
        }
        
        $produits = Produit::where('categorie_id', $categorieId)
            ->with('categorie')
            ->get();
            
        return response()->json([
            'success' => true,
            'categorie' => $categorie->nom,
            'data' => $produits
        ]);
    }

    // Recherche de produits
    public function rechercher(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'query' => 'required|string|min:2'
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }
        
        $query = $request->input('query');
        
        $produits = Produit::where('nom', 'like', "%$query%")
            ->orWhere('description', 'like', "%$query%")
            ->with('categorie')
            ->get();
            
        return response()->json([
            'success' => true,
            'query' => $query,
            'data' => $produits
        ]);
    }

    // Méthode pour stocker un nouveau produit
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nom' => 'required|string|max:255',
            'description' => 'required|string',
            'prix' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'categorie_id' => 'required|exists:categories,id',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }
        
        $data = $request->except('image');
        
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('public/produits');
            $data['image'] = str_replace('public/', 'storage/', $path);
        }
        
        $produit = Produit::create($data);
        
        return response()->json([
            'success' => true,
            'data' => $produit
        ], 201);
    }

    // Méthode pour mettre à jour un produit
    public function update(Request $request, $id)
    {
        $produit = Produit::find($id);
        
        if (!$produit) {
            return response()->json([
                'success' => false,
                'message' => 'Produit non trouvé'
            ], 404);
        }
        
        $validator = Validator::make($request->all(), [
            'nom' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'prix' => 'sometimes|numeric|min:0',
            'stock' => 'sometimes|integer|min:0',
            'categorie_id' => 'sometimes|exists:categories,id',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }
        
        $data = $request->except('image');
        
        if ($request->hasFile('image')) {
            // Supprime l'ancienne image si elle existe
            if ($produit->image) {
                Storage::delete(str_replace('storage/', 'public/', $produit->image));
            }
            
            $path = $request->file('image')->store('public/produits');
            $data['image'] = str_replace('public/', 'storage/', $path);
        }
        
        $produit->update($data);
        
        return response()->json([
            'success' => true,
            'data' => $produit
        ]);
    }
}