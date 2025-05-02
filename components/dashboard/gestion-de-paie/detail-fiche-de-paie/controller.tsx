import { getFichePaieById } from "@/src/actions/gestion-de-paie.actions";
import { FichePaieDetailVM } from "@/types/gestion-de-paie.model";
import { useDisclosure } from "@heroui/react";
import { useEffect, useState } from "react";

export function useInitierPaiementController(fichePaieId?: string) {
    const [detailFichePaie, setDetailFichePaie] = useState<FichePaieDetailVM | null>();
    const initierPaiementClosure = useDisclosure();

    const fetchDetailFichePaie = async () => {
        try {
            const result = await getFichePaieById(fichePaieId ?? "");
            setDetailFichePaie(result)
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchDetailFichePaie()
    }, [fichePaieId]);

    const creneauDePaieClosure = useDisclosure();
    const joursPaies = [
        {
            jour: "Lundi",
            montant: 12500,
        },
        {
            jour: "Mardi",
            montant: 12400,
        },
        {
            jour: "Mercredi",
            montant: 12500,
        },
        {
            jour: "Jeudi",
            montant: 12500,
        },
        {
            jour: "Vendredi",
            montant: 12800,
        },
        {
            jour: "Samedi",
            montant: 12500,
        },
        {
            jour: "Dimanche",
            montant: 1250,
        }
    ]
    return {
        initierPaiementClosure,
        creneauDePaieClosure,
        joursPaies,
        detailFichePaie
    }
}