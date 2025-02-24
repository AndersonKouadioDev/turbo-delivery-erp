import Loading from '@/components/layouts/loading';
import { Metadata } from 'next';
import React, { Suspense } from 'react';
import Content from './Content';

export const metadata: Metadata = {
    title: 'Delivery Fee',
};

export default async function DeliveryMen() {
    return (
        <Suspense fallback={<Loading />}>
            <Content />
        </Suspense>
    );
}
