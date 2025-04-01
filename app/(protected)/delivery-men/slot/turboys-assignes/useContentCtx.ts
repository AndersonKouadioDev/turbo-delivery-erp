'use client'

import { useEffect, useState } from "react";
import { PaginatedResponse } from "@/types";
import { Livreur } from "@/types/creneau-bird";
import { Restaurant } from "@/types/creneau-turbo";
import { useSearchParams } from "next/navigation";

interface props{
    initialData: PaginatedResponse<Restaurant> | null;
}

const dataa:Restaurant[] = [
    { 
      nombreLivreur: 1,
      nomRestaurant: "Restaurant Bom Gout",
      livreurs: [
        {
          id: "4ass8c61f3-5645-49bc-9a3d-c5bcd67809c9",
          nomComplet: "Alice Dupontt",
          dateInscrit: "2025-03-30",
          dateDefiniEmploiTemps: "2025-03-31",
          jour: {
            jourTravaille: 3,
            jourNonTravaille: 2
          },
          creneauVM: {
            debut: "2025-04-01",
            fin: "2025-04-02"
          },
          creneauIndisponible: "2025-04-02",
          dateNonDefini: "2025-04-03",
          disponibilite: true,
          disponibiliteCreneau: false
        },
        {
          id: "5b9d5cf3-2a5b-s4e5e-9359-5e2fd9bafef6",
          nomComplet: "Julien Martinn",
          dateInscrit: "2025-03-28",
          dateDefiniEmploiTemps: "2025-03-29",
          jour: {
            jourTravaille: 7,
            jourNonTravaille: 0
          },
          creneauVM: {
            debut: "2025-04-02",
            fin: "2025-10-07"
          },
          creneauIndisponible: "2025-04-04",
          dateNonDefini: "2025-04-05",
          disponibilite: false,
          disponibiliteCreneau: true
        },
        {
            id: "4a8c369f3-5645-49bc-9a3d-c5bcd67809c9",
            nomComplet: "Alice kouame",
            dateInscrit: "2025-03-30",
            dateDefiniEmploiTemps: "2025-03-31",
            jour: {
              jourTravaille: 3,
              jourNonTravaille: 2
            },
            creneauVM: {
              debut: "2025-04-01",
              fin: "2025-09-09"
            },
            creneauIndisponible: "2025-04-02",
            dateNonDefini: "2025-04-03",
            disponibilite: true,
            disponibiliteCreneau: false
        },
        {
        id: "53b9d2cf3-2a5b-4e5e-9359-5e2fd9bafef6",
        nomComplet: "alber Rodigue",
        dateInscrit: "2025-03-28",
        dateDefiniEmploiTemps: "2025-03-29",
        jour: {
            jourTravaille: 5,
            jourNonTravaille: 1
        },
        creneauVM: {
            debut: "2025-04-08",
            fin: "2025-05-12"
        },
        creneauIndisponible: "2025-04-04",
        dateNonDefini: "2025-04-05",
        disponibilite: false,
        disponibiliteCreneau: true
        },
      
      ]
    },
    { 
      nombreLivreur: 2,
      nomRestaurant: "Restaurant Marcory",
      livreurs: [
        {
          id: "4a8c61f3-5645-49bc-9a3d-c5bcd67809c9",
          nomComplet: "Alice Dupont",
          dateInscrit: "2025-03-30",
          dateDefiniEmploiTemps: "2025-03-31",
          jour: {
            jourTravaille: 3,
            jourNonTravaille: 2
          },
          creneauVM: {
            debut: "2025-04-01",
            fin: "2025-04-01"
          },
          creneauIndisponible: "2025-04-02",
          dateNonDefini: "2025-04-03",
          disponibilite: true,
          disponibiliteCreneau: false
        },
        {
          id: "5b9d5cf3-2a5b-4e5e-9359-5e2fd9bafef6",
          nomComplet: "Julien Martin",
          dateInscrit: "2025-03-28",
          dateDefiniEmploiTemps: "2025-03-29",
          jour: {
            jourTravaille: 4,
            jourNonTravaille: 1
          },
          creneauVM: {
            debut: "2025-04-02",
            fin: "2025-04-02"
          },
          creneauIndisponible: "2025-04-04",
          dateNonDefini: "2025-04-05",
          disponibilite: false,
          disponibiliteCreneau: true
        },
        {
            id: "4a8c361f3-5645-49bc-9a3d-c5bcd67809c9",
            nomComplet: "Alice Dupont",
            dateInscrit: "2025-03-30",
            dateDefiniEmploiTemps: "2025-03-31",
            jour: {
              jourTravaille: 3,
              jourNonTravaille: 2
            },
            creneauVM: {
              debut: "2025-04-01",
              fin: "2025-04-01"
            },
            creneauIndisponible: "2025-04-02",
            dateNonDefini: "2025-04-03",
            disponibilite: true,
            disponibiliteCreneau: false
        },
        {
        id: "53b9d5cf3-2a5b-4e5e-9359-5e2fd9bafef6",
        nomComplet: "Julien Martin",
        dateInscrit: "2025-03-28",
        dateDefiniEmploiTemps: "2025-03-29",
        jour: {
            jourTravaille: 4,
            jourNonTravaille: 1
        },
        creneauVM: {
            debut: "2025-04-02",
            fin: "2025-04-02"
        },
        creneauIndisponible: "2025-04-04",
        dateNonDefini: "2025-04-05",
        disponibilite: false,
        disponibiliteCreneau: true
        },
      
      ]
      
    },
  ]
  

export default function useContentCtx({initialData}:props){
    
     const searchParams = useSearchParams(); 
     const [search,setSearch] = useState<string|null>(null)
     const textParam = searchParams.get('text');

        const [data, setData] = useState<Restaurant[]|[]>(initialData?.content||[]);

         useEffect(() => { 
           // Initialiser search à partir de textParam
           setSearch(textParam);
         
           // Si search n'est pas vide, filtrer les données
           if (search !== null && search.trim() !== "") {
             const filtered = initialData?.content.filter(item => 
               item.nomRestaurant.toLowerCase().includes(search.toLowerCase())
             ) || [];
             setData(filtered);
           } else {
             // Si search est vide, restaurer la liste initiale
             setData(initialData?.content||[]);
           }
         
         }, [search, textParam, initialData?.content]);
        
    

    return {
        data
    }
}