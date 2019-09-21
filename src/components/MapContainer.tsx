import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import '../styles/MapContainer.scss';

export const MapContainer = () => {
    
    const Map = ReactMapboxGl({
        accessToken: 'pk.eyJ1IjoidG9tYXNzaW0iLCJhIjoiY2swdHZ0OTYzMGdhbTNjcDM5ZGx1OWFwMyJ9.gIpOD9QpXAAVy0Cwlph-Iw'
    });

    const pinLocation = (map, event) => {
        console.log(map, event);
    };

    return (
        <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={mapStyle}
        onClick={(map, event) => pinLocation(map, event)}
        >
            {/* <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer> */}
        </Map>
    );
};

const mapStyle = {
    borderRadius: '15px',
    height: '400px',
    width: '100%'
}
