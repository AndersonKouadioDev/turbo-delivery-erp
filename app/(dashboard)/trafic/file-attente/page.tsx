import Loading from '@/components/layouts/loading';
import React, { Suspense } from 'react';
import Content from './content';
import { getDeliveryMen } from '@/src/actions/delivery-men.actions';
import { getRestaurants } from '@/src/actions/restaurants.actions';

export default async function Page() {
    const deliveryMen = await getDeliveryMen();
    const restaurants = await getRestaurants();

    return (
        <Suspense fallback={<Loading />}>
            <Content 
            nbDeliveryMen={!deliveryMen ? 0 : (deliveryMen?.totalElements ?? 0)} 
            nbPartner={!restaurants ? 0 : (restaurants?.totalElements ?? 0)} 
            />
        </Suspense>
    );
}
