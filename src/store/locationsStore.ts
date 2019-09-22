import { Coordinates } from './../models/coordinates';
import { PopUpPlacement } from 'models/popUpPlacement';

export enum LocationActions {
    setStart = 'SET_START_LOCATION',
    setEnd = 'SET_END_LOCATION',
    showPopUp = 'SHOW_POP_UP',
    hidePopUp = 'HIDE_POP_UP',
    cancelMarker = 'CANCEL_MARKER'
}

export const setStartLocation = (coords: Coordinates)  => {
    return { type: LocationActions.setStart, coords }
};

export const setEndLocation = (coords: Coordinates)  => {
    return { type: LocationActions.setEnd, coords };
}

export const showPopUp = (placement: PopUpPlacement, tempCoords: Coordinates)  => {
    return { type: LocationActions.showPopUp, placement, tempCoords }
};

export const hidePopUp = ()  => {
    return { type: LocationActions.cancelMarker }
};

export const cancelMarker = ()  => {
    return { type: LocationActions.cancelMarker }
};

export interface LocationsState {
    tempCoords: Coordinates,
    start: Coordinates,
    end: Coordinates,
    popUpPlacement: PopUpPlacement
}

const initialState: LocationsState = {
    tempCoords: undefined,
    start: undefined,
    end: undefined,
    popUpPlacement: undefined
}

export const locationsReducer = (state = initialState, action): LocationsState => {
    switch(action.type) {
        case LocationActions.setStart: {
            return { 
                ...state, 
                start: { lat: action.coords.lat, lng: action.coords.lng }
            }
        }
        case LocationActions.setEnd: {
            return { 
                ...state, 
                end: { lat: action.coords.lat, lng: action.coords.lng }
            }
        }
        case LocationActions.showPopUp: {
            return { 
                ...state, 
                popUpPlacement: action.placement,
                tempCoords: action.tempCoords
            }
        }
        case LocationActions.hidePopUp: {
            return { 
                ...state, 
                popUpPlacement: undefined
            }
        }
        case LocationActions.cancelMarker: {
            return initialState;
        }
        default: return state
    }
}