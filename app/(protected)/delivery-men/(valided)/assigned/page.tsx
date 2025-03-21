import { Metadata } from 'next';
import { getToutLivreurStatusAssigners } from '@/src/actions/delivery-men.actions';
import { PaginatedResponse } from '@/types';
import { LivreurStatutVM } from '@/types/models';
import Content from './content';
import { allRestaurants, ajouterValeurParDefautAuxRestaurant } from '@/src/actions/restaurants.actions';

export const metadata: Metadata = {
    title: 'Delivery Men',
};

export default async function DeliveryMen() {
    const toutStatutLivreurAssignes: PaginatedResponse<LivreurStatutVM[]> | null = await getToutLivreurStatusAssigners(0, 5);
    const allRestaurant = await allRestaurants();
    const restaurants = await ajouterValeurParDefautAuxRestaurant(toutStatutLivreurAssignes, allRestaurant)
    return (
        <Content initialData={toutStatutLivreurAssignes} restaurants={restaurants} />
    );
}
