'use server';

import { apiClientHttp } from '@/lib/api-client-http';
import { ActionResult } from '@/types';
import { BonLivraison } from '@/types/bon-livraison.model';

// Configuration
const BASE_URL = '/api/erp/bon-livraison';

const bonLivraisonEndpoints = {
    getBonLivraisonAll: {
        endpoint: `${BASE_URL}/tous`,
        method: 'GET',
    },
};

export async function getBonLivraisonAll(): Promise<ActionResult<BonLivraison[]>> {
    try {
        const data = await apiClientHttp.request<BonLivraison[]>({
            endpoint: bonLivraisonEndpoints.getBonLivraisonAll.endpoint,
            method: bonLivraisonEndpoints.getBonLivraisonAll.method,
            service:'backend'
        });

        return {
            status: 'success',
            data,
        };
    } catch (error: any) {
        return {
            status: 'error',
            message: error?.response?.data?.message,
        };
    }
}
