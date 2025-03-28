import { Metadata } from "next";

import { RestaurantDefini } from '@/types/price-list';
import Content from './content';
import { getRestaurantDefined } from '@/src/price-list/price-list.action';

export const metadata: Metadata = {
    title: "Restaurants ayant des livraisons définies ",
    description: "La liste des restaurants qui sont ont des livraisons définies.",
  };


export default async function Page() {
    const initialData: RestaurantDefini[] = await getRestaurantDefined();

      
    return <Content initialData={initialData} />;
}
