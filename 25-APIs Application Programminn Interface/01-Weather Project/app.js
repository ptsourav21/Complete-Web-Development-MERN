const express = require("express");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
  const Url =
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=d316945face40dfd8707981a66f2917c&units=metric";
  https.get(Url, function (response) {
    console.log(response);
  });
  res.send("Server is up and running");
});

app.listen(3000, function () {
  console.log("Server is running");
});
