<?php

// app/Models/ElementCommande.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ElementCommande extends Model
{
    protected $fillable = [
        'commande_id', 'produit_id', 'quantite', 'prix_unitaire'
    ];

    public function commande(): BelongsTo
    {
        return $this->belongsTo(Commande::class, 'commande_id');
    }

    public function produit(): BelongsTo
    {
        return $this->belongsTo(Produit::class, 'produit_id');
    }
}