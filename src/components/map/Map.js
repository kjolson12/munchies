import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

import './Map.css';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1Ijoia2pvbHNvbjEyIiwiYSI6ImNrbTg5ZzdpajE1cWgyd3FyYnoxc3htc3gifQ.sdRWBnKsveNn3lSO3DRR8w'

const Map = ({ lng, lat }) => {
    const mapContainer = useRef();

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
            center: [lng, lat],
            zoom: 12
        });

        new mapboxgl.Marker({
            color: '#FDDB3A'
        }).setLngLat([lng, lat])
            .addTo(map);

    }, []);

    return (
        <div className="map-container" ref={mapContainer}></div>
    );
}

export default Map;