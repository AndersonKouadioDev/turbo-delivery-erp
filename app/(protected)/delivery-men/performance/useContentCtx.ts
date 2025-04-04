'use client';

import { useEffect, useState } from 'react';
import { PaginatedResponse } from '@/types';
import { LivreurBird } from '@/types/creneau-bird';
import { Restaurant } from '@/types/creneau-turbo';
import { useSearchParams } from 'next/navigation';

interface props {
  initialData: PaginatedResponse<LivreurBird> | null;
}

// const dataa:LivreurBird[] = [
//     {
//       "id": "a30580e5-8ca4-4613-9aaa-c7ecfb5e5a7e",
//       "nomComplet": "Alice Dupont",
//       "dateInscrit": "2025-03-31",
//       "dateDefiniEmploiTemps": "2025-03-31",
//       "jour": {
//         "jourTravaille": 5,
//         "jourNonTravaille": 2
//       },
//       "creneauVM": {
//         "jourDebut": "2025-04-08",
//         "jourFin": "2025-04-01"
//       },
//       "creneauIndisponible": "Aucun",
//       "dateNonDefini": "N/A",
//       "disponibilite": true,
//       "disponibiliteCreneau": true
//     },
//     {
//       "id": "4fa85f64-5717-4562-b3fc-2c963f66afb7",
//       "nomComplet": "Bob Martin",
//       "dateInscrit": "2025-04-01",
//       "dateDefiniEmploiTemps": "2025-04-05",
//       "jour": {
//         "jourTravaille": 4,
//         "jourNonTravaille": 3
//       },
//       "creneauVM": {
//         "debut": "2025-04-05",
//         "fin": "2025-04-02"
//       },
//       "creneauIndisponible": "Partiel",
//       "dateNonDefini": "N/A",
//       "disponibilite": true,
//       "disponibiliteCreneau": false
//     },
//     {
//       "id": "5fa85f64-5717-4562-b3fc-2c963f66afc8",
//       "nomComplet": "Caroline Petit",
//       "dateInscrit": "2025-04-02",
//       "dateDefiniEmploiTemps": "2025-04-06",
//       "jour": {
//         "jourTravaille": 6,
//         "jourNonTravaille": 1
//       },
//       "creneauVM": {
//         "debut": "2025-04-20",
//         "fin": "2025-04-10"
//       },
//       "creneauIndisponible": "Aucun",
//       "dateNonDefini": "N/A",
//       "disponibilite": false,
//       "disponibiliteCreneau": false
//     },
//     {
//       "id": "6fa85f64-5717-4562-b3fc-2c963f66afd9",
//       "nomComplet": "David Leroy",
//       "dateInscrit": "2025-04-03",
//       "dateDefiniEmploiTemps": "2025-04-03",
//       "jour": {
//         "jourTravaille": 3,
//         "jourNonTravaille": 4
//       },
//       "creneauVM": {
//         "debut": "2025-04-17",
//         "fin": "2025-04-14"
//       },
//       "creneauIndisponible": "Matinée",
//       "dateNonDefini": "N/A",
//       "disponibilite": true,
//       "disponibiliteCreneau": true
//     },
//     {
//       "id": "7fa85f64-5717-4562-b3fc-2c963f66afe0",
//       "nomComplet": "Emma Rousseau",
//       "dateInscrit": "2025-04-14",
//       "dateDefiniEmploiTemps": "2025-04-04",
//       "jour": {
//         "jourTravaille": 7,
//         "jourNonTravaille": 0
//       },
//       "creneauVM": {
//         "debut": "2025-04-25",
//         "fin": "2025-04-16"
//       },
//       "creneauIndisponible": "Aucun",
//       "dateNonDefini": "N/A",
//       "disponibilite": true,
//       "disponibiliteCreneau": true
//     },
//     {
//       "id": "8fa85f64-5717-4562-b3fc-2c963f66afe1",
//       "nomComplet": "Fabrice Bernard",
//       "dateInscrit": "2025-04-05",
//       "dateDefiniEmploiTemps": "2025-04-01",
//       "jour": {
//         "jourTravaille": 4,
//         "jourNonTravaille": 3
//       },
//       "creneauVM": {
//         "debut": "2025-04-20",
//         "fin": "2025-04-10"
//       },
//       "creneauIndisponible": "Après-midi",
//       "dateNonDefini": "N/A",
//       "disponibilite": false,
//       "disponibiliteCreneau": false
//     },
//     {
//       "id": "9fa85f64-5717-4562-b3fc-2c963f66afe2",
//       "nomComplet": "Gabriel Moreau",
//       "dateInscrit": "2025-04-06",
//       "dateDefiniEmploiTemps": "2025-04-03",
//       "jour": {
//         "jourTravaille": 5,
//         "jourNonTravaille": 2
//       },
//       "creneauVM": {
//         "debut": "2025-04-22",
//         "fin": "2025-04-20"
//       },
//       "creneauIndisponible": "Aucun",
//       "dateNonDefini": "N/A",
//       "disponibilite": true,
//       "disponibiliteCreneau": true
//     },
//     {
//       "id": "0fa85f64-5717-4562-b3fc-2c963f66afe3",
//       "nomComplet": "Hélène Durand",
//       "dateInscrit": "2025-04-07",
//       "dateDefiniEmploiTemps": "2025-04-07",
//       "jour": {
//         "jourTravaille": 3,
//         "jourNonTravaille": 4
//       },
//       "creneauVM": {
//         "debut": "2025-04-25",
//         "fin": "2025-04-21"
//       },
//       "creneauIndisponible": "Matinée",
//       "dateNonDefini": "N/A",
//       "disponibilite": false,
//       "disponibiliteCreneau": true
//     },
//     {
//       "id": "1fa85f64-5717-4562-b3fc-2c963f66afe4",
//       "nomComplet": "Isabelle Lambert",
//       "dateInscrit": "2025-04-08",
//       "dateDefiniEmploiTemps": "2025-04-08",
//       "jour": {
//         "jourTravaille": 6,
//         "jourNonTravaille": 1
//       },
//       "creneauVM": {
//         "debut": "2025-04-21",
//         "fin": "2025-04-28"
//       },
//       "creneauIndisponible": "Aucun",
//       "dateNonDefini": "N/A",
//       "disponibilite": true,
//       "disponibiliteCreneau": true
//     },
//     {
//       "id": "2fa85f64-5717-4562-b3fc-2c963f66afe5",
//       "nomComplet": "Julien Caron",
//       "dateInscrit": "2025-04-09",
//       "dateDefiniEmploiTemps": "2025-04-09",
//       "jour": {
//         "jourTravaille": 2,
//         "jourNonTravaille": 5
//       },
//       "creneauVM": {
//         "debut": "2025-05-11",
//         "fin": "2025-05-01"
//       },
//       "creneauIndisponible": "Soirée",
//       "dateNonDefini": "N/A",
//       "disponibilite": true,
//       "disponibiliteCreneau": false
//     },
//     {
//       "id": "3fa85f64-5717-4562-b3fc-2c963f66afe6",
//       "nomComplet": "Karine Dubois",
//       "dateInscrit": "2025-04-10",
//       "dateDefiniEmploiTemps": "2025-04-20",
//       "jour": {
//         "jourTravaille": 5,
//         "jourNonTravaille": 2
//       },
//       "creneauVM": {
//         "debut": "2025-05-05",
//         "fin": "2025-05-05"
//       },
//       "creneauIndisponible": "Aucun",
//       "dateNonDefini": "N/A",
//       "disponibilite": true,
//       "disponibiliteCreneau": true
//     },
//     {
//       "id": "4fa85f64-5717-4562-b3fc-2c963f66afe7",
//       "nomComplet": "Louis Petit",
//       "dateInscrit": "2025-04-11",
//       "dateDefiniEmploiTemps": "2025-04-11",
//       "jour": {
//         "jourTravaille": 4,
//         "jourNonTravaille": 3
//       },
//       "creneauVM": {
//         "debut": "2025-05-11",
//         "fin": "2025-05-10"
//       },
//       "creneauIndisponible": "Après-midi",
//       "dateNonDefini": "N/A",
//       "disponibilite": false,
//       "disponibiliteCreneau": false
//     }
//   ]

