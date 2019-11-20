chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  fetch(request, {
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
  return true;
});
