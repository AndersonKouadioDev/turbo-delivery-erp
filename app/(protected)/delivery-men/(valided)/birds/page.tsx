import { Metadata } from 'next';
import { getAllDeliveryMan, getDeliveryMen, getToutLivreurStatusNonAssigners } from '@/src/actions/delivery-men.actions';
import { PaginatedResponse } from '@/types';
import { DeliveryMan, LivreurStatutVM } from '@/types/models';
import Content from './content';
import { allRestaurants } from '@/src/actions/restaurants.actions';

export const metadata: Metadata = {
    title: 'Delivery Men',
};


export default async function DeliveryMen() {
    const toutStatutLivreurs = await getAllDeliveryMan()
    // const toutStatutLivreurNonAssignes: PaginatedResponse<LivreurStatutVM[]> | null = await getToutLivreurStatusNonAssigners(0, 5);
    const allRestaurant = await allRestaurants();
    return (
        <Content initialData={toutStatutLivreurs} restaurants={allRestaurant} />
    );
}
