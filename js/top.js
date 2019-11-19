/*
 * @Author: leonWu(wuxiaolong)
 * @Date: 2018-03-22 14:01:52
 * @Last Modified by: wuxiaolong
 * @Last Modified time: 2018-03-22 19:31:12
 */
(function(window) {
  var a = function(as) {
    // default value
    var ps = {
      w: 40,
      h: 40,
      dImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADhUlEQVRYR+2YTYgURxTH/69nRlk2yUGNJJ5cEASNIOhB2BwUckggKuZjEZIchAQD5rCzTL/a0cPuXma23gzZCCagHvSQD8geDImXECEeTEDwuh4MJJuLIhIRlEQYuktqmZGmd7q7eqZdcrBPDfU+fv1/9fGqCQU9WutDRPQ5gEVmrhcUFlREIK31LBHNRGJZyIkiYg8N2Aeux1UI5FCAWutzRPRJilJLzPzaMEoODCgivwB4wyU5Mw+cZyDHVqu1YIyZdIHr2lxl5gM57J+a5gYUkbcB/JQ3mTFmTik1m9cvN2Cr1frRGHMwbyIAtyuVyt5qtXonj28uwBT1/umqetkYs4uI3gOwMw4yiIq5ABPUW/I8b6JWq92MAonI9wDej0FaFXdWq9UHrio6A4rIKwBWlScMw/Hp6enf+yUUkT8BjEXHjDFHlFI/FA44Pz9/1PO876KBieiR7/svJiUTkfMAPo4BfqWUOlE4YELJUrePZrO5v1Qq/RoDvKeU2lw4oNb6BhHtiQcOgmCsXq8vJ5R4lYLWrlKpbHFdzc5zUGv9BxFt6wMyycynXedg1+51Zv7NRUVnQBG5CyCpNBPMvOiwildMiOgj3/e/LhrwMYD1KUEXjTHfAtidtA9GfOvMPF8IYLPZ3FoqlS4A2O8S0NWGiPb5vn89yz6zxCJiV2GhcD2oIAgO1Ov1q2mQqYApzWjWh7uOL5fL5T1TU1P3kxwSAWdmZl4YHR39G8AG12yD2BljPlRKfZMbcA3U6zGlbvaJCq4VoDHmllJq+/9ZwYfM/FJuQBGxrZJtmZ71k3qxSixxu93eFIbhvWdNB6DBzKdyK2gdRMT2bYf7OHfsmZ8T/q94b2j9Pc97s1ar/TwQ4MLCwqudTsd2KutiAT4DcCYH4BUA/wI4FPM5y8yfDrxRd1UcB3AtEmSZmccS+sNVuYjoFhEdCcPwAwAnIwaXmPmdrI/MPOpsgEajsbFcLp8F8G7359DKfxcHyMdBELxlj7PItmUrMsfMF7Pg7LgTYC9Qu93eEb8c2a45LVH0rLW2WWdvPFYuwH4gWusvAdg2fra7Nf3HzJe11pNKqS9cVBpqDmYlEBEDYOW46r0HQTBn7yKD3IMLV/A5YFYJs8b7Keh53okwDJeMMceVUueyYqzFHLzIzMeisMNARX2HXsXRYM8Bhy1Lo9F4eWRkpJPn71VWziduhY04h8AS+AAAAABJRU5ErkJggg==",
      hImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADsElEQVRYR+2YX4gVVRzHv7+5u0r050EtqqcWgkATBHsQ7GEld9aNNKzuMuOqODMrBfawr9ZD7kv01B/IQG3mbuTOXLwPiQp5zwjuQwpBr+uDgm4vG7EUQZFb651fjHJjvDtz55yZSXrwPl04v9/395nv75wz5wyhot+Ia+whoo9BaAkrOFqRLKgKId01joHog3+1mFvCaY5XoV0acBVcl6oiyFKAumueBOFwplOEeWEFL5ZxsjCg7pkhgJ0yxYUdFK5TKFFvmJ+AMSUDF8cwMBfawQ7Z+GScMqDuTbwGROeVizFPC6d5TDVPHbBhngNjt2ohAIs0WHupfeD0Tyq5SoB93PuFiM4j4gsM3gyN3gJj0yqQAi6qAaa5R5ivsTb+rT17LQmku8YZENV7IBf/prWb5qyZ32RdlAZ8tVF/+g4PpLSHtwu7eTWtoO4aN0E0dN9YhL1iMjhbOaD+5T4DGgc9wn8IO3g8q9ioZ55iYPK+ccYXwgmOVA+Y0rK87WPnKWNYq9HlHpglYQdP/QeA5g8gbO0V1oiHLlrNhbSCqQ4CoMHas7KrWXoO6q5xA0TP94Iw0VRo+Z9Jz8F449a0l8NDs1dkXJQH9MyfAaS2honGQ8tvSaziuyEMHAjt4HS1gK6xDKK1maLMLTD5IN6SuQ92kwlHhRV8VAngrobxXIepQcCwjKB8DG8TdvP7vPjcFo945uXq4e5hRR3ecelwc64fZF/AzMNo3mPLjy9QdGdre7L1a1ZKJuDw8fpjax4Z+BHAOvl6BSKZ9gvHn1UGfADudVd037NipoMPDJBxPXSCF/63DgL0u7D9J5QBRxr76sR8psCsUkvJuVhltni3b274axlLatXUo5n5w9Bpvq/sYJyge8ZZgF5PSV4BMKiEw3xr1dkQgAbaddH224UAR7/e/wyvdOKTypqkADO/S0SfKwBeIuBPBvb05JwQdvBO4Y06ThyZmdhOUfRdQmRB2MFQxpF+VS0iXNdY2xtxZ4KJ3ksEfCPs4I28h8x91cUCr3x1cH0tWjkBxptIfNKQgFyOOjwWv84S29YCM0+HTnMmDy4elwLsCo15Ext7L0fxqblfoeS7No7Ne/f2aikBpoHornkc4KX4Un5va6Lbwp69MOqaU20n+FTGpVJzMK+A7pncvZt0/3OHp+/eRQrcg6t38CFgXg9zxtNaPADtSAfRPJjeFo5/skyJ8ovEM5mIZtqWbyVhy0Alc0sDJsUeApZty5hXf/I2Pbqi8vUqr+Y/HJGyOFtt0HYAAAAASUVORK5CYII=",
      bt: 40,
      rg: 40,
      s: 1200,
      th: 300
    };
    // merge value
    if (as !== "undefined") {
      for (var key in as) {
        ps[key] = as[key];
      }
    }
    this.as = ps;
    this.init();
  };
  a.prototype.init = function() {
    var data = this.as;
    var d = document.createElement("div");
    d.style.width = data.w + "px";
    d.style.height = data.h + "px";
    d.style.position = "fixed";
    d.style.bottom = data.bt + "px";
    d.style.right = data.rg + "px";
    d.style.cursor = "pointer";
    d.style.backgroundImage = "url(" + data.dImg + ")";
    d.style.backgroundSize = "100%";
    d.style.display = "none";
    d.onmouseenter = function() {
      d.style.backgroundImage = "url(" + data.hImg + ")";
    };
    d.onmouseout = function() {
      d.style.backgroundImage = "url(" + data.dImg + ")";
    };
    document.body.onscroll = function() {
      if (document.documentElement.scrollTop >= data.th) {
        d.style.display = "inline-block";
      } else {
        d.style.display = "none";
      }
    };
    d.onclick = function() {
      var timer = requestAnimationFrame(function fn() {
        var oTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
          document.body.scrollTop = document.documentElement.scrollTop =
            oTop - data.s;
          timer = requestAnimationFrame(fn);
        } else {
          d.style.display = "none";
          d.style.backgroundImage = "url(" + data.dImg + ")";
          cancelAnimationFrame(timer);
        }
      });
    };
    document.body.appendChild(d);
  };
  return (window.Top = a);
})(window);
