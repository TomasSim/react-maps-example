import React from 'react';
import '../styles/MainPage.scss'
import MapContainer from './MapContainer';
import { Locations } from './Locations';

export const MainPage = () => {
    return  (
        <main>

            <div className="left-side">
               <Locations />
            </div>

            <div className="right-side">
                <MapContainer />
            </div>

        </main>
    );
}