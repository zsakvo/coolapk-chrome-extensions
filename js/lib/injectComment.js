$(".to-top").toTop({
  right: 40,
  bottom: 40
});

$(".apk_right")[0].remove();
$(".apk_left_two_box")[0].remove();
$(".left_download")[0].remove();
$(".bread_nav")[0].remove();
$(".apk_topbar")[0].remove();
$("#footer").remove();

var apk_info = $(".apk_left_one")[0];
var width = $(window).width();
$(".apk_left_one").css({
  height: "264px",
  "margin-top": "20px",
  "padding-top": 0
});
if (width <= 1200) {
  $(".apk_left_two").css({ width: "100%" });
  $(".apk_left_one").css({
    width: "100%",
    position: ""
  });
  $(".under").remove();
} else {
  $(".apk_left_two").css({ width: "634px" });
  $(".apk_left_one").css({
    width: "244px",
    position: "fixed"
  });
}

window.onresize = function() {
  var width = $(window).width();
  if (width <= 1200) {
    $(".apk_left_two").css({ width: "100%" });
    $(".apk_left_one").css({
      width: "100%",
      position: ""
    });
    $(".under").remove();
  } else {
    $(".apk_left_two").css({ width: "634px" });
    $(".apk_left_one").css({
      width: "244px",
      position: "fixed"
    });
  }
};
