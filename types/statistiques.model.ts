import { Restaurant } from './models';

export interface ChiffreAffaire {
    commandeTotalTermine: number;
    fraisLivraisonTotalTermine: number;
    fraisLivraisonTotalEnAttente: number;
    commandeTotalEnAttente: number;
}

export type ChiffreAffaireRestaurant = Restaurant & ChiffreAffaire;
