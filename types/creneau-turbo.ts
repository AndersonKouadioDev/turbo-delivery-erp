


export interface JourTravaille {
    jourTravaille: number;
    jourNonTravaille: number;
  };


  export interface Creneau {
    jourDebut: string;  // Utiliser Date si tu veux une vraie gestion de date
    jourFin: string;
  }


  export interface  Livreur {
    id: string;
    nomComplet: string;
    dateInscrit: string; // Utiliser Date si tu veux une vraie gestion de date
    dateDefiniEmploiTemps: string; // Utiliser Date si tu veux une vraie gestion de date
    jour: JourTravaille;
    creneauVM: Creneau;
    creneauIndisponible: string;
    dateNonDefini: string;
    disponibilite: boolean;
    disponibiliteCreneau: boolean;
  };

  export interface Restaurant  {
    nombreLivreur: number;
    nomRestaurant: string;
    livreurs: Livreur[];
  };