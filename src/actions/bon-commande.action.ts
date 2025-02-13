'use server';

import { apiClientHttp } from '@/lib/api-client-http';
import { ActionResult } from '@/types';
import { BonLivraison } from '@/types/bon-livraison.model';
import { PaginatedResponse } from '@/types';

// Configuration
const BASE_URL = '/api/erp/bon-livraison';

const bonLivraisonEndpoints = {
    getBonLivraisonAll: {
        endpoint: `${BASE_URL}/tous`,
        method: 'GET',
    },
};

export async function getBonLivraisonAll(page: number, size: number): Promise<PaginatedResponse<BonLivraison> | null> {
    try {
        const data = await apiClientHttp.request<PaginatedResponse<BonLivraison>>({
            endpoint: bonLivraisonEndpoints.getBonLivraisonAll.endpoint,
            method: bonLivraisonEndpoints.getBonLivraisonAll.method,
            params: { page: String(page), size: String(size) },
            service: 'backend',
        });

        return data;
    } catch (error: any) {
        return null;
    }
}
