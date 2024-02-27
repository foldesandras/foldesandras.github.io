const ip = "";

fetch("https://api.ipify.org/")
    .then(response => response.text())
    .then(data => {
        ip = data;
    })
    .catch(error => {
        console.error('Hiba történt:', error);
    });

document.write(ip);