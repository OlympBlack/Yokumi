<?php
// app/Models/Commande.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Commande extends Model
{
    protected $fillable = [
        'utilisateur_id', 'total', 'statut', 
        'methode_paiement', 'adresse_livraison'
    ];

    public function utilisateur(): BelongsTo
    {
        return $this->belongsTo(User::class, 'utilisateur_id');
    }

    public function elements(): HasMany
    {
        return $this->hasMany(ElementCommande::class, 'commande_id');
    }
}