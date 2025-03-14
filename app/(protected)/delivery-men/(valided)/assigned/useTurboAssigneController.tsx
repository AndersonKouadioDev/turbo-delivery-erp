'use client';

import useConfirm from '@/components/commons/use-confirm-dialog';
import { changerStatusLivreur } from '@/src/actions/delivery-men.actions';
import { PaginatedResponse } from '@/types';
import { LivreurStatutVM, Restaurant, TypeEnum } from '@/types/models';
import { useDisclosure } from '@heroui/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export function useTurboAssigneController(initialData: PaginatedResponse<LivreurStatutVM[]> | null, restaurants: Restaurant[] | null) {
    const [data, setData] = useState<PaginatedResponse<LivreurStatutVM[]> | null>(initialData);
    const confirm = useConfirm()
    const [selectValue, setSelectValue] = useState('');
    const [searchKey, setSearchKey] = useState('');
    const [livreur, setLivreur] = useState<LivreurStatutVM | undefined>({})
    const { isOpen, onOpen, onClose } = useDisclosure();


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
            const livreurRestaurant = restaurants?.find((item) => item.nomEtablissement === livreur.restaurantLibelle)
            if (!livreur) {
                toast.error("Veuillez choisir un statut")
                return false;
            }
            if (!livreurRestaurant) {
                toast.error("Restaurant non trouvé")
                return false;
            }
            try {
                const result = await changerStatusLivreur({
                    livreurId: livreur?.livreurId ?? "",
                    restaurantId: livreurRestaurant.id,
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

    return {
        data: data?.content,
        selectValue,
        setSelectValue,
        initialData,
        modifier,
        setSearchKey,
        searchKey,
        livreur,
        isOpen,
        onOpen,
        onClose,
        onConfirmStatut,
        confirm
    };
}
