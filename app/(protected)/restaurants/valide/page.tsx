import Loading from '@/components/layouts/loading';
import { getRestaurantsValidated } from '@/src/actions/restaurants.actions';
import { Metadata } from 'next';
import React, { Suspense } from 'react';
import Content from './content';
export const metadata: Metadata = {
    title: 'Restaurants',
};

export default async function Restaurants() {
    const restaurants = await getRestaurantsValidated();

    return (
        <Suspense fallback={<Loading />}>
            <Content initialData={restaurants} />
        </Suspense>
    );
}
