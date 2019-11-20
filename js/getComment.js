var fancyboxcss = document.createElement("link");
fancyboxcss.type = "text/css";
fancyboxcss.rel = "stylesheet";
fancyboxcss.href = chrome.extension.getURL("css/fancybox.css");
document
  .getElementsByTagName("head")
  .item(0)
  .appendChild(fancyboxcss);

var fancyboxjs = document.createElement("script");
fancyboxjs.src = chrome.extension.getURL("js/fancybox.js");
fancyboxjs.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(fancyboxjs);

var topjs = document.createElement("script");
topjs.src = chrome.extension.getURL("js/top.js");
topjs.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(topjs);

//注入 滚动监听
document.getElementsByTagName("body")[0].style.height = "auto";
var scrolljs = document.createElement("script");
scrolljs.src = chrome.extension.getURL("js/scroll.js");
scrolljs.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(scrolljs);

window.addEventListener(
  "message",
  function(e) {
    console.log(e.data);
    switch (e.data.act) {
      case "next":
        if (canScroll) {
          page++;
          getComment();
        }
        break;
    }
  },
  false
);

var apkInfo = document.getElementsByClassName("apk_left_one")[0];
var commentContent = document.getElementsByClassName("apk_left_two")[0];
var page = 1;
var id = window.location.href
  .replace(/.+com\/.+\//g, "")
  .replace(/\?from.+/g, "");
var icon = document.getElementsByClassName("apk_topbar")[0].childNodes[1].src;
var name =
  "<div>" +
  document
    .getElementsByClassName("detail_app_title")[0]
    .innerHTML.replace("<span", "</div><span")
    .replace("list_app_info", "app-version");
var info = document
  .getElementsByClassName("apk_topba_message")[0]
  .innerText.split("/");
var downloadNum = info[1].replace("下载", "");
var attentionNum = info[2].replace("人关注", "");
var commentNum = info[3].replace("个评论", "");
var canScroll = true;

//修改界面
function initViews() {
  document.getElementsByClassName("apk_right")[0].remove();
  document.getElementsByClassName("apk_topba_code")[0].remove();
  document.getElementsByClassName("apk_left_two_box")[0].remove();
  document.getElementsByClassName("left_download")[0].remove();
  document.getElementsByClassName("bread_nav")[0].remove();
  document.getElementsByClassName("apk_topbar")[0].remove();
  document.getElementById("footer").remove();
  document.getElementsByClassName("app_left")[0].style.width = "100%";
  apkInfo.style.width = "244px";
  apkInfo.style.position = "fixed";
  apkInfo.style.marginTop = "20px";
  apkInfo.style.height = "264px";
  apkInfo.style.paddingTop = 0;
  commentContent.style.width = "634px";
  commentContent.style.paddingTop = 0;
  commentContent.style.margin = "20px auto";
}

//初始化数据
function getComment() {
  canScroll = false;
  var url = `https://api.coolapk.com/v6/apk/commentList?id=${id}&listType=lastupdate_desc&page=${page}`;
  var loading = document.createElement("div");
  loading.className = "loading-datas";
  loading.innerText = "正在获取数据……";
  commentContent.appendChild(loading);
  chrome.runtime.sendMessage(url, datas => {
    console.log(datas);
    commentContent.lastChild.remove();
    if (datas.length != 0) {
      datas.forEach(data => {
        var avatar = data.userInfo.userAvatar;
        var username = data.username;
        var message = data.message;
        let time = getTime(data.lastupdate * 1000);
        let like = data.likenum;
        let reply = data.replynum;
        let favorite = data.forwardnum;
        let url = data.shareUrl;
        let pic = data.pic;
        let picArr = null;
        if (pic.length > 0) {
          picArr = data.picArr;
        }
        var commentBody = createComment(
          avatar,
          username,
          time,
          message,
          like,
          reply,
          favorite,
          url,
          picArr
        );
        commentContent.appendChild(commentBody);
      });
      canScroll = true;
    } else {
      canScroll = false;
      var finish = document.createElement("div");
      finish.className = "no-more-reply";
      finish.innerText = "没有更多数据啦";
      commentContent.appendChild(finish);
    }
  });
}

//创建评论
function createComment(
  avatar,
  name,
  time,
  message,
  like,
  reply,
  favorite,
  url,
  picArr
) {
  var wrapper = document.createElement("div");
  wrapper.className = "comment-wrapper";
  var msg = message.replace(
    '<a href="">查看更多</a>',
    '<a class="feed-link-url" target="_blank" href="' + url + '">查看更多</a>'
  );
  let picHtml = '<div class="message-pic-group">';
  if (picArr != null) {
    picArr.forEach(pic => {
      picHtml += `
    <div class="message-pic-item">
        <a data-fancybox="gallery" href="${pic}">
        <img src="${pic}" class="message-pic">
        </a>
    </div>
    `;
    });
  }
  picHtml += "</div>";
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
${picHtml}
<div class="comment-status">
  <div class="like"><a href="javascript:volid(0);">${like}</a></div>
  <div class="reply"><a target="_blank" href="${url}">${reply}</a></div>
  <div class="favorite"><a href="javascript:volid(0);">${favorite}</a></div>
</div>
`;

  picHtml += "</div>";
  wrapper.innerHTML = html;
  return wrapper;
}

//创建应用卡片
function createApkCard(icon, name, download, attention, comment) {
  var wrapper = document.createElement("div");
  wrapper.className = "apk-card-wrapper";
  var html = `
  <div class="apk-card">
    <div class="bg-pic">
        <img src="" alt="">
    </div>
    <div class="app-info">
        <img src="${icon}" alt="" class="app-icon">
        <div class="app-name">${name}</div>
    </div>
    <div class="app-details">
        <div class="detail-item"><div class="num">${download}</div>
        <div class="item">下载</div></div>
        <div class="detail-item"><div class="num">${attention}</div>
        <div class="item">关注</div></div>
        <div class="detail-item"><div class="num">${comment}</div>
        <div class="item">评论</div></div>
    </div>
    <div class="download-apk-wrapper">
        <div class="download-apk" onclick="onDownloadApk(1);">下载应用</div>
    </div>
</div>
  `;
  wrapper.innerHTML = html;
  return wrapper;
}

//计算时间
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

console.log(icon);
console.log(name);
console.log(info);
console.log(downloadNum);
console.log(attentionNum);
console.log(commentNum);
initViews();
var apkCard = createApkCard(icon, name, downloadNum, attentionNum, commentNum);
apkInfo.appendChild(apkCard);
getComment();
