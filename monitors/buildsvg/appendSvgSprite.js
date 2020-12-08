function appendSvgSprite(svg) {
    console.log(999)
  // var a,

  // , h = (a = document.getElementsByTagName("script"))[a.length - 1].getAttribute("data-injectcss");
  // if (h && !e.__iconfont__svg__cssinject__) {
  //     e.__iconfont__svg__cssinject__ = !0;
  //     try {
  //         document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
  //     } catch (a) {
  //         console && console.log(a)
  //     }
  // }
  !(function(a) {
    if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState))
      setTimeout(a, 0)
    else {
      var h = function() {
        document.removeEventListener('DOMContentLoaded', h, !1), a()
      }
      document.addEventListener('DOMContentLoaded', h, !1)
    }
  })(function() {
    var a, h
    ;(a = document.createElement('div')).innerHTML = svg
    // t = null;
    if ((h = a.getElementsByTagName('svg')[0])) {
      // h.setAttribute("aria-hidden", "true")
      // h.style.position = "absolute"
      // h.style.width = 0
      // h.style.height = 0
      // h.style.overflow = "hidden",
      ;(function(a, h) {
        h.firstChild
          ? (function(a, h) {
              h.parentNode.insertBefore(a, h)
            })(a, h.firstChild)
          : h.appendChild(a)
      })(h, document.body)
    }
  })
}
