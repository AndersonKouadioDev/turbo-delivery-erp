'use client';

import DeliveryMenTools from '@/components/dashboard/delivery-men/delivery-men-tools';
import { getDeliveryMen } from '@/src/actions/delivery-men.actions';
import { PaginatedResponse } from '@/types';
import { DeliveryMan } from '@/types/models';
import createUrlFile from '@/utils/createUrlFile';
import { Avatar, Chip, Select, SelectItem } from '@heroui/react';
import { Key, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

export const columns = [
    { name: 'Matricule', uid: 'matricule' },
    { name: 'Prénoms & Nom', uid: 'nom' },
    { name: 'Téléphone', uid: 'telephone' },
    { name: 'État du compte', uid: 'status' },
    { name: 'Identification du livreur', uid: 'category' },
    { name: 'Propriétaire', uid: 'owner' },
    { name: 'Actions', uid: 'actions' },
];

export const options = [
    { key: 'libre', label: 'Libre, identifier-le' },
    { key: 'utilise-partout', label: 'Utilisé partout' },
    { key: 'restaurant-agha', label: 'Restaurant AGAHA' },
];

interface Props {
    initialData: PaginatedResponse<DeliveryMan> | null;
}

export default function useContentCtx({ initialData }: Props) {
    const [isLoading, setIsLoading] = useState(!initialData);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10);
    const [data, setData] = useState<PaginatedResponse<DeliveryMan> | null>(initialData);

    // Fonction de récupération des données
    const fetchData = async (page: number) => {
        setCurrentPage(page);
        setIsLoading(true);
        try {
            const newData = await getDeliveryMen(page - 1, pageSize);
            setData(newData);
        } catch (error) {
            toast.error('Erreur lors de la récupération des données');
        } finally {
            setIsLoading(false);
        }
    };

    const renderCell = useCallback((livreur: DeliveryMan, columnKey: Key) => {
        const cellValue = livreur[columnKey as keyof DeliveryMan];

        switch (columnKey) {
            case 'nom':
                return (
                    <div className="flex items-center gap-4">
                        <Avatar src={createUrlFile(livreur?.avatarUrl ?? '', 'delivery')} />
                        <div className="font-medium capitalize">
                            {livreur.prenoms} {livreur.nom}
                        </div>
                    </div>
                );
            case 'status':
                return (
                    <Chip size="sm" color={cellValue == 4 ? 'success' : 'default'}>
                        {cellValue == 4 ? 'Validé' : 'Inconnu'}
                    </Chip>
                );
            case 'category':
                return (
                    <Chip size="sm" color={cellValue == 'TURBOYS' ? 'warning' : 'secondary'}>
                        {cellValue == 'TURBOYS' ? 'TURBOYS' : 'BIRD'}
                    </Chip>
                );
            case 'actions':
                return <DeliveryMenTools deliveryMan={livreur} validateBy="no-body" />;
            case 'owner':
                return (
                    <Select className="max-w-xs" items={options} defaultSelectedKeys={['libre']}>
                        {(option) => <SelectItem>{option.label}</SelectItem>}
                    </Select>
                );
            default:
                return cellValue;
        }
    }, []);

    const renderCols = useCallback((column: { name: string; uid: string }) => {
        return <div className="flex gap-2 text-primary">{column.name}</div>;
    }, []);

    return {
        renderCell,
        renderCols,
        columns,
        data,
        fetchData,
        currentPage,
        isLoading,
    };
}
