'use client';

import EmptyDataTable from '@/components/commons/EmptyDataTable';
import { RestaurantDefini } from '@/types/price-list';
import { Button, Tab, Tabs, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@heroui/react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import useContent from './useContent';

interface Props {
    initialData: RestaurantDefini[];
}

export default function Content() {
    const { columns, selectedKey, tabs, tabsRef, deliveryFees,isLoading, renderCell, handleMoveScrool, handleChangeSelectedKey } = useContent();

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
            {isLoading && <div className="flex justify-center items-center h-96">Chargement...</div>}
            {/* Tableau de frais de livraison */}
            <Table aria-label="Tableau de Frais de livraison">
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn className={`${column.uid == 'zone' ? 'w-56' : ''}`} key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={deliveryFees ? deliveryFees?.content : []} emptyContent={<EmptyDataTable title="Aucun Frais de Livraison" />}>
                    {(item) => <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>}
                </TableBody>
            </Table>
        </div>
    );
}
