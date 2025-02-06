
import { Tab, Tabs } from '@nextui-org/react';
import { ListeRestaurants } from './liste-restaurant/liste-restaurant';
import { ListTree } from 'lucide-react';


const data2 = [
    {
        rang: "Position 4",
        nomPrenom: "Kossonou yao",
        numero: "Thursday 42",
        photo: "https://cdn-icons-png.flaticon.com/512/2499/2499292.png",
    },
    {
        rang: "Position 2",
        nomPrenom: "Jhone Kouamé",
        numero: "Thursday 28",
        photo: "https://cdn-icons-png.flaticon.com/512/2499/2499292.png",
    },
]

const data1 = [
    {
        id: "1",
        rang: "Position 1",
        nomPrenom: "Kouassi yao",
        numero: "Thursday 42",
        photo: "https://cdn-icons-png.flaticon.com/512/2499/2499292.png",
    },
    {
        id: "2",
        rang: "Position 2",
        nomPrenom: "Kouassi yao Serge",
        numero: "Thursday 43",
        photo: "https://cdn-icons-png.flaticon.com/512/2499/2499292.png",
    },
]
export function RestaurantsTab() {
    const items = [
        { id: '1', label: 'ACHA (11)', children: <ListeRestaurants datas={data1} /> },
        { id: '2', label: 'AMORE 4', children: <ListeRestaurants datas={data2} /> },
        { id: '3', label: 'LE CHA' },
        { id: '4', label: 'La billa de surtante', children: <ListeRestaurants datas={data1} /> },
        { id: '5', label: 'TSUMANI (7)', children: <ListeRestaurants datas={data2} /> },
        { id: '6', label: 'KFC', children: <ListeRestaurants datas={data1} /> },
        { id: '7', label: 'AL TOURI', children: <ListeRestaurants datas={data1} /> },
        { id: '8', label: 'ERIC KAZER', children: <ListeRestaurants datas={data2} />, },
    ];
    return (
        <div className="mt-4">
            <div className='flex mb-5'><ListTree className='mr-2' /><span className='text-gray-500'>Trier</span></div>
            <Tabs items={items} className="w-full">
                {(item) => (
                    <Tab key={item.id} title={item.label} children={item.children} />
                )}
            </Tabs>
        </div>
    )
}