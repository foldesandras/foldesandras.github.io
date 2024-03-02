var ip = "";
var country = "";

fetch("https://api.ipify.org/")
  .then((response) => response.text())
  .then((data) => {
    ip = data;
    console.log(ip);
    fetch("https://api.iplocation.net/?ip=" + ip)
      .then((response) => response.json())
      .then((json) => {
        country = json.country_code2;
        console.log(country);
        if (country != "HU") {
          window.location = "https://foldesandras.github.io/refused/nhu.html";
        }
      })
      .catch((error) => {
        window.location = "https://github.com/foldesandras?tab=repositories";
      });
  })
  .catch((error) => {
    window.location = "https://github.com/foldesandras?tab=repositories";
  });
