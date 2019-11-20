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
  msg = transEmoji(msg);
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
  message = transEmoji(message);
  var reply = document.createElement("p");
  reply.className = "reply";
  reply.innerHTML = `<font color="#4BA965">${username}</font>
    <font color="black"> 回复 </font>
    <font color="#4BA965">${rusername}：</font><font>${message}</font>`;
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

function initFeedView() {
  var mb = msgBox[0];
  mb.innerHTML = "";
  mb.style.width = "600px";
  mb.style.textAlign = "left";
  mb.style.padding = 0;
  mb.appendChild(createMainFeed());
}

function createMainFeed(userAvatar, username, time, message) {
  var wrapper = document.createElement("div");
  wrapper.className = "feed-wrapper";
  var html = `
  <div id="feed-detail">
                        <div class="common-userinfo-group" style="display: flex;justify-content: space-between;margin: 0 16px;padding-top: 16px;">
    <div class="userinfo-item" style="display: flex;flex-direction: row;width: 100%;">
        <div class="avatar-item" style="height: 32px;width: 32px;">
            <img src="${userAvatar}" alt="" style="width: 100%;height: 100%;border-radius: 50%;margin-top: 4px;">
        </div>
        <div class="username-item" style="margin-left: 8px;">
            <p style="color: #212121;font-size: 15px;line-height: 150%;">${username}</p>
            <p style="color: #BDBDBD;font-size: 12px;line-height: 150%;">${time}&nbsp;<span style="padding-left: 15px;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIwNUE3NEZEOTE4QjExRThBMTI3QTUzNkQ2MjE3Njg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIwNUE3NEZFOTE4QjExRThBMTI3QTUzNkQ2MjE3Njg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjA1QTc0RkI5MThCMTFFOEExMjdBNTM2RDYyMTc2ODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjA1QTc0RkM5MThCMTFFOEExMjdBNTM2RDYyMTc2ODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7QqikCAAABEklEQVR42mL8//8/w0AAFnyS+/btiwVS7kDMCcR/SDDzOxDvcHJyWoJLESMuHwMtDQdSKyj0WDjQ8lXYJJjwaAqjQojiNAOfxexUsJiDnDiGxel/KBtEMxKwCKaGBUr/IStxQcEZIJ4AxD+BmJmA2r/QkCoAYlOyUzUUPAQmkGWkhC8wYQYSspiJCHNYgQaxk2ApSC0rIXVMDAMERi0etXjU4lGLRy0eHhb/BlaLP4k1EKr2N0WtTCiQAVZ1/tCWIzENAVCLVIYaFoMq9OVA/I/Ipg8oFNkosRgmxwz1BVXb7fji+CcV0tBPcixeSQWLV5Lck4C2n6KAlB8QC0ITDjEAFDXvgXgTvkYi40B12gACDAARDkP30DpcHAAAAABJRU5ErkJggg==) no-repeat; background-size: contain">三星Galaxy S9+</span></p>
        </div>
    </div>
    <div class="userinfo-follow-button">
        <a href="javascript:;" onclick="toApp()">关注</a>
    </div>
</div>
<div class="feed-message" style="margin: 16px;padding-bottom: 10px;">
    <p style="font-size: 16px;color: #212121;">${message}</p>
    </div>
<div class="message-image-group" style="margin: 0 16px;display: flex;flex-wrap: wrap;">
            <div class="message-image-item" style="overflow: hidden; width: 31%; height: 176px; margin: 1%;">
        <img class="message-image" src="http://image.coolapk.com/feed/2019/1119/12/435200_2510ff05_7615_4318@1920x934.jpeg.m.jpg" alt="" style="height: 176px; margin-left: -93px;">
    </div>
        <div class="message-image-item" style="overflow: hidden; width: 31%; height: 176px; margin: 1%;">
        <img class="message-image" src="http://image.coolapk.com/feed/2019/1119/12/435200_c0e0b7ca_7755_2348@3325x2494.jpeg.m.jpg" alt="" style="height: 176px; margin-left: -29.5px;">
    </div>
        </div>
<div class="feed-status" style="display: flex;justify-content: center;padding: 10px 0;border-top: 1px solid #F5F5F5;margin-top: 10px;border-bottom: 8px solid #F5F5F5;">
    <div class="feed-like" style="width: 33.3%;"><a style="padding-left: 20px;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQzNzU2MDFFOTJERDExRThCMkFBRjczOTIyMDQ0REExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQzNzU2MDFGOTJERDExRThCMkFBRjczOTIyMDQ0REExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDM3NTYwMUM5MkREMTFFOEIyQUFGNzM5MjIwNDREQTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDM3NTYwMUQ5MkREMTFFOEIyQUFGNzM5MjIwNDREQTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4zNPnzAAAC9ElEQVR42uyaTWgTQRTHt6XWWpQqilBFBdE2lR5qLxZPOSkqIqgXtRdFqApiBYmF0h68uR705AeCWqjWix5UUDyIBwUP4geCbVS8tGoFET9ail+N/zEvOLzMJptkZzJT+uDHZF6GbP47M2/ezG5FKpXypoJVTAshSyQSKncr6AcxMAqegRvgMvgepQDf9/+VlTpuDugDTfS5HmwAZ8BbsFtHj+gQsg40B3y3AFwAp0mk1UK6QrTZD7ptFrIaxJnvI/ilaNsLVtgq5LDCtwcsBw+Yfwb1jHVCloIdzPcS3AYjNOFH2PfrbRRyEFQx3ymQie9j4Br73rqhNQfsZb4PtJbINsrqM20T0gHmMp8IsROmVvYohFTRsJJNCDhrMkWJQsg2muiyXQSfXBNylNUnwUnTSWNJQpAwxmkRlO0meOOUkIAF8EQ50vjKEnpjFYrNzP0IPCzwp1IF8J6i4bIoe6RTkcHqnhv1lNY8BWtKFoLeWIiinbnFXuO6oZE0j65VV2qP9IBZinTkt8FpsQgckhczfrerUeyjBFBskGaH+NEvtHbkMzGHjhfxp7+BGnCE3cDt4FiWEIhYjOIWaCnwQlcpKcxn94libT44INUbsoYW9UQxIjI9YsImWf2Pao50FCnCpDUoAkzWHNmpiO8DYDhEWmLKGlk9qRLSyhpd8X2/PSD8lkNIrSI5TaqGVjVrNGzhsOIL8KDO4yBd1qTwJV0U0jhVhbyjhdL5oZXUcfhgYruxkvmGXBSyhMKv80JyRiyXhKgilpM9EmP1cb5guyrklff/TNnpoTUU5eGDKaujQwfnhcTyRSxXhKgi1mAuIT8Vi5ANtkWxvX3NG8kbqyegTd4x0ssAL0JcrE3DrlE8Y1zrpR/ZyfbYUzx3kYUMMCFiE7Mr5EXjXvbTXF12PigZy9g58Nzy+XIPXMopBPvzHyg2een3Rmy0O2CrJx0BBUYtiBGbFXE43EljcbzMf/4zuOulT3g2gq9BDadfc7LN/gowAKLJoYR52iBjAAAAAElFTkSuQmCC);-webkit-background-size: contain;background-size: contain;background-repeat: no-repeat;color: #757575;">21</a></div>
    <div class="feed-reply" style="width: 33.3%;">
        <a style="padding-left: 20px;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQzNzU2MDFBOTJERDExRThCMkFBRjczOTIyMDQ0REExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQzNzU2MDFCOTJERDExRThCMkFBRjczOTIyMDQ0REExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUQwNkYwRkY5MkQ0MTFFOEIyQUFGNzM5MjIwNDREQTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUQwNkYxMDA5MkQ0MTFFOEIyQUFGNzM5MjIwNDREQTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7+jBbFAAAEcElEQVR42uxaWUiVQRS+LpmZhYHaooS5JEUFRWBZJoRlSRGRD61EUIKWPZRp0WNEdFuopCStJ9se6qVCwhYwi3qqKGkvsgXbINsXDftOHmMcz/97/RevVzrwMffOzD//fHNmzpwz8we1tLR4eoME/SfCUlxc3PYzCpjGGAcMB2KB/lz+FXgLPAduA7VADdBo5/1er/dvGmqTRF8kucBSYAYQYlI9DBgEpHLd9cBv4AJQCZwEflrtS6hFAv2Q5APrgDgbY0HEsxk0tLuAMuB7VxsKtkBiNpI7/NI4B6f5MG6T2p7tmkZAIBzJbtaEmdCiewTcBV4BXzg/komPBlJofRo8nwRUsWZI4z8cIwISg5GcBSYaVGkCqoGjPOffddJkDJAFLOZp1UeoQwOWBuQAb2xPLZBIRHLFgEQzcAAYCcwBjvtAwsN1qO5cfnY/t6XLBH73CFtEQCIeyUUgWSi+DowHVgPPbKwNenYNt3VNKKd3XwLiLREBiQgkp4EEyXwDGbDhdQ4u9jreg7xCWQL3JcLKGtnDo6QK2f0CECh3aYOm6VUCPOEpq+5L1Je9wCqfNQJt5Bg8UOgiCVXoHYVC/kpe/J0TYTO7T6i7EyTKutF9KuN9RZdSINwXjeSzLVeFFuEmP/iCG9moqJIo7WXBgu9UJOwRedBGsx+INPMUb9LyN+ha0TWSy66CKocctk5WrFmFljcUWGBmtZYJI+IV1tFW1lyYw53+RWsR2CyY+zytv8vYk2ivEXQuit0GVc5BG9JmV+ICiTZXv0jIr6e+aHlZHAN1mFqZQjxxzMT9dkuMBui40IdMichUwYs9b9DoUxeJPDbIr+Y+qZIhrZFRWqUHmFbvDRqdBSxUwlinhMLhEwZl1JeHHGF26LNKJEUnYhInU7yxRYvZu0Pua0SSpak1RHvoZQ88LHmh/Y+WiAzUKn3ugUT0PkVajtn9LJ+MLFywSaUBgcRQJfJaK4sPJCKq1XrE8XObpJpEj3ZdFCNXxBGN3NfKUtHhaIPn7LooRq6II0RqtbIgwfdy0kUJc4tIDcfkqixx0UV57MoawW7diKlEh2vZqiuCvATBA7bropi5IrYXO0mlRoTKyQcp6CEuik9Ti+QU0KCfXKCzYwJpH6GRpgPjHVodOpctB5nQgCGiHMPoi3kysC2giLBWpMOxImglP5A0QmTofuKwUFQKMnkBQ4RlLXBL2AgPgsx2P62ZGMHVMScCrXzztN5f1EvuFnDZD9Ys3Sj4M41HQIYqTjfYyckA3PS0XtIkdAMJOryepOVd9TmwAhkiMQW4YbChFvChwBlgkaB+p0hIR1NH/jmGvn4wwKf0dD/R2WJXL0NJo3QZavWjgFgexDShjA630zHQLV0iohCi0aFrhyQ/GqmPPLXvtX350OWYnU3zWE/rlwsNfjqAmEck2sUcdr5FUT7hWM5GIcRlEjSdVqhBoGWNaNqhb0foRHwmL/L5HMJW8cs+eDrebXTV3ad2KtgrTxciWfsa6UnSa4j8EWAARdQwvUmpZI8AAAAASUVORK5CYII=);-webkit-background-size: contain;background-size: contain;background-repeat: no-repeat;color: #757575;">18</a>
    </div>
    <div class="feed-favorite">
        <a style="padding-left: 20px;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZFNzY0RkQxOTJERTExRThCMkFBRjczOTIyMDQ0REExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZFNzY0RkQyOTJERTExRThCMkFBRjczOTIyMDQ0REExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDM3NTYwMjQ5MkREMTFFOEIyQUFGNzM5MjIwNDREQTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkU3NjRGRDA5MkRFMTFFOEIyQUFGNzM5MjIwNDREQTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6oYCMmAAAEy0lEQVR42uyaaWhUVxTHJ0YjtuKGC7Qa1FC1bhMtBXfc0NIat1Ip7ri0LrW0onH5oCgoGoIbxtpSiYpoq+gHUfxQnX6IG7glxi0udcFojURrFSNu8X/wP/C8nvfmvZk3yUQ88GNm7r3vzv2/d5dzzkxSeXl54F2waoF3xKrH2kFmZqZd1YdgORjLz5ulOXjsp4CsrCx/hDjYVjDY8nk6aAqGVqWp1c8QEbYhoHdVEjLXoW5eVRHyOejvUD8AdK4KQub61KZShbRRFnMhOGOUfQ1aJbKQOUqfy4n5vZmJKiQVjDTK/gF/gj/AVaNuDLfjhBMyE6QYZdngOck26lJ4TUIJaQgmG2W3wUbL51xwx2gzmdcmjJAfwQdG2SpQZvlcxjKr1QY/JIoQGcwMo+w/sF5pu551VpvBPirWaYSTKHO7PUgnPUA9o1kO+F+5XET8YpzuDUAeOAwKSKFX57J6hEHXwUuQA5bTuBNoC2o4XCZTaLVDvdT9BGpZysI3JWwvwBWQD05RmLwvdiUEA69Pt7sHB90SJHl8aL+Duw71d7jwpzm0SeaBKYywlJdS0CHwK7gVrkgKR4gQkcrH+3EMU1W22TRwI0K75uBSjGHEPdAN8UiR+USyoxDxDJyzTIHDLkSIXQM9QRfQgdOqvXIOOZmsrWVgmCnkywgXPgKnOeCTHLz4UE+jvKNHSdhk3bWmqKBlbTZy6KOvtkaeKw3PgsUc9GU8xpceQt1AFE/3DNliKf8IdOSMaadM5beE7Kb/YzXZoZpBwPZKzCvIgv5OESG2UzsQZ9HJs5rsWNm46/MqUcgSsFApl/Nm9ltCcNdL8NILFCkXLYWYRZUgQtz/+Ur5KeYFHqguCsQUMzlwTrl4AcQsqyABMhNW2MQsxymi1NHXgph/KSZfC5wgZiVIirOINeBnm51O8gH3XTmNEHOXqk8o1eJe5MRJjPS5zsYjltN8oHU6vXGhU+4Xg62Ll32gq1K9AXxPv8gvT1zcjklKXR7PuUfKTY/sxqPRA96FPKV6IgOnZB9EJPPGaCL+Bl9oIjzFIxDzkB0dUKpHg+E+CJGs5Hil/C8wyI1L7yqwghjpKAOElOqLPgi5rJSFKPCx23kZcCmmjC6L5jTGahfYl9Wk3yfxCnWDii/2zCc/67xR1iEuMTu3W1PIaR+33oIKEcJgqG6EL4/FCpV4IzUeQoJKWX4chXh6KrEKifRE+oCDpI/HqVVhQoqxk5XatO0G9nML7U5CPBe62FxzW0laBOMhJN3FtPoM7KFf1E+pF4fvCIO4oIvp1dFXIcxvNXcQIlNgFzgGvnLRZQZjCok82zgIkXRQTT+fSFDJbxVAoCQLtlHUMI85MGn7DWP0TaCF8pQlFP/UbyGmTeEgvnXo5wR9pQyHHU4cxrE83ce4/O6ohaTbpGLsEmwiUH5ekx9G93LdSMp1hHKChy3Fmt7xunO5FdLYZTtxIEfxLsqasQY78n4HBzZOSXTYWRM/hRRFqL8GJjBlI/94eOnQVgKxzZz7Mj1vxvjdnoSstQkxZRBTA68zhLkBPclnZ08ZEbZifF6itJFz5TffhODgu875G2Lgf4Gx+yeB1z/eRJs2FQv/kpXG1M8VxiAHmAQpcbUFvv+/VoLZKwEGAHB5LvuxZIjfAAAAAElFTkSuQmCC);-webkit-background-size: contain;background-size: contain;background-repeat: no-repeat;color: #757575;">收藏</a>
    </div>
</div>

    <div class="feed-hot-reply">
       
    </div>

 </div>
  `;
  wrapper.innerHTML = html;
  return wrapper;
}
