async function sendRequest() {
    return fetch("https://random-data-api.com/api/v2/users?size=100")
        .then(response => {
            if (!response.ok) {
                throw new Error('Not ok');
            }
            return response.json();
        });
}
