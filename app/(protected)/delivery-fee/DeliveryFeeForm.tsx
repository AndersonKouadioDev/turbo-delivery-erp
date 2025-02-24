'use client';
import { PlusCircle, Save } from 'lucide-react';
import { Card, CardBody, CardHeader, Input, Divider } from '@heroui/react';
import { SubmitButton } from '@/components/ui/form-ui/submit-button';

interface Props {
    onSubmit: (payload: FormData) => void;
    state: any;
    isEdit: boolean;
}

export function DeliveryFeeForm({ onSubmit, state, isEdit }: Props) {
    return (
        <Card>
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">{isEdit ? 'Modifier la zone' : 'Nouvelle zone de livraison'}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <form action={onSubmit} className="flex flex-col gap-4">
                    <Input type="text" label="Zone" variant="bordered" isRequired required errorMessage={state?.errors?.zone ?? ''} isInvalid={!!state?.errors?.zone} name="zone" radius="sm" />
                    <Input
                        type="number"
                        label="Distance début (km)"
                        variant="bordered"
                        min={0}
                        step={0.1}
                        isRequired
                        required
                        errorMessage={state?.errors?.distanceDebut ?? ''}
                        isInvalid={!!state?.errors?.distanceDebut}
                        name="distanceDebut"
                        radius="sm"
                    />

                    <Input
                        type="number"
                        label="Distance fin (km)"
                        variant="bordered"
                        min={0}
                        step={0.1}
                        isRequired
                        required
                        errorMessage={state?.errors?.distanceFin ?? ''}
                        isInvalid={!!state?.errors?.distanceFin}
                        name="distanceFin"
                        radius="sm"
                    />
                    <Input
                        type="number"
                        label="Prix (XOF)"
                        variant="bordered"
                        min={0}
                        step={0.1}
                        isRequired
                        required
                        errorMessage={state?.errors?.prix ?? ''}
                        isInvalid={!!state?.errors?.prix}
                        name="prix"
                        radius="sm"
                    />
                    <Input
                        type="number"
                        label="Commission (XOF)"
                        variant="bordered"
                        min={0}
                        step={0.1}
                        isRequired
                        required
                        errorMessage={state?.errors?.commission ?? ''}
                        isInvalid={!!state?.errors?.commission}
                        name="commission"
                        radius="sm"
                    />

                    <SubmitButton startContent={isEdit ? <Save size={20} /> : <PlusCircle size={20} />}>{isEdit ? 'Enregistrer' : 'Ajouter'}</SubmitButton>
                </form>
            </CardBody>
        </Card>
    );
}
