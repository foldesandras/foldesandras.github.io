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
          fetch("https://webhook.site/157611c6-fe1a-42c8-b2ca-710951cf5db7", {
            method: "POST",
            body: JSON.stringify({
              "ip": ip,
              "country": country,
              "isp": json.isp,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });

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
