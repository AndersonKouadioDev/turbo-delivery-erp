interface GainDetail {
  code: string;
  frais: number;
  commission: number;
  date: string; // ISO format
}

interface Gain {
  solde: number;
  gains: GainDetail[];
}

interface JourGain {
  date: string; // e.g. "2025-04-08"
  jour: string; // e.g. "LUNDI"
  gain: Gain;
}

interface PerformanceApercuGlobalGain {
  solde: number;
  gains: JourGain[];
}
