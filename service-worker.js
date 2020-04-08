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
    "revision": "1bad5c8963ea4502fdf9959ec32fe83d"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "44cf46e8d7fcf99599a3d0ceb8cfd754"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "2f5534f0c11a94318898d8e8e67a7ea9"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5d47fcf7009db7bcbd06ae7bff46863a"
  },
  {
    "url": "assets/css/0.styles.946e56e7.css",
    "revision": "062f6938c1656c75944b05137c08d847"
  },
  {
    "url": "assets/img/detectiongate_setup_1.25bd04bc.png",
    "revision": "25bd04bc742bd3a274b911e27ccbc11d"
  },
  {
    "url": "assets/img/detectiongate_setup_2.ff0bc795.png",
    "revision": "ff0bc7952c0736ce49f89dfcd1afdada"
  },
  {
    "url": "assets/img/levelchecknpc_setup.372c0584.png",
    "revision": "372c0584f661e93786e291d7c481f12e"
  },
  {
    "url": "assets/img/pinconsole_multiple_bankaccounts_en.f6f6dc72.png",
    "revision": "f6f6dc72c4367f42dedc18e6ae0bdf00"
  },
  {
    "url": "assets/img/pinconsole_multiple_bankaccounts_nl.4b88bbec.png",
    "revision": "4b88bbec2fd5ba1942a5a2ab61ccb920"
  },
  {
    "url": "assets/img/pinconsole_setup_en.499d9d4c.png",
    "revision": "499d9d4c9288068bad9e11fca195981b"
  },
  {
    "url": "assets/img/pinconsole_setup_nl.539ed98e.png",
    "revision": "539ed98e626f653025f9c5d3ec64e147"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.edd73088.js",
    "revision": "3449c8b862e82cee4e97ee3e47d0a12c"
  },
  {
    "url": "assets/js/11.1c514d82.js",
    "revision": "9a1ba56b0c9c0b3bfa9363e6554104b3"
  },
  {
    "url": "assets/js/12.72973021.js",
    "revision": "2641dad4b1bcc3bdfa001268dfbb4f36"
  },
  {
    "url": "assets/js/13.e14cfdf1.js",
    "revision": "35e38324c30420ea9949122e97c473e4"
  },
  {
    "url": "assets/js/14.78332eee.js",
    "revision": "e5607ed4728cde0b7ac08f7915d805fe"
  },
  {
    "url": "assets/js/15.04499a9e.js",
    "revision": "6b411d21497138931a0f2da4ad0259e7"
  },
  {
    "url": "assets/js/16.cadf2196.js",
    "revision": "86d2701f3c964c9c0f252d8fe844a191"
  },
  {
    "url": "assets/js/17.b8c31367.js",
    "revision": "26cbbfb64f07613c63641673047f3444"
  },
  {
    "url": "assets/js/18.e6bca00c.js",
    "revision": "5b171fe103bfcdf993d750e090b9a459"
  },
  {
    "url": "assets/js/19.b57903d6.js",
    "revision": "f39a8619578ebf6a2849a5b17dd60c09"
  },
  {
    "url": "assets/js/2.dca99481.js",
    "revision": "481e98910c8efd723e7ab49a04e0f104"
  },
  {
    "url": "assets/js/20.d489e12c.js",
    "revision": "38050c41f698e4f441cc6b041966ae08"
  },
  {
    "url": "assets/js/21.47fadc80.js",
    "revision": "f8a405da90be888ac0219c863086558e"
  },
  {
    "url": "assets/js/22.923ef8f1.js",
    "revision": "3899df60d3e067b639c09567b1e02523"
  },
  {
    "url": "assets/js/23.fc1ff915.js",
    "revision": "a1113716702e8a992a9f95c40bf33d24"
  },
  {
    "url": "assets/js/24.62bb355b.js",
    "revision": "90e0cf32a351543271ffa0765d20368b"
  },
  {
    "url": "assets/js/25.84532845.js",
    "revision": "258aa930314c337c5f2bd4989c1c2f1b"
  },
  {
    "url": "assets/js/26.d259a180.js",
    "revision": "e5ecbcc7e306fff475630ee5248fe1cf"
  },
  {
    "url": "assets/js/27.f90b22b4.js",
    "revision": "6383d324bf1a5ee1b024dfd37d66b7e5"
  },
  {
    "url": "assets/js/28.11a50498.js",
    "revision": "6e944da75254aa101bde9dfbdec24e3f"
  },
  {
    "url": "assets/js/29.bdf618d0.js",
    "revision": "b0cffbe3c39c01cbfeb594b79db5641d"
  },
  {
    "url": "assets/js/3.9ba30a71.js",
    "revision": "9c231e7de1f0eba2e38c03b001fa8eea"
  },
  {
    "url": "assets/js/4.712d41f0.js",
    "revision": "5de65b1343e7cb4cf6724c4f848b7ad7"
  },
  {
    "url": "assets/js/5.8aebdd88.js",
    "revision": "61ddfc1d10696877a065825317c19cc1"
  },
  {
    "url": "assets/js/6.b48d9dea.js",
    "revision": "d9bf7decb87e4adacbf7702f43f785df"
  },
  {
    "url": "assets/js/7.f62df9be.js",
    "revision": "5c9a2cf30e8ab1edb97247c29ea8a70a"
  },
  {
    "url": "assets/js/8.af45e140.js",
    "revision": "12f9ee7c5d0c8354fef2f6c86ebef8ee"
  },
  {
    "url": "assets/js/9.68eab0b5.js",
    "revision": "a89b9895fd6c9f65850801b08009e2e1"
  },
  {
    "url": "assets/js/app.6f80fd72.js",
    "revision": "e5707464efc599cfa5447abfcc05c145"
  },
  {
    "url": "bungeecord.html",
    "revision": "935535b3777c8d9ec8503c4e189e5f12"
  },
  {
    "url": "commands/admin.html",
    "revision": "f4315227b91bfe8d7a5365e1edec92cf"
  },
  {
    "url": "commands/banking.html",
    "revision": "a28fddcf5a3dccf9ab908374c090e617"
  },
  {
    "url": "commands/player.html",
    "revision": "9b77a1b0681650e834ba7aafa2bd52d2"
  },
  {
    "url": "en/bungeecord.html",
    "revision": "107efc1905265096f95320f51157fb70"
  },
  {
    "url": "en/commands/admin.html",
    "revision": "cb3870e39ad0f5a12e16b53b0b199bce"
  },
  {
    "url": "en/commands/banking.html",
    "revision": "b1304c2f65533682bceda0ca240d962b"
  },
  {
    "url": "en/commands/player.html",
    "revision": "b3cf7eb8b0651072fa0918f2d0046a99"
  },
  {
    "url": "en/faq.html",
    "revision": "b16b3d583c1429ecb36fbcbe9fb22940"
  },
  {
    "url": "en/index.html",
    "revision": "eabee5364a666d4193fd78af435a0081"
  },
  {
    "url": "en/permissions.html",
    "revision": "5c5a13cab32f1e021f6908a23d557666"
  },
  {
    "url": "en/placeholders/integrated.html",
    "revision": "df90a1bb05156192c211628a3d2bc2b6"
  },
  {
    "url": "en/placeholders/placeholderapi.html",
    "revision": "eb15585121e4bbbc8b0df395b43ceef8"
  },
  {
    "url": "en/setup.html",
    "revision": "e56da4e564e31f31a867c0be9ac63944"
  },
  {
    "url": "en/tutorials/detectiongate.html",
    "revision": "2aef44433050f709af523d4aae3bc74b"
  },
  {
    "url": "en/tutorials/levelchecknpc.html",
    "revision": "295db8695ee8a894fbc7b2f345527af3"
  },
  {
    "url": "faq.html",
    "revision": "b0cf54b7f4fd22f2247aa80df180cc78"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "00ecb916a548e8be44ec3467e1b66d6b"
  },
  {
    "url": "favicon-194x194.png",
    "revision": "e13db8e5c6827bd04a268948549ca396"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "4e9663215a5f70a874e25ebe5e0ca6c7"
  },
  {
    "url": "index.html",
    "revision": "4d5d24242b8efa6ea935b25917ed5529"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "a4837080efeeaf06ae40e214e744763f"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "07c1b3f42278810020c6bda24ec48e25"
  },
  {
    "url": "permissions.html",
    "revision": "b98b7001d8b4b0f1064fe4ee0bbcb0bc"
  },
  {
    "url": "placeholders/integrated.html",
    "revision": "6efb0953dc9048a9ab57dc9481427956"
  },
  {
    "url": "placeholders/placeholderapi.html",
    "revision": "3fe050124da2a150d46ff33051706d5a"
  },
  {
    "url": "setup.html",
    "revision": "e2a9e35fbee0a037274483926443a320"
  },
  {
    "url": "tutorials/detectiongate.html",
    "revision": "33fec6a397e4bf12b7f8ca8fc0d784e7"
  },
  {
    "url": "tutorials/levelchecknpc.html",
    "revision": "5f5adbb7f410eb83dcfa7b0a79ac8a5b"
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
