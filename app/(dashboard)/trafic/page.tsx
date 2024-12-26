'use server';
import Loading from '@/components/layouts/loading';
import React, { Suspense } from 'react';
import Content from './content';

export interface MarkerI {
    position: { lat: number; lng: number };
    title: string;
}

export default async function Page() {
    // fetch WS
    const markers: MarkerI[] = [
        {
            position: {
                lat: 48.8566,
                lng: 2.3522,
            },
            title: 'Aimé Yao',
        },
    ];

    return (
        <Suspense fallback={<Loading />}>
            <Content markers={markers} />
        </Suspense>
    );
}
