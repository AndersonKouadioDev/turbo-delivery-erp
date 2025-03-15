'use client';

import useConfirm from '@/components/commons/use-confirm-dialog';
import { changerStatusLivreur, getToutLivreurStatusNonAssigners } from '@/src/actions/delivery-men.actions';
import { PaginatedResponse } from '@/types';
import { LivreurStatutVM } from '@/types/models';
import { useDisclosure } from '@heroui/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export function useTurboysBirdController(initialData: PaginatedResponse<LivreurStatutVM[]> | null) {
    const confirm = useConfirm()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState<PaginatedResponse<LivreurStatutVM[]> | null>(initialData);
    const [searchKey, setSearchKey] = useState<string>("");
    const [livreur, setLivreur] = useState<LivreurStatutVM | undefined>({});
    const [pageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if (searchKey && initialData && initialData.content) {
            const data = (initialData.content || []).filter((item: any) =>
                item.nomPrenom?.toLowerCase().includes(searchKey?.toLowerCase()));
            setData({ ...initialData, content: data });
        } else {
            setData(initialData);
        }
    }, [searchKey]);


    const modifier = (livreur: LivreurStatutVM) => {
        setLivreur(livreur);
        onOpen()
    }

    const onConfirmStatut = (livreur: LivreurStatutVM, typeLivreur: any) => {
        const confirmAndSend = async () => {
            if (!livreur) {
                toast.error("Veuillez choisir un statut")
                return false;
            }
            try {
                const result = await changerStatusLivreur({
                    livreurId: livreur?.livreurId ?? "",
                    restaurantId: "",
                    typeLivreur: typeLivreur
                })
                if (result.status === "success") {
                    toast.success(result.message);
                } else {
                    toast.error(result.message);
                }
            } catch (error) {
                toast.error("Une erreur s'est produite")
            }
        }
        confirm.openConfirmDialog(confirmAndSend);
    }

    const fetchData = async (page: number) => {
        setCurrentPage(page);
        setIsLoading(true);
        try {
            const newData = await getToutLivreurStatusNonAssigners(page - 1, pageSize);
            newData && setData(newData);
        } catch (error: any) {
            toast.error(error.message || 'Erreur lors de la récupération des données');
        } finally {
            setIsLoading(false);
        }
    };
    return {
        data,
        searchKey,
        setSearchKey,
        initialData,
        modifier,
        livreur,
        isOpen,
        onClose,
        onConfirmStatut,
        confirm,
        fetchData,
        currentPage,
        pageSize,
        isLoading,
    };
}
