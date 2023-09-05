const express = require("express");
const app = express();
app.get("/", function (request, response) {
  response.send("<h1>Hello</h1>");
});
app.get("/contact", function (req, res) {
  res.send("Contact ME");
});
app.get("/about", function (req, res) {
  res.send("<h1>About ME</h1>");
});
app.get("/hobby", function (req, res) {
  res.send("<h1>Hobby</h1>");
});
app.listen(3000, function () {
  console.log("Server started");
});
