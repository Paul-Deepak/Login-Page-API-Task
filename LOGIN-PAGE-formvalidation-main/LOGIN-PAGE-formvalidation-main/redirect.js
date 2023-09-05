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