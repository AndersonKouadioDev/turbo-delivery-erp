'use server';

import { apiClientHttp } from '@/lib/api-client-http';
import { ActionResult } from '@/types';
import { PaginatedResponse } from '@/types';
import { DeliveryFee, RestaurantDefini } from '@/types/price-list';

// Configuration
const BASE_URL = '/api/erp/frais-livraison';

const priceListEndpoints = {
    create: {
        endpoint: BASE_URL,
        method: 'POST',
    },
    update: {
        endpoint: BASE_URL,
        method: 'PUT',
    },
    getPriceListByRestaurant: {
        endpoint: (restaurantID: string) => `${BASE_URL}/${restaurantID}/restaurant`,
        method: 'GET',
    },
    getPriceListById: {
        endpoint: (fraisDeLivraisonId: string) => `${BASE_URL}/${fraisDeLivraisonId}`,
        method: 'GET',
    },
    deletePriceList: {
        endpoint: (fraisDeLivraisonId: string) => `${BASE_URL}/${fraisDeLivraisonId}`,
        method: 'DELETE',
    },
    getRestaurantUndefined: {
        endpoint: `${BASE_URL}/restaurant/non-defini`,
        method: 'GET',
    },
    getRestaurantDefined: {
        endpoint: `${BASE_URL}/restaurant-defini`,
        method: 'GET',
    },
};

export async function getRestaurantDefined(): Promise<RestaurantDefini[]> {
    try {
        const data = await apiClientHttp.request<RestaurantDefini[]>({
            endpoint: priceListEndpoints.getRestaurantDefined.endpoint,
            method: priceListEndpoints.getRestaurantDefined.method,
            service: 'backend',
        });
        return data;
    } catch (error: any) {
        return [];
    }
}
export async function getRestaurantUndefined(): Promise<RestaurantDefini[]> {
    try {
        const data = await apiClientHttp.request<RestaurantDefini[]>({
            endpoint: priceListEndpoints.getRestaurantUndefined.endpoint,
            method: priceListEndpoints.getRestaurantUndefined.method,
            service: 'backend',
        });
        return data;
    } catch (error: any) {
        return [];
    }
}
export async function getPriceListByRestaurant(restaurant: string, page: number, size: number): Promise<PaginatedResponse<DeliveryFee> | null> {
    try {
        const data = await apiClientHttp.request<PaginatedResponse<DeliveryFee>>({
            endpoint: priceListEndpoints.getPriceListByRestaurant.endpoint(restaurant),
            method: priceListEndpoints.getPriceListByRestaurant.method,
            params: {
                page: page.toString(),
                size: String(size),
            },
            service: 'backend',
        });
        return data;
    } catch (error: any) {
        return null;
    }
}
