var ip = "";
var country = ""

fetch("https://api.ipify.org/")
    .then(response => response.text())
    .then(data => {
        ip = data;
        console.log(ip);
        fetch("https://api.ipify.org/")
            .then(response => response.json())
            .then(json => {
                country = json.country;
            });
        console.log(country);
    })
    .catch(error => {
        console.error('Hiba történt:', error);
    });

