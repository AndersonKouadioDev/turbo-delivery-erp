'use client';

import React from 'react';
import { Truck } from 'lucide-react';
import useContentCtx from './useContentCtx';
import { DeliveryFeeList } from './DeliveryFeeList';
import { DeliveryFeeForm } from './DeliveryFeeForm';
import { title } from '@/components/primitives';

export default function Content() {
    const vm = useContentCtx();

    return (
        <div className="w-full h-full pb-10 flex flex-1 flex-col gap-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-between">
                    <h1 className={title({ size: 'h3', class: 'text-primary' })}>Gestion des frais de livraison</h1>
                </div>

                {vm.error && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-sm text-red-600">{vm.error}</p>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <DeliveryFeeList fees={vm.fees} onEdit={vm.selectFee} onDelete={vm.deleteFee} isLoading={vm.isLoading} />
                    </div>

                    <div>
                        <DeliveryFeeForm onSubmit={vm.selectedFee ? (data) => vm.updateFee(vm.selectedFee?.id ?? '', data) : vm.createFee} initialData={vm.selectedFee} isLoading={vm.isLoading} />
                    </div>
                </div>
            </div>
        </div>
    );
}
