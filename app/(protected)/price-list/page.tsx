import { RestaurantDefini } from '@/types/price-list';
import Content from './content';
import { getRestaurantDefined } from '@/src/price-list/price-list.action';

export default async function Page() {
    const initialData: RestaurantDefini[] = await getRestaurantDefined();
    return <Content />;
}
