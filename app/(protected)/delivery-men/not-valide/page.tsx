import Loading from '@/components/layouts/loading';
import { getDeliveryMenNoValidated } from '@/src/actions/delivery-men.actions';
import { Metadata } from 'next';
import React, { Suspense } from 'react';
import Content from './content';
export const metadata: Metadata = {
    title: 'Delivery Men',
};

export default async function DeliveryMen() {
    const deliveryMen = await getDeliveryMenNoValidated(0, 5);
    return (
        <Suspense fallback={<Loading />}>
            <Content initialData={deliveryMen} />
        </Suspense>
    );
}
