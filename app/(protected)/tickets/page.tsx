import Loading from '@/components/layouts/loading';
import React, { Suspense } from 'react';
import { getBonLivraisonAll } from '@/src/actions/bon-commande.action';
import Content from './content';

export default async function Page() {
    const data = await getBonLivraisonAll();

    return (
        <Suspense fallback={<Loading />}>
            <Content data={data} />
        </Suspense>
    );
}
