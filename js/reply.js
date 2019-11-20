var feedID = window.location.href
  .replace("https://www.coolapk.com/feed/", "")
  .replace(/.shareKey.+/g, "");
var page = 1;
var canScroll = true;
var feedContentDom;
var fancyboxcss = document.createElement("link");
fancyboxcss.type = "text/css";
fancyboxcss.rel = "stylesheet";
fancyboxcss.href = chrome.extension.getURL("css/fancybox.css");
document
  .getElementsByTagName("head")
  .item(0)
  .appendChild(fancyboxcss);

var fancyboxjs = document.createElement("script");
fancyboxjs.src = chrome.extension.getURL("js/lib/fancybox.js");
fancyboxjs.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(fancyboxjs);

var scrolljs = document.createElement("script");
scrolljs.src = chrome.extension.getURL("js/lib/scroll.js");
scrolljs.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(scrolljs);

var topjs = document.createElement("script");
topjs.src = chrome.extension.getURL("js/lib/toTop.js");
topjs.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(topjs);

var topElement = document.createElement("div");
topElement.className = "to-top";
document.getElementById("feed-main").appendChild(topElement);

var injectTopjs = document.createElement("script");
injectTopjs.src = chrome.extension.getURL("js/lib/injectTop.js");
injectTopjs.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(injectTopjs);

window.addEventListener(
  "message",
  function(e) {
    switch (e.data.act) {
      case "next":
        if (canScroll) {
          page++;
          getReply(feedContentDom, feedID, page);
        }
        break;
    }
  },
  false
);

var msgBox = document.getElementsByClassName("msg_box");
if (msgBox.length == 0) {
  document.getElementsByClassName("app-open")[0].remove();
  document.getElementById("sidebar").remove();
  document.getElementById("footer").remove();
  feedContentDom = document.getElementsByClassName("hot-reply-footer")[0];
  getReply(feedContentDom, feedID, page);
} else {
  var feedUrl = `
  https://api.coolapk.com/v6/feed/detail?id=${feedID}
  `;
  chrome.runtime.sendMessage(feedUrl, data => {
    let shareUrl = data.shareUrl;
    window.location.href = shareUrl;
  });
}

function getReply(feedContent, feedID, page) {
  canScroll = false;
  var loading = document.createElement("div");
  loading.className = "loading-datas";
  loading.innerText = "正在获取数据……";
  feedContent.appendChild(loading);
  chrome.runtime.sendMessage(
    `https://api.coolapk.com/v6/feed/replyList?id=${feedID}&listType=lastupdate_desc&page=${page}&discussMode=1&feedType=feed&blockStatus=0&fromFeedAuthor=0`,
    json => {
      feedContent.lastChild.remove();
      var datas = json;
      if (datas.length != 0) {
        datas.forEach(data => {
          var userAvatar = data.userAvatar;
          var username = data.username;
          var message = data.message;
          var pic = data.pic;
          var replyBody = createReplyBody(userAvatar, username, message, pic);
          if (data.replyRows.length > 0) {
            let deepReplyWrapper = document.createElement("div");
            deepReplyWrapper.className = "deep-reply-wrapper";
            data.replyRows.forEach(element => {
              let username = element.username;
              let rusername = element.rusername;
              let message = element.message;
              let pic = element.pic;
              let div = createReplyDeepBody(username, rusername, message, pic);
              deepReplyWrapper.appendChild(div);
            });
            replyBody.appendChild(deepReplyWrapper);
          }
          feedContent.appendChild(replyBody);
        });
        canScroll = true;
      } else {
        canScroll = false;
        var finish = document.createElement("div");
        finish.className = "no-more-reply";
        finish.innerText = "没有更多数据啦";
        feedContent.appendChild(finish);
      }
    }
  );
}

function createUserInfoGroup(avatar, userName) {
  var userInfoDiv = document.createElement("div");
  userInfoDiv.className = "reply-userinfo";

  var avatarDiv = document.createElement("div");
  avatarDiv.className = "reply-avatar";

  var img = document.createElement("img");
  img.src = avatar;

  var usernameDiv = document.createElement("div");
  usernameDiv.className = "reply-username";

  var p = document.createElement("p");
  p.innerText = userName;

  usernameDiv.appendChild(p);

  avatarDiv.appendChild(img);
  userInfoDiv.appendChild(avatarDiv);
  userInfoDiv.appendChild(usernameDiv);
  return userInfoDiv;
}

function createFeedBody(msg, pic) {
  if (msg.indexOf("[图片]") != -1) {
    msg = msg.replace(
      "[图片]",
      '<a data-fancybox="gallery" href="' +
        pic +
        '"><font color="#0F9D58">查看图片</font></a>'
    );
  } else {
    if (pic.length != 0) {
      msg +=
        '<a data-fancybox="gallery" href="' +
        pic +
        '"><font style="margin: 0 6px;" color="#0F9D58" >查看图片</font></a>';
    }
  }
  msg = transEmoji(msg, "-3px");
  var wrapper = `
  <div class="reply-body"><p>${msg}</p></div>
  `;
  return wrapper;
}

function createReplyBody(userAvatar, username, message, pic) {
  var wrapper = document.createElement("div");
  wrapper.className = "reply-wrapper";
  var userGroup = `
  <div class="reply-userinfo">
    <div class="reply-avatar">
        <img src="${userAvatar}" alt="">
    </div>
    <div class="reply-username">
        <p>${username}</p>
    </div>
</div>
  `;
  var msgBody = createFeedBody(message, pic);
  wrapper.innerHTML = userGroup + msgBody;
  return wrapper;
}

function createReplyDeepBody(username, rusername, message, pic) {
  var wrapper = document.createElement("div");
  wrapper.className = "deep-reply";
  if (message.indexOf("[图片]") != -1) {
    message = message.replace(
      "[图片]",
      '<a data-fancybox="gallery" href="' +
        pic +
        '"><font color="#0F9D58">查看图片</font></a>'
    );
  } else {
    if (pic.length != 0) {
      message +=
        '<a data-fancybox="gallery" href="' +
        pic +
        '"><font style="margin: 0 6px;" color="#0F9D58" >查看图片</font></a>';
    }
  }
  message = transEmoji(message, "-3px");
  var reply = document.createElement("p");
  reply.className = "reply";
  reply.innerHTML = `<font color="#4BA965">${username}</font>
    <font color="black"> 回复 </font>
    <font color="#4BA965">${rusername}：</font><font>${message}</font>`;
  wrapper.appendChild(reply);
  return wrapper;
}
