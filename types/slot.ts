export interface TurboysBird {
    id: string;
    nom: string;
    prenom: string;
    DateinscritLe: string; // Format "JJ/MM/AAAA"
    definiLe: string; // Format "JJ/MM/AAAA"
    creneau: string; // Texte décrivant le créneau
    actif: boolean;
  };






  export interface TurboysNotSlot{ 
    id: string, 
    nom: string, 
    inscritLe: string, 
    creeLe: string, 
    statut: string,
  }


  interface Child {
    id: string;
    nom: string;
    prenom: string;
    DateinscritLe: string;  // Date au format 'JJ/MM/AAAA'
    definiLe: string;       // Date au format 'JJ/MM/AAAA'
    creneau: string;       // Plage horaire du créneau
    actif: boolean;         // Statut actif ou non
  };
  
  export interface TurboysAssignes {
    id: string;
    nameRestaurant: string;
    sizeChildren: number;
    img: string;
    children: Child[];
  };
  
