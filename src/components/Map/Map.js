import React, { useEffect, useState } from 'react';
import ReactDOMClient from 'react-dom/client';

import './Map.css';

import CustomInfoWindow from './CustomInfoWindow';

const DEFAULT_MAP_POSITION = { lat: 43.7181228, lng: -79.5428675 }

function Map() {
    const [currentMap, setCurrentMap] = useState(null);
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
    
    const initMap = async () => {
        const { Map } = await google.maps.importLibrary('maps');

        const newMap = new Map(document.getElementsByClassName('Map')[0], {
            zoom: 15,
            center: DEFAULT_MAP_POSITION,
            mapId: 'FOODIE_MAP_DEFAULT',
            mapTypeControl: false,
            streetViewControl: false,
        });

        setCurrentMap(newMap);
    }

    useEffect(() => {
        geolocalizeUser();
        initMap();
    }, []);

    const getFoodiePlaceTypes = (placeTypes) => {
        const foodiePlaceTypes = []
        placeTypes.forEach(placeType => {
            if (['restaurant', 'food', 'bar', 'cafe'].includes(placeType)) {
                foodiePlaceTypes.push(placeType);
            }
        });
        return foodiePlaceTypes;
    }

    const displayPlace = async (currentMap, event) => {
        const request = {
            placeId: event.placeId,
            fields: ['name', 'formatted_address', 'place_id', 'geometry', 'business_status', 'type', 'url', 'price_level', 'rating', 'user_ratings_total'],
        };
        const service = new google.maps.places.PlacesService(currentMap);

        service.getDetails(request, async (place, status) => {
            // Default Google Maps API behavior if place doesn't respect criteria
            if (status === google.maps.places.PlacesServiceStatus.OK && place?.geometry?.location && getFoodiePlaceTypes(place.types).length > 0) {
                const { InfoWindow } = await google.maps.importLibrary('maps');
                const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

                const customInfoWindowDiv = document.createElement('div');
                ReactDOMClient.createRoot(customInfoWindowDiv).render(<CustomInfoWindow placeDetails={place} />)
                const infoWindow = new InfoWindow({
                    content: customInfoWindowDiv,
                });

                const marker = new AdvancedMarkerElement({
                    position: place.geometry.location,
                    map: currentMap,
                });

                infoWindow.open({
                    anchor: marker,
                    map: currentMap,
                });
            }
        });
    };

    useEffect(() => {
        currentMap?.addListener('click', (event) => {
            if (event.placeId) {
                displayPlace(currentMap, event);
            }
        });
    }, [currentMap]);

    useEffect(() => {
        currentMap?.setCenter(geolocation);
    }, [currentMap, isGeolocalizing])

    return(
        <div className='Map'>
            <div id='map'></div>
        </div>
    );
}

export default Map;