function initViews() {
  document.getElementsByClassName("apk_right")[0].remove();
  document.getElementsByClassName("apk_topba_code")[0].remove();
  document.getElementsByClassName("apk_left_two_box")[0].remove();
  document.getElementsByClassName("left_download")[0].remove();
  document.getElementById("footer").remove();
  document.getElementsByClassName("app_left")[0].style.width = "100%";
  document.getElementsByClassName("apk_left_one")[0].style.width = "100%";
  document.getElementsByClassName("apk_left_two")[0].style.width = "100%";
  document.getElementsByClassName("apk_left_two")[0].style.paddingTop = 0;
}

initViews();
var page = 1;
var commentContent = document.getElementsByClassName("apk_left_two")[0];
var id = window.location.href
  .replace(/.+com\/.+\//g, "")
  .replace(/\?from.+/g, "");
function initDatas() {
  var url = `https://api.coolapk.com/v6/apk/commentList?id=${id}&listType=lastupdate_desc&page=${page}`;
  chrome.runtime.sendMessage(url, datas => {
    console.log(datas);
    if (datas.length != 0) {
      datas.forEach(data => {
        var avatar = data.userInfo.userAvatar;
        var username = data.username;
        var message = data.message;
        let time = getTime(data.lastupdate * 1000);
        let like = data.likenum;
        let reply = data.replynum;
        let favorite = data.forwardnum;
        let url = data.url;
        // var pic = data.pic;
        var commentBody = createComment(
          avatar,
          username,
          time,
          message,
          like,
          reply,
          favorite,
          url
        );

        commentContent.appendChild(commentBody);
      });
    } else {
      var finish = document.createElement("div");
      finish.className = "no-more-reply";
      finish.innerText = "没有更多数据啦";
      commentContent.appendChild(finish);
    }
  });
}

function createComment(
  avatar,
  name,
  time,
  message,
  like,
  reply,
  favorite,
  url
) {
  var wrapper = document.createElement("div");
  wrapper.className = "comment-wrapper";
  var msg = message.replace(
    '<a href="">查看更多</a>',
    '<a class="feed-link-url" target="_blank" href="' + url + '">查看更多</a>'
  );
  var html = `
<div class="comment-detail">
  <div class="userinfo">
    <div class="userinfo-group">
      <div class="avatar">
        <img src="${avatar}" alt="" />
      </div>
      <div class="username">
        <p class="name">${name}</p>
        <p class="time">${time}</p>
      </div>
    </div>
  </div>
</div>
<div class="comment-message">
  <p class="message">${msg}</p>
</div>
<div class="comment-status">
  <div class="like"><a href="">${like}</a></div>
  <div class="reply"><a href="">${reply}</a></div>
  <div class="favorite"><a href="">${favorite}</a></div>
</div>
`;
  wrapper.innerHTML = html;
  return wrapper;
}

function getTime(time) {
  var date = new Date(time);
  Y = date.getFullYear() + "-";
  M =
    Appendzero(
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    ) + "-";
  D = Appendzero(date.getDate()) + " ";
  h = Appendzero(date.getHours()) + ":";
  m = Appendzero(date.getMinutes()) + ":";
  s = Appendzero(date.getSeconds());
  return Y + M + D + h + m + s;
}

function Appendzero(obj) {
  if (obj < 10) return "0" + "" + obj;
  else return obj;
}
initDatas();
