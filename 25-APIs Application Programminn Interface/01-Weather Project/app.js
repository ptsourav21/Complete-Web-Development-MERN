
const express = require("express");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
  const Url =
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=d316945face40dfd8707981a66f2917c&units=metric";
  https.get(Url, function (response) {
    console.log(response.statusCode);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const img = weatherData.weather[0].icon;

      res.write("<p>The weather is "+desc+"</p>")
      res.write("<h1>The temperature in London is: "+temp+" Degree<h1>");
      res.write("<img src='https://openweathermap.org/img/wn/"+img+"@2x.png'>");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running");
});
