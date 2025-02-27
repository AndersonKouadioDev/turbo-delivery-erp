import Loading from '@/components/layouts/loading';
import { getRestaurants } from '@/src/actions/restaurants.actions';
import { Metadata } from 'next';
import React, { Suspense } from 'react';
import Content from './content';

export const metadata: Metadata = {
    title: 'Restaurants',
};

export default async function Restaurants() {
    const restaurants = await getRestaurants(0, 10);

    return (
        <Suspense fallback={<Loading />}>
            <Content initialData={restaurants} />
        </Suspense>
    );
}
