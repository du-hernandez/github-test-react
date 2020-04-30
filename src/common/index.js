const BASE_URL = 'https://api.github.com/';
// gists/public?page=6&per_page=15

export const fetchGeneric = (Method, URL, data = '') => {
    if (Method === 'POST') {
        return fetch(BASE_URL + URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    } else {
        if (Method === 'GET') {
            return fetch(BASE_URL + URL + data)
                .then(res => res.json())
        }
    }
}