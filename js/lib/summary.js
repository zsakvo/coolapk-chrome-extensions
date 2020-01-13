chrome.runtime.sendMessage({
  method: "SUM"
});
if (!localStorage.getItem("notr"))
  window.location.href = document.location.href;
localStorage.setItem("notr", true);
