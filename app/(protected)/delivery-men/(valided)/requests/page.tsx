import Loading from '@/components/layouts/loading';
import { Metadata } from 'next';
import React, { Suspense } from 'react';
import { getAllDemandeAssignations } from '@/src/actions/delivery-men.actions';
import Content from './content';
import { allRestaurants } from '@/src/actions/restaurants.actions';

export const metadata: Metadata = {
    title: 'Delivery Men',
};

export default async function DeliveryMen() {
    const demandeAssignations = await getAllDemandeAssignations();
    const allRestaurant = await allRestaurants();
    return (
        <Suspense fallback={<Loading />}>
            <Content demandeAssignations={demandeAssignations} allRestaurant={allRestaurant} />
        </Suspense>
    );
}
