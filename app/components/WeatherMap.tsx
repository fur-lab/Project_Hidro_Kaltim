"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Props = {
    lat: number;
    lng: number;
};

export default function WeatherMap({ lat, lng }: Props) {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapRef.current || mapInstance.current) return;

        const map = L.map(mapRef.current).setView([lat, lng], 12);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
        }).addTo(map);

        L.marker([lat, lng]).addTo(map);

        mapInstance.current = map;

        requestAnimationFrame(() => {
            map.invalidateSize();
        });

        return () => {
            map.remove();
            mapInstance.current = null;
        };
    }, [lat, lng]);

    return <div ref={mapRef} className="h-[400px] w-full rounded-xl" />;
}