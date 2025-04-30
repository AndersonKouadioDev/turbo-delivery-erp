import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Card,
    Chip,
} from "@heroui/react";
import { MoveDownLeft, MoveDownRight, MoveUpRight, Printer } from "lucide-react";
import { useInitierPaiementController } from "./controller";
import { InitierPaiementModal } from "../initier-paiement/initier-paiement-modal";
import { CreneauDePaieModal } from "../creneau-de-paie/creneau-de-paie-modal";

interface DetailFichePaieProps {
    isOpen: boolean;
    onClose: () => void;
    details: any;
    periode?: string;
    nonEligible: boolean
}

export function DetailFichePaieModal({ isOpen, onClose, details, periode, nonEligible }: DetailFichePaieProps) {
    const ctrl = useInitierPaiementController();
    return (
        <>
            <Modal isOpen={isOpen} size={"2xl"} onClose={onClose}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-center text-primary font-bold">Détail de la fiche de paie</ModalHeader>
                        <ModalBody>
                            <div className="pl-4 pr-4">
                                <div className="flex justify-between mb-5">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-gray-500 font-bold text-xl">{details && details?.nomComplet}</span>
                                        <span className="text-sm">Lieur de travail <span className="text-gray-500 font-bold">{details && details.restaurant}</span></span>
                                    </div>
                                    {
                                        nonEligible ?
                                            <Chip className="bg-purple-100 text-purple-800  ml-2 mr-2"><span className="font-[900]">A encaissé</span></Chip>
                                            :
                                            <Chip className="bg-yellow-50 text-orange-500 font-bold">Paie en attente</Chip>
                                    }
                                </div>
                                <div className="flex gap-20 mb-4">
                                    <div className="flex flex-col gap-1">
                                        <div className="text-gray-500">Commssion</div>
                                        <div className="text-md text-gray-500 font-bold">{details && details.commission}&nbsp;&nbsp; FCFA</div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-gray-500">Prime</div>
                                        {details && details.prime > 0 ? <span className="ml-1 flex gap-1 text-green-500"><MoveUpRight className="text-green-500" size={16} /> + {details && details.prime}&nbsp;&nbsp; FCFA</span>
                                            : <span className="ml-1 flex gap-1 text-red-500"> <MoveDownRight className="text-red-500" size={16} /> + {details && details.prime}&nbsp;&nbsp;  FCFA</span>}

                                    </div>
                                </div>

                                <div className="flex gap-20 mb-4">
                                    <div className="flex flex-col gap-1">
                                        <div className="text-gray-500">Total réalisé</div>
                                        <div className="text-md  text-gray-500">{details && details.totalReliser}&nbsp;&nbsp; FCFA</div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="text-gray-500">Gain initial</div>
                                        <span className="text-md  text-gray-500">{details && details.gainInitial}&nbsp;&nbsp;  FCFA</span>

                                    </div>
                                </div>
                                <Card className="p-4">
                                    <div className="flex items-center justify-between mb-4" >
                                        <div className="flex flex-col gap-1">
                                            <div className="text-gray-500">Total a payer</div>
                                            <div className="text-md  font-bold text-gray-500">290000 FCFA</div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div>Date de récupéreration</div>
                                            <div className="flex justify-end">
                                                <div className="text-sm  font-bold text-gray-500">2023-08-15</div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        ctrl.joursPaies && ctrl.joursPaies.map((item: any, index: number) => (
                                            <div key={index} onClick={() => ctrl.creneauDePaieClosure.onOpen()} className="cursor-pointer">
                                                <div className="flex justify-between mt-2 border-b-2 pb-2 text-md hover:bg-primary/10" >
                                                    <div className="text-sm">{item.jour + " " + (index + 1)}</div>
                                                    <div className="text-sm font-bold text-gray-500">{item.montant}&nbsp;&nbsp;  FCFA</div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Card>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" className="text-sm" size="sm" onPress={onClose}>
                                <Printer size={18} className="mr-2" />  Imprimer
                            </Button>
                            <Button color="primary" className="text-sm" onPress={ctrl.initierPaiementClosure.onOpen} size="sm">
                                Initier le paiement
                            </Button>
                        </ModalFooter>
                    </>
                    <InitierPaiementModal onClose={ctrl.initierPaiementClosure.onClose} isOpen={ctrl.initierPaiementClosure.isOpen} details={details} />
                    <CreneauDePaieModal onClose={ctrl.creneauDePaieClosure.onClose} isOpen={ctrl.creneauDePaieClosure.isOpen} details={details} periode={periode} />
                </ModalContent>
            </Modal>
        </>
    );
}

