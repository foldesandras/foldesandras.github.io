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
                country = json.countryCode;
                console.log(country);
                if (country != "HU") {
                    window.location = "https://foldesandras.github.io/refused/nhu.html"
                }
            });
    })
    .catch(error => {
        console.error('Hiba történt:', error);
    });

