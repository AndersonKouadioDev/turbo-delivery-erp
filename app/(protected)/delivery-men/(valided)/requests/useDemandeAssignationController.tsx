"use client"

import useConfirm from "@/components/commons/use-confirm-dialog";
import { Badge } from "@/components/ui/badge";
import { rejeterDemandeAssignations, validerDemandeAssignations } from "@/src/actions/delivery-men.actions";
import { DemandeAssignationVM, StatutDemandeAssignationEnum } from "@/types/models";
import { useDisclosure } from "@heroui/react";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

export function useDemandeAssignationController(demandeAssignations: DemandeAssignationVM[]) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const confirm = useConfirm()
    const [data, setData] = useState(demandeAssignations);
    const [selectValue, setSelectValue] = useState<any>("");
    const [nomComplet, setNomComplet] = useState<string>("")
    const [restaurantSelectedId, setRestaurantSelectId] = useState<string | null>(null);
    const [demandeAssignationId, setDemandeAssignation] = useState<string>("");
    const [isAccorder, setIsAccorder] = useState(false)

    useEffect(() => {
        if (selectValue) {
            setData(demandeAssignations.filter(item =>
                item.nomComplet && item.nomComplet.toLowerCase().includes(selectValue.toLowerCase())));
        } else {
            setData(demandeAssignations);
        }
    }, [selectValue])

    const recupererStatut = (sttatutDemandeAssignation?: StatutDemandeAssignationEnum) => {
        switch (sttatutDemandeAssignation) {
            case StatutDemandeAssignationEnum.EN_ATTENTE:
                return <Badge className="bg-info rounded-lg pl-2 pr-2  text-sm">En attente</Badge>;
            case StatutDemandeAssignationEnum.VALIDE:
                return <Badge className="bg-green-500 rounded-lg pl-2 pr-2  text-sm">Validé</Badge>;
            case StatutDemandeAssignationEnum.REJETER:
                return <Badge className="bg-primary rounded-lg pl-2 pr-2 text-sm">Rejeté</Badge>;
            default:
                return "";
        }
    }

    const onOpenDialog = (item: DemandeAssignationVM) => {
        setNomComplet(item.nomComplet ?? "");
        setDemandeAssignation(item.id ?? "")
        onOpen();
        setIsAccorder(false)

    }

    const onCloseDialog = () => {
        onClose();
        setNomComplet("");
    }

    const valider = async () => {
        if (isAccorder) {
            setData((prevData) =>
                prevData.map((item) =>
                    item.id === demandeAssignationId ? { ...item, autoriser: true } : item
                )
            );
            onClose()
        } else {
            try {
                const result = await validerDemandeAssignations({
                    demandeAssignationId: demandeAssignationId,
                    restaurantId: restaurantSelectedId ?? "",
                })
                if (result.success === "success") {
                    toast.success(result.message);
                } else {
                    toast.error(result.message);
                }
                onClose();
            } catch (error: any) {
                toast.error(error.message || "Une erreur s'est produite !");
            }
        }
    }

    const rejeter = async () => {
        try {
            const result = await rejeterDemandeAssignations(demandeAssignationId);
            if (result.success === "success") {
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
            onClose();
        } catch (error: any) {
            toast.error(error.message || "Une erreur s'est produite !");
        }
    }

    const openAutoriserDialog = (item: DemandeAssignationVM) => {
        setNomComplet(item.nomComplet ?? "");
        setDemandeAssignation(item.id ?? "")
        onOpen();
        setIsAccorder(true)
    }

    const retirer = (id?: string) => {
        const confirmAndArchive = async () => {

            try {
                const result = await rejeterDemandeAssignations(id ?? "");
                if (result.success === "sucess") {
                    toast.success(result.message);
                } else {
                    toast.error(result.message);
                }
                onClose();
            } catch (error: any) {
                toast.error(error.message || "Une erreur s'est produite !");
            }
        };
        confirm.openConfirmDialog(confirmAndArchive);
    };

    return {
        data,
        selectValue,
        setSelectValue,
        recupererStatut,
        onOpenDialog,
        onCloseDialog,
        nomComplet,
        isOpen,
        setRestaurantSelectId,
        restaurantSelectedId,
        valider,
        rejeter,
        demandeAssignationId,
        openAutoriserDialog,
        isAccorder,
        retirer,
        confirm
    }
}