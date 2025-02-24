'use client';
import { FormEvent, useState } from 'react';
import { PlusCircle, Save } from 'lucide-react';
import { Card, CardBody, CardHeader, Input, Button, Divider } from '@heroui/react';
import { DeliveryFeeFormData, DeliveryFee } from '@/types/delivery-fee.model';

interface Props {
    onSubmit: (data: DeliveryFeeFormData) => Promise<void>;
    initialData?: DeliveryFee | null;
    isLoading: boolean;
}

export function DeliveryFeeForm({ onSubmit, initialData, isLoading }: Props) {
    const [formData, setFormData] = useState<DeliveryFeeFormData>({
        zone: initialData?.zone || '',
        distanceDebut: initialData?.distanceDebut || 0,
        distanceFin: initialData?.distanceFin || 0,
        prix: initialData?.prix || 0,
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await onSubmit(formData);
        if (!initialData) {
            setFormData({ zone: '', distanceDebut: 0, distanceFin: 0, prix: 0 });
        }
    };

    return (
        <Card>
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">{initialData ? 'Modifier la zone' : 'Nouvelle zone de livraison'}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input type="text" label="Zone" value={formData.zone} onChange={(e) => setFormData({ ...formData, zone: e.target.value })} variant="bordered" isRequired />

                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            type="number"
                            label="Distance début (km)"
                            value={formData.distanceDebut.toString()}
                            onChange={(e) => setFormData({ ...formData, distanceDebut: Number(e.target.value) })}
                            variant="bordered"
                            min={0}
                            step={0.1}
                            isRequired
                        />

                        <Input
                            type="number"
                            label="Distance fin (km)"
                            value={formData.distanceFin.toString()}
                            onChange={(e) => setFormData({ ...formData, distanceFin: Number(e.target.value) })}
                            variant="bordered"
                            min={0}
                            step={0.1}
                            isRequired
                        />
                    </div>

                    <Input
                        type="number"
                        label="Prix (€)"
                        value={formData.prix.toString()}
                        onChange={(e) => setFormData({ ...formData, prix: Number(e.target.value) })}
                        variant="bordered"
                        min={0}
                        step={0.01}
                        isRequired
                    />

                    <Button type="submit" color="primary" isLoading={isLoading} startContent={!isLoading && (initialData ? <Save size={20} /> : <PlusCircle size={20} />)}>
                        {isLoading ? 'Chargement...' : initialData ? 'Enregistrer' : 'Ajouter'}
                    </Button>
                </form>
            </CardBody>
        </Card>
    );
}
