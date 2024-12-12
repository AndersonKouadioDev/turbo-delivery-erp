import Loading from '@/components/layouts/loading';
import React, { Suspense } from 'react';
import Content from './content';
import { getDeliveryMen } from '@/src/actions/delivery-men.actions';
import { getRestaurants } from '@/src/actions/restaurants.actions';
import { getTypePlats } from '@/src/actions/type-plats.actions';
import { getUsers } from '@/src/actions/users.actions';

export default async function Page() {
    const deliveryMen = await getDeliveryMen();
    const restaurants = await getRestaurants();
    const typePlats = await getTypePlats();
    const users = await getUsers();

    const items: { label: string; value: number }[] = [
        {
            label: 'Utilisateurs',
            value: users ? users.content.length : 0,
        },
        {
            label: 'Livreurs',
            value: deliveryMen ? deliveryMen.content.length : 0,
        },
        {
            label: 'Restaurants',
            value: restaurants ? restaurants.content.length : 0,
        },
        {
            label: 'Type de plats',
            value: typePlats ? typePlats.length : 0,
        },
    ];

    return (
        <Suspense fallback={<Loading />}>
            <Content items={items} />
        </Suspense>
    );
}
