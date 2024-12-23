'use client';

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface GoogleMapProps {
    apiKey: string; // Clé API de Google Maps
    center: { lat: number; lng: number };
    zoom: number;
    className?: string; // Classe CSS optionnelle
    style?: React.CSSProperties;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ apiKey, center, zoom, className, style }) => {
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!mapRef.current) return;
  
      const loader = new Loader({
        apiKey,
        version: "weekly",
      });
  
      loader
        .load()
        .then(() => {
          if (mapRef.current) {
            new google.maps.Map(mapRef.current, {
              center,
              zoom,
            });
          }
        })
        .catch((error) => {
          console.error("Erreur lors du chargement de Google Maps:", error);
        });
  
      // Cleanup: Si nécessaire, pour éviter des comportements inattendus.
      return () => {
        mapRef.current = null;
      };
    }, [apiKey, center, zoom]);
  

    return <div ref={mapRef} className={`w-full h-full ${className || ''}`} style={{ minHeight: '600px', ...style }} />;
};

export default GoogleMap;
