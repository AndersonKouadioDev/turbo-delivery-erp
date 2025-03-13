'use client';

import React from 'react';
import useContentCtx from './useContentCtx';
import { DeliveryFeeList } from './DeliveryFeeList';
import { DeliveryFeeForm } from './DeliveryFeeForm';
import { title } from '@/components/primitives';
import { DeliveryFee } from '@/types/delivery-fee.model';

export default function Content({ initialData }: { initialData: DeliveryFee[] }) {
    const { fees, selectFee, selectedFee, createOrUpdateFee, deleteFee, error, isLoading } = useContentCtx({ initialData });

    return (
        <div className="w-full h-full pb-10 flex flex-1 flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className={title({ size: 'h3', class: 'text-primary' })}>Gestion des frais de livraison</h1>
            </div>

            {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-sm text-primary">{error}</p>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <DeliveryFeeList fees={fees} onEdit={selectFee} onDelete={deleteFee} isLoading={isLoading} />
                </div>

                <div>
                    <DeliveryFeeForm onSubmit={createOrUpdateFee} select={selectedFee} />
                </div>
            </div>
        </div>
    );
}
