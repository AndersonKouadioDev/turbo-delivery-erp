'use client'
import RetourButton from "@/components/dashboard/retourButton";
import { Button, Card, Input } from "@heroui/react";
import { Select, SelectItem } from "@heroui/select";
import { ArrowLeft, Edit } from "lucide-react";
import Image from "next/image";


export interface Turboys  {
  id: string;
  nom: string;
  prenom: string;
  dateNaissance: string;
  telephone: string;
  domicile: string;
  email: string;
  typeDocument: string;
  numeroDocument: string;
  type: string;
  nomVehicule: string;
  immatriculationVehicule: string;
}

export default function Content({user}:{user:Turboys}){
   
    return (
        <div className="py-6 px-4 lg:px-20 bg-gray-50 min-h-screen">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">


             <div className="flex items-center">
             <RetourButton/>
                <h1 className="text-xl font-bold text-red-500">
                    {user.nom} {user.prenom}
                </h1>
                </div>
            </div>
            <Button variant="faded">
              <Edit size={16} className="mr-1" /> Modifier
            </Button>
          </div>
    
          <div className="flex justify-center mb-6">
            <Card className="w-24 h-24 overflow-hidden rounded-md">
              <Image
                src="/assets/images/illustrations/dashboard/profile.png"
                alt="Photo de profil"
                layout="fill"
                objectFit="cover"
              />
            </Card>
          </div>
    
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Input label="Nom" value={user.nom} readOnly />
              <Input label="Prénom" value={user.prenom} readOnly />
              <Input label="Date de naissance" value={user.dateNaissance} readOnly />
              <Input label="Téléphone" value={`+225 ${user.telephone}`} readOnly />
              <Input label="Domicile" value={user.domicile} readOnly />
              <Input label="Email" value={user.email} readOnly />
    
              <Select label="Document d'identité" value={user.typeDocument} disabled>
                <SelectItem key="CNI" value="Carte d'identité (CNI)">
                 {` Carte d'identité (CNI)`}
                </SelectItem>
                <SelectItem key="Passeport" value="Passeport">
                  Passeport
                </SelectItem>
                <SelectItem key="Permis" value="Permis de conduire">
                  Permis de conduire
                </SelectItem>
              </Select>
    
              <Input label="Numéro de la pièce" value={user.numeroDocument} readOnly />
            </div>
    
            <div className="mb-6 flex space-x-4">
              <Card className="w-32 h-20 overflow-hidden">
                <Image
                  src="/assets/images/illustrations/dashboard/devant.png"
                  alt="Recto"
                  layout="fill"
                  objectFit="cover"
                />
              </Card>
              <Card className="w-32 h-20 overflow-hidden">
                <Image
                  src="/assets/images/illustrations/dashboard/deriere.png"
                  alt="Verso"
                  layout="fill"
                  objectFit="cover"
                />
              </Card>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Select label="Type" value={user.type} disabled>
                <SelectItem key="Dispatcher" value="Dispatcher">
                  Dispatcher
                </SelectItem>
                <SelectItem key="Chauffeur" value="Chauffeur">
                  Chauffeur
                </SelectItem>
                <SelectItem key="Administrateur" value="Administrateur">
                  Administrateur
                </SelectItem>
              </Select>
              <Input label="Nom du véhicule" value={user.nomVehicule} readOnly />
              <Input label="Immatriculation" value={user.immatriculationVehicule} readOnly />
              <Card className="w-full h-20 bg-gray-100 flex items-center justify-center rounded-md">
                <span className="text-gray-400">Ajouter une photo</span>
              </Card>
            </div>
    
            <div className="mt-8">
              <Button className="w-full py-3 bg-pink-400 text-white font-medium rounded-md hover:bg-pink-500 transition duration-200">
                Enregistrer
              </Button>
            </div>
          </form>
        </div>
      );
}