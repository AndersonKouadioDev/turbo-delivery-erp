
"use client"
import Loading from "@/components/layouts/loading";
import { Suspense } from "react";
import { DetailContent } from "./content";
import { useParams } from "next/navigation";

const data = [
    {
        id: '1',
        restaurant: "KFC 1",
        reference: "ABC123",
        coutLivraison: "1500 Fcfa",
        coutCommande: "2500 Fcfa",
        dateHeure: "2022-01-01 2h:30",
        authentif: "Oui",

    },
    {
        id: '2',
        restaurant: "KFC 2",
        reference: "XYZ456",
        coutLivraison: "2000 Fcfa",
        coutCommande: "2500 Fcfa",
        dateHeure: "2022-01-01 2h:30",

    }
]

export default async function Page() {
    const { id } = useParams();
    console.log(id);
    return (
        <Suspense fallback={<Loading />}>
            <DetailContent data={data} />
        </Suspense>
    )
}