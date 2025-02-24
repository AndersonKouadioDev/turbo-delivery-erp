export interface DeliveryFee {
    id: string;
    zone: string;
    distanceDebut: number;
    distanceFin: number;
    prix: number;
    commission: number;
    createdAt?: string;
    updatedAt?: string;
}
