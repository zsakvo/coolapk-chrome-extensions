function onBeforeSendHeadersCallback(details) {
  for (let i = 0; i < details.requestHeaders.length; i++) {
    if (details.requestHeaders[i].name !== "User-Agent") {
      continue;
    }
    details.requestHeaders[i].value =
      "Mozilla/5.0 (Linux; Android 10; H8296 Build/52.1.A.0.532; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/79.0.3945.116 Mobile Safari/537.36 (#Build; Sony; H8296; 52.1.A.0.532; 10) +CoolMarket/10.0-beta6";
    break;
  }

  return {
    requestHeaders: details.requestHeaders
  };
}

function bindOnBeforeSendHeaders() {
  chrome.webRequest.onBeforeSendHeaders.addListener(
    onBeforeSendHeadersCallback,
    { urls: ["<all_urls>"] },
    ["blocking", "requestHeaders"]
  );
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  switch (request.method) {
    case "GET":
      fetch(request.url, {
        method: "GET",
        headers: [
          ["X-Requested-With", XMLHttpRequest.name],
          ["X-Sdk-Int", 25],
          ["X-Sdk-Locale", "zh-CN"],
          ["X-App-Id", "com.coolapk.market"],
          ["X-App-Version", "9.0.2"],
          ["X-App-Code", 1902151],
          ["X-App-Token", coolToken()]
        ]
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          sendResponse(json.data);
        })
        .catch(function(error) {
          console.log(error);
          sendResponse(null);
        });
      break;
    case "POST":
      console.log(request.body);
      fetch(request.url, {
        method: "POST",
        body: request.body,
        headers: [
          ["X-Requested-With", XMLHttpRequest.name],
          ["X-Sdk-Int", 25],
          ["X-Sdk-Locale", "zh-CN"],
          ["X-App-Id", "com.coolapk.market"],
          ["X-App-Version", "9.0.2"],
          ["X-App-Code", 1902151],
          ["X-App-Token", coolToken()],
          ["Content-Type", "multipart/form-data;boundary=coolapk-web-by-zsakvo"]
        ]
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          sendResponse(json.data);
        })
        .catch(function(error) {
          console.log(error);
          sendResponse(null);
        });
      break;
    case "SUM":
      console.log(request.url);
      bindOnBeforeSendHeaders();
      // fetch(request.url, {
      //   method: "GET"
      // })
      //   .then(function(response) {
      //     console.log(response);
      //     return response.body;
      //   })
      //   .then(function(res) {
      //     const blob = new Blob([res.getReader()]);
      //     console.log(blob);
      //     sendResponse(res);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //     sendResponse(null);
      //   });
      break;
  }
  return true;
});
