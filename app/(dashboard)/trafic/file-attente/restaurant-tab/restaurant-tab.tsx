
import { Tab, Tabs } from '@nextui-org/react';
import { ListeRestaurants } from './liste-restaurant/liste-restaurant';
import { ListTree } from 'lucide-react';
import { FilleAttenteHistoriqueVM } from '@/types/file-attente.model';

interface RestaurantsTabProps {
    fileAttentes: FilleAttenteHistoriqueVM[]
}
export function RestaurantsTab({ fileAttentes }: RestaurantsTabProps) {

    return (
        <div className="mt-4">
            <div className='flex mb-5'><ListTree className='mr-2' /><span className='text-gray-500'>Trier</span></div>
            <Tabs items={fileAttentes || []} className="w-full">
                {(item) => (
                    <Tab key={item.restaurantId} title={item.restaurant} children={<ListeRestaurants datas={item.fileAttentes} />} />
                )}
            </Tabs>
        </div>
    )
}