export interface BonLivraison {
    commndeId: string;
    reference: string;
    livreur: string;
    restaurant: string;
    coutLivraison: number;
    coutCommande: number;
    date: string;
    heure: {
        hour: number;
        minute: number;
        second: number;
        nano: number;
    };
    staut: string;
}
