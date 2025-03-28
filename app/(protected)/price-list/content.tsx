'use client';

import EmptyDataTable from '@/components/commons/EmptyDataTable';
import { RestaurantDefini } from '@/types/price-list';
import { Button, Tab, Tabs, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@heroui/react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import ViewTablePriceLiceDefined from './ViewTablePriceLiceDefined';
import { Search } from 'lucide-react';
import { useEffect } from 'react';
import { getAllDeliveryFee } from '@/src/actions/delivery-fee.action';
import { Restaurant } from '@/types/models';

interface Props {
    initialData: RestaurantDefini[];
}

export default function Content({ initialData }: Props) {
    
     
    const { columns, selectedKey, tabs, tabsRef, deliveryFees, renderCell, handleMoveScrool, handleChangeSelectedKey } = ViewTablePriceLiceDefined({ initialData });
    return (
        <div className="flex flex-col">
            <div className="relative flex items-center gap-4 border shadow rounded-xl py-1 px-1">
                <Button onPress={() => handleMoveScrool(-100)} variant="light" isIconOnly className="absolute left-2 z-[2] hidden sm:block">
                    <IconChevronLeft />
                </Button>
                <Tabs
                    variant="light"
                    ref={tabsRef}
                    items={tabs}
                    selectedKey={selectedKey}
                    onSelectionChange={(key) => handleChangeSelectedKey(key.toString())}
                    color="primary"
                    className="relative w-11/12 mx-auto rounded-md"
                >
                    {(item) => {
                        return <Tab key={item.id} title={item.nomComplet} />;
                    }}
                </Tabs>
                <Button onPress={() => handleMoveScrool(100)} variant="light" isIconOnly className="absolute right-2 z-[2] hidden sm:block">
                    <IconChevronRight />
                </Button>
            </div>
            {/* Tableau de frais de livraison */}
            <Table aria-label="Tableau de Frais de livraison">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn className={`${column.uid == 'zone' ? ' flex items-center gap-2' : ''}`} key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                           {column.uid==='zone'&&<Search /> } {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={deliveryFees ? deliveryFees : []} emptyContent={<EmptyDataTable title="Aucun Frais de Livraison" />}>
                    {(item) => <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
                </TableBody>
            </Table>
        </div>
    );
}