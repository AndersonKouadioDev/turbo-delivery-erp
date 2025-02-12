'use server';

import { apiClientHttp } from '@/lib/api-client-http';
import { FilleAttenteHistoriqueVM } from '@/types/file-attente.model';
import { ChiffreAffaire } from '@/types/statistiques.model';

const BASE_URL = '/api/erp/file-attente';

const statistiquesEndpoints = {
    getAllChiffreAffaire: { endpoint: `/api/erp/chiffre-affaire/tous`, method: 'GET' },
    getRestaurantChiffreAffaire: { endpoint: (restaurantID: string) => `/api/erp/chiffre-affaire/restaurant/${restaurantID}`, method: 'GET' },
};

export async function getAllChiffreAffaire(): Promise<ChiffreAffaire | null> {
    try {
        const data = await apiClientHttp.request<ChiffreAffaire>({
            endpoint: statistiquesEndpoints.getAllChiffreAffaire.endpoint,
            method: statistiquesEndpoints.getAllChiffreAffaire.method,
            service: 'backend',
        });

        return data;
    } catch (error) {
        return null;
    }
}

export async function getRestaurantChiffreAffaire(restaurantID: string): Promise<ChiffreAffaire | null> {
    try {
        const data = await apiClientHttp.request<ChiffreAffaire>({
            endpoint: statistiquesEndpoints.getRestaurantChiffreAffaire.endpoint(restaurantID),
            method: statistiquesEndpoints.getRestaurantChiffreAffaire.method,
            service: 'backend',
        });

        return data;
    } catch (error) {
        return null;
    }
}
