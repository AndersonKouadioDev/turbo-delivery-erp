import { Metadata } from 'next';
import { getDeliveryMen, getToutLivreurStatusNonAssigners } from '@/src/actions/delivery-men.actions';
import { PaginatedResponse } from '@/types';
import { DeliveryMan, LivreurStatutVM } from '@/types/models';
import Content from './content';
import { allRestaurants, resetRestaurantDefaulValue } from '@/src/actions/restaurants.actions';

export const metadata: Metadata = {
    title: 'Delivery Men',
};

export default async function DeliveryMen() {
    const toutStatutLivreurNonAssignes: PaginatedResponse<LivreurStatutVM[]> | null = await getToutLivreurStatusNonAssigners(0, 5);
    const allRestaurant = await allRestaurants();
    const restaurants = await resetRestaurantDefaulValue(toutStatutLivreurNonAssignes, allRestaurant)
    return (
        <Content initialData={toutStatutLivreurNonAssignes} restaurants={restaurants} />
    );
}
