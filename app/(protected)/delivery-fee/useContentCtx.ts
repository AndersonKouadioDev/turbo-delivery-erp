'use client';
import { useState } from 'react';
import { DeliveryFee, DeliveryFeeFormData, DeliveryFeesViewModel } from '@/types/delivery-fee.model';

export default function useContentCtx(): DeliveryFeesViewModel {
    const [fees, setFees] = useState<DeliveryFee[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedFee, setSelectedFee] = useState<DeliveryFee | null>(null);

    const createFee = async (data: DeliveryFeeFormData) => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch('/api/erp/frais-livraison', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error('Erreur lors de la création');
            const newFee = await response.json();
            setFees([...fees, newFee]);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        } finally {
            setIsLoading(false);
        }
    };

    const updateFee = async (id: string, data: DeliveryFeeFormData) => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch(`/api/erp/frais-livraison/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error('Erreur lors de la mise à jour');
            const updatedFee = await response.json();
            setFees(fees.map((fee) => (fee.id === id ? updatedFee : fee)));
            setSelectedFee(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        } finally {
            setIsLoading(false);
        }
    };

    const deleteFee = async (id: string) => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch(`/api/erp/frais-livraison/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Erreur lors de la suppression');
            setFees(fees.filter((fee) => fee.id !== id));
            if (selectedFee?.id === id) setSelectedFee(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        } finally {
            setIsLoading(false);
        }
    };

    const selectFee = (fee: DeliveryFee | null) => {
        setSelectedFee(fee);
    };

    return {
        fees,
        isLoading,
        error,
        selectedFee,
        createFee,
        updateFee,
        deleteFee,
        selectFee,
    };
}
