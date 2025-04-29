
import { getBonLivraisonAll } from '@/src/actions/bon-commande.action';
import Content from './content';
import { getAllRestaurants } from '@/src/actions/restaurants.actions';

export default async function Page() {
    const data = await getBonLivraisonAll(1, 10);
    const restaurants = await getAllRestaurants();
    return (
        <Content initialData={data} restaurants={restaurants} />

    );
}
