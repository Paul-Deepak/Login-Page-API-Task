function sendreq() {
    let req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = this.responseText;
            localStorage.setItem('responsekey', response);
        }
    };
    req.open("GET", "https://random-data-api.com/api/v2/users?size=100", true);
    req.send();
}
function sendRequest() {
    return fetch("https://random-data-api.com/api/v2/users?size=100")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}
