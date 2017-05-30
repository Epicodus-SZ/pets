$(function() {
  $("#darkLink").click(function() {
    $("body").removeClass();
    $("body").addClass("DarkTheme");
  });
  $("#lightLink").click(function() {
    $("body").removeClass();
    $("body").addClass("LightTheme");
  });
});
