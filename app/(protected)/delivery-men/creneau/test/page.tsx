import { Metadata } from "next";
import Content from "./content";
import { BirdPerformance, RestaurantTuboProgression } from "@/types/slot";

const turbo = [
    {
      nonRestaurant: "Aga Resto",
      livreurs: [
        {
          id: "1a2b3c4d5e",
          nomComplet: "Jean Dupont",
          progression: 75,
          jour: {
            jourTravaille: 5,
            jourNonTravaille: 2
          },
          creneauVM: {
            debut: "2025-03-10",
            fin: "2025-03-20"
          }
        },
        {
          id: "2b3c4d5e6f",
          nomComplet: "Fatima Diallo",
          progression: 50,
          jour: {
            jourTravaille: 4,
            jourNonTravaille: 3
          },
          creneauVM: {
            debut: "2025-04-01",
            fin: "2025-04-15"
          }
        },
        {
          id: "3c4d5e6f7g",
          nomComplet: "Moussa Traoré",
          progression: 90,
          jour: {
            jourTravaille: 6,
            jourNonTravaille: 1
          },
          creneauVM: {
            debut: "2025-02-20",
            fin: "2025-03-05"
          }
        },
        {
          id: "4d5e6f7g8h",
          nomComplet: "Awa Koné",
          progression: 20,
          jour: {
            jourTravaille: 3,
            jourNonTravaille: 4
          },
          creneauVM: {
            debut: "2025-05-10",
            fin: "2025-05-25"
          }
        },
        {
          id: "5e6f7g8h9i",
          nomComplet: "Karim N’Diaye",
          progression: 100,
          jour: {
            jourTravaille: 7,
            jourNonTravaille: 0
          },
          creneauVM: {
            debut: "2025-06-01",
            fin: "2025-06-15"
          }
        },
        {
          id: "6f7g8h9i0j",
          nomComplet: "Sophie Leblanc",
          progression: 60,
          jour: {
            jourTravaille: 4,
            jourNonTravaille: 3
          },
          creneauVM: {
            debut: "2025-07-05",
            fin: "2025-07-20"
          }
        },
        {
          id: "7g8h9i0j1k",
          nomComplet: "Ibrahim Sow",
          progression: 80,
          jour: {
            jourTravaille: 6,
            jourNonTravaille: 1
          },
          creneauVM: {
            debut: "2025-08-10",
            fin: "2025-08-25"
          }
        }
      ]
    },
    {
        nonRestaurant: "palmerais 2",
        livreurs: [
            
            {
              id: "8h9i0j1k2l",
              nomComplet: "Nina Gomez",
              progression: 30,
              jour: {
                jourTravaille: 2,
                jourNonTravaille: 5
              },
              creneauVM: {
                debut: "2025-09-01",
                fin: "2025-09-10"
              }
            },
            {
              id: "9i0j1k2l3m",
              nomComplet: "Ousmane Fall",
              progression: 95,
              jour: {
                jourTravaille: 7,
                jourNonTravaille: 0
              },
              creneauVM: {
                debut: "2025-10-15",
                fin: "2025-10-30"
              }
            },
            {
              id: "0j1k2l3m4n",
              nomComplet: "Laura Morel",
              progression: 45,
              jour: {
                jourTravaille: 3,
                jourNonTravaille: 4
              },
              creneauVM: {
                debut: "2025-11-05",
                fin: "2025-11-20"
              }
            },
            {
              id: "1k2l3m4n5o",
              nomComplet: "Amadou Cissé",
              progression: 70,
              jour: {
                jourTravaille: 5,
                jourNonTravaille: 2
              },
              creneauVM: {
                debut: "2025-12-01",
                fin: "2025-12-15"
              }
            },
            {
              id: "2l3m4n5o6p",
              nomComplet: "Catherine Dubois",
              progression: 85,
              jour: {
                jourTravaille: 6,
                jourNonTravaille: 1
              },
              creneauVM: {
                debut: "2025-01-10",
                fin: "2025-01-25"
              }
            },
            {
              id: "3m4n5o6p7q",
              nomComplet: "Thomas Lambert",
              progression: 55,
              jour: {
                jourTravaille: 4,
                jourNonTravaille: 3
              },
              creneauVM: {
                debut: "2025-02-05",
                fin: "2025-02-20"
              }
            }
        ]
      },
      {
        nonRestaurant: "palma restaurant",
        livreurs: [
            
            {
              id: "0j1k2l3m4n",
              nomComplet: "martin Morel",
              progression: 45,
              jour: {
                jourTravaille: 3,
                jourNonTravaille: 4
              },
              creneauVM: {
                debut: "2025-11-05",
                fin: "2025-11-20"
              }
            },
            {
              id: "1k2l3m4n5o",
              nomComplet: "Amadou Cissé",
              progression: 70,
              jour: {
                jourTravaille: 5,
                jourNonTravaille: 2
              },
              creneauVM: {
                debut: "2025-12-01",
                fin: "2025-12-15"
              }
            },
            {
              id: "2l3m4n5o6p",
              nomComplet: "Catherine Dubois",
              progression: 85,
              jour: {
                jourTravaille: 6,
                jourNonTravaille: 1
              },
              creneauVM: {
                debut: "2025-01-10",
                fin: "2025-01-25"
              }
            },
            {
              id: "3m4n5o6p7q",
              nomComplet: "Thomas Lambert",
              progression: 55,
              jour: {
                jourTravaille: 4,
                jourNonTravaille: 3
              },
              creneauVM: {
                debut: "2025-02-05",
                fin: "2025-02-20"
              }
            }
        ]
      }
  ];
  


