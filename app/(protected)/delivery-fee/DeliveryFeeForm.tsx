'use client';
import { PlusCircle, Save } from 'lucide-react';
import { Card, CardBody, CardHeader, Input, Divider } from '@heroui/react';
import { SubmitButton } from '@/components/ui/form-ui/submit-button';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { _deliveryFeeCreateSchema, _deliveryFeeUpdateSchema, deliveryFeeCreateSchema } from '@/src/schemas/delivery-fee.shema';
import { DeliveryFee } from '@/types/delivery-fee.model';
import { useCallback, useState } from 'react';

import { autocomplete, placeDetails } from '@/lib/googlemaps-server';
import { PlaceAutocompleteResult } from '@googlemaps/google-maps-services-js';

interface Props {
    onSubmit: (payload: _deliveryFeeUpdateSchema) => void;
    select: DeliveryFee | null;
}

export function DeliveryFeeForm({ onSubmit, select }: Props) {
    const [suggestions, setSuggestions] = useState<PlaceAutocompleteResult[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleInputChange = useCallback(async (value: string) => {
        if (value.length > 2 && !loading) {
            try {
                const result = await autocomplete(value);
                setSuggestions(result);
            } catch (error) {
                console.error('Error fetching autocomplete suggestions:', error);
            }
        } else {
            setSuggestions([]);
        }
    }, []);

    const {
        formState: { errors },
        control,
        getValues,
        setValue,
    } = useForm<_deliveryFeeCreateSchema>({
        resolver: zodResolver(deliveryFeeCreateSchema),
        defaultValues: {
            restaurantId: select?.restaurantId || '',
            zone: select?.zone || '',
            longitude: select?.longitude || 0,
            latitude: select?.latitude || 0,
            distanceDebut: select?.distanceDebut || 0,
            distanceFin: select?.distanceFin || 0,
            prix: select?.prix || 0,
            commission: select?.commission || 0,
        },
    });

    const handleSuggestionClick = async (suggestion: PlaceAutocompleteResult) => {
        setLoading(true);
        setValue('zone', suggestion.description, { shouldValidate: true });
        setSuggestions([]);
        try {
            const details = await placeDetails(suggestion.place_id);
            setValue('longitude', details.result.geometry?.location.lng ?? 0, { shouldValidate: true });
            setValue('latitude', details.result.geometry?.location.lat ?? 0, { shouldValidate: true });
        } catch (error) {
            console.error('Error fetching place details:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card>
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">{select ? 'Modifier la zone' : 'Nouvelle zone de livraison'}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        onSubmit(getValues());
                    }}
                    className="flex flex-col gap-4"
                >
                    <Controller
                        control={control}
                        name="zone"
                        render={({ field }) => (
                            <div className="relative">
                                <Input
                                    {...field}
                                    isRequired
                                    aria-invalid={errors.zone ? 'true' : 'false'}
                                    aria-label="zone input"
                                    errorMessage={errors.zone?.message ?? ''}
                                    isInvalid={!!errors.zone}
                                    label="Zone"
                                    name="zone"
                                    placeholder="Entrez une adresse"
                                    type="text"
                                    value={field.value || ''}
                                    onValueChange={handleInputChange}
                                    variant="bordered"
                                    radius="sm"
                                />
                                {!loading && suggestions && suggestions.length > 0 && (
                                    <ul className="absolute z-50 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
                                        {suggestions.map((suggestion) => (
                                            <li key={suggestion.place_id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSuggestionClick(suggestion)}>
                                                {suggestion.description}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
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
