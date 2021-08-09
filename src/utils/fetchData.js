let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (urlApi) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", urlApi, true);
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4) {
                xhttp.status === 200 ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error("Error", urlApi));
            }
        };
        // NOTE: Antes de terminar el proceso se debe enviar la solicitud.
        xhttp.send();
    });
};

module.exports = fetchData;
