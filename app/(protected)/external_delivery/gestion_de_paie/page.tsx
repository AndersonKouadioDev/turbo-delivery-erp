import { Suspense } from "react";
import Content from "./content";
import { getFicheDePaies } from "@/src/actions/gestion-de-paie.actions";

const data: any[] = [
    {
        totalReliser: 60000,
        nomComplet: "john yao",
        gainInitial: 0,
        jourTravails: [
            { isWorking: true, abreviation: "L" },
            { isWorking: true, abreviation: "M" },
            { isWorking: true, abreviation: "M" },
            { isWorking: true, abreviation: "J" },
            { isWorking: true, abreviation: "V" },
            { isWorking: false, abreviation: "S" },
            { isWorking: true, abreviation: "D" },
        ],
        weekend: [
            { isWorking: true, abreviation: "V" },
            { isWorking: true, abreviation: "S" },
            { isWorking: true, abreviation: "D" },
        ],
        tauxInteret: 0.2,
        commission: 14500,
        valeurAjouter: 0.2,
        typeLivreur: "Bird",
        prime: 0,
        restaurant: "KFC",
        contact: "+225 0544955886"
    },
    {
        totalReliser: 50000,
        nomComplet: "jane doe",
        gainInitial: 1000,
        jourTravails: [
            { isWorking: true, abreviation: "L" },
            { isWorking: true, abreviation: "M" },
            { isWorking: true, abreviation: "M" },
            { isWorking: true, abreviation: "J" },
            { isWorking: true, abreviation: "V" },
            { isWorking: true, abreviation: "S" },
            { isWorking: true, abreviation: "D" },
        ],
        weekend: [
            { isWorking: true, abreviation: "V" },
            { isWorking: true, abreviation: "S" },
            { isWorking: true, abreviation: "D" },
        ],
        tauxInteret: 0.15,
        commission: 12000,
        valeurAjouter: 0.1,
        typeLivreur: "Bird",
        prime: 0.125,
        restaurant: "McDonald's",
        contact: "+225 05449545886"
    },
    {
        totalReliser: 70000,
        nomComplet: "mike jones",
        gainInitial: 1500,
        jourTravails: [
            { isWorking: true, abreviation: "L" },
            { isWorking: false, abreviation: "M" },
            { isWorking: true, abreviation: "M" },
            { isWorking: false, abreviation: "J" },
            { isWorking: true, abreviation: "V" },
            { isWorking: false, abreviation: "S" },
            { isWorking: true, abreviation: "D" },
        ],
        weekend: [
            { isWorking: true, abreviation: "V" },
            { isWorking: false, abreviation: "S" },
            { isWorking: true, abreviation: "D" },
        ],
        tauxInteret: 0.1,
        commission: 13500,
        valeurAjouter: 0.05,
        typeLivreur: "Assigné",
        prime: 0.25,
        restaurant: "Burger King",
        contact: "+225 0744955886"
    },
    {
        totalReliser: 40000,
        nomComplet: "sarah williams",
        gainInitial: 0,
        jourTravails: [
            { isWorking: true, abreviation: "L" },
            { isWorking: false, abreviation: "M" },
            { isWorking: true, abreviation: "M" },
            { isWorking: false, abreviation: "J" },
            { isWorking: true, abreviation: "V" },
            { isWorking: true, abreviation: "S" },
            { isWorking: true, abreviation: "D" },
        ],
        weekend: [
            { isWorking: false, abreviation: "V" },
            { isWorking: true, abreviation: "S" },
            { isWorking: true, abreviation: "D" },
        ],
        tauxInteret: 0.2,
        commission: 14500,
        valeurAjouter: 0.2,
        typeLivreur: "Bird",
        prime: 0,
    },
    {
        totalReliser: 60000,
        nomComplet: "john yao",
        gainInitial: 0,
        jourTravails: [
            { isWorking: true, abreviation: "L" },
            { isWorking: true, abreviation: "M" },
            { isWorking: true, abreviation: "M" },
            { isWorking: true, abreviation: "J" },
            { isWorking: true, abreviation: "V" },
            { isWorking: true, abreviation: "S" },
            { isWorking: true, abreviation: "D" },
        ],
        weekend: [
            { isWorking: true, abreviation: "V" },
            { isWorking: false, abreviation: "S" },
            { isWorking: true, abreviation: "D" },
        ],
        tauxInteret: 0.2,
        commission: 14500,
        valeurAjouter: 0.2,
        typeLivreur: "Bird",
        prime: 0,
    }
]

export default async function Page() {
    const initialData = await getFicheDePaies();
    console.log("initialData++++++++++++++++++++", initialData)
    return (
        <Content initialData={initialData} />
    )
}
