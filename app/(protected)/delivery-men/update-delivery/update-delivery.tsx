
import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@heroui/react";
import { SelectField } from "@/components/commons/form/select-field";
import { LivreurStatutVM, Restaurant } from "@/types/models";
import { useUpdateDeliveryManController } from "./controler";


interface Props {
    restaurants: Restaurant[] | null;
    isOpen: boolean;
    onClose: () => void;
    livreur?: LivreurStatutVM;
    nomLivreur?: string;
}
export function UpdateDeliveryDialog({ restaurants, isOpen, onClose, livreur }: Props) {
    const ctrl = useUpdateDeliveryManController(livreur, onClose)
    return (
        <>
            <Modal isOpen={isOpen} size={"lg"} onClose={onClose}>
                <ModalContent>
                    <>
                        <ModalHeader className="flex gap-2">Changer le statut du <b className="text-primary">{livreur?.nomPrenom}</b></ModalHeader>
                        <ModalBody>
                            <div className="">
                                <SelectField options={[
                                    { label: "WAITING", id: "WAITING" },
                                    { label: "TURBO", id: "TURBO" },
                                    { label: "FREE ", id: "FREE " },
                                ]} placeholder="Selectionnée un type" value={ctrl.typeLivreur} setValue={ctrl.setTypeLivreur} label="label" />
                                <SelectField options={restaurants || []}
                                    value={ctrl.restaurantSelected}
                                    setValue={ctrl.setRestuarantSelect} label="nomEtablissement" placeholder="Selectionnée un etablissement" />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Annuler
                            </Button>
                            <Button color="primary" onPress={ctrl.changerStatut}>
                                Enregistrer
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
}

