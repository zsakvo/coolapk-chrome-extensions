$(".to-top").toTop({
  right: 40,
  bottom: 40
});

var width = $(window).width();
if (width <= 1000) {
  $(".mobile-display").remove();
  $("#feed-detail").css({ "margin-top": "20px" });
}

window.onresize = function() {
  var width = $(window).width();
  if (width <= 1000) {
    $(".mobile-display").remove();
    $("#feed-detail").css({ "margin-top": "20px" });
  }
};
