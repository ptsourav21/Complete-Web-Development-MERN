const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const city = req.body.cityName;
  const appid = "d316945face40dfd8707981a66f2917c";
  const unit = "metric";
  const Url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    appid +
    "&units=" +
    unit +
    "";
  https.get(Url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const img = weatherData.weather[0].icon;

      res.write("<p>The weather is " + desc + "</p>");
      res.write("<h1>The temperature in "+city+" is: " + temp + " Degree<h1>");
      res.write(
        "<img src='https://openweathermap.org/img/wn/" + img + "@2x.png'>"
      );
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running");
});
