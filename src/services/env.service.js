export function apiToken() {
    return process.env.APP_API_TOKEN;
}

export function apiBaseURL() {
    return process.env.API_BASE_URL || 'https://api.appcenter.ms';
}