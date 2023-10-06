import React, { useEffect, useState } from 'react';

import './Map.css';

const DEFAULT_MAP_POSITION = { lat: 43.7181228, lng: -79.5428675 }

function Map() {
    const [map, setMap] = useState(null);
    const [geolocation, setGeolocation] = useState(null);
    const [isGeolocalizing, setIsGeolocalizing] = useState(true);

    const geolocalizeUser = () => {
        if ('geolocation' in navigator) {
            // Prompt user for permission to access their location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setGeolocation({ lat: position.coords.latitude, lng: position.coords.longitude })
                },
                (error) => {
                    console.error('Error getting user location:', error);
                    setIsGeolocalizing(false);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            setIsGeolocalizing(false);
        }
    }
    
    const initMap = async() => {
        const { Map } = await google.maps.importLibrary('maps');

        const newMap = new Map(document.getElementsByClassName('Map')[0], {
            zoom: 4,
            center: DEFAULT_MAP_POSITION,
            mapId: 'FOODIE_MAP_DEFAULT',
            mapTypeControl: false,
            streetViewControl: false,
        });

        setMap(newMap);
    }

    useEffect(() => {
        geolocalizeUser();
        initMap();
    }, []);

    const initMarker = async() => {
        const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

        const marker = new AdvancedMarkerElement({
            map: map,
            position: geolocation ? geolocation : DEFAULT_MAP_POSITION,
            title: 'Uluru',
        });
    }

    useEffect(() => {
        initMarker();
    }, [map, isGeolocalizing]);

    return(
        <div className='Map'>
            <div id='map'></div>
        </div>
    );
}

export default Map;