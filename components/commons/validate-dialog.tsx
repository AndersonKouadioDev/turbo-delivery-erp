// 'use client';

// import { useState } from 'react';
// import { X } from 'lucide-react';
// import { Restaurant } from '@/types/models';

// interface ConfirmDialogProps {
//     isOpen: boolean;
//     onClose: () => void;
//     nomComplet: string;
//     restaurants: Restaurant[];
// }

// export default function ConfirmDialog({ isOpen, onClose, nomComplet }: ConfirmDialogProps) {
//     const [selectedRestaurant, setSelectedRestaurant] = useState('');

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
//             <div className="bg-white rounded-lg shadow-lg p-5 w-96 relative">
//                 <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
//                     <X size={20} />
//                 </button>
// <h2 className="text-red-600 text-lg font-semibold">Demande d’assignation</h2>
// <p className="text-gray-700 mt-2">Attribuer le livreur <span className="font-semibold">{nomComplet}</span> en tant que :</p>
// <div className="mt-4 flex gap-3">
//     <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">Accepter</button>
//     <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg cursor-not-allowed">Rejeter</button>
// </div>
// <div className="mt-4">
//     <select
//         className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//         value={selectedRestaurant}
//         onChange={(e) => setSelectedRestaurant(e.target.value)}
//     >
//         <option value="">Choisir le restaurant</option>
//         <option value="restaurant1">Restaurant 1</option>
//         <option value="restaurant2">Restaurant 2</option>
//     </select>
// </div>
//             </div>
//         </div>
//     );
// }

import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Select,
    SelectItem,
} from "@heroui/react";
import { Restaurant } from "@/types/models";


interface ValidateDialogProps {
    isOpen: boolean;
    onClose: () => void;
    nomComplet: string;
    restaurants: Restaurant[];
    setRestaurantId: (id: string) => void;
    valider: (demandeAssignationId: string) => void;
    rejeter: (demandeAssignationId: string) => void;
    demandeAssignationId: string;
    estAccorder?: boolean;
}
export default function ValidateDialog({
    isOpen, onClose, nomComplet, restaurants,
    setRestaurantId, valider, rejeter, demandeAssignationId, estAccorder }: ValidateDialogProps) {
    return (
        <Modal isOpen={isOpen} size={"sm"} onClose={onClose}>
            <ModalContent>
                <ModalBody>
                    <h2 className="text-red-600 text-lg font-bold">Demande d’assignation</h2>
                    {
                        estAccorder ?
                            <p className="text-gray-700">Autoriser le livreur <span className="font-semibold">{nomComplet}</span> </p>
                            :
                            <>
                                <p className="text-gray-700">Attribuer le livreur <span className="font-semibold">{nomComplet}</span> en tant que :</p>
                                <Select label="Selectionnée un restaurant" size="sm">
                                    {restaurants.map((item) => (
                                        <SelectItem key={item.id} className="h-8" onChange={(event: any) => setRestaurantId(event.target.value)}>{item.nomEtablissement}</SelectItem>
                                    ))}
                                </Select>
                            </>
                    }
                    <div className="mt-4 flex gap-3 justify-around">
                        <Button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 h-8 w-full"
                            onPress={() => valider(demandeAssignationId)}>{estAccorder ? "Accorder" : "Accepter"}</Button>
                        <Button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg  h-8 w-full" onPress={() => {
                            rejeter(demandeAssignationId)
                            onClose()
                        }}>Rejeter</Button>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}


