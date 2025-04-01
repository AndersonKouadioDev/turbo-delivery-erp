export interface JourTravaille {
  jourTravaille: number;
  jourNonTravaille: number;
}

export interface Creneau {
  debut: string;  // Utiliser Date si tu veux une vraie gestion de date
  fin: string;
}

export interface Livreur {
  id: string;
  nomComplet: string;
  dateInscrit: string;  // Utiliser Date si tu veux une vraie gestion de date
  dateDefiniEmploiTemps: string;  // Utiliser Date si tu veux une vraie gestion de date
  jour: JourTravaille;
  creneauVM: Creneau;
  creneauIndisponible: string;
  dateNonDefini: string;
  disponibilite: boolean;
  disponibiliteCreneau: boolean;
}
