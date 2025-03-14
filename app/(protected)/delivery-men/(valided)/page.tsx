import { Metadata } from 'next';
import { getDeliveryMen, getToutLivreurStatus } from '@/src/actions/delivery-men.actions';
import { PaginatedResponse } from '@/types';
import { DeliveryMan, LivreurStatutVM } from '@/types/models';
import Content from './content';
import { allRestaurants, resetRestaurantDefaulValue } from '@/src/actions/restaurants.actions';

export const metadata: Metadata = {
    title: 'Delivery Men',
};

export default async function DeliveryMen() {
    const toutStatutLivreurs: PaginatedResponse<LivreurStatutVM[]> | null = await getToutLivreurStatus(0, 5);
    const allRestaurant = await allRestaurants();
    const restaurants = await resetRestaurantDefaulValue(toutStatutLivreurs, allRestaurant)
    return (
        <Content initialData={toutStatutLivreurs} restaurants={restaurants} />
    );
}
