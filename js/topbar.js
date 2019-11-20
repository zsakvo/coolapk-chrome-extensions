document.getElementById("navbar-market").remove();
document.getElementById("navbar-contact").remove();
document.getElementById("navbar-about").remove();

var html = `<input onkeyup=" if(event.keyCode==13) {searchApp()}" id="search-input" type="text" placeholder="搜索应用" style="
    height: 38px;
    width: 160px;
    margin-left: 80%;
    border: 1px solid #b1b1b1;
    border-radius: 10px;
    outline: none;
    text-indent: 12px;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACMUlEQVQ4T62UP2hUQRDGv9kEG21EQRBTRBuJotjYBEQLxT+Ihb2FEfEvSHgzdw8sRJC7neUuIFxhIKIWIjZ2gjamEREFUTEIOcHC2AhaXXW8N7JnEu4uwZeDTLXszv745tudIaxzUBGvXq/vzPN8S7vdbqZp+qcof1VgpVI57Jy7Q0RjRNQys58AxgD8AvDJOZcmSTK3GnwF0Ht/g4imAFwB8FJEvi1dDCHsM7OrAC4S0QVmnumH9gBV9SmAkSzLTv6vvGq1esI59zzLsiNpms52Q5eB3vtrRFQXkQ1FPsXzEMJeM/s8PDy8Y3JycmHpTgfYaDQ2tVqt6IkXkcZagDFHVaPPu5n5bA+wWq0ecs49FJHRtcJiXq1WO5Bl2Wyz2dw6PT3djnsdhYsPcVRETg0CXFTZAnBMRF4vA1X1GRHNM7MMCvTev3fOPWbmejcwENE2Zj43KDCE8MPMborIg2VgCOGMmd0Wkf2DAFV1F4Cmc+5gkiTvuj3cTkQLzrnjSZK8WCtUVS8DKMeOYubo5b9HWTTXAzgtIrHFCqNSqWweGhr6TUSXmPlez7fpgn41syelUulWEVFV3wCYE5GJ7twVvayqrzrSicrM/LYfrKqxl6fM7BERRdiEiNxfVWGX0usA7gL4ElUQ0Xcz2xMnjpltjNMmDgZVPQ9gxsykVCqFHg/7ldRqtZE8z8cBjOd5PkpEHwHM53n+oVwux3UnvPdMRCoinWoLB2yRl/3n6w78Cw+J3xVsoCk9AAAAAElFTkSuQmCC') no-repeat;
    background-position: 132px;
    ">
`;

var input = document.createElement("li");
input.id = "search";
input.innerHTML = html;
document.getElementsByTagName("ul")[0].appendChild(input);

var searchjs = document.createElement("script");
searchjs.src = chrome.extension.getURL("js/lib/search.js");
searchjs.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(searchjs);
