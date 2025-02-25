'use client';
import { useState } from 'react';
import { DeliveryFee } from '@/types/delivery-fee.model';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { createDeliveryFee, deleteDeliveryFee, updateDeliveryFee } from '@/src/actions/delivery-fee.action';
import { _deliveryFeeUpdateSchema } from '@/src/schemas/delivery-fee.shema';

export interface DeliveryFeesViewModel {
    fees: DeliveryFee[];
    isLoading: boolean;
    error: string | null;
    selectedFee: DeliveryFee | null;
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

    const [state, createOrUpdateFee, isCreatePending] = useFormState(
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
            data: null,
            message: '',
            errors: {},
            status: 'idle',
            code: undefined,
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
        createOrUpdateFee,
        deleteFee,
        selectFee,
    };
}
