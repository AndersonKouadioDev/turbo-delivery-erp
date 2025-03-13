import { Metadata } from 'next';
import Content from './content';
import { getRestaurants, getRestaurantsNoValidated, getRestaurantsValidated } from '@/src/actions/restaurants.actions';
import NotFound from '@/app/not-found';

export const metadata: Metadata = {
    title: 'Restaurants',
};

export default async function Restaurants({ params }: { params: { restaurant_id: string } }) {
    let restaurants = await getRestaurants(0, 10);
    let restaurant = restaurants && restaurants?.content?.find((res) => res.id == params.restaurant_id);

    if (!restaurant) {
        restaurants = await getRestaurantsNoValidated();
        restaurant = restaurants && restaurants?.content?.find((res) => res.id == params.restaurant_id);

        if (!restaurant) {
            restaurants = await getRestaurantsValidated();
            restaurant = restaurants && restaurants?.content?.find((res) => res.id == params.restaurant_id);

            if (!restaurant) {
                return NotFound();
            }
        }
    }

    return (
        <Content restaurant={restaurant} />
    );
}
