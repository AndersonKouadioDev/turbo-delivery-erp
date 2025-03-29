export interface restaurantUpdateCommission {
  restoId: string;
  type: 'POURCENTAGE' | 'FIXE';
  commission: number;
}
