import axios from 'axios';
const url = 'https://maps.googleapis.com/maps/api';

export const googleApi = {
    async findPlacesFromText(input: string) {
        try {
            return await axios.get(`${url}/place/findplacefromtext/json?input=${input}?inputtype=textquery`)
        } catch(ex) {
            return ex;
        }
    }
}