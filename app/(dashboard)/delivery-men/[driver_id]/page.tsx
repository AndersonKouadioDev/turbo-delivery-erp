import Loading from '@/components/layouts/loading';
import { Metadata } from 'next';
import React, { Suspense } from 'react';
import Content from './content';
import NotFound from '@/app/not-found';
import { getDeliveryMen } from '@/src/actions/delivery-men.actions';

export const metadata: Metadata = {
    title: 'Delievry Man',
};

export default async function DeliveryManPage({ params }: { params: { driver_id: string } }) {
    const deliveryMen = await getDeliveryMen();
    const driver = deliveryMen && deliveryMen?.content?.find((dri) => dri.id == params.driver_id);

    if (!driver) {
        return NotFound();
    }
    return (
        <Suspense fallback={<Loading />}>
            <Content driver={driver} />
        </Suspense>
    );
}