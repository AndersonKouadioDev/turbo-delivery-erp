import axios, { AxiosInstance, AxiosHeaders, AxiosRequestConfig, AxiosError } from 'axios';
import { auth } from '@/auth';

export type ServiceType = 'erp' | 'restaurant' | 'livreur' | 'client' | 'backend';



class ApiClientHttp {
    private axiosInstance: AxiosInstance;

    constructor(baseUrl: string) {
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Interceptor pour gérer les réponses
        this.axiosInstance.interceptors.response.use(
            (response) => response,
            async (error: AxiosError) => {
                if (error.response?.status === 401) {
                    const url = new URL('/api/auth/logout', process.env.NEXT_PUBLIC_URL || '');
                    await fetch(url.toString(), { method: 'POST' });
                }
                return Promise.reject(error);
            },
        );

        // Interceptor pour ajouter les en-têtes
        this.axiosInstance.interceptors.request.use(async (config) => {
            const headers = await this.setHeaders();
            config.headers = headers;
            return config;
        });
    }

    private async getSession() {
        let session;

        if (typeof window === 'undefined') {
            session = await auth();
        } else {
            const { getSession } = await import('next-auth/react');
            session = await getSession();
        }

        return session;
    }

    private async setHeaders(): Promise<AxiosHeaders> {
        const session = await this.getSession();
        const headers = new AxiosHeaders();

        headers.set('Authorization', session?.user?.token ? `Bearer ${session.user.token}` : '');

        return headers;
    }

    async request<T = any>({
        endpoint,
        method,
        data,
        params,
        service,
        config,
    }: {
        endpoint: string;
        method: string;
        data?: any;
        params?: Record<string, string>;
        service?: ServiceType;
        config?: AxiosRequestConfig;
    }): Promise<T> {
        if (service) {
            const baseUrl =
                service == 'erp'
                    ? process.env.NEXT_PUBLIC_API_ERP_URL || ''
                    : service == 'restaurant'
                        ? process.env.NEXT_PUBLIC_API_RESTO_URL || ''
                        : service == 'livreur'
                            ? process.env.NEXT_PUBLIC_API_DELIVERY_URL || ''
                            : service == 'client'
                                ? process.env.NEXT_PUBLIC_API_CLIENT_URL || ''
                                : process.env.NEXT_PUBLIC_API_BACKEND_URL || '';

            config = { ...config, baseURL: baseUrl };
        }

        try {
            const queryString = new URLSearchParams(params).toString();
            const url = `${endpoint.trim()}${queryString ? `?${queryString}` : ''}`;

            switch (method.trim().toLowerCase()) {
                case 'post':
                    return (await this.axiosInstance.post(url, data, config)).data;
                case 'put':
                    return (await this.axiosInstance.put(url, data, config)).data;
                case 'patch':
                    return (await this.axiosInstance.patch(url, data, config)).data;
                case 'delete':
                    return (await this.axiosInstance.delete(url, config)).data;
                default:
                    return (await this.axiosInstance.get(url, config)).data;
            }
        } catch (error) {
            throw error;
        }
    }
}

export const apiClientHttp = new ApiClientHttp(process.env.NEXT_PUBLIC_API_BACKEND_URL || '');
