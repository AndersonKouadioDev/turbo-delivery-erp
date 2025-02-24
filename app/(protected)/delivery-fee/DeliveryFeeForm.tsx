'use client';
import { PlusCircle, Save } from 'lucide-react';
import { Card, CardBody, CardHeader, Input, Divider } from '@heroui/react';
import { SubmitButton } from '@/components/ui/form-ui/submit-button';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { _deliveryFeeCreateSchema, deliveryFeeCreateSchema } from '@/src/schemas/delivery-fee.shema';
import { DeliveryFee } from '@/types/delivery-fee.model';

interface Props {
    onSubmit: (payload: FormData) => void;
    select: DeliveryFee | null;
}

export function DeliveryFeeForm({ onSubmit, select }: Props) {
    const {
        formState: { errors },
        control,
    } = useForm<_deliveryFeeCreateSchema>({
        resolver: zodResolver(deliveryFeeCreateSchema),
        defaultValues: {
            zone: select?.zone || '',
            distanceDebut: select?.distanceDebut || 0,
            distanceFin: select?.distanceFin || 0,
            prix: select?.prix || 0,
            commission: select?.commission || 0,
        },
    });

    return (
        <Card>
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">{select ? 'Modifier la zone' : 'Nouvelle zone de livraison'}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <form action={onSubmit} className="flex flex-col gap-4">
                    <Controller
                        control={control}
                        name="zone"
                        render={({ field }) => (
                            <Input
                                {...field}
                                value={field.value ?? ''}
                                type="text"
                                label="Zone"
                                variant="bordered"
                                isRequired
                                required
                                aria-invalid={errors.zone ? 'true' : 'false'}
                                aria-label="zone input"
                                errorMessage={errors.zone?.message ?? ''}
                                isInvalid={!!errors.zone}
                                name="zone"
                                radius="sm"
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="distanceDebut"
                        render={({ field }) => (
                            <Input
                                {...field}
                                value={field.value.toString() ?? ''}
                                type="number"
                                label="Distance début (km)"
                                variant="bordered"
                                isRequired
                                required
                                aria-invalid={errors.distanceDebut ? 'true' : 'false'}
                                aria-label="distanceDebut input"
                                errorMessage={errors.distanceDebut?.message ?? ''}
                                isInvalid={!!errors.distanceDebut}
                                name="distanceDebut"
                                radius="sm"
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="distanceFin"
                        render={({ field }) => (
                            <Input
                                {...field}
                                value={field.value.toString() ?? ''}
                                type="number"
                                label="Distance fin (km)"
                                variant="bordered"
                                isRequired
                                required
                                aria-invalid={errors.distanceFin ? 'true' : 'false'}
                                aria-label="distanceFin input"
                                errorMessage={errors.distanceFin?.message ?? ''}
                                isInvalid={!!errors.distanceFin}
                                name="distanceFin"
                                radius="sm"
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="prix"
                        render={({ field }) => (
                            <Input
                                {...field}
                                value={field.value.toString() ?? ''}
                                type="number"
                                label="Prix (XOF)"
                                variant="bordered"
                                isRequired
                                required
                                aria-invalid={errors.prix ? 'true' : 'false'}
                                aria-label="prix input"
                                errorMessage={errors.prix?.message ?? ''}
                                isInvalid={!!errors.prix}
                                name="prix"
                                radius="sm"
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="commission"
                        render={({ field }) => (
                            <Input
                                {...field}
                                value={field.value.toString() ?? ''}
                                type="number"
                                label="Commission (XOF)"
                                variant="bordered"
                                isRequired
                                required
                                aria-invalid={errors.commission ? 'true' : 'false'}
                                aria-label="commission input"
                                errorMessage={errors.commission?.message ?? ''}
                                isInvalid={!!errors.commission}
                                name="commission"
                                radius="sm"
                            />
                        )}
                    />
                    <SubmitButton startContent={select ? <Save size={20} /> : <PlusCircle size={20} />}>{select ? 'Enregistrer' : 'Ajouter'}</SubmitButton>
                </form>
            </CardBody>
        </Card>
    );
}
