'use server';

import { apiClientHttp } from '@/lib/api-client-http';
import { Livreur } from '@/types/creneau-bird';

const BASE_URL = '/api/erp/livreur/info';

const livreurInfoEndpoints = {
    getInfoLivreurById: (userId: string) => `${BASE_URL}/${userId}`,
};

/**
 * Récupère les informations d'un livreur par son ID.
 * @param livreurId - ID du livreur
 * @returns Les informations du livreur ou `null` en cas d'erreur
 */
export async function getInfoLivreurById(livreurId: string): Promise<Livreur | null> {
    try {
        const data = await apiClientHttp.request<Livreur>({
            endpoint: livreurInfoEndpoints.getInfoLivreurById(livreurId),
            method: 'GET',
            service: 'backend',
        });
        
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération du livreur:', error);
        return null;
    }
}
















// 'use server';

// import { ActionResult, PaginatedResponse } from '@/types';
// // import { LivreurStatutVM, Restaurant } from '@/types/models';

// import { apiClientHttp } from '@/lib/api-client-http';
// import { Restaurant } from '@/types/creneau-turbo';
// import { Livreur } from '@/types/creneau-bird';
// import { LivreurPerformance } from '@/types/creneau-performance';
// import { CreneauxRestaurantProgression } from '@/types/creneaux-progression';

// // Configuration
// const BASE_URL = '/api/erp/livreur/info';

// const livreurInfoEndpoints = {
//     base: {
//         endpoint: BASE_URL,
//         method: 'GET',
//     },
 
//     getInfoLivreurId: {
//         endpoint: (userId: string) => `${BASE_URL}/${userId}`,
//         method: 'GET',
//     },
// };


// export async function getInfoLivreurId(fraisDeLivraisonId: string):Promise<any> {
  
//     try {
//         const data = await apiClientHttp.request<any>({
//             endpoint: livreurInfoEndpoints.getInfoLivreurId.endpoint(fraisDeLivraisonId),
//             method: livreurInfoEndpoints.getInfoLivreurId.method,
//             data: fraisDeLivraisonId,
//             service: 'backend',
//         });
                
//         return data;
//     } catch (error: any) {
//         return null;
//     }
// }







