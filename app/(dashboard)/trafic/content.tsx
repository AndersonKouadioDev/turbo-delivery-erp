'use client';

import { useState } from 'react';
import CourierList from '@/components/dashboard/trafic/CourierList';
import MapContainer from '@/components/dashboard/trafic/MapContainer';
import { LivreurDisponible } from '@/types/models';
import { MapPin } from 'lucide-react';

export default function Content({ data }: { data: LivreurDisponible[] }) {
    const [selectedCourierId, setSelectedCourierId] = useState<string | null>(null);

    const handleCourierSelect = (courierId: string) => {
        setSelectedCourierId(courierId);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center space-x-3 mb-8">
                    <MapPin className="w-8 h-8 text-green-600 dark:text-green-500" />
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Suivi des livraisons en temps réel
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <CourierList
                            couriers={data}
                            selectedCourierId={selectedCourierId}
                            onCourierClick={handleCourierSelect}
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <MapContainer
                            couriers={data}
                            selectedCourierId={selectedCourierId}
                            onMarkerClick={handleCourierSelect}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

import { title } from '@/components/primitives';
import GoogleMap from '@/lib/googlemaps';

// <div className="w-full h-full flex flex-1 flex-col gap-4 lg:gap-6 mb-10">
//     <div className="flex items-center">
//         <h1 className={title({ size: 'h3', class: 'text-primary' })}>Trafic</h1>
//     </div>
//     <GoogleMap
//         apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
//         center={{ lat: 48.8566, lng: 2.3522 }}
//         zoom={13}
//         markers={markers}
//         useCurrentLocation={true}
//         onLocationFound={(position) => console.log('Position trouvée:', position)}
//         onLocationError={(error) => console.error('Erreur:', error)}
//     />
// </div>
