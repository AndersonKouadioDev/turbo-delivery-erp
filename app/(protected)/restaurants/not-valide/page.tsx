import { getRestaurantsNoValidated } from '@/src/actions/restaurants.actions';
import { Metadata } from 'next';
import Content from './content';
export const metadata: Metadata = {
    title: 'Restaurants',
};

export default async function Restaurants() {
    const restaurants = await getRestaurantsNoValidated();

    return (
        <Content initialData={restaurants} />

    );
}
