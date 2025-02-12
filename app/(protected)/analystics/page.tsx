import Loading from '@/components/layouts/loading';
import React, { Suspense } from 'react';
import Content from './content';
import { getDeliveryMen } from '@/src/actions/delivery-men.actions';
import { getRestaurants } from '@/src/actions/restaurants.actions';
import { getTypePlats } from '@/src/actions/type-plats.actions';
import { getUsers } from '@/src/actions/users.actions';
import { getAllChiffreAffaire } from '@/src/actions/statistiques.action';
import { ChiffreAffaireRestaurant } from '@/types/statistiques.model';

export default async function Page() {
    const deliveryMen = await getDeliveryMen();
    const restaurants = await getRestaurants();
    const typePlats = await getTypePlats();
    const users = await getUsers();
    const chiffreAffaire = await getAllChiffreAffaire();
   
    const chiffresAffairesRestaurants: ChiffreAffaireRestaurant[] = [
        {
            restaurantId: 'resto_001',
            restaurant: 'Le Bistrot',
            commandeTotalTermine: 250,
            fraisLivraisonTotalTermine: 40,
            fraisLivraisonTotalEnAttente: 20,
            commandeTotalEnAttente: 10,
        },
        {
            restaurantId: 'resto_002',
            restaurant: "La Table d'Or",
            commandeTotalTermine: 300,
            fraisLivraisonTotalTermine: 50,
            fraisLivraisonTotalEnAttente: 25,
            commandeTotalEnAttente: 15,
        },
        {
            restaurantId: 'resto_003',
            restaurant: 'Chez Marie',
            commandeTotalTermine: 180,
            fraisLivraisonTotalTermine: 35,
            fraisLivraisonTotalEnAttente: 10,
            commandeTotalEnAttente: 8,
        },
    ];

    const items = {
        deliveryMen,
        restaurants,
        typePlats,
        users,
        chiffreAffaire,
        chiffresAffairesRestaurants,
    };
    return (
        <Suspense fallback={<Loading />}>
            <Content items={items} />
        </Suspense>
    );
}
