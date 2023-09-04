$("button").click(function () {
  $("h1").css("color", "purple");
});
$("input").keypress(function (event) {
  $("h1").text(event.key);
});
$("h1").on("mouseover", function () {
  $("h1").css("color", "blue");
  setTimeout(function () {
    $("h1").css("color", "red");
  }, 1000);
});
