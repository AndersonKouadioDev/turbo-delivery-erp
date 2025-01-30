'use server';
import Loading from '@/components/layouts/loading';
import React, { Suspense } from 'react';
import Content from './content';
import { getTraficLivreurs } from '@/src/actions/trafic.actions';

export default async function Page() {
    const data = await getTraficLivreurs();

    return (
        <Suspense fallback={<Loading />}>
            <Content data={data} />
        </Suspense>
    );
}
