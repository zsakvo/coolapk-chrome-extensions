/*! Swipebox v1.4.4 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */ !(function(
  a,
  b,
  c,
  d
) {
  (c.swipebox = function(e, f) {
    var g,
      h,
      i = {
        useCSS: !0,
        useSVG: !0,
        initialIndexOnArray: 0,
        removeBarsOnMobile: !0,
        hideCloseButtonOnMobile: !1,
        hideBarsDelay: 3e3,
        videoMaxWidth: 1140,
        vimeoColor: "cccccc",
        beforeOpen: null,
        afterOpen: null,
        afterClose: null,
        afterMedia: null,
        nextSlide: null,
        prevSlide: null,
        loopAtEnd: !1,
        autoplayVideos: !1,
        queryStringData: {},
        toggleClassOnLoad: "",
        selector: null
      },
      j = this,
      k = [],
      l = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i
      ),
      m =
        null !== l ||
        b.createTouch !== d ||
        "ontouchstart" in a ||
        "onmsgesturechange" in a ||
        navigator.msMaxTouchPoints,
      n =
        !!b.createElementNS &&
        !!b.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
      o = a.innerWidth ? a.innerWidth : c(a).width(),
      p = a.innerHeight ? a.innerHeight : c(a).height(),
      q = 0;
    (j.settings = {}),
      (c.swipebox.close = function() {
        g.closeSlide();
      }),
      (c.swipebox.extend = function() {
        return g;
      }),
      (j.init = function() {
        (j.settings = c.extend({}, i, f)),
          c.isArray(e)
            ? ((k = e),
              (g.target = c(a)),
              g.init(j.settings.initialIndexOnArray))
            : c(e).on("click", j.settings.selector, function(a) {
                if ("slide current" === a.target.parentNode.className)
                  return !1;
                g.destroy(),
                  (h =
                    null === j.settings.selector
                      ? c(e)
                      : c(e).find(j.settings.selector)),
                  (k = []);
                var b, d, f;
                f || ((d = "data-rel"), (f = c(this).attr(d))),
                  f || ((d = "rel"), (f = c(this).attr(d))),
                  f &&
                    "" !== f &&
                    "nofollow" !== f &&
                    (h = h.filter("[" + d + '="' + f + '"]')),
                  h.each(function() {
                    var a = null,
                      b = null;
                    c(this).attr("title") && (a = c(this).attr("title")),
                      c(this).attr("href") && (b = c(this).attr("href")),
                      k.push({
                        href: b,
                        title: a
                      });
                  }),
                  (b = h.index(c(this))),
                  a.preventDefault(),
                  a.stopPropagation(),
                  (g.target = c(a.target)),
                  g.init(b);
              });
      }),
      (g = {
        init: function(a) {
          j.settings.beforeOpen && j.settings.beforeOpen(),
            this.target.trigger("swipebox-start"),
            (c.swipebox.isOpen = !0),
            this.build(),
            this.openSlide(a),
            this.openMedia(a),
            this.preloadMedia(a + 1),
            this.preloadMedia(a - 1),
            j.settings.afterOpen && j.settings.afterOpen(a);
        },
        build: function() {
          var a,
            b = this;
          c("body").append(
            '<div id="swipebox-overlay">\t\t\t\t\t<div id="swipebox-container">\t\t\t\t\t\t<div id="swipebox-slider"></div>\t\t\t\t\t\t<div id="swipebox-top-bar">\t\t\t\t\t\t\t<div id="swipebox-title"></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div id="swipebox-bottom-bar">\t\t\t\t\t\t\t<div id="swipebox-arrows">\t\t\t\t\t\t\t\t<a id="swipebox-prev"></a>\t\t\t\t\t\t\t\t<a id="swipebox-next"></a>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<a id="swipebox-close"></a>\t\t\t\t\t</div>\t\t\t</div>'
          ),
            n &&
              !0 === j.settings.useSVG &&
              ((a = c("#swipebox-close").css("background-image")),
              (a = a.replace("png", "svg")),
              c("#swipebox-prev, #swipebox-next, #swipebox-close").css({
                "background-image": a
              })),
            l &&
              j.settings.removeBarsOnMobile &&
              c("#swipebox-bottom-bar, #swipebox-top-bar").remove(),
            c.each(k, function() {
              c("#swipebox-slider").append('<div class="slide"></div>');
            }),
            b.setDim(),
            b.actions(),
            m && b.gesture(),
            b.keyboard(),
            b.animBars(),
            b.resize();
        },
        setDim: function() {
          var b,
            d,
            e = {};
          "onorientationchange" in a
            ? a.addEventListener(
                "orientationchange",
                function() {
                  0 === a.orientation
                    ? ((b = o), (d = p))
                    : (90 !== a.orientation && -90 !== a.orientation) ||
                      ((b = p), (d = o));
                },
                !1
              )
            : ((b = a.innerWidth ? a.innerWidth : c(a).width()),
              (d = a.innerHeight ? a.innerHeight : c(a).height())),
            (e = {
              width: b,
              height: d
            }),
            c("#swipebox-overlay").css(e);
        },
        resize: function() {
          var b = this;
          c(a)
            .resize(function() {
              b.setDim();
            })
            .resize();
        },
        supportTransition: function() {
          var a,
            c = "transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(
              " "
            );
          for (a = 0; a < c.length; a++)
            if (b.createElement("div").style[c[a]] !== d) return c[a];
          return !1;
        },
        doCssTrans: function() {
          if (j.settings.useCSS && this.supportTransition()) return !0;
        },
        gesture: function() {
          var a,
            b,
            d,
            e,
            f,
            g,
            h = this,
            i = !1,
            j = !1,
            l = 10,
            m = 50,
            n = {},
            p = {},
            r = c("#swipebox-top-bar, #swipebox-bottom-bar"),
            s = c("#swipebox-slider");
          r.addClass("visible-bars"),
            h.setTimeout(),
            c("body")
              .bind("touchstart", function(h) {
                return (
                  c(this).addClass("touching"),
                  (a = c("#swipebox-slider .slide").index(
                    c("#swipebox-slider .slide.current")
                  )),
                  (p = h.originalEvent.targetTouches[0]),
                  (n.pageX = h.originalEvent.targetTouches[0].pageX),
                  (n.pageY = h.originalEvent.targetTouches[0].pageY),
                  c("#swipebox-slider").css({
                    "-webkit-transform": "translate3d(" + q + "%, 0, 0)",
                    transform: "translate3d(" + q + "%, 0, 0)"
                  }),
                  c(".touching").bind("touchmove", function(h) {
                    if (
                      (h.preventDefault(),
                      h.stopPropagation(),
                      (p = h.originalEvent.targetTouches[0]),
                      !j &&
                        ((f = d),
                        (d = p.pageY - n.pageY),
                        Math.abs(d) >= m || i))
                    ) {
                      var r = 0.75 - Math.abs(d) / s.height();
                      s.css({
                        top: d + "px"
                      }),
                        s.css({
                          opacity: r
                        }),
                        (i = !0);
                    }
                    (e = b),
                      (b = p.pageX - n.pageX),
                      (g = (100 * b) / o),
                      !j &&
                        !i &&
                        Math.abs(b) >= l &&
                        (c("#swipebox-slider").css({
                          "-webkit-transition": "",
                          transition: ""
                        }),
                        (j = !0)),
                      j &&
                        (0 < b
                          ? 0 === a
                            ? c("#swipebox-overlay").addClass("leftSpringTouch")
                            : (c("#swipebox-overlay")
                                .removeClass("leftSpringTouch")
                                .removeClass("rightSpringTouch"),
                              c("#swipebox-slider").css({
                                "-webkit-transform":
                                  "translate3d(" + (q + g) + "%, 0, 0)",
                                transform: "translate3d(" + (q + g) + "%, 0, 0)"
                              }))
                          : 0 > b &&
                            (k.length === a + 1
                              ? c("#swipebox-overlay").addClass(
                                  "rightSpringTouch"
                                )
                              : (c("#swipebox-overlay")
                                  .removeClass("leftSpringTouch")
                                  .removeClass("rightSpringTouch"),
                                c("#swipebox-slider").css({
                                  "-webkit-transform":
                                    "translate3d(" + (q + g) + "%, 0, 0)",
                                  transform:
                                    "translate3d(" + (q + g) + "%, 0, 0)"
                                }))));
                  }),
                  !1
                );
              })
              .bind("touchend", function(a) {
                if (
                  (a.preventDefault(),
                  a.stopPropagation(),
                  c("#swipebox-slider").css({
                    "-webkit-transition": "-webkit-transform 0.4s ease",
                    transition: "transform 0.4s ease"
                  }),
                  (d = p.pageY - n.pageY),
                  (b = p.pageX - n.pageX),
                  (g = (100 * b) / o),
                  i)
                )
                  if (
                    ((i = !1),
                    Math.abs(d) >= 2 * m && Math.abs(d) > Math.abs(f))
                  ) {
                    var k = d > 0 ? s.height() : -s.height();
                    s.animate(
                      {
                        top: k + "px",
                        opacity: 0
                      },
                      300,
                      function() {
                        h.closeSlide();
                      }
                    );
                  } else
                    s.animate(
                      {
                        top: 0,
                        opacity: 1
                      },
                      300
                    );
                else
                  j
                    ? ((j = !1),
                      b >= l && b >= e
                        ? h.getPrev()
                        : b <= -l && b <= e && h.getNext())
                    : r.hasClass("visible-bars")
                    ? (h.clearTimeout(), h.hideBars())
                    : (h.showBars(), h.setTimeout());
                c("#swipebox-slider").css({
                  "-webkit-transform": "translate3d(" + q + "%, 0, 0)",
                  transform: "translate3d(" + q + "%, 0, 0)"
                }),
                  c("#swipebox-overlay")
                    .removeClass("leftSpringTouch")
                    .removeClass("rightSpringTouch"),
                  c(".touching")
                    .off("touchmove")
                    .removeClass("touching");
              });
        },
        setTimeout: function() {
          if (j.settings.hideBarsDelay > 0) {
            var b = this;
            b.clearTimeout(),
              (b.timeout = a.setTimeout(function() {
                b.hideBars();
              }, j.settings.hideBarsDelay));
          }
        },
        clearTimeout: function() {
          a.clearTimeout(this.timeout), (this.timeout = null);
        },
        showBars: function() {
          var a = c("#swipebox-top-bar, #swipebox-bottom-bar");
          this.doCssTrans()
            ? a.addClass("visible-bars")
            : (c("#swipebox-top-bar").animate(
                {
                  top: 0
                },
                500
              ),
              c("#swipebox-bottom-bar").animate(
                {
                  bottom: 0
                },
                500
              ),
              setTimeout(function() {
                a.addClass("visible-bars");
              }, 1e3));
        },
        hideBars: function() {
          var a = c("#swipebox-top-bar, #swipebox-bottom-bar");
          this.doCssTrans()
            ? a.removeClass("visible-bars")
            : (c("#swipebox-top-bar").animate(
                {
                  top: "-50px"
                },
                500
              ),
              c("#swipebox-bottom-bar").animate(
                {
                  bottom: "-50px"
                },
                500
              ),
              setTimeout(function() {
                a.removeClass("visible-bars");
              }, 1e3));
        },
        animBars: function() {
          var a = this,
            b = c("#swipebox-top-bar, #swipebox-bottom-bar");
          b.addClass("visible-bars"),
            a.setTimeout(),
            c("#swipebox-slider").click(function() {
              b.hasClass("visible-bars") || (a.showBars(), a.setTimeout());
            }),
            c("#swipebox-bottom-bar").hover(
              function() {
                a.showBars(), b.addClass("visible-bars"), a.clearTimeout();
              },
              function() {
                j.settings.hideBarsDelay > 0 &&
                  (b.removeClass("visible-bars"), a.setTimeout());
              }
            );
        },
        keyboard: function() {
          var b = this;
          c(a).bind("keyup", function(a) {
            a.preventDefault(),
              a.stopPropagation(),
              37 === a.keyCode
                ? b.getPrev()
                : 39 === a.keyCode
                ? b.getNext()
                : 27 === a.keyCode && b.closeSlide();
          });
        },
        actions: function() {
          var a = this,
            b = "touchend click";
          k.length < 2
            ? (c("#swipebox-bottom-bar").hide(),
              d === k[1] && c("#swipebox-top-bar").hide())
            : (c("#swipebox-prev").bind(b, function(b) {
                b.preventDefault(),
                  b.stopPropagation(),
                  a.getPrev(),
                  a.setTimeout();
              }),
              c("#swipebox-next").bind(b, function(b) {
                b.preventDefault(),
                  b.stopPropagation(),
                  a.getNext(),
                  a.setTimeout();
              })),
            c("#swipebox-close").bind(b, function() {
              a.closeSlide();
            });
        },
        setSlide: function(a, b) {
          b = b || !1;
          var d = c("#swipebox-slider");
          (q = 100 * -a),
            this.doCssTrans()
              ? d.css({
                  "-webkit-transform": "translate3d(" + 100 * -a + "%, 0, 0)",
                  transform: "translate3d(" + 100 * -a + "%, 0, 0)"
                })
              : d.animate({
                  left: 100 * -a + "%"
                }),
            c("#swipebox-slider .slide").removeClass("current"),
            c("#swipebox-slider .slide")
              .eq(a)
              .addClass("current"),
            this.setTitle(a),
            b && d.fadeIn(),
            c("#swipebox-prev, #swipebox-next").removeClass("disabled"),
            0 === a
              ? c("#swipebox-prev").addClass("disabled")
              : a === k.length - 1 &&
                !0 !== j.settings.loopAtEnd &&
                c("#swipebox-next").addClass("disabled");
        },
        openSlide: function(b) {
          c("html").addClass("swipebox-html"),
            m
              ? (c("html").addClass("swipebox-touch"),
                j.settings.hideCloseButtonOnMobile &&
                  c("html").addClass("swipebox-no-close-button"))
              : c("html").addClass("swipebox-no-touch"),
            c(a).trigger("resize"),
            this.setSlide(b, !0);
        },
        preloadMedia: function(a) {
          var b = this,
            c = null;
          k[a] !== d && (c = k[a].href),
            b.isVideo(c)
              ? b.openMedia(a)
              : setTimeout(function() {
                  b.openMedia(a);
                }, 1e3);
        },
        openMedia: function(a) {
          var b,
            e,
            f = this;
          if ((k[a] !== d && (b = k[a].href), a < 0 || a >= k.length))
            return !1;
          (e = c("#swipebox-slider .slide").eq(a)),
            f.isVideo(b)
              ? (e.html(f.getVideo(b)),
                j.settings.afterMedia && j.settings.afterMedia(a))
              : (e.addClass("slide-loading"),
                f.loadMedia(b, function() {
                  e.removeClass("slide-loading"),
                    e.html(this),
                    j.settings.afterMedia && j.settings.afterMedia(a);
                }));
        },
        setTitle: function(a) {
          var b = null;
          c("#swipebox-title").empty(),
            k[a] !== d && (b = k[a].title),
            b
              ? (c("#swipebox-top-bar").show(), c("#swipebox-title").append(b))
              : c("#swipebox-top-bar").hide();
        },
        isVideo: function(a) {
          if (a) {
            if (
              a.match(
                /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
              ) ||
              a.match(/vimeo\.com\/([0-9]*)/) ||
              a.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)
            )
              return !0;
            if (a.toLowerCase().indexOf("swipeboxvideo=1") >= 0) return !0;
          }
        },
        parseUri: function(a, d) {
          var e = b.createElement("a"),
            f = {};
          return (
            (e.href = decodeURIComponent(a)),
            e.search &&
              (f = JSON.parse(
                '{"' +
                  e.search
                    .toLowerCase()
                    .replace("?", "")
                    .replace(/&/g, '","')
                    .replace(/=/g, '":"') +
                  '"}'
              )),
            c.isPlainObject(d) &&
              (f = c.extend(f, d, j.settings.queryStringData)),
            c
              .map(f, function(a, b) {
                if (a && a > "")
                  return encodeURIComponent(b) + "=" + encodeURIComponent(a);
              })
              .join("&")
          );
        },
        getVideo: function(a) {
          var b = "",
            c = a.match(
              /((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
            ),
            d = a.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),
            e = a.match(/(?:www\.)?vimeo\.com\/([0-9]*)/),
            f = "";
          return (
            c || d
              ? (d && (c = d),
                (f = g.parseUri(a, {
                  autoplay: j.settings.autoplayVideos ? "1" : "0",
                  v: ""
                })),
                (b =
                  '<iframe width="560" height="315" src="//' +
                  c[1] +
                  "/embed/" +
                  c[2] +
                  "?" +
                  f +
                  '" frameborder="0" allowfullscreen></iframe>'))
              : e
              ? ((f = g.parseUri(a, {
                  autoplay: j.settings.autoplayVideos ? "1" : "0",
                  byline: "0",
                  portrait: "0",
                  color: j.settings.vimeoColor
                })),
                (b =
                  '<iframe width="560" height="315"  src="//player.vimeo.com/video/' +
                  e[1] +
                  "?" +
                  f +
                  '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'))
              : (b =
                  '<iframe width="560" height="315" src="' +
                  a +
                  '" frameborder="0" allowfullscreen></iframe>'),
            '<div class="swipebox-video-container" style="max-width:' +
              j.settings.videoMaxWidth +
              'px"><div class="swipebox-video">' +
              b +
              "</div></div>"
          );
        },
        loadMedia: function(a, b) {
          if (0 === a.trim().indexOf("#"))
            b.call(
              c("<div>", {
                class: "swipebox-inline-container"
              }).append(
                c(a)
                  .clone()
                  .toggleClass(j.settings.toggleClassOnLoad)
              )
            );
          else if (!this.isVideo(a)) {
            var d = c("<img>").on("load", function() {
              b.call(d);
            });
            d.attr("src", a);
          }
        },
        getNext: function() {
          var a,
            b = this,
            d = c("#swipebox-slider .slide").index(
              c("#swipebox-slider .slide.current")
            );
          d + 1 < k.length
            ? ((a = c("#swipebox-slider .slide")
                .eq(d)
                .contents()
                .find("iframe")
                .attr("src")),
              c("#swipebox-slider .slide")
                .eq(d)
                .contents()
                .find("iframe")
                .attr("src", a),
              d++,
              b.setSlide(d),
              b.preloadMedia(d + 1),
              j.settings.nextSlide && j.settings.nextSlide(d))
            : !0 === j.settings.loopAtEnd
            ? ((a = c("#swipebox-slider .slide")
                .eq(d)
                .contents()
                .find("iframe")
                .attr("src")),
              c("#swipebox-slider .slide")
                .eq(d)
                .contents()
                .find("iframe")
                .attr("src", a),
              (d = 0),
              b.preloadMedia(d),
              b.setSlide(d),
              b.preloadMedia(d + 1),
              j.settings.nextSlide && j.settings.nextSlide(d))
            : (c("#swipebox-overlay").addClass("rightSpring"),
              setTimeout(function() {
                c("#swipebox-overlay").removeClass("rightSpring");
              }, 500));
        },
        getPrev: function() {
          var a,
            b = c("#swipebox-slider .slide").index(
              c("#swipebox-slider .slide.current")
            );
          b > 0
            ? ((a = c("#swipebox-slider .slide")
                .eq(b)
                .contents()
                .find("iframe")
                .attr("src")),
              c("#swipebox-slider .slide")
                .eq(b)
                .contents()
                .find("iframe")
                .attr("src", a),
              b--,
              this.setSlide(b),
              this.preloadMedia(b - 1),
              j.settings.prevSlide && j.settings.prevSlide(b))
            : (c("#swipebox-overlay").addClass("leftSpring"),
              setTimeout(function() {
                c("#swipebox-overlay").removeClass("leftSpring");
              }, 500));
        },
        nextSlide: function(a) {},
        prevSlide: function(a) {},
        closeSlide: function() {
          c("html").removeClass("swipebox-html"),
            c("html").removeClass("swipebox-touch"),
            c(a).trigger("resize"),
            this.destroy();
        },
        destroy: function() {
          c(a).unbind("keyup"),
            c("body").unbind("touchstart"),
            c("body").unbind("touchmove"),
            c("body").unbind("touchend"),
            c("#swipebox-slider").unbind(),
            c("#swipebox-overlay").remove(),
            c.isArray(e) || e.removeData("_swipebox"),
            this.target && this.target.trigger("swipebox-destroy"),
            (c.swipebox.isOpen = !1),
            j.settings.afterClose && j.settings.afterClose();
        }
      }),
      j.init();
  }),
    (c.fn.swipebox = function(a) {
      if (!c.data(this, "_swipebox")) {
        var b = new c.swipebox(this, a);
        this.data("_swipebox", b);
      }
      return this.data("_swipebox");
    });
})(window, document, jQuery);
