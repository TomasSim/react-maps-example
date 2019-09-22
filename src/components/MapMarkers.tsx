import React from 'react';
import { Layer, Feature, Marker } from 'react-mapbox-gl';
import { useSelector } from 'react-redux';
import { LocationsState } from 'store/locationsStore';
import '../styles/MapMarkers.scss';

export const MapMarkers = () => {
    const { start, end, tempCoords }: LocationsState = useSelector(state => state);
    const markerImgUrl = 'http://www.sclance.com/pngs/location-marker-png/./location_marker_png_811422.png';
    console.log(tempCoords);
    return (
        tempCoords ? 
        <Marker
        coordinates={[tempCoords.lng, tempCoords.lat]}
        anchor="bottom">
        <img src={markerImgUrl} className="marker"/>
        </Marker>
        :  null
    ); 
};
