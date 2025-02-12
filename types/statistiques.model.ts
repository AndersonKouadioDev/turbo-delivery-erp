
export interface ChiffreAffaire {
    commandeTotalTermine: number;
    fraisLivraisonTotalTermine: number;
    fraisLivraisonTotalEnAttente: number;
    commandeTotalEnAttente: number;
}

export interface ChiffreAffaireRestaurant extends ChiffreAffaire {
    restaurantId: string;
    restaurant: string;
}
