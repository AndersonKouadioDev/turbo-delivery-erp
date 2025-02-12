import Loading from '@/components/layouts/loading';
import React, { Suspense } from 'react';
import Content from './content';
import { getDeliveryMen } from '@/src/actions/delivery-men.actions';
import { getRestaurants } from '@/src/actions/restaurants.actions';
import { getTypePlats } from '@/src/actions/type-plats.actions';
import { getUsers } from '@/src/actions/users.actions';
import { getAllChiffreAffaire } from '@/src/actions/statistiques.action';

export default async function Page() {
    const items = {
        deliveryMen: await getDeliveryMen(),
        restaurants: await getRestaurants(),
        typePlats: await getTypePlats(),
        users: await getUsers(),
        chiffreAffaire: await getAllChiffreAffaire(),
    };
    return (
        <Suspense fallback={<Loading />}>
            <Content items={items} />
        </Suspense>
    );
}
