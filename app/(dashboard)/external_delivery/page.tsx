import React, { Suspense } from 'react';
import Content from './content';
import Loading from '@/components/layouts/loading';
import { getPaginationCourseExterneEnAttente } from '@/src/actions/courses.actions';
import { getLivreursDisponible } from '@/src/actions/delivery-men.actions';

export default async function DeliveryPage() {
    const data = await getPaginationCourseExterneEnAttente(0, 5);
    const delivers = await getLivreursDisponible() ?? [];

    return (
        <Suspense fallback={<Loading />}>
            <Content initialData={data} delivers={delivers} />
        </Suspense>
    );
}
