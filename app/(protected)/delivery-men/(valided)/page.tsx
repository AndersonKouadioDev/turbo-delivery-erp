import { Metadata } from 'next';
import { getAllDeliveryMan, getDeliveryMen, getToutLivreurStatus } from '@/src/actions/delivery-men.actions';
import { PaginatedResponse } from '@/types';
import { DeliveryMan, LivreurStatutVM } from '@/types/models';
import Content from './content';
import { allRestaurants } from '@/src/actions/restaurants.actions';
import { auth } from '@/auth';

export const metadata: Metadata = {
    title: 'Delivery Men',
};


export default async function DeliveryMen() {
    // const toutStatutLivreurs: PaginatedResponse<LivreurStatutVM[]> | null = await getToutLivreurStatus(0, 5);
    const toutStatutLivreurs: any = await getAllDeliveryMan()
    const allRestaurant = await allRestaurants();
    return (
        <Content initialData={toutStatutLivreurs} restaurants={allRestaurant} />
    );
}
