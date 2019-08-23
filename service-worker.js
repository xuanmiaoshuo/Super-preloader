/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4a711b53193da3b2aa2b663b89e3a9c5"
  },
  {
    "url": "assets/css/0.styles.59ea64c5.css",
    "revision": "47ad92bb4e1910bf8a121d88f708f9f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1e22a2d9.js",
    "revision": "6bb00056f47ea2547f61076c3b80ef4f"
  },
  {
    "url": "assets/js/11.333593a3.js",
    "revision": "62e61622b574643bada2e056464e8af8"
  },
  {
    "url": "assets/js/12.ec1997ff.js",
    "revision": "b7506fa52304c141ac6e8b352a0a1eca"
  },
  {
    "url": "assets/js/13.677ebed2.js",
    "revision": "1ac15fa7de53ab2dc0f2be34b506d2d8"
  },
  {
    "url": "assets/js/14.587a7d40.js",
    "revision": "b4128c0e1d5042e8d32cccef8143915c"
  },
  {
    "url": "assets/js/15.8b37ce27.js",
    "revision": "1f22cf8b4c4536320e1dc8f1bafd638e"
  },
  {
    "url": "assets/js/16.8d8e4b40.js",
    "revision": "d63eff7b0df4e1d8417c0fc190e4dc09"
  },
  {
    "url": "assets/js/17.820896ac.js",
    "revision": "58fc9992587946b32e7a8aef1df3e7cd"
  },
  {
    "url": "assets/js/18.8ce827c2.js",
    "revision": "23e42e959681ba5bddebd725c904e474"
  },
  {
    "url": "assets/js/19.0148c059.js",
    "revision": "039d04419d234e8354b5e389515b66d6"
  },
  {
    "url": "assets/js/2.d4b76d41.js",
    "revision": "7cd34a8d9e6fe534538c99fb9a4ee98e"
  },
  {
    "url": "assets/js/20.7b7a3008.js",
    "revision": "4b2ca9ced891ef9f3d913f3fbfc32f6f"
  },
  {
    "url": "assets/js/3.401c6277.js",
    "revision": "3aaa120d0b7964c4636d8866af37f9ea"
  },
  {
    "url": "assets/js/4.75e1b150.js",
    "revision": "87943da5eb4f492831e7b5ac325df9f0"
  },
  {
    "url": "assets/js/5.02c66e06.js",
    "revision": "5abd138113899d5b4d187b3ec566d462"
  },
  {
    "url": "assets/js/6.455f6481.js",
    "revision": "e0ecf744e317dcb3d6a16953eea5a83f"
  },
  {
    "url": "assets/js/7.7a4c6334.js",
    "revision": "951b9adfeb6beed4cc4322b959b0cb20"
  },
  {
    "url": "assets/js/8.58920dc2.js",
    "revision": "12835aef3924576c4773f96c88dee0b7"
  },
  {
    "url": "assets/js/9.d1987ff4.js",
    "revision": "76b5a7117f3d70f61970127b67b13217"
  },
  {
    "url": "assets/js/app.d986a6e0.js",
    "revision": "5fe83c31eb45d31395ab2d2937f83319"
  },
  {
    "url": "compatibility.html",
    "revision": "d78d478a213c96673422cca555d3950e"
  },
  {
    "url": "database.html",
    "revision": "98422e1390ae0270cf1e395ad432b63c"
  },
  {
    "url": "develop.html",
    "revision": "96ce5763a7cfc5b2815b455c660bc5df"
  },
  {
    "url": "en/compatibility.html",
    "revision": "f96af573ce8452518f017f2270967266"
  },
  {
    "url": "en/database.html",
    "revision": "04b8d05426bade4d1881e68856c78e4a"
  },
  {
    "url": "en/example.html",
    "revision": "e317820189d0380ac58aaa2a44ff6d25"
  },
  {
    "url": "en/faq.html",
    "revision": "c398e1ac055d7c268b758c0af679c101"
  },
  {
    "url": "en/index.html",
    "revision": "96de35da15c729aa41f864464b9e68e8"
  },
  {
    "url": "en/siterule.html",
    "revision": "4d5dbb61dec5b0db2a1d87c3d9bc8c40"
  },
  {
    "url": "example.html",
    "revision": "d5b800997d318ca513c4dacbea77a3b4"
  },
  {
    "url": "faq.html",
    "revision": "030370c85c97e6dab6f5e7328f664bb2"
  },
  {
    "url": "image/example/baidu.png",
    "revision": "4402e5935ca77f66e70f6c2f315af694"
  },
  {
    "url": "image/example/google.png",
    "revision": "11613e2fec311e270ac9003dbd1da54e"
  },
  {
    "url": "image/example/hhmm.png",
    "revision": "e4bda310ad173720a7088fba64e22549"
  },
  {
    "url": "image/example/xkcd.png",
    "revision": "603585728294aa3713aa8c088ed0996d"
  },
  {
    "url": "index.html",
    "revision": "df347bd0f80377512667723ff3cbfb8c"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "0daadaefe1a5ef10ddd8c98dccfa7efe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
