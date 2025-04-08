export interface PerformanceCreneauId {
  livreurId: string;
  creneaux: CreneauItem[];
}

export interface CreneauItem {
  creneau: {
    debut: string; // format 'YYYY-MM-DD'
    fin: string;   // format 'YYYY-MM-DD'
  };
  progressions: Progression[];
}

export interface Progression {
  jour: string;
  progression: number;
  heure: number;
  commission: number;
}













// interface Progression {
//   jour: string;
//   progression: number;
//   heure: number;
//   commission: number;
// }

// interface Creneau {
//   creneau: {
//     debut: string;  // Date sous forme de chaîne (format ISO 8601)
//     fin: string;    // Date sous forme de chaîne (format ISO 8601)
//   };
//   progressions: Progression[];
// }

// interface PerformanceCreneauIdd {
//   livreurId: string;
//   creneaux: Creneau[];
// }