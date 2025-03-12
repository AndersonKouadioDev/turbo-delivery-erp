import { Metadata } from 'next';
import Content from './content';
import NotFound from '@/app/not-found';
import { getDeliveryMen, getDeliveryMenNoValidated, getDeliveryMenValidated } from '@/src/actions/delivery-men.actions';

export const metadata: Metadata = {
    title: 'Delievry Man',
};

export default async function DeliveryManPage({ params }: { params: { driver_id: string } }) {
    let deliveryMen = await getDeliveryMen();
    let driver = deliveryMen && deliveryMen?.content?.find((dri) => dri.id == params.driver_id);
    if (!driver) {
        deliveryMen = await getDeliveryMenNoValidated();
        driver = deliveryMen && deliveryMen?.content?.find((dri) => dri.id == params.driver_id);
        if (!driver) {
            deliveryMen = await getDeliveryMenValidated();
            driver = deliveryMen && deliveryMen?.content?.find((dri) => dri.id == params.driver_id);
            if (!driver) {
                return NotFound();
            }
        }
    }


    return (
        <Content driver={driver} />
    );
}
