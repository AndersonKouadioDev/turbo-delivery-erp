'use client';

import { getPriceListByRestaurant } from '@/src/price-list/price-list.action';
import { PaginatedResponse } from '@/types';
import { DeliveryFee, RestaurantDefini } from '@/types/price-list';
import { Tooltip } from '@heroui/react';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
    initialData: RestaurantDefini[];
}
export const columns = [
    { name: 'Zone', uid: 'zone' },
    { name: 'Distance', uid: 'distance' },
    { name: 'Coût de livraison', uid: 'prix' },
    { name: 'Commission', uid: 'commission' },
    { name: 'Action', uid: 'actions' },
];

export default function useContent({ initialData }: Props) {
    const tabs = initialData.map((resto) => ({ id: resto.id, nomComplet: resto.nomEtablissement }));

    const tabsRef = useRef<HTMLDivElement>(null);
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

    return {
        columns,
        selectedKey,
        tabs,
        tabsRef,
        deliveryFees,
        handleMoveScrool,
        handleFetchDeliveryFee,
        handleChangeSelectedKey,
        renderCell,
    };
}
