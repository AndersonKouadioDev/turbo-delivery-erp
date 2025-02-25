'use server';

import { ActionResult, PaginatedResponse } from '@/types';

import { DeliveryMan, LivreurDisponible } from '@/types/models';
import { apiClientHttp } from '@/lib/api-client-http';

// Configuration
const BASE_URL = '/api/erp/livreur';
// const BASE_URL_2 = '/api/erp/validation/livreur';

// const deliveryMenEndpoints = {
//     getLivreursDisponible: { endpoint: `${BASE_URL}/disponible`, method: 'GET' },
//     // getAll: { endpoint: `${BASE_URL_2}/validate/opsmanager/0`, method: 'GET' },
//     getAll: { endpoint: `${BASE_URL_2}/erp/valid/opsmanager`, method: 'GET' },
//     getAllValidated: { endpoint: `${BASE_URL}/erp/valid/authserv`, method: 'GET' },
//     getAllNoValidated: { endpoint: `${BASE_URL_2}/not/validated/0`, method: 'GET' },
//     validateAuth: { endpoint: (id: string) => `${BASE_URL_2}/enable/authserv/${id}`, method: 'GET' },
//     validateOps: { endpoint: (id: string) => `${BASE_URL_2}/enable/opsmanager/${id}`, method: 'GET' },
//     info: { endpoint: (id: string) => `${BASE_URL_2}/get/info/${id}`, method: 'GET' },
// };/api/erp/livreur/erp/invalid


const deliveryMenEndpoints = {
    getLivreursDisponible: { endpoint: `${BASE_URL}/disponible`, method: 'GET' },
    getAll: { endpoint: `${BASE_URL}/erp/valid/opsmanager`, method: 'GET' },
    getAllValidated: { endpoint: `${BASE_URL}/erp/valid/authserv`, method: 'GET' },
    getAllNoValidated: { endpoint: `${BASE_URL}/erp/invalid`, method: 'GET' },
    validateAuth: { endpoint: (id: string) => `${BASE_URL}/enable/authserv/${id}`, method: 'GET' },
    validateOps: { endpoint: (id: string) => `${BASE_URL}/enable/opsmanager/${id}`, method: 'GET' },
    info: { endpoint: (id: string) => `${BASE_URL}/get/info/${id}`, method: 'GET' },
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

export async function getDeliveryMen(page: number = 0, size: number = 10): Promise<PaginatedResponse<DeliveryMan> | null> {
    try {
        const data = await apiClientHttp.request<PaginatedResponse<DeliveryMan>>({
            endpoint: deliveryMenEndpoints.getAll.endpoint,
            method: deliveryMenEndpoints.getAll.method,
            service: 'backend',
            params: {
                page: page.toString(),
                size: size.toString(),
            },
        });
        console.log(data)
        return data;
    } catch (error) {
        return null;
    }
}

export async function getDeliveryMenValidated(page: number = 0, size: number = 10): Promise<PaginatedResponse<DeliveryMan> | null> {
    try {
        const data = await apiClientHttp.request<PaginatedResponse<DeliveryMan>>({
            endpoint: deliveryMenEndpoints.getAllValidated.endpoint,
            method: deliveryMenEndpoints.getAllValidated.method,
            service: 'backend',
            params: {
                page: String(page),
                size: String(size),
            },
        });
        return data;
    } catch (error) {
        return null;
    }
}

export async function getDeliveryMenNoValidated(page: number = 0, size: number = 10): Promise<PaginatedResponse<DeliveryMan> | null> {
    try {
        const data = await apiClientHttp.request<PaginatedResponse<DeliveryMan>>({
            endpoint: deliveryMenEndpoints.getAllNoValidated.endpoint,
            method: deliveryMenEndpoints.getAllNoValidated.method,
            service: 'backend',
            params: {
                page: page.toString(),
                size: size.toString()
            }
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
                service: 'backend',
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
                service: 'backend',
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
