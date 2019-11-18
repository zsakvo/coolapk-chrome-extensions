removeAppOpen();
removeSideBar();
removeFooter();
contentWideMore();
var feedID = window.location.href
  .replace("https://www.coolapk.com/feed/", "")
  .replace(/.shareKey.+/g, "");
var page = 1;
var canScroll = true;
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

var scrolljs = document.createElement("script");
scrolljs.src = chrome.extension.getURL("js/scroll.js");
scrolljs.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(scrolljs);

window.addEventListener(
  "message",
  function(e) {
    switch (e.data.act) {
      case "next":
        if (canScroll) {
          page++;
          getReply(feedID, page);
        }
        break;
    }
  },
  false
);
getReply(feedID, page);
function getReply(feedID, page) {
  canScroll = false;
  var feedContent = document.getElementsByClassName("hot-reply-footer")[0];
  var loading = document.createElement("div");
  loading.className = "loading-datas";
  loading.innerText = "正在获取数据……";
  feedContent.appendChild(loading);
  chrome.runtime.sendMessage(
    "https://api.coolapk.com/v6/feed/replyList?id=" +
      feedID +
      "&listType=lastupdate_desc&page=" +
      page +
      "&discussMode=1&feedType=feed&blockStatus=0&fromFeedAuthor=0" +
      feedID,
    json => {
      console.log(json);
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

function removeAppOpen() {
  document.getElementsByClassName("app-open")[0].remove();
}

function removeSideBar() {
  document.getElementById("sidebar").remove();
}

function removeFooter() {
  document.getElementById("footer").remove();
}

function contentWideMore() {
  document.getElementsByClassName("content")[0].style.width = "700px";
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
  var wrapper = document.createElement("div");
  wrapper.className = "reply-body";

  var p = document.createElement("p");

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
  msg = transEmoji(msg);
  p.innerHTML = msg;

  wrapper.appendChild(p);
  return wrapper;
}

function createReplyBody(userAvatar, username, message, pic) {
  var wrapper = document.createElement("div");
  wrapper.className = "reply-wrapper";
  var userGroup = createUserInfoGroup(userAvatar, username);
  var msgBody = createFeedBody(message, pic);
  wrapper.appendChild(userGroup);
  wrapper.appendChild(msgBody);
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
  message = transEmoji(message);
  var reply = document.createElement("p");
  reply.className = "reply";
  reply.innerHTML =
    '<font color="#4BA965">' +
    username +
    "</font>" +
    '<font color="black"> 回复 </font>' +
    '<font color="#4BA965">' +
    rusername +
    "：</font><font>" +
    message +
    "</font>";
  wrapper.appendChild(reply);
  return wrapper;
}

function transEmoji(msg) {
  return msg
    .replace(
      /\[doge\]/g,
      '<img style="height: 18px; margin-bottom: -3px;" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_37_doge.png"></img>'
    )
    .replace(
      /\[疑问\]/g,
      '<img style="height: 18px; margin-bottom: -3px;" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_11_yiwen.png"></img>'
    )
    .replace(
      /\[墨镜滑稽\]/g,
      '<img style="height: 18px; margin-bottom: -3px;" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_67_mojinghuaji.png"></img>'
    )
    .replace(
      /\[受虐滑稽\]/g,
      '<img style="height: 18px; margin-bottom: -3px;" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_64_shounuehuaji.png"></img>'
    )
    .replace(
      /\[皱眉\]/g,
      '<img style="height: 18px; margin-bottom: -3px;" src="http://static.coolapk.com/emoticons/v9/coolapk_emotion_99_zhoumei.png"></img>'
    );
}