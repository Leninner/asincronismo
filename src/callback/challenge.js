let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetchData(urlApi, callBack) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlApi, true);
    xhttp.onreadystatechange = (event) => {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callBack(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error("Error" + urlApi);
                return callBack(error, null);
            }
        }
    };
    xhttp.send();
}
