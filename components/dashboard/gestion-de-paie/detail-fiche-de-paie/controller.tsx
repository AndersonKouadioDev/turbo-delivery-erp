import { useDisclosure } from "@heroui/react";

export function useInitierPaiementController() {
    const initierPaiementClosure = useDisclosure();
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
        joursPaies
    }
}