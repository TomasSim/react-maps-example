import React, { useState } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import '../styles/MapContainer.scss';
import { MapMarkers } from './MapMarkers';
import { useDispatch } from 'react-redux';
import { setStartLocation, showPopUp } from 'store/locationsStore';
import { MarkerPopUp } from './MarkerPopUp';

const MapContainer = () => {
    const dispatch = useDispatch();

    const Map = ReactMapboxGl({
        accessToken: 'pk.eyJ1IjoidG9tYXNzaW0iLCJhIjoiY2swdHZ0OTYzMGdhbTNjcDM5ZGx1OWFwMyJ9.gIpOD9QpXAAVy0Cwlph-Iw'
    });

    const showMarkerPopUp = (map, event) => {
        const location = { lat: event.lngLat.lat, lng: event.lngLat.lng };
        const popUpPostion = { x: event.point.x, y: event.point.y };

        console.log(event);
        dispatch(showPopUp(popUpPostion, location));
    }

    return (
        <section className="map-holder">
            <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={mapStyle}
            onClick={(map, event) => showMarkerPopUp(map, event)}
            >
                <MapMarkers></MapMarkers>
            </Map>

            <MarkerPopUp/>
        </section>
    );
};

const mapStyle = {
    borderRadius: '15px',
    height: '400px',
    width: '100%'
}

export default React.memo(MapContainer);
