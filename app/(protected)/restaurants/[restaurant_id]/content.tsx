'use client';
import { ArrowLeft } from 'lucide-react';

import Image from 'next/image';
import { Button, Card, CardBody, CardHeader, Input, Select, SelectItem, Textarea } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { Restaurant } from '@/types/models';
import createUrlFile from '@/utils/createUrlFile';
import { formatTime } from '@/lib/date';
import { toast } from 'react-toastify';
import { updateCommission } from '@/src/restaurants/restaurants.actions';
import { useCallback, useState } from 'react';


export type CommissionType = 'FIXE' | 'POURCENTAGE';


export default function Content({ restaurant }: { restaurant: Restaurant }) {
  const router = useRouter();

  const dayOrder = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'];
  const sortedHours = [...restaurant.openingHours].sort((a, b) => dayOrder.indexOf(a.dayOfWeek) - dayOrder.indexOf(b.dayOfWeek));


  const [type, setType] = useState<CommissionType>('FIXE');
  const [isLoading, setIsLoading] = useState(false);

  // Met à jour l'état lors du changement de sélection
  const handleTypeChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as CommissionType);
  }, []);

  // Soumet la commission choisie
  const handleSubmit = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await updateCommission({
        body: {
          restoId: restaurant.id,
          type,
          commission: 0,
        },
      });

      if (res.status === 'success') {
        toast.success('Bravo, votre action a été prise en compte');
      } else {
        toast.error(
          `Désolé, votre action n’a pas été prise en compte`
        );
      }
    } catch (error) {
      console.error(error);
      toast.error('Une erreur est survenue, veuillez réessayer');
    } finally {
      setIsLoading(false);
    }
  }, [restaurant, type]);

  console.log("restaurant", restaurant)
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div onClick={() => router.back()} className="text-gray-600 dark:text-white hover:text-primary cursor-pointer">
              <ArrowLeft className="h-6 w-6" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white capitalize">{restaurant?.nomEtablissement}</h1>
          </div>
          {/* <div className="flex gap-4">
                        <Button variant="outline">Créer un partenaire</Button>
                        <Button variant="outline">Modifier</Button>
                    </div> */}
        </div>
      </header>

      <main className="container mx-auto lg:px-4 py-8">
        <div>
          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image src={createUrlFile(restaurant.pictures[0]?.pictureUrl ?? '', 'restaurant')} alt="Restaurant cover" className="object-cover" fill />
            <div className="absolute left-8 bottom-8 bg-white p-2 rounded-lg">
              <Image src={createUrlFile(restaurant.logo_Url ?? '', 'restaurant')} alt="Restaurant logo" width={80} height={80} className="rounded" />
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-red-600 mb-6">Informations Générales</h2>
              </CardHeader>
              <CardBody className="md:grid grid-cols-2 gap-6">
                <Input label="Nom de l'établissement" labelPlacement="outside" value={restaurant?.nomEtablissement ?? ''} placeholder={restaurant?.nomEtablissement ?? ''} variant="bordered" />
                <Input label="Email" type="email" labelPlacement="outside" value={restaurant?.email ?? ''} placeholder={restaurant?.email ?? ''} variant="bordered" />
                <Input label="Localisation" labelPlacement="outside" value={restaurant?.localisation ?? ''} placeholder={restaurant?.localisation ?? ''} variant="bordered" />
                <Input label="Téléphone" labelPlacement="outside" value={restaurant?.telephone ?? ''} placeholder={restaurant?.telephone ?? ''} variant="bordered" />
                <Input label="Commune" labelPlacement="outside" value={restaurant?.commune ?? ''} placeholder={restaurant?.commune ?? ''} variant="bordered" />
                <Input label="Code Postal" labelPlacement="outside" value={restaurant?.codePostal ?? ''} placeholder={restaurant?.codePostal ?? ''} variant="bordered" />
                <Select label="Type d'entreprise" defaultSelectedKeys={['restaurant']} labelPlacement="outside" variant="bordered">
                  <SelectItem key="restaurant" value="restaurant">
                    Restaurant
                  </SelectItem>
                  <SelectItem key="cafe" value="cafe">
                    Café
                  </SelectItem>
                  <SelectItem key="bar" value="bar">
                    Bar
                  </SelectItem>
                </Select>
                <Input label="Site web (si disponible)" labelPlacement="outside" value={restaurant?.siteWeb ?? ''} placeholder={restaurant?.siteWeb ?? 'https://www.site.com'} variant="bordered" />

                <div className="col-span-2">
                  <Textarea label="Description" labelPlacement="outside" value={restaurant?.description ?? ''} placeholder={restaurant?.description ?? ''} variant="bordered" />
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-red-600 mb-6">Type de commission</h2>
              </CardHeader>

              <CardBody >

                <div className='flex gap-16 items-center'>
                  <Select
                    className='max-w-lg'
                    id="commission-type-select"
                    label="Choisissez le type de commission"
                    defaultSelectedKeys={[type]}
                    labelPlacement="outside"
                    variant="bordered"
                    isDisabled={isLoading}
                    onChange={handleTypeChange}
                  >

                    <SelectItem key="FIXE" value="FIXE">
                      Fixe
                    </SelectItem>
                    <SelectItem key="POURCENTAGE" value="POURCENTAGE">
                      Pourcentage
                    </SelectItem>
                  </Select>

                  <Button
                    onClick={handleSubmit}
                    isLoading={isLoading}
                    disabled={isLoading}
                    className="mt-4"
                  >
                    Valider mon choix
                  </Button>

                </div>

              </CardBody>



              {/* <CardBody>
                <Select
                  label="Choissez le type de commisison"
                  defaultSelectedKeys={[restaurant.typeCommission]}
                  labelPlacement="outside"
                  variant="bordered"
                  onChange={async (e) => {
                    const type = e.target.value as 'POURCENTAGE' | 'FIXE';
                    const res = await updateCommission({
                      body: {
                        restoId: restaurant.id,
                        type: type,
                        commission: 0,
                      },
                    });
                    if (res.status == 'success') toast.success('Bravo, votre action a été prise en compte');
                    else toast.error("Désolé, votre action n'a été prise en compte");
                  }}
                >
                  <SelectItem key="FIXE" value="FIXE">
                    FIXE
                  </SelectItem>
                  <SelectItem key="POURCENTAGE" value="POURCENTAGE">
                    POURCENTAGE
                  </SelectItem>
                </Select>
              </CardBody> */}
            </Card>
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-red-600 mb-6">Type de Cuisines</h2>
              </CardHeader>
              <CardBody>Restaurant de cuisine Française, Italienne, Chinoise</CardBody>
            </Card>
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-red-600 mb-6">Horaires d&apos;ouverture</h2>
              </CardHeader>

              <CardBody>
                {sortedHours.map((hour, index) => (
                  <div key={hour.id} className={`flex justify-between py-1 px-2 transition-all border hover:border-red-500 ${index % 2 ? 'bg-red-50' : 'bg-white'}`}>
                    <span className="font-medium">{hour.dayOfWeek}</span>
                    {hour.closed ? (
                      <span>Fermé</span>
                    ) : (
                      <span>
                        {formatTime(hour.openingTime)} - {formatTime(hour.closingTime)}
                      </span>
                    )}
                  </div>
                ))}
              </CardBody>
            </Card>

            <Card className="p-2 md:p-6">
              <CardHeader>
                <h2 className="text-lg font-medium mb-4">Photos de l&apos;établissement</h2>
              </CardHeader>
              <CardBody>
                <div className="grid grid-cols-4 gap-4">
                  {restaurant?.pictures &&
                    restaurant?.pictures?.map((picture) => (
                      <div key={picture.id} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image src={createUrlFile(picture.pictureUrl ?? '', 'restaurant')} alt={`Restaurant photo ${picture.id}`} fill className="object-cover" />
                      </div>
                    ))}
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
