import { Metadata } from 'next';
// import Content from './Content';
import { getAllDeliveryFee, getPaginationDeliveryFee } from '@/src/actions/delivery-fee.action';

export const metadata: Metadata = {
    title: 'Delivery Fee',
};

export default async function DeliveryMen() {
    const deliveryFees = await getAllDeliveryFee();
    const deliveryFeesPagination = await getPaginationDeliveryFee(0, 10);
       
    return <div className='text-7xl text-red-500 text-center pt-28'>ERREUR DANS LES ENFANTS DE CETTE PAGE </div>
    // return <Content initialData={deliveryFees} />;
}
