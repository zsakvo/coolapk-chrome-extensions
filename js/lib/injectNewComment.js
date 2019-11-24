var id = "";
var areaExpand = false;

window.addEventListener(
  "message",
  function(e) {
    switch (e.data.act) {
      case "GET_ID":
        id = e.data.value;
        $(".submit-comment").css({ "pointer-events": "auto" });
        break;
      case "POST_RESULT":
        if (e.data.value == 1) {
          areaExpand = false;
          $(".comment-buttons").css({ display: "none" });
          $(".input-comment").css({
            width: "400px",
            height: "36px",
            "border-radius": "18px"
          });
          $(".input-comment").val("");
          $.snackbar({
            content: "评论发布成功！",
            timeout: 3000,
            style: "toast"
          });
          $(".snackbar").css({
            "background-color": "#00a667"
          });
        } else if (e.data.value == -1) {
          $.snackbar({
            content: "也许你还没登入，点我跳转~",
            timeout: 3000,
            style: "login-toast"
          });
          $(".snackbar").css({
            "background-color": "#ff4d4f"
          });
          $(".login-toast").bind("click", () => {
            window.location.href = "https://account.coolapk.com/";
          });
        } else {
          $.snackbar({
            content: "貌似出了一点点问题……",
            timeout: 3000,
            style: "toast"
          });
          $(".snackbar").css({
            "background-color": "#ff4d4f"
          });
        }
        break;
    }
  },
  false
);

$(".input-comment").bind("click", () => {
  if (!areaExpand) {
    window.postMessage({ act: "GET_DETAIL" }, "*");
    $(".input-comment").css({
      width: "560px",
      height: "56px",
      "border-radius": "4px"
    });
    $(".comment-buttons").css({ display: "flex" });
    areaExpand = true;
  }
});

var html = `
  <div class="comment-buttons-wrapper">
    <div class="comment-buttons" style="display:none;">
        <div class="submit-comment" style="pointer-events: none;">提交</div>
        <div class="cancel-submit">取消</div>
    </div>
</div>
  `;
$(".input-wrapper").append(html);
$(".cancel-submit").bind("click", () => {
  areaExpand = false;
  $(".comment-buttons").css({ display: "none" });
  $(".input-comment").css({
    width: "400px",
    height: "36px",
    "border-radius": "18px"
  });
});
$(".submit-comment").bind("click", () => {
  let value = $(".input-comment").val();
  let body = `--coolapk-web-by-zsakvo
Content-Disposition: form-data; name="message"

${value}
--coolapk-web-by-zsakvo
Content-Disposition: form-data; name="type"

comment
--coolapk-web-by-zsakvo
Content-Disposition: form-data; name="targetType"

apk
--coolapk-web-by-zsakvo
Content-Disposition: form-data; name="targetId"

${id}
--coolapk-web-by-zsakvo
`;
  window.postMessage({ act: "POST", body: body }, "*");
});
