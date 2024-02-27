var ip = "";

fetch("https://api.ipify.org/")
    .then(response => response.text())
    .then(data => {
        ip = data;
        console.log(ip);
    })
    .catch(error => {
        console.error('Hiba történt:', error);
    });