export default function useContentCtx({ initialData }: props) {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState<string | null>(null);
  const textParam = searchParams.get('text');
  const [initialBirdCreneau, setInitialBirdCreneau] = useState<LivreurBird[]>([]);
  const [birdCreneau, setBirdCreneau] = useState<LivreurBird[]>([]);
  const [initialBirdNotCreneau, setInitialBirdNotCreneau] = useState<LivreurBird[]>([]);
  const [birdNotCreneau, setBirdNotCreneau] = useState<LivreurBird[]>([]);

  // const [data, setData] = useState<LivreurBird[] | []>(initialData?.content || []);

  function filterBirdCreneau() {
    let data;
    if (initialData) data = initialData.content.filter((item) => item.disponibiliteCreneau);
    
    setInitialBirdCreneau(data || []);
  }

  function filterBirdNotCreneau() {
    let data;
    if (initialData) data = initialData.content.filter((item) => !item.disponibiliteCreneau);
    
    setInitialBirdNotCreneau(data || []);
  }

  useEffect(() => {
    filterBirdCreneau();
    filterBirdNotCreneau()
  }, []);



  //filtrer bird qui ont un creneau 
  useEffect(() => {
    // Initialiser search à partir de textParam
    setSearch(textParam);

    // Si search n'est pas vide, filtrer les données
    if (search !== null && search.trim() !== '') {
      const filtered = initialBirdCreneau.filter((item) => item.nomComplet.toLowerCase().includes(search.toLowerCase())) || [];
      setBirdCreneau(filtered);
    } else {
      // Si search est vide, restaurer la liste initiale
      setBirdCreneau(initialBirdCreneau || []);
    }
  }, [search, textParam, initialBirdCreneau]);

    //filtrer bird qui n'ont pas de creneau 
  useEffect(() => {
    // Initialiser search à partir de textParam
    setSearch(textParam);

    // Si search n'est pas vide, filtrer les données
    if (search !== null && search.trim() !== '') {
      const filtered = initialBirdNotCreneau.filter((item) => item.nomComplet.toLowerCase().includes(search.toLowerCase())) || [];
      setBirdNotCreneau(filtered);
    } else {
      // Si search est vide, restaurer la liste initiale
      setBirdNotCreneau(initialBirdNotCreneau || []);
    }
  }, [search, textParam, initialBirdNotCreneau]);


  return {
    birdCreneau,
    birdNotCreneau
  };
}
