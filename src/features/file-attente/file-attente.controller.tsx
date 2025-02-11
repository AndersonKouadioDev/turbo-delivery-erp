'use client';

import { fetchFilleAttente } from '@/src/actions/file-attente.actions';
import { FilleAttenteHistoriqueVM, FilleAttenteVM } from '@/types/file-attente.model';
import { useEffect, useState } from 'react';

export function useFileAttenteController() {
    const [fileAttentes, setFileAttentes] = useState<FilleAttenteHistoriqueVM[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchFileAttentes = async () => {
        try {
            setIsLoading(true);
            const result = await fetchFilleAttente();
            setFileAttentes(result);
        } catch (error) {
            console.error('Error fetching file attentes:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchFileAttentes();
    }, []);

    return {
        fileAttentes,
        isLoading,
        refreshData: fetchFileAttentes,
    };
}
