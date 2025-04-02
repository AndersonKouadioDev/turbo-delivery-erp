// 'use server';

// import { apiClientHttp } from '@/lib/api-client-http';
// import { Livreur } from '@/types/creneau-bird';

// const BASE_URL = '/api/erp/livreur/info';

// const livreurInfoEndpoints = {
//     getInfoLivreurById: (userId: string) => `${BASE_URL}/${userId}`,
// };

// /**
//  * Récupère les informations d'un livreur par son ID.
//  * @param livreurId - ID du livreur
//  * @returns Les informations du livreur ou `null` en cas d'erreur
//  */
// export async function getInfoLivreurById(livreurId: string): Promise<Livreur | null> {
//     try {
//         const data = await apiClientHttp.request<Livreur>({
//             endpoint: livreurInfoEndpoints.getInfoLivreurById(livreurId),
//              method: livreurInfoEndpoints.getInfoLivreurById.method,
//             service: 'backend',
//         });
        
//         return data;
//     } catch (error) {
//         console.error('Erreur lors de la récupération du livreur:', error);
//         return null;
//     }
// }








'use server';

import { ActionResult, PaginatedResponse } from '@/types';
// import { LivreurStatutVM, Restaurant } from '@/types/models';

import { apiClientHttp } from '@/lib/api-client-http';
import { Restaurant } from '@/types/creneau-turbo';
import { Livreur } from '@/types/creneau-bird';
import { LivreurPerformance } from '@/types/creneau-performance';
import { CreneauxRestaurantProgression } from '@/types/creneaux-progression';
import { LivreurDetail } from '@/types/livreur';

// Configuration
const BASE_URL = '/api/erp/livreur/info';

const livreurInfoEndpoints = {
    base: {
        endpoint: BASE_URL,
        method: 'GET',
    },
 
    getInfoLivreurId: {
        endpoint: (userId: string) => `${BASE_URL}/${userId}`,
        method: 'GET',
    },
};


export async function getInfoLivreurById(userId: string):Promise<LivreurDetail|null> {
  
    try {
        const data = await apiClientHttp.request<LivreurDetail|null>({
            endpoint: livreurInfoEndpoints.getInfoLivreurId.endpoint(userId),
            method: livreurInfoEndpoints.getInfoLivreurId.method,
            service: 'backend',
        });
                
        return data;
    } catch (error: any) {
        return null;
    }
}







