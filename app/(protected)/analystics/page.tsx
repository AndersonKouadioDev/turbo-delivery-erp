import Loading from '@/components/layouts/loading';
import React, { Suspense } from 'react';
import Content from './content';
import { getDeliveryMen } from '@/src/actions/delivery-men.actions';
import { getRestaurants } from '@/src/actions/restaurants.actions';
import { getTypePlats } from '@/src/actions/type-plats.actions';
import { getUsers } from '@/src/actions/users.actions';
import { getAllChiffreAffaire, getAllRestaurantChiffreAffaire } from '@/src/actions/statistiques.action';
import { ChiffreAffaireRestaurant } from '@/types/statistiques.model';

export default async function Page() {
    const deliveryMen = await getDeliveryMen();
    const restaurants = await getRestaurants(0, 10);
    const typePlats = await getTypePlats();
    const users = await getUsers();
    const chiffreAffaire = await getAllChiffreAffaire();
    const chiffresAffairesRestaurants: ChiffreAffaireRestaurant[] = await getAllRestaurantChiffreAffaire();

    const initialItems = {
        deliveryMen,
        restaurants,
        typePlats,
        users,
        chiffreAffaire,
        chiffresAffairesRestaurants,
    };

    return (
        <Suspense fallback={<Loading />}>
            <Content initialItems={initialItems} />
        </Suspense>
    );
}
