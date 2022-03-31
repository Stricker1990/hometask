import axios from 'axios';
import { apiToken } from './env.service.js';

const URL_API = 'https://api.appcenter.ms/v0.1'; //TODO: provide posibility ovveride URL_API from environment variables
const API_TOKEN = apiToken();

export function getBranches(ownerName, applicationName) {
    const url = `${URL_API}/apps/${ownerName}/${applicationName}/branches`;

    return axios.get(url, {
        headers: {
            'X-API-Token': API_TOKEN,
            'accept': 'application/json'
        }
    })
}