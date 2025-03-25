"use client"

import useConfirm from "@/components/commons/use-confirm-dialog";
import { Badge } from "@/components/ui/badge";
import { changerStatusLivreur, rejeterDemandeAssignations, validerDemandeAssignations } from "@/src/actions/delivery-men.actions";
import { DemandeAssignationVM, LivreurStatutVM, StatutDemandeAssignationEnum } from "@/types/models";
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
    const [typeLivreur, setTypeLivreur] = useState<any>("")

    useEffect(() => {
        if (selectValue) {
            setData(demandeAssignations.filter(item =>
                item.nomComplet && item.nomComplet.toLowerCase().includes(selectValue.toLowerCase())));
        } else {
            setData(demandeAssignations);
        }
    }, [selectValue])

    const recupererStatut = (sttatutDemandeAssignation?: string) => {
        switch (sttatutDemandeAssignation) {
            case "EN_ATTENTE":
                return <Badge className="bg-info rounded-lg pl-2 pr-2 text-sm">En attente</Badge>;
            case "VALIDE":
                return <Badge className="bg-green-500 rounded-lg pl-2 pr-2 text-sm">Validé</Badge>;
            case "REJETER":
                return <Badge className="bg-primary rounded-lg pl-2 pr-2 text-sm">Rejeté</Badge>;
            default:
                return "Inconu";
        }
    };


    const onOpenDialog = (item: DemandeAssignationVM) => {
        setNomComplet(item.nomComplet ?? "");
        setDemandeAssignation(item.id ?? "")
        onOpen();
        setTypeLivreur(item.type ?? "")

    }

    const onCloseDialog = () => {
        onClose();
        setNomComplet("");
    }

    const valider = async () => {
        try {
            const result = await validerDemandeAssignations({
                demandeAssignationId: demandeAssignationId,
                restaurantId: restaurantSelectedId ?? ""
            })
            if (result.status === "success") {
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
            onClose();
        } catch (error: any) {
            console.log("error.message", error.message)
            toast.error(error.message || "Une erreur s'est produite !");
        }
        // }
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

    const accortder = async (livreur: DemandeAssignationVM) => {
        if (!livreur) {
            toast.error("Une erreur s'est produite !")
            return false;
        }
        try {
            const result = await validerDemandeAssignations({
                demandeAssignationId: livreur?.id ?? "",
                restaurantId: "",
            })
            if (result.status === "success") {
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error("Une erreur s'est produite")
        }

    }

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
        retirer,
        confirm,
        accortder
    }
}