'use client';

import { getBonLivraisonAll } from '@/src/actions/bon-commande.action';
import { PaginatedResponse } from '@/types';
import { BonLivraison } from '@/types/bon-livraison.model';
import { Switch } from "@heroui/react";
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

export const columns = [
    { name: 'Référence', uid: 'reference' },
    { name: 'Date et Heure', uid: 'date' },
    { name: 'Livreur', uid: 'livreur' },
    { name: 'Restaurant', uid: 'restaurant' },
    { name: 'Coût livraison', uid: 'coutLivraison' },
    { name: 'Coût commande', uid: 'coutCommande' },
    { name: 'Terminé', uid: 'statut' },
];

interface Props {
    initialData: PaginatedResponse<BonLivraison> | null;
}

export default function useContentCtx({ initialData }: Props) {
    const [isLoading, setIsLoading] = useState(!initialData);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10);
    const [data, setData] = useState<PaginatedResponse<BonLivraison> | null>(initialData);

    // Fonction de récupération des données
    const fetchData = async (page: number) => {
        setCurrentPage(page);
        setIsLoading(true);
        try {
            const newData = await getBonLivraisonAll(page - 1, pageSize);
            setData(newData);
        } catch (error) {
            toast.error('Erreur lors de la récupération des données');
        } finally {
            setIsLoading(false);
        }
    };

    const renderCell = useCallback((bonLivraison: BonLivraison, columnKey: keyof BonLivraison) => {
        const cellValue = bonLivraison[columnKey];
        switch (columnKey) {
            case 'coutLivraison':
                return <p>{String(cellValue) + ' FCFA'}</p>;
            case 'coutCommande':
                return <p>{String(cellValue) + ' FCFA'}</p>;
            case 'statut':
                return cellValue == 'TERMINER' ? <Switch size="sm" color="primary" readOnly isSelected /> : <Switch size="sm" isSelected={false} readOnly />;
            default:
                return cellValue;
        }
    }, []);

    return {
        renderCell,
        columns,
        data,
        fetchData,
        currentPage,
        isLoading,
    };
}
