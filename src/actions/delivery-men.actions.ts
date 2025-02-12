'use server';

import { ActionResult, PaginatedResponse } from '@/types/index.d';

import { DeliveryMan, LivreurDisponible } from '@/types/models';
import { apiClientHttp } from '@/lib/api-client-http';

// Configuration
const BASE_URL = '/api/erp/livreur';
const BASE_URL_2 = '/api/erp/validation/livreur';

const deliveryMenEndpoints = {
    getLivreursDisponible: { endpoint: `${BASE_URL}/disponible`, method: 'GET' },
    getAll: { endpoint: `${BASE_URL_2}/validate/opsmanager/0`, method: 'GET' },
    getAllValidated: { endpoint: `${BASE_URL_2}/validate/authserv/0`, method: 'GET' },
    getAllNoValidated: { endpoint: `${BASE_URL_2}/not/validated/0`, method: 'GET' },
    validateAuth: { endpoint: (id: string) => `${BASE_URL_2}/enable/authserv/${id}`, method: 'GET' },
    validateOps: { endpoint: (id: string) => `${BASE_URL_2}/enable/opsmanager/${id}`, method: 'GET' },
    info: { endpoint: (id: string) => `${BASE_URL_2}/get/info/${id}`, method: 'GET' },
};

export async function getLivreursDisponible(): Promise<LivreurDisponible[]> {
    try {
        const data = await apiClientHttp.request<LivreurDisponible[]>({
            endpoint: deliveryMenEndpoints.getLivreursDisponible.endpoint,
            method: deliveryMenEndpoints.getLivreursDisponible.method,
            service: 'backend',
        });

        return data;
    } catch (error) {
        return [];
    }
}

export async function getDeliveryMen(): Promise<PaginatedResponse<DeliveryMan> | null> {
    try {
        const data = await apiClientHttp.request<PaginatedResponse<DeliveryMan>>({
            endpoint: deliveryMenEndpoints.getAll.endpoint,
            method: deliveryMenEndpoints.getAll.method,
            service: 'erp',
        });
        return data;
    } catch (error) {
        return null;
    }
}

export async function getDeliveryMenValidated(): Promise<PaginatedResponse<DeliveryMan> | null> {
    try {
        const data = await apiClientHttp.request<PaginatedResponse<DeliveryMan>>({
            endpoint: deliveryMenEndpoints.getAllValidated.endpoint,
            method: deliveryMenEndpoints.getAllValidated.method,
            service: 'erp',
        });
        return data;
    } catch (error) {
        return null;
    }
}

export async function getDeliveryMenNoValidated(): Promise<PaginatedResponse<DeliveryMan> | null> {
    try {
        const data = await apiClientHttp.request<PaginatedResponse<DeliveryMan>>({
            endpoint: deliveryMenEndpoints.getAllNoValidated.endpoint,
            method: deliveryMenEndpoints.getAllNoValidated.method,
            service: 'erp',
        });
        return data;
    } catch (error) {
        return null;
    }
}

export async function validateDeliveryMan(id: string, validateBy: 'auth' | 'ops' | 'no-body'): Promise<ActionResult<DeliveryMan>> {
    if (validateBy == 'auth') {
        try {
            const data = await apiClientHttp.request<DeliveryMan>({
                endpoint: deliveryMenEndpoints.validateAuth.endpoint(id),
                method: deliveryMenEndpoints.validateAuth.method,
                service: 'erp',
            });
            return {
                status: 'success',
                message: 'Livreur activé avec succès',
                data: data,
            };
        } catch (error: any) {
            return {
                status: 'error',
                message: "Erreur lors de l'activation du livreur",
            };
        }
    }
    if (validateBy == 'ops') {
        try {
            const data = await apiClientHttp.request<DeliveryMan>({
                endpoint: deliveryMenEndpoints.validateOps.endpoint(id),
                method: deliveryMenEndpoints.validateOps.method,
                service: 'erp',
            });
            return {
                status: 'success',
                message: 'Livreur activé avec succès',
                data: data,
            };
        } catch (error: any) {
            return {
                status: 'error',
                message: "Erreur lors de l'activation du livreur",
            };
        }
    }
    return {
        status: 'error',
        message: 'Méthode de validation invalide',
    };
}
