$(function() {
  $("#search-input").bind("keypress", function(event) {
    if (event.keyCode == "13") {
      window.location.href =
        "https://www.coolapk.com/search?q=" + $("#search-input").val();
    }
  });
});
