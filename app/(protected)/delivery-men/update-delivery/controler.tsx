import { changerStatusLivreur } from "@/src/actions/delivery-men.actions";
import { LivreurStatutVM, TypeEnum } from "@/types/models";
import { useState } from "react";
import { toast } from "react-toastify";

export function useUpdateDeliveryManController(livreur?: LivreurStatutVM, onClose?: () => void) {
    const [restaurantSelected, setRestuarantSelect] = useState("");
    const [typeLivreur, setTypeLivreur] = useState<any>("");

    const changerStatut = async () => {
        if (!typeLivreur) {
            toast.error("Veuillez choisir un statut")
            return false;
        }
        if (!restaurantSelected) {
            toast.error("Veuillez choisir un restaurant")
            return false;
        }
        try {
            const result = await changerStatusLivreur({
                livreurId: livreur?.livreurId ?? "",
                restaurantId: restaurantSelected,
                typeLivreur: typeLivreur as TypeEnum
            })
            if (result.status === "success") {
                toast.success(result.message);
                setRestuarantSelect("")
                setTypeLivreur("")
            } else {
                toast.error(result.message);
            }
            onClose && onClose()
        } catch (error) {
            toast.error("Une erreur s'est produite")
        }
    }
    return {
        restaurantSelected,
        setRestuarantSelect,
        typeLivreur,
        setTypeLivreur,
        changerStatut,
    }
}