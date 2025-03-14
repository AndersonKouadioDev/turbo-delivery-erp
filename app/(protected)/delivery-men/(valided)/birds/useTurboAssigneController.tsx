'use client';

import { PaginatedResponse } from '@/types';
import { LivreurStatutVM } from '@/types/models';
import { useDisclosure } from '@heroui/react';
import { useEffect, useState } from 'react';



export function useTurboysBirdController(initialData: PaginatedResponse<LivreurStatutVM[]> | null) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState<PaginatedResponse<LivreurStatutVM[]> | null>(initialData);
    const [searchKey, setSearchKey] = useState<string>("");
    const [livreur, setLivreur] = useState<LivreurStatutVM | undefined>({})


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
    return {
        data: data?.content,
        searchKey,
        setSearchKey,
        initialData,
        modifier,
        livreur,
        isOpen,
        onClose
    };
}
