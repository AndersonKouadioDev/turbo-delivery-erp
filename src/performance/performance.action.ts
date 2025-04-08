'use server';

import { ActionResult, PaginatedResponse } from '@/types';
// import { LivreurStatutVM, Restaurant } from '@/types/models';

import { apiClientHttp } from '@/lib/api-client-http';
import { Restaurant } from '@/types/creneau-turbo';
import { LivreurBird } from '@/types/creneau-bird';
import { CreneauID } from '@/types/creneau-byId';
import { PerformanceCreneauId } from '@/types/performance-creneauId';

// Configuration
const BASE_URL = '/api/erp/performance';

const creneauEndpoints = {
    base: {
        endpoint: BASE_URL,
        method: 'GET',
    },
 
    getAllPerformaneTurbo: {
        endpoint: `${BASE_URL}/turbo`,
        method: 'GET',
    },

    getAllPerformanceBird: {
        endpoint: `${BASE_URL}/bird`,
        method: 'GET',
    },
    // getAllCreneauProgressionTurbo: {
    //     endpoint: `${BASE_URL}/turbo/progression`,
    //     method: 'GET',
    // },
    // getAllCreneauProgressionBird: {
    //     endpoint: `${BASE_URL}/bird/progression`,
    //     method: 'GET',
    // },
    getPerformanceCreneauById: {
        endpoint: (creneauId: string) => `${BASE_URL}/${creneauId}/creneau`,
        method: 'GET',
    },
};


export async function getAllPerformaneTurbo(page: number = 0, size: number = 10): Promise<PaginatedResponse<LivreurPerformanceBirdEndTorubo> | null> {
    try {
        const data = await apiClientHttp.request<PaginatedResponse<LivreurPerformanceBirdEndTorubo>>({
            endpoint: creneauEndpoints.getAllPerformaneTurbo.endpoint,
            method: creneauEndpoints.getAllPerformaneTurbo.method,
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


export async function getAllPerformanceBird(page: number = 0, size: number = 10): Promise<PaginatedResponse<LivreurPerformanceBirdEndTorubo> | null> {
    try {
        const data = await apiClientHttp.request<PaginatedResponse<LivreurPerformanceBirdEndTorubo> | null>({
            endpoint: creneauEndpoints.getAllPerformanceBird.endpoint,
            method: creneauEndpoints.getAllPerformanceBird.method,
            service: 'backend',
        });

        return data;
    } catch (error) {
        return null;
    }
}


export async function getPerformanceCreneauById(creneauId: string): Promise<PerformanceCreneauId|null> {
    try {
        const data = await apiClientHttp.request<PerformanceCreneauId|null>({
            endpoint: creneauEndpoints.getPerformanceCreneauById.endpoint(creneauId),
            method: creneauEndpoints.getPerformanceCreneauById.method,
            service: 'backend',
        });
        return data;
    } catch (error: any) {
        return null;
    }
}



