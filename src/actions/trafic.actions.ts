'use server';

import { LivreurDisponible } from '@/types/models';
import { apiClientBackend } from '@/lib/api-client-backend';

// Configuration
const BASE_URL = '/api/erp/trafic';

const traficEndpoints = {
    getTraficLivreurs: { endpoint: `${BASE_URL}/livreur`, method: 'GET' },
};

export async function getTraficLivreurs(): Promise<LivreurDisponible[]> {
    try {
        const response = await apiClientBackend.request({
            endpoint: traficEndpoints.getTraficLivreurs.endpoint,
            method: traficEndpoints.getTraficLivreurs.method,
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching paginate course externe:', error);
        return [];
    }
}
