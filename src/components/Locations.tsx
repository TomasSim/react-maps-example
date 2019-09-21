import React from 'react';
import '../styles/Locations.scss'
import { googleApi } from 'apis/google-maps-api';

export const Locations = () => {
    const searchPlaces = async (e: any) => {
        const data = await googleApi.findPlacesFromText(e.target.value);
        console.log(data);
    }
    
    return  (
        <ul className="locations">
            <li>
                <input type="text" placeholder="Choose starting point..." onInput={searchPlaces}/>
            </li>
            <li>
                <input type="text" placeholder="Choose destination..."/>
            </li>
        </ul>
    );
}