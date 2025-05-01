'use server';

import { apiClientHttp } from '@/lib/api-client-http';
import { FichePaieDetailVM, GainParJour, PaieErpVM, StatistiqueMoisPaieVM } from '@/types/gestion-de-paie.model';

const BASE_URL = '/api/erp';

const gestionPaieEndpoints = {
    fichePaies: { endpoint: `${BASE_URL}/fiche-paie`, method: 'GET' },
    getFichePaieById: { endpoint: (fichePaieId: string) => `${BASE_URL}/fiche-paie/${fichePaieId}`, method: "GET" },
    getGainParJour: { endpoint: (fichePaieId: string) => `${BASE_URL}/fiche-paie/${fichePaieId}/gain`, method: "GET" },
    getStatistiqueFichePaie: { endpoint: `${BASE_URL}/fiche-paie/statistique`, method: "GET" }
};

export async function getFicheDePaies(): Promise<PaieErpVM | null> {
    try {
        const data = await apiClientHttp.request({
            endpoint: gestionPaieEndpoints.fichePaies.endpoint,
            method: gestionPaieEndpoints.fichePaies.method,
            service: 'backend',
        });
        return data;
    } catch (error: any) {
        return null;
    }
}

export async function getFichePaieById(fichePaieId: string): Promise<FichePaieDetailVM | null> {
    console.log("fichePaieId++++++++++++++++++++++++++++++++", fichePaieId)
    try {
        const data = await apiClientHttp.request({
            endpoint: gestionPaieEndpoints.getFichePaieById.endpoint(fichePaieId),
            method: gestionPaieEndpoints.getFichePaieById.method,
            service: 'backend',
        });
        console.log("data", data)
        return data;
    } catch (error: any) {
        console.log("error", error)
        return null;
    }
};

export async function getGainParJour(fichePaieId: string): Promise<GainParJour | null> {
    try {
        const data = await apiClientHttp.request({
            endpoint: gestionPaieEndpoints.getGainParJour.endpoint(fichePaieId),
            method: gestionPaieEndpoints.getGainParJour.method,
            service: 'backend',
        });
        return data;
    } catch (error: any) {
        return null;
    }
};

export async function getStatistiqueFichePaie(mois: string, annees: string): Promise<StatistiqueMoisPaieVM | null> {
    try {
        const data = await apiClientHttp.request({
            endpoint: gestionPaieEndpoints.getStatistiqueFichePaie.endpoint,
            method: gestionPaieEndpoints.getStatistiqueFichePaie.method,
            service: 'backend',
            params: {
                mois: mois,
                annee: annees
            }
        });
        return data;
    } catch (error: any) {
        return null;
    }
}
