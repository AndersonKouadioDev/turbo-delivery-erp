import Loading from '@/components/layouts/loading';
import { getRestaurantsNoValidated } from '@/src/actions/restaurants.actions';
import { Metadata } from 'next';
import React, { Suspense } from 'react';
import RestaurantList from '@/components/dashboard/restaurants/restaurant-list';
export const metadata: Metadata = {
    title: 'Restaurants',
};

export default async function Restaurants() {
    const restaurants = await getRestaurantsNoValidated();
    return (
        <Suspense fallback={<Loading />}>
            <RestaurantList restaurants={restaurants} validateBy="auth" />
        </Suspense>
    );
}