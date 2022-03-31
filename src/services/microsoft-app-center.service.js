import axios from 'axios';
import { apiBaseURL, apiToken } from './env.service.js';

const URL_API = apiBaseURL();
const API_TOKEN = apiToken();

export function getBranches(ownerName, applicationName) {
    console.log(URL_API);
    const url = `${URL_API}/v0.1/apps/${ownerName}/${applicationName}/branches`;

    return axios.get(url, {
        headers: {
            'X-API-Token': API_TOKEN,
            'accept': 'application/json'
        }
    })
}