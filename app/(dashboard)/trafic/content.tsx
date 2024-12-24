'use client';

import GoogleMapsAutocomplete from '@/components/default/GoogleMapsAutocomplete';
import { title } from '@/components/primitives';
import GoogleMap from '@/lib/googlemaps';

export default function Content() {
    return (
        <div className="w-full h-full flex flex-1 flex-col gap-4 lg:gap-6 mb-10">
            <div className="flex items-center">
                <h1 className={title({ size: 'h3', class: 'text-primary' })}>Trafic</h1>
            </div>
            <GoogleMap
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
                center={{ lat: 48.8566, lng: 2.3522 }}
                zoom={13}
                markers={[{ position: { lat: 48.8566, lng: 2.3522 }, title: 'Paris' }]}
                useCurrentLocation={true}
                onLocationFound={(position) => console.log('Position trouvée:', position)}
                onLocationError={(error) => console.error('Erreur:', error)}
            />
        </div>
    );
}
