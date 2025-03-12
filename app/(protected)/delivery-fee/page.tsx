import { Metadata } from 'next';
import Content from './Content';
import { getAllDeliveryFee, getPaginationDeliveryFee } from '@/src/actions/delivery-fee.action';

export const metadata: Metadata = {
    title: 'Delivery Fee',
};

export default async function DeliveryMen() {
    const deliveryFees = await getAllDeliveryFee();
    const deliveryFeesPagination = await getPaginationDeliveryFee(0, 10);

    return <Content initialData={deliveryFees} />;
}
