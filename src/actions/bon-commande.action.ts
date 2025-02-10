'use server';

import { apiClientBackend } from '@/lib/api-client-backend';
import { ActionResult } from '@/types';
import { BonLivraison } from '@/types/bon-livraison.model';
import { CourseExterne, PaginatedResponse } from '@/types/models';
import { processFormData } from '@/utils/formdata-zod.utilities';

// Configuration
const BASE_URL = '/api/erp/bon-livraison';

const bonLivraisonEndpoints = {
    getBonLivraisonAll: {
        endpoint: `${BASE_URL}/tous`,
        method: 'GET',
    },
};

export async function getBonLivraisonAll(): Promise<BonLivraison[] | null> {
    try {
        const response = await apiClientBackend.request({
            endpoint: bonLivraisonEndpoints.getBonLivraisonAll.endpoint,
            method: bonLivraisonEndpoints.getBonLivraisonAll.method,
        });

        return response.data;
    } catch (error:any) {
        console.log(error.response.data.message);
        return null;
    }
}
