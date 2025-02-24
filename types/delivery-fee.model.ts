export interface DeliveryFee {
    id: string;
    zone: string;
    distanceDebut: number;
    distanceFin: number;
    prix: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface DeliveryFeeFormData {
    zone: string;
    distanceDebut: number;
    distanceFin: number;
    prix: number;
}

export interface DeliveryFeesState {
    fees: DeliveryFee[];
    isLoading: boolean;
    error: string | null;
    selectedFee: DeliveryFee | null;
}

export interface DeliveryFeesViewModel {
    fees: DeliveryFee[];
    isLoading: boolean;
    error: string | null;
    selectedFee: DeliveryFee | null;
    createFee: (data: DeliveryFeeFormData) => Promise<void>;
    updateFee: (id: string, data: DeliveryFeeFormData) => Promise<void>;
    deleteFee: (id: string) => Promise<void>;
    selectFee: (fee: DeliveryFee | null) => void;
}
