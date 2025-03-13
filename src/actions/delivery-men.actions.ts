'use server';

import { ActionResult, PaginatedResponse } from '@/types';

import { DeliveryMan, DemandeAssignationVM, LivreurDisponible, ValiderDemandeAssignationCommande } from '@/types/models';
import { apiClientHttp } from '@/lib/api-client-http';
import { method } from 'lodash';

// Configuration
const BASE_URL = '/api/erp';

const deliveryMenEndpoints = {
    getLivreursDisponible: { endpoint: `${BASE_URL}/livreur/disponible`, method: 'GET' },
    getAll: { endpoint: `${BASE_URL}/valid/livreur/opsmanager`, method: 'GET' },
    getAllValidated: { endpoint: `${BASE_URL}/livreur/valid/authserv`, method: 'GET' },
    getAllNoValidated: { endpoint: `${BASE_URL}/livreur/invalid`, method: 'GET' },
    validateAuth: { endpoint: (id: string) => `${BASE_URL}/livreur/enable/authserv/${id}`, method: 'GET' },
    validateOps: { endpoint: (id: string) => `${BASE_URL}/livreur/enable/opsmanager/${id}`, method: 'GET' },
    info: { endpoint: (id: string) => `${BASE_URL}/livreur/get/info/${id}`, method: 'GET' },
    getAllemandeAssignation: { endpoint: `${BASE_URL}/demande-assignation`, method: "GET" },
    validerDemandeAssignations: { endpoint: `${BASE_URL}/demande-assignation`, method: 'POST' },
    rejeterDemandeAssignations: { endpoint: (id: string) => `${BASE_URL}/demande-assignation/${id}/rejeter`, method: "PUT" }
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

export async function getAllDemandeAssignations(): Promise<DemandeAssignationVM[]> {
    try {
        const data = await apiClientHttp.request<DemandeAssignationVM[]>({
            endpoint: deliveryMenEndpoints.getAllemandeAssignation.endpoint,
            method: deliveryMenEndpoints.getAllemandeAssignation.method,
            service: 'backend',
        });
        return data;
    } catch (error) {
        return [] as DemandeAssignationVM[]
    }
}

export async function validerDemandeAssignations(commande: ValiderDemandeAssignationCommande): Promise<any> {
    try {
        const data = await apiClientHttp.request<void>({
            endpoint: deliveryMenEndpoints.validerDemandeAssignations.endpoint,
            method: deliveryMenEndpoints.validerDemandeAssignations.method,
            service: 'backend',
            data: commande
        });
        return {
            status: 'success',
            message: 'Demande d\'assignation validée avec succès',
            data: data,
        };
    } catch (error: any) {
        return {
            status: 'error',
            message: error.message || 'Erreur lors de la création de la demande d\'assignation'
        }
    }
}

export async function rejeterDemandeAssignations(id: string): Promise<any> {
    try {
        const data = await apiClientHttp.request<void>({
            endpoint: deliveryMenEndpoints.rejeterDemandeAssignations.endpoint(id),
            method: deliveryMenEndpoints.rejeterDemandeAssignations.method,
            service: 'backend',
        });
        return {
            status: 'success',
            message: 'Demande d\'assignation rejeté avec succès',
            data: data,
        };
    } catch (error: any) {
        return {
            status: 'error',
            message: "Erreur lors du rejet de la demande d'assignation",
        };
    }
}