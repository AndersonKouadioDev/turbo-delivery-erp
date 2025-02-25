import Loading from '@/components/layouts/loading';
import { Metadata } from 'next';
import React, { Suspense } from 'react';
import Content from './Content';
import { getAllDeliveryFee, getPaginationDeliveryFee } from '@/src/actions/delivery-fee.action';

export const metadata: Metadata = {
    title: 'Delivery Fee',
};

export default async function DeliveryMen() {
    const deliveryFees = await getAllDeliveryFee();
    const deliveryFeesPagination = await getPaginationDeliveryFee(0, 10);

    return (
        <Suspense fallback={<Loading />}>
            <Content initialData={deliveryFees} />
        </Suspense>
    );
}
