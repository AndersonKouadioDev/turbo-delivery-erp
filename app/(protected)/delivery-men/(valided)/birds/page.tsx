import Loading from '@/components/layouts/loading';
import { Metadata } from 'next';
import React, { Suspense } from 'react';
import { getDeliveryMen } from '@/src/actions/delivery-men.actions';
import { PaginatedResponse } from '@/types';
import { DeliveryMan } from '@/types/models';
import Content from './content';

export const metadata: Metadata = {
    title: 'Delivery Men',
};

export default async function DeliveryMen() {
    const deliveryMen: PaginatedResponse<DeliveryMan> | null = await getDeliveryMen(0, 5);


    return (
        <Suspense fallback={<Loading />}>
            <Content />
        </Suspense>
    );
}
