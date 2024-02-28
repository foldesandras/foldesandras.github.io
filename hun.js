var ip = "";
var country = ""

fetch("https://api.ipify.org/")
    .then(response => response.text())
    .then(data => {
        ip = data;
        console.log(ip);
        fetch("http://ip-api.com/json/" + ip)
            .then(response => response.json())
            .then(json => {
                country = json.country;
            });
        console.log(country);
    })
    .catch(error => {
        console.error('Hiba történt:', error);
    });

