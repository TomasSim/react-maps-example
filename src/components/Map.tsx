import { compose, withProps } from 'recompose';
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps'
import React from 'react'
import '../styles/Map.scss';

export const Map = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div className="loading-element" />,
      containerElement: <div className="map-container" />,
      mapElement: <div className="map-element" />,
    }),
    withScriptjs,
    withGoogleMap
    )((props: any) => {
    return (
        <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} /> }
        </GoogleMap>
    );
});
