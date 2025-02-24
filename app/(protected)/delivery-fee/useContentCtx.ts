'use client';
import { useState } from 'react';
import { DeliveryFee } from '@/types/delivery-fee.model';
import { useFormState } from 'react-dom';
import { changePassword, loginUser } from '@/src/actions/users.actions';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { createDeliveryFee, deleteDeliveryFee, updateDeliveryFee } from '@/src/actions/delivery-fee.action';

export interface DeliveryFeesViewModel {
    fees: DeliveryFee[];
    isLoading: boolean;
    error: string | null;
    selectedFee: DeliveryFee | null;
    createOrUpdateState: any;
    createOrUpdateFee: (payload: FormData) => void;
    deleteFee: (id: string) => Promise<void>;
    selectFee: (fee: DeliveryFee | null) => void;
}

export default function useContentCtx({ initialData }: { initialData: DeliveryFee[] }): DeliveryFeesViewModel {
    const router = useRouter();
    const [fees, setFees] = useState<DeliveryFee[]>(initialData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedFee, setSelectedFee] = useState<DeliveryFee | null>(null);

    const [createOrUpdateState, createOrUpdateFee, isCreatePending] = useFormState(
        async (_: any, data: FormData) => {
            setError(null);
            let result;
            if (selectedFee) {
                data.set('id', selectedFee.id);
                result = await updateDeliveryFee(data);
            } else {
                result = await createDeliveryFee(data);
            }

            if (result.status === 'success') {
                toast.success(result.message || 'Bravo ! vous avez réussi');
                router.refresh();
            } else {
                setError(result.message ?? 'Une erreur est survenue');
            }
            return _;
        },
        {
            zone: selectedFee?.zone || '',
            distanceDebut: selectedFee?.distanceDebut || 0,
            distanceFin: selectedFee?.distanceFin || 0,
            prix: selectedFee?.prix || 0,
        },
    );

    const deleteFee = async (id: string) => {
        setError(null);

        const result = await deleteDeliveryFee(id);

        if (result.status === 'success') {
            toast.success(result.message || 'Bravo ! vous avez réussi');
            router.refresh();
        } else {
            setError(result.message ?? 'Une erreur est survenue');
        }
        setIsLoading(false);
    };

    const selectFee = (fee: DeliveryFee | null) => {
        setSelectedFee(fee);
    };

    return {
        isLoading: isCreatePending || isLoading,
        error,
        fees,
        selectedFee,
        createOrUpdateState,
        createOrUpdateFee,
        deleteFee,
        selectFee,
    };
}