// const bird = [
//     {
//       "id": "1a2b3c4d-1234-5678-9101-abcdefabcdef",
//       "nomComplet": "Jean Dupont",
//       "progression": 75,
//       "jour": {
//         "jourTravaille": 15,
//         "jourNonTravaille": 5
//       },
//       "creneauVM": {
//         "debut": "2025-04-01",
//         "fin": "2025-04-15"
//       }
//     },
//     {
//       "id": "2b3c4d5e-2234-5678-9101-bcdefabcdefa",
//       "nomComplet": "Alice Martin",
//       "progression": 60,
//       "jour": {
//         "jourTravaille": 12,
//         "jourNonTravaille": 8
//       },
//       "creneauVM": {
//         "debut": "2025-03-28",
//         "fin": "2025-04-10"
//       }
//     },
//     {
//       "id": "3c4d5e6f-3234-5678-9101-cdefabcdefab",
//       "nomComplet": "Mohamed Sylla",
//       "progression": 90,
//       "jour": {
//         "jourTravaille": 18,
//         "jourNonTravaille": 2
//       },
//       "creneauVM": {
//         "debut": "2025-04-05",
//         "fin": "2025-04-20"
//       }
//     },
//     {
//       "id": "4d5e6f7g-4234-5678-9101-defabcdefabc",
//       "nomComplet": "Fatoumata Diallo",
//       "progression": 50,
//       "jour": {
//         "jourTravaille": 10,
//         "jourNonTravaille": 10
//       },
//       "creneauVM": {
//         "debut": "2025-03-30",
//         "fin": "2025-04-12"
//       }
//     },
//     {
//       "id": "5e6f7g8h-5234-5678-9101-efabcdefabcd",
//       "nomComplet": "Léon Bernard",
//       "progression": 80,
//       "jour": {
//         "jourTravaille": 16,
//         "jourNonTravaille": 4
//       },
//       "creneauVM": {
//         "debut": "2025-04-02",
//         "fin": "2025-04-17"
//       }
//     },
//     {
//       "id": "6f7g8h9i-6234-5678-9101-fabcdefabcde",
//       "nomComplet": "Nadia Touré",
//       "progression": 65,
//       "jour": {
//         "jourTravaille": 13,
//         "jourNonTravaille": 7
//       },
//       "creneauVM": {
//         "debut": "2025-04-03",
//         "fin": "2025-04-18"
//       }
//     },
//     {
//       "id": "7g8h9i0j-7234-5678-9101-gabcdefabcdef",
//       "nomComplet": "Paul Kamdem",
//       "progression": 95,
//       "jour": {
//         "jourTravaille": 19,
//         "jourNonTravaille": 1
//       },
//       "creneauVM": {
//         "debut": "2025-04-07",
//         "fin": "2025-04-22"
//       }
//     },
//     {
//       "id": "8h9i0j1k-8234-5678-9101-habcdefabcdef",
//       "nomComplet": "Sophie N'Guessan",
//       "progression": 40,
//       "jour": {
//         "jourTravaille": 8,
//         "jourNonTravaille": 12
//       },
//       "creneauVM": {
//         "debut": "2025-04-08",
//         "fin": "2025-04-23"
//       }
//     },
//     {
//       "id": "9i0j1k2l-9234-5678-9101-iabcdefabcdef",
//       "nomComplet": "Moussa Keita",
//       "progression": 85,
//       "jour": {
//         "jourTravaille": 17,
//         "jourNonTravaille": 3
//       },
//       "creneauVM": {
//         "debut": "2025-04-09",
//         "fin": "2025-04-24"
//       }
//     },
//     {
//       "id": "0j1k2l3m-0234-5678-9101-jabcdefabcdef",
//       "nomComplet": "Clarisse Zongo",
//       "progression": 55,
//       "jour": {
//         "jourTravaille": 11,
//         "jourNonTravaille": 9
//       },
//       "creneauVM": {
//         "debut": "2025-04-10",
//         "fin": "2025-04-25"
//       }
//     },
//     {
//       "id": "1k2l3m4n-1234-5678-9101-kabcdefabcdef",
//       "nomComplet": "Jean-Pierre Massamba",
//       "progression": 70,
//       "jour": {
//         "jourTravaille": 14,
//         "jourNonTravaille": 6
//       },
//       "creneauVM": {
//         "debut": "2025-04-11",
//         "fin": "2025-04-26"
//       }
//     },
//     {
//       "id": "2l3m4n5o-2234-5678-9101-labcdefabcdef",
//       "nomComplet": "Awa Diop",
//       "progression": 45,
//       "jour": {
//         "jourTravaille": 9,
//         "jourNonTravaille": 11
//       },
//       "creneauVM": {
//         "debut": "2025-04-12",
//         "fin": "2025-04-27"
//       }
//     }
//   ];

   export const metadata: Metadata = {
      title: "Progression des Turboys assignes ",
      description: "Liste des activités des Turboys assignes.",
    };
  
export default async function Page(){

    const initialData: RestaurantTuboProgression[] = turbo 

    return <Content initialData={initialData}/>
}