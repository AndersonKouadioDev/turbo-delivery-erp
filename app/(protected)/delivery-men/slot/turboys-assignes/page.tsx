import { TurboysAssignes,TurboysNotSlot } from "@/types/slot"
import Content from "./content";
import { Metadata } from "next";

const data1 = [
    { 
      id: "1",
      nameRestaurant: "Restaurant Bom Gout",
      sizeChildren: 6,
      img: "image321",
      children: [
        { 
          id: "12uh", 
          nom: "YAO", 
          prenom: "JUDICAËL", 
          DateinscritLe: "13/03/2024", 
          definiLe: "24/03/2024", 
          creneau: "Créneau 12-22 Fév (5/7 jours)", 
          actif: true 
        },
        { 
          id: "2kkjn", 
          nom: "BAMBA", 
          prenom: "AMAR", 
          DateinscritLe: "15/03/2024", 
          definiLe: "25/03/2024", 
          creneau: "Créneau 8-18 Mars (3/7 jours)", 
          actif: true 
        },
        { 
          id: "3lknbc", 
          nom: "KONE", 
          prenom: "NADIA", 
          DateinscritLe: "16/03/2024", 
          definiLe: "26/03/2024", 
          creneau: "Créneau 10-20 Mars (4/7 jours)", 
          actif: false 
        },
        { 
          id: "4nds2", 
          nom: "DIARRA", 
          prenom: "MOUSTAPHA", 
          DateinscritLe: "18/03/2024", 
          definiLe: "28/03/2024", 
          creneau: "Créneau 14-24 Mars (6/7 jours)", 
          actif: true 
        },
        { 
          id: "5kjvx5", 
          nom: "SOUARE", 
          prenom: "AMINATA", 
          DateinscritLe: "20/03/2024", 
          definiLe: "30/03/2024", 
          creneau: "Créneau 16-26 Mars (5/7 jours)", 
          actif: true 
        },
        { 
          id: "6pjfddr8", 
          nom: "TRAORE", 
          prenom: "OUMAR", 
          DateinscritLe: "22/03/2024", 
          definiLe: "01/04/2024", 
          creneau: "Créneau 18-28 Mars (7/7 jours)", 
          actif: false 
        }
      ]
    },
    { 
      id: "2",
      nameRestaurant: "Restaurant Le Gourmet",
      sizeChildren: 4,
      img: "image322",
      children: [
        { 
          id: "1ll;p", 
          nom: "FALL", 
          prenom: "AÏCHA", 
          DateinscritLe: "12/03/2024", 
          definiLe: "22/03/2024", 
          creneau: "Créneau 10-20 Mars (4/7 jours)", 
          actif: true 
        },
        { 
          id: "l44unj", 
          nom: "TOURE", 
          prenom: "AMADOU", 
          DateinscritLe: "14/03/2024", 
          definiLe: "24/03/2024", 
          creneau: "Créneau 14-24 Mars (5/7 jours)", 
          actif: true 
        },
        { 
          id: "3ljnb087", 
          nom: "COULIBALY", 
          prenom: "MARIAM", 
          DateinscritLe: "17/03/2024", 
          definiLe: "27/03/2024", 
          creneau: "Créneau 18-28 Mars (7/7 jours)", 
          actif: true 
        },
        { 
          id: "4mbhgf", 
          nom: "SISSOKO", 
          prenom: "ALI", 
          DateinscritLe: "19/03/2024", 
          definiLe: "29/03/2024", 
          creneau: "Créneau 20-30 Mars (6/7 jours)", 
          actif: false 
        }
      ]
    },
    { 
      id: "3",
      nameRestaurant: "Restaurant La Table de Luxe",
      sizeChildren: 5,
      img: "image323",
      children: [
        { 
          id: "1kmlgh", 
          nom: "DIALLO", 
          prenom: "LASSINE", 
          DateinscritLe: "10/03/2024", 
          definiLe: "20/03/2024", 
          creneau: "Créneau 12-22 Mars (5/7 jours)", 
          actif: true 
        },
        { 
          id: "2m086tg", 
          nom: "BA", 
          prenom: "KADIATOU", 
          DateinscritLe: "12/03/2024", 
          definiLe: "22/03/2024", 
          creneau: "Créneau 14-24 Mars (6/7 jours)", 
          actif: false 
        },
        { 
          id: "3nbd754", 
          nom: "SOW", 
          prenom: "MOUSTAPHA", 
          DateinscritLe: "14/03/2024", 
          definiLe: "24/03/2024", 
          creneau: "Créneau 16-26 Mars (7/7 jours)", 
          actif: true 
        },
        { 
          id: "4jkfds3", 
          nom: "TALL", 
          prenom: "SADIO", 
          DateinscritLe: "16/03/2024", 
          definiLe: "26/03/2024", 
          creneau: "Créneau 18-28 Mars (4/7 jours)", 
          actif: true 
        },
        { 
          id: "5mnhb7", 
          nom: "CAMARA", 
          prenom: "SOUMARE", 
          DateinscritLe: "18/03/2024", 
          definiLe: "28/03/2024", 
          creneau: "Créneau 20-30 Mars (3/7 jours)", 
          actif: false 
        }
      ]
    }
  ]
  
  

  const data2=[
        { 
          id: "10", 
          nom: "kouadio Mermoz", 
          inscritLe: "13/03/2024", 
          creeLe: "N/A", 
          statut: "Pas encore défini"
        },
        { 
          id: "11", 
          nom: "Mermoz", 
          inscritLe: "13/03/2024", 
          creeLe: "N/A", 
          statut: "Pas encore défini"
        },
        { 
          id: "12", 
          nom: "Béranger", 
          inscritLe: "13/03/2024", 
          creeLe: "N/A", 
          statut: "Pas encore défini"
        },
        { 
          id: "13", 
          nom: "JUDICAËL YAO", 
          inscritLe: "13/03/2024", 
          creeLe: "N/A", 
          statut: "Pas encore défini"
        }
  ]
  
  export const metadata: Metadata = {
    title: "Liste des Turboys Bird ",
    description: "Liste Turboys Bird.",
  };


export default async function Page(){
    const turboysAssignes :TurboysAssignes[] = data1
    const turboysNotSlot :TurboysNotSlot[] = data2


    return <Content turboysAssignes={turboysAssignes} turboysNotSlot={turboysNotSlot}  />

}