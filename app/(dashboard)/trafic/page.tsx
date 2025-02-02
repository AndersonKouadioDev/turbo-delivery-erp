import Loading from '@/components/layouts/loading';
import React, { Suspense } from 'react';
import Content from './content';
import { getTraficLivreurs } from '@/src/actions/trafic.actions';
import { LivreurDisponible } from '@/types/models';

export default async function Page() {
    const data = (await getTraficLivreurs()) ?? [];
    const withCourse: LivreurDisponible[] = [
        // {
        //     livreurId: '99096126-5448-4c03-9516-b2fe02b5d14',//9
        //     avatarUrl: '/var/www/turbo/test/delivery/upload/avatar/28bcfae4-34ea-4b4d-8530-aa6631df2656.jpg',
        //     nomComplet: 'Kouadio Anderson',
        //     telephone: '2250554020623',
        //     position: { longitude: -3.9380011, latitude: 5.3679802 },
        //     course: {
        //         id: 'aa24853b-8d1e-4b09-9bf4-c728ad42d5',
        //         code: '28011556',
        //         statut: 'EN_ATTENTE',
        //         dateHeureFin: '28/01/2025 16:10',
        //         dateHeureDebut: '28/01/2025 15:56',
        //         nombreCommande: 1,
        //         restaurant: {
        //             id: 'cc586ed9-2ce0-4463-b11c-9904ea15b66b',
        //             idLocation: '72MG+J5 Abidjan',
        //             logo: '/var/www/turbo/test/resto/upload/logo/d63a809c-e681-496c-87c7-81f5489087df.jpg',
        //             logo_Url: '/var/www/turbo/test/resto/upload/logo/d63a809c-e681-496c-87c7-81f5489087df.jpg',
        //             nomEtablissement: 'Agha',
        //             longitude: 5.2840557,
        //             latitude: -3.9771329,
        //             position: { longitude: 5.2840557, latitude: -3.9771329 },
        //         },
        //         total: 3500,
        //         commandes: [
        //             {
        //                 id: '8a1a988e-5f5b-4725-bf66-aa685248a',//5
        //                 libelle: 'Commande 001',
        //                 numero: '010203',
        //                 destinataire: { nomComplet: 'Diarra Mamadou', contact: '+2250555338323' },
        //                 lieuRecuperation: { longitude: -4.020221, latitude: 5.356121 },
        //                 lieuLivraison: { longitude: -3.999498, latitude: 5.305802 },
        //                 modePaiement: 'ESPECE',
        //                 statut: 'EN_COURS_LIVRAISON',
        //                 fraisLivraison: 0,
        //                 prix: 3000,
        //                 livraisonPaye: false,
        //             },
        //         ],
        //     },
        // },
        // {
        //     livreurId: '4c888aef-e98f-4608-b39d-311523ceb3d9',
        //     avatarUrl: '/var/www/turbo/test/delivery/upload/avatar/8c50c7ed-0df0-4286-ad87-5d8937998d2d.jpg',
        //     nomComplet: 'AHETO Da Yawa Livlic',
        //     telephone: '2250150964087',
        //     position: { longitude: -3.9379594, latitude: 5.3680452 },
        //     course: {
        //         id: '4c888aef-e98f-4608-b39d-311523ceb3',
        //         code: '28011556',
        //         statut: 'EN_ATTENTE',
        //         dateHeureFin: '28/01/2025 16:10',
        //         dateHeureDebut: '28/01/2025 15:56',
        //         nombreCommande: 1,
        //         restaurant: {
        //             id: 'cc586ed9-2ce0-4463-b11c-9904ea15b66b',
        //             idLocation: '72MG+J5 Abidjan',
        //             logo: '/var/www/turbo/test/resto/upload/logo/d63a809c-e681-496c-87c7-81f5489087df.jpg',
        //             logo_Url: '/var/www/turbo/test/resto/upload/logo/d63a809c-e681-496c-87c7-81f5489087df.jpg',
        //             nomEtablissement: 'Agha',
        //             longitude: 5.2840557,
        //             latitude: -3.9771329,
        //             position: { longitude: 5.2840557, latitude: -3.9771329 },
        //         },
        //         total: 3500,
        //         commandes: [
        //             {
        //                 id: '8a1a988e-5f5b-4725-bf66-aa685248a5ee',
        //                 libelle: 'Commande 001',
        //                 numero: '010203',
        //                 destinataire: { nomComplet: 'Diarra Mamadou', contact: '+2250555338323' },
        //                 lieuRecuperation: { longitude: -4.020221, latitude: 5.356121 },
        //                 lieuLivraison: { longitude: -3.999498, latitude: 5.305802 },
        //                 modePaiement: 'ESPECE',
        //                 statut: 'EN_COURS_LIVRAISON',
        //                 fraisLivraison: 0,
        //                 prix: 3000,
        //                 livraisonPaye: false,
        //             },
        //         ],
        //     },
        // },
    ];

    return (
        <Suspense fallback={<Loading />}>
            <Content data={[...data, ...withCourse]} />
        </Suspense>
    );
}
