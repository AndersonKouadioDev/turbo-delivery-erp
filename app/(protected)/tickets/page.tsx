import Loading from '@/components/layouts/loading';
import React, { Suspense } from 'react';
import { getBonLivraisonAll } from '@/src/actions/bon-commande.action';
import Content from './content';

export default async function Page() {
    const data = await getBonLivraisonAll(1,10);
    if (data === null) return <Loading />;
    return (
        <Suspense fallback={<Loading />}>
            <Content initialData={data} />
        </Suspense>
    );
}
