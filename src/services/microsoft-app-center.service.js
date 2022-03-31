import axios from 'axios';
import { apiBaseURL, apiToken } from './env.service.js';

const URL_API = apiBaseURL();
const DEFAULT_API_TOKEN = apiToken();

export function getBranches(ownerName, applicationName, token = DEFAULT_API_TOKEN) {
    const url = `${URL_API}/v0.1/apps/${ownerName}/${applicationName}/branches`;

    return axios.get(url, {
        headers: {
            'X-API-Token': token,
            'accept': 'application/json'
        }
    })
}