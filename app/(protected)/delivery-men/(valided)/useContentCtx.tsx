'use client';

import { SelectField } from '@/components/commons/select-field';
import { getToutLivreurStatus } from '@/src/actions/delivery-men.actions';
import { PaginatedResponse } from '@/types';
import { LivreurStatutVM, Restaurant } from '@/types/models';
import { Chip, Select, SelectItem } from '@heroui/react';
import { Key, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const columns = [
    { name: 'Prénoms & Nom', uid: 'nomPrenom' },
    { name: 'Téléphone', uid: 'telephone' },
    { name: 'État du compte', uid: 'status' },
    { name: 'Identification du livreur', uid: 'type' },
    { name: 'Propriétaire', uid: 'patenaire' },
    { name: 'Identification final du livreur', uid: 'identificationFinal' },
]

export const options = [
    { key: 'libre', label: 'Libre, identifier-le' },
    { key: 'utilise-partout', label: 'Utilisé partout' },
    { key: 'restaurant-agha', label: 'Restaurant AGAHA' },
];

interface IRestaurant {
    id?: string;
    key?: string;
    libelle?: string;
}
interface Props {
    initialData: PaginatedResponse<LivreurStatutVM[]> | null;
    restaurants: Restaurant[] | null
}

export default function useContentCtx({ initialData, restaurants }: Props) {
    const [isLoading, setIsLoading] = useState(!initialData);
    const [searchKey, setSearchKey] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10);
    const [data, setData] = useState<PaginatedResponse<LivreurStatutVM[]> | null>(initialData);

    


    useEffect(() => {
        if (searchKey && initialData && initialData.content) {
            const data = (initialData.content || []).filter((item: any) =>
                item.nomPrenom?.toLowerCase().includes(searchKey?.toLowerCase()));
            setData({ ...initialData, content: data });
        } else {
            setData(initialData);
        }
    }, [searchKey]);


    // Fonction de récupération des données
    const fetchData = async (page: number) => {
        setCurrentPage(page);
        setIsLoading(true);
        try {
            const newData = await getToutLivreurStatus(page - 1, pageSize);
            newData && setData(newData);
        } catch (error: any) {
            toast.error(error.message || 'Erreur lors de la récupération des données');
        } finally {
            setIsLoading(false);
        }
    };

    const getInitials = (nomPrenom?: string) => {
        return nomPrenom?.charAt(0).toUpperCase();
    };

    const getColorFromInitial = (initial: string) => {
        const colors = [
            "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF3",
            "#FFC733", "#FF5733", "#75FF33", "#FF3385", "#33A1FF", "#F333FF"
        ];
        const index = initial.charCodeAt(0) % colors.length;
        return colors[index];
    };
    const renderCell = useCallback((livreur: LivreurStatutVM | null, columnKey?: Key) => {
        const cellValue = livreur && livreur[columnKey as keyof LivreurStatutVM];
        const initial = livreur && getInitials(livreur.nomPrenom);
        const bgColor = getColorFromInitial(initial ?? "");

        switch (columnKey) {
            case 'nomPrenom':
                return (
                    <div className="flex items-center gap-4">
                        <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-md"
                            style={{ backgroundColor: bgColor }}
                        >
                            {initial}
                        </div>
                        <div className="font-medium capitalize">
                            {livreur?.nomPrenom}
                        </div>
                    </div>
                );
            case 'status':
                return (
                    <Chip size="sm" color={cellValue == 4 ? 'success' : 'default'}>
                        {cellValue == 4 ? 'Validé' : 'Inconnu'}
                    </Chip>
                );
            case 'type':
                return (
                    <Chip size="sm" color={cellValue == 'TURBOYS' ? 'warning' : 'secondary'}>
                        {cellValue == 'TURBOYS' ? 'TURBOYS' : 'BIRD'}
                    </Chip>
                );
            case 'patenaire':
                return (
                    <div className="font-medium capitalize">
                        <SelectField options={restaurants || []} selectValue={livreur?.restaurantLibelle ?? ""} setSelectValue={setSelectValue}
                            label='nomEtablissement' />

                    </div>
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
        searchKey,
        setSearchKey,
    };
}
