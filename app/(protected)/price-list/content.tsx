'use client';

import EmptyDataTable from '@/components/commons/EmptyDataTable';
import { getPriceListByRestaurant } from '@/src/price-list/price-list.action';
import { PaginatedResponse } from '@/types';
import { DeliveryFee, RestaurantDefini } from '@/types/price-list';
import { Button, Tab, Tabs, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Tooltip } from '@heroui/react';
import { IconChevronLeft, IconChevronRight, IconEdit, IconTrash } from '@tabler/icons-react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
    initialData: RestaurantDefini[];
}
export const mockDeliveryFees: DeliveryFee[] = [
    {
        id: 'DF001',
        zone: 'Paris Centre',
        restaurantId: '1',
        longitude: 2.3522,
        latitude: 48.8566,
        distanceDebut: 0,
        distanceFin: 5,
        prix: 1500,
        commission: 10,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: 'DF002',
        zone: 'Madrid Centre',
        restaurantId: '2',
        longitude: -3.7038,
        latitude: 40.4168,
        distanceDebut: 0,
        distanceFin: 8,
        prix: 1200,
        commission: 8,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: 'DF003',
        zone: 'New York Downtown',
        restaurantId: '3',
        longitude: -74.006,
        latitude: 40.7128,
        distanceDebut: 0,
        distanceFin: 10,
        prix: 2000,
        commission: 12,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: 'DF004',
        zone: 'Berlin Mitte',
        restaurantId: '4',
        longitude: 13.405,
        latitude: 52.52,
        distanceDebut: 0,
        distanceFin: 7,
        prix: 1800,
        commission: 9,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: 'DF005',
        zone: 'Londres Central',
        restaurantId: '5',
        longitude: -0.1278,
        latitude: 51.5074,
        distanceDebut: 0,
        distanceFin: 6,
        prix: 1600,
        commission: 10,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: 'DF006',
        zone: 'Sydney CBD',
        restaurantId: '6',
        longitude: 151.2093,
        latitude: -33.8688,
        distanceDebut: 0,
        distanceFin: 9,
        prix: 2200,
        commission: 11,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: 'DF007',
        zone: 'Moscou Centre',
        restaurantId: '7',
        longitude: 37.6173,
        latitude: 55.7558,
        distanceDebut: 0,
        distanceFin: 12,
        prix: 2500,
        commission: 13,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: 'DF008',
        zone: 'Mexico City',
        restaurantId: '8',
        longitude: -99.1332,
        latitude: 19.4326,
        distanceDebut: 0,
        distanceFin: 15,
        prix: 1700,
        commission: 7,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: 'DF009',
        zone: 'Tokyo Central',
        restaurantId: '9',
        longitude: 139.6917,
        latitude: 35.6895,
        distanceDebut: 0,
        distanceFin: 8,
        prix: 1900,
        commission: 9,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: 'DF010',
        zone: 'Rome Historique',
        restaurantId: '10',
        longitude: 12.4964,
        latitude: 41.9028,
        distanceDebut: 0,
        distanceFin: 5,
        prix: 1300,
        commission: 6,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];

export const columns = [
    { name: 'Zone', uid: 'zone' },
    { name: 'Distance', uid: 'distance' },
    { name: 'Coût de livraison', uid: 'prix' },
    { name: 'Commission', uid: 'commission' },
    { name: 'Action', uid: 'actions' },
];

export default function Content({ initialData }: Props) {
    const tabs = initialData.map((resto) => ({ id: resto.id, nomComplet: resto.nomEtablissement }));

    const tabsRef = useRef<HTMLDivElement>(null);
    const maxWidth = tabsRef.current?.clientWidth;
    const [deliveryFees, setDeliveryFees] = useState<PaginatedResponse<DeliveryFee> | null>(null);
    const [selectedKey, setSelectedKey] = useState<string | null>(initialData.length !== 0 ? initialData[0].id : null);

    const handleChangeSelectedKey = (key: string) => {
        setSelectedKey(key);
        // Passer ID du restaurant dans url
    };
    const handleMoveScrool = (value: 100 | -100) => {
        tabsRef?.current?.scrollTo({
            left: tabsRef?.current?.scrollLeft + value,
            behavior: 'smooth',
        });
    };

    const handleFetchDeliveryFee = async (restaurantId: string) => {
        // Requete Server Action
        // const data = mockDeliveryFees.filter((delievryFee) => delievryFee.restaurantId == restaurantId);
        const data = await getPriceListByRestaurant(restaurantId, 1, 10);
        setDeliveryFees(data);
    };

    useEffect(() => {
        if (selectedKey) {
            handleFetchDeliveryFee(selectedKey);
        }
    }, [selectedKey]);

    const renderCell = useCallback((delieveryFee: DeliveryFee, columnKey: any) => {
        switch (columnKey) {
            case 'zone':
                return <span>{delieveryFee.zone}</span>;
            case 'distance':
                return (
                    <span>
                        {delieveryFee.distanceDebut}-{delieveryFee.distanceFin} Km
                    </span>
                );
            case 'prix':
                return <span>{delieveryFee.prix} (XOF)</span>;
            case 'commission':
                return <span>{delieveryFee.commission} (XOF)</span>;
            case 'actions':
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Edit user">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <IconEdit />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Delete user">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <IconTrash />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return <></>;
        }
    }, []);

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
