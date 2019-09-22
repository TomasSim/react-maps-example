import React from 'react';
import '../styles/MarkerPopUp.scss';
import { PopUpPlacement } from './../models/popUpPlacement';
import { useSelector, useDispatch } from 'react-redux';
import { hidePopUp, cancelMarker } from './../store/locationsStore';

export const MarkerPopUp = () => {
    const dispatch = useDispatch();
    const popUp: PopUpPlacement = useSelector(state => state.popUpPlacement);
    
    const hide = () => {
        dispatch(hidePopUp());
    }

    return  (
        popUp ?
        <div className="pop-up-overlay">
            <ul className="marker-pop-up" style={{left: `${popUp.x}px`, top: `${popUp.y}px`}}>

                <li onClick={hide}>Start Point</li>

                <li onClick={hide}>Destination</li>

                <li onClick={() => dispatch(cancelMarker())} style={{color: 'red'}}>Cancel</li>

            </ul> 
        </div> : null
    );
}