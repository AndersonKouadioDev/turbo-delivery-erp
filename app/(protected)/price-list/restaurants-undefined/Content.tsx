'use client';

import EmptyDataTable from '@/components/commons/EmptyDataTable';
import { DeliveryFee, RestaurantDefini } from '@/types/price-list';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Tooltip } from '@heroui/react';
import { useRef, useState } from 'react';
import useContent from './useContent';
import { Search } from 'lucide-react';

interface Props {
    initialData: RestaurantDefini[];
}
  

export const columns = [
    { name: 'Nom du restaurent', uid: 'nomEtablissement' },
    { name: 'Type de commission', uid: 'typeCommission' },
];

export default function Content({ initialData }: Props) {
    const [initialDataPriceList,setInitialDataPriceList] = useState<DeliveryFee[]>([])
  

    const {undefinedRestaurant,renderCell}=useContent({initialData})

    return (
        <div className="flex flex-col">
            <Table aria-label="Tableau de Frais de livraison">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn className={`${column.uid == 'nomEtablissement' ? 'flex items-center gap-2' : ''}`} key={column.uid}>
                         {column.uid==='nomEtablissement'&&<Search /> }   {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={undefinedRestaurant ? undefinedRestaurant: []} emptyContent={<EmptyDataTable title="Aucun Frais de Livraison" />}>
                                    {(item) => <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
                                </TableBody>
                {/* <TableBody emptyContent={<EmptyDataTable title="Aucun Frais de Livraison" />}>{[]}</TableBody> */}
            </Table>
        </div>
    );
}
