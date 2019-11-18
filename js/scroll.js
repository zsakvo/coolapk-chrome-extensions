$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  var scrollHeight = $(document).height();
  var windowHeight = $(this).height();
  if (scrollTop + windowHeight == scrollHeight) {
    window.postMessage({ act: "next" }, "*");
  }
});
