'use server';

import { apiClient } from '@/lib/api-client';
import { ActionResult, PaginatedResponse } from '@/types/index.d';

import { DeliveryMan, LivreurDisponible } from '@/types/models';
import deliveryMenEndpoints from '@/src/endpoints/delivbery-men.endpoint';
import { apiClientBackend } from '@/lib/api-client-backend';

// Configuration
const BASE_URL = '/api/erp/livreur';

const livreursEndpoints = {
    getLivreursDisponible: { endpoint: `${BASE_URL}/disponible`, method: 'GET' },
};

export async function getLivreursDisponible(): Promise<LivreurDisponible[]> {
    try {
        const response = await apiClientBackend.request({
            endpoint: livreursEndpoints.getLivreursDisponible.endpoint,
            method: livreursEndpoints.getLivreursDisponible.method,
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching paginate course externe:', error);
        return [];
    }
}

export async function getDeliveryMen(): Promise<PaginatedResponse<DeliveryMan> | null> {
    const response = await apiClient.get(deliveryMenEndpoints.getAll);
    if (!response.ok) {
        return null;
    }
    const result = await response.json();
    return result;
}

export async function getDeliveryMenValidated(): Promise<PaginatedResponse<DeliveryMan> | null> {
    const response = await apiClient.get(deliveryMenEndpoints.getAllValidated);
    if (!response.ok) {
        return null;
    }
    const result = await response.json();
    return result;
}

export async function getDeliveryMenNoValidated(): Promise<PaginatedResponse<DeliveryMan> | null> {
    const response = await apiClient.get(deliveryMenEndpoints.getAllNoValidated);
    if (!response.ok) {
        return null;
    }
    const result = await response.json();
    return result;
}

export async function validateDeliveryMan(id: string, validateBy: 'auth' | 'ops' | 'no-body'): Promise<ActionResult<DeliveryMan>> {
    if (validateBy == 'auth') {
        const response = await apiClient.get(deliveryMenEndpoints.validateAuth(id));
        let message = '';
        try {
            const result = await response.json();
            message = result.message;
        } catch (error) {
            const result = await response.text();
            message = result;
        }
        if (!response.ok) {
            return {
                status: 'error',
                message: message ?? "Erreur lors de l'activation du livreur",
            };
        }
        return {
            status: 'success',
            message: 'Livreur activé avec succès',
        };
    }
    if (validateBy == 'ops') {
        const response = await apiClient.get(deliveryMenEndpoints.validateOps(id));
        let message = '';
        try {
            const result = await response.json();
            message = result.message;
        } catch (error) {
            const result = await response.text();
            message = result;
        }
        if (!response.ok) {
            return {
                status: 'error',
                message: message ?? "Erreur lors de l'activation du livreur",
            };
        }
        return {
            status: 'success',
            message: 'Livreur activé avec succès',
        };
    }
    return {
        status: 'error',
        message: 'Méthode de validation invalide',
    };
}
