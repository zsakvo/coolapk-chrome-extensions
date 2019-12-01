$(".to-top").toTop({
  right: 40,
  bottom: 96
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

function takeLike(liked, id, el) {
  if (!liked) {
    window.postMessage({ act: "takeLike", id: id }, "*");
    el.style.backgroundImage =
      "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC/xhBQAAAY9JREFUaAXtmGuSwiAQhNXylF7AM3kBr6lOGRJoZggkMzyq8Mca2IHub5plSy+X+eqrA1czO+/nJ9j78bLT+gnZbI4QPpER0M3XqPKcgjxhQD+RXKPKydRPxHU9F9jV77zbg1DnlbvPMemCpLrMwaTqObeJOV0QFELzOMb6E2M9EMXuHuHRA0F1w+6jFI11QBqnoQeCLaqchg5IB2nogGAajcY6fyO++QbHiuTvvofiZ41jVbqH0CjdRASR4galFhA4A38chNkspa/+O9A/DoLOaqSBmt5Y/jwCxN4a/rEGCOdp0Y1BuGLe+jZbA8Kpob9FOzxaWOQWD/AegvRuONHo7f8IVyQdGa62RRM8f3IiXlELj6WaMkjpTo3rJ0jjACL5mUjUEuuJnZty3ETgVh0XBE7ABIGGNB/ORKpGsHNjkZcxE4Eba1wQ5jiMmcgEYTrQ25R8tDJuihWmpHZdlPmQuXf4LUrmokwLNmXMjUVCciI2Nsx2DRMhmZ5TEdIg2zEIzdKrJ6AEwN/s/NlfB74D8VqhE3cWnQAAAABJRU5ErkJggg==)";
    el.style.color = "#00a667";
  } else {
    window.postMessage({ act: "takeUnlike", id: id }, "*");
    el.style.backgroundImage =
      "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQzNzU2MDFFOTJERDExRThCMkFBRjczOTIyMDQ0REExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQzNzU2MDFGOTJERDExRThCMkFBRjczOTIyMDQ0REExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDM3NTYwMUM5MkREMTFFOEIyQUFGNzM5MjIwNDREQTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDM3NTYwMUQ5MkREMTFFOEIyQUFGNzM5MjIwNDREQTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4zNPnzAAAC9ElEQVR42uyaTWgTQRTHt6XWWpQqilBFBdE2lR5qLxZPOSkqIqgXtRdFqApiBYmF0h68uR705AeCWqjWix5UUDyIBwUP4geCbVS8tGoFET9ail+N/zEvOLzMJptkZzJT+uDHZF6GbP47M2/ezG5FKpXypoJVTAshSyQSKncr6AcxMAqegRvgMvgepQDf9/+VlTpuDugDTfS5HmwAZ8BbsFtHj+gQsg40B3y3AFwAp0mk1UK6QrTZD7ptFrIaxJnvI/ilaNsLVtgq5LDCtwcsBw+Yfwb1jHVCloIdzPcS3AYjNOFH2PfrbRRyEFQx3ymQie9j4Br73rqhNQfsZb4PtJbINsrqM20T0gHmMp8IsROmVvYohFTRsJJNCDhrMkWJQsg2muiyXQSfXBNylNUnwUnTSWNJQpAwxmkRlO0meOOUkIAF8EQ50vjKEnpjFYrNzP0IPCzwp1IF8J6i4bIoe6RTkcHqnhv1lNY8BWtKFoLeWIiinbnFXuO6oZE0j65VV2qP9IBZinTkt8FpsQgckhczfrerUeyjBFBskGaH+NEvtHbkMzGHjhfxp7+BGnCE3cDt4FiWEIhYjOIWaCnwQlcpKcxn94libT44INUbsoYW9UQxIjI9YsImWf2Pao50FCnCpDUoAkzWHNmpiO8DYDhEWmLKGlk9qRLSyhpd8X2/PSD8lkNIrSI5TaqGVjVrNGzhsOIL8KDO4yBd1qTwJV0U0jhVhbyjhdL5oZXUcfhgYruxkvmGXBSyhMKv80JyRiyXhKgilpM9EmP1cb5guyrklff/TNnpoTUU5eGDKaujQwfnhcTyRSxXhKgi1mAuIT8Vi5ANtkWxvX3NG8kbqyegTd4x0ssAL0JcrE3DrlE8Y1zrpR/ZyfbYUzx3kYUMMCFiE7Mr5EXjXvbTXF12PigZy9g58Nzy+XIPXMopBPvzHyg2een3Rmy0O2CrJx0BBUYtiBGbFXE43EljcbzMf/4zuOulT3g2gq9BDadfc7LN/gowAKLJoYR52iBjAAAAAElFTkSuQmCC)";
    el.style.color = "#757575";
  }
}
