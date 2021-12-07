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
    "revision": "2fcbdfc3d0aa6f7e6a46fc268b4981d6"
  },
  {
    "url": "assets/css/0.styles.3e4faf6e.css",
    "revision": "2b05a5f02b9af194ad3c8c9ceab42707"
  },
  {
    "url": "assets/img/activities.36116c16.png",
    "revision": "36116c16687c3473ca786d4c7d62e016"
  },
  {
    "url": "assets/img/add_circle_outline.c5b0d45d.svg",
    "revision": "c5b0d45d9ff3b78a9ac4ac72a70ea50c"
  },
  {
    "url": "assets/img/add.0e3e08bc.svg",
    "revision": "0e3e08bcb441c2cb39bdfff7f56f06a2"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/address.8c163b8f.png",
    "revision": "8c163b8f3c49e340a7c9546af4ed690e"
  },
  {
    "url": "assets/img/content_copy.72dd793a.svg",
    "revision": "72dd793a97203adfad3c50ebad310ee4"
  },
  {
    "url": "assets/img/control_point_duplicate.0028d2cc.svg",
    "revision": "0028d2cca15e5c298bc49d9f8058a0d3"
  },
  {
    "url": "assets/img/delete_forever.01754524.svg",
    "revision": "017545249afd67806be943eae9f18bc2"
  },
  {
    "url": "assets/img/directions_car.c9b170b8.svg",
    "revision": "c9b170b848c5d4b8dd0e61f16bd75c75"
  },
  {
    "url": "assets/img/directions_walk.27f1ba22.svg",
    "revision": "27f1ba221570d364f986a1bc342c3e05"
  },
  {
    "url": "assets/img/done_all.28f39764.svg",
    "revision": "28f397644d2d6fe6c3fde0446891cf26"
  },
  {
    "url": "assets/img/done.89e6f120.svg",
    "revision": "89e6f1201212082536271f14401d3d41"
  },
  {
    "url": "assets/img/flight.1eb2837a.svg",
    "revision": "1eb2837abbb46c402e137802482339bc"
  },
  {
    "url": "assets/img/ledger_logo.8d1c9c23.svg",
    "revision": "8d1c9c23425c3b507e87663b24e54d0e"
  },
  {
    "url": "assets/img/link.98f4f684.svg",
    "revision": "98f4f6841f3d482b15c3a9d79c8db50f"
  },
  {
    "url": "assets/img/logoSync.7d4e71a5.svg",
    "revision": "7d4e71a555356bf3338258bfd8ba32b2"
  },
  {
    "url": "assets/img/menu.55f68494.svg",
    "revision": "55f6849429de279d473c459c7ead3249"
  },
  {
    "url": "assets/img/message.759cf5c9.svg",
    "revision": "759cf5c9195a7ba83dfe7b47cd809ffe"
  },
  {
    "url": "assets/img/more_horiz.d644ed95.svg",
    "revision": "d644ed957e2662b1d22adb890310e64f"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/preview.2a0e91e4.svg",
    "revision": "2a0e91e455559dd783005560c3ffcbe0"
  },
  {
    "url": "assets/img/qr_code_2.b60a5eec.svg",
    "revision": "b60a5eec09a98201dd9a090a00e521bb"
  },
  {
    "url": "assets/img/query_builder.3c7597b2.svg",
    "revision": "3c7597b2a77f9fe763c44489b872ac31"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.db5d8122.svg",
    "revision": "db5d8122836517965b6e0247a3a9691c"
  },
  {
    "url": "assets/img/send.5b08a89d.svg",
    "revision": "5b08a89d2dd3351ce4ef110d2909cb23"
  },
  {
    "url": "assets/img/settings.d31d71f9.png",
    "revision": "d31d71f992404bd7970a450cfe4ec99c"
  },
  {
    "url": "assets/img/signing.d77cdae1.png",
    "revision": "d77cdae154a592744275a3b510bf722a"
  },
  {
    "url": "assets/img/unfold_more.52bd8411.svg",
    "revision": "52bd8411f8aea9dba1e636497a1c3d3e"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/img/wallet.08efbe38.png",
    "revision": "08efbe38b38fce44fa3542a9a0dd156d"
  },
  {
    "url": "assets/js/10.4c25f804.js",
    "revision": "4d9f139d1b83319865e4dd8b250d5ca1"
  },
  {
    "url": "assets/js/100.50efb659.js",
    "revision": "42e1401c7bfbb2adcda0752d5026bed6"
  },
  {
    "url": "assets/js/101.3ba95c1e.js",
    "revision": "9394639dcb8dd60587d8c70d6794f336"
  },
  {
    "url": "assets/js/102.ffdb2fb1.js",
    "revision": "8010aeb1629a7a929f7cca56eaf310b7"
  },
  {
    "url": "assets/js/103.99ebc373.js",
    "revision": "b32f0c20be3a924e5d559b78238c7a1d"
  },
  {
    "url": "assets/js/104.b94cd4a8.js",
    "revision": "65a2a06527a4774b48c0cfe7668d40f0"
  },
  {
    "url": "assets/js/105.5180cbc4.js",
    "revision": "b1674ebd19c9397709fa7b43e1821859"
  },
  {
    "url": "assets/js/106.1f481351.js",
    "revision": "46ff7bd4ae92a967e7d39b2109ce6336"
  },
  {
    "url": "assets/js/11.b94bfbf8.js",
    "revision": "acaab4ad78f0a2f94900e156629428d8"
  },
  {
    "url": "assets/js/12.026e2c3d.js",
    "revision": "20f6be26d63766e35c7d9f965a3fa0fb"
  },
  {
    "url": "assets/js/13.eab7bf49.js",
    "revision": "40f32c449433646b9158dd6c604e13df"
  },
  {
    "url": "assets/js/14.e3667f8b.js",
    "revision": "804147f0327fd13226f28b1b408cc165"
  },
  {
    "url": "assets/js/15.f2e09273.js",
    "revision": "0140d041a5d29220577b81991c707f20"
  },
  {
    "url": "assets/js/16.8794f970.js",
    "revision": "03b8fdf3c57edaac95a2bec6f1b912cb"
  },
  {
    "url": "assets/js/17.284c2b52.js",
    "revision": "92bb1fb543bb0588ed2280d994bee61c"
  },
  {
    "url": "assets/js/18.29bbfaa3.js",
    "revision": "13e8b0cbb4af0ee523537431cfe1dcde"
  },
  {
    "url": "assets/js/19.1be738a8.js",
    "revision": "8ba2d64363173b1c52621248b4623d9a"
  },
  {
    "url": "assets/js/20.4ec732ad.js",
    "revision": "1c8b55b291081be2beb7fe88307711ae"
  },
  {
    "url": "assets/js/21.2a84dde3.js",
    "revision": "c1683ce01e0d0d12b25d037fd5ed5521"
  },
  {
    "url": "assets/js/22.61337577.js",
    "revision": "13dc6cb0ed6cdf19e1bdafb061f3d3ee"
  },
  {
    "url": "assets/js/23.5b131fa1.js",
    "revision": "5954274585161aabdb11c7922e2b4300"
  },
  {
    "url": "assets/js/24.a560a5f3.js",
    "revision": "582a21ecc4b0c94a98e3f44a1b818e0f"
  },
  {
    "url": "assets/js/25.2d2b7c20.js",
    "revision": "b55e5a093c82778e6559292a4a4a8268"
  },
  {
    "url": "assets/js/26.3e5d02c5.js",
    "revision": "2ff99f4470330bafb12ded1ee2eeff56"
  },
  {
    "url": "assets/js/27.0714b2d7.js",
    "revision": "f7842e6c4c2dbcfd6387c2137cfd1b1e"
  },
  {
    "url": "assets/js/28.a2331bdb.js",
    "revision": "e90245475c46c0e13c3d25bf7bb0fbbe"
  },
  {
    "url": "assets/js/29.3eeeba85.js",
    "revision": "7a8200c37db8f710506d65d90e97a085"
  },
  {
    "url": "assets/js/3.1edea8f6.js",
    "revision": "82b8294e570e0d6b1a26e9df7bc7789e"
  },
  {
    "url": "assets/js/30.656f5494.js",
    "revision": "79928912ce5d3846154a66ed12f7fbfb"
  },
  {
    "url": "assets/js/31.faaea567.js",
    "revision": "40608be2f2b4a7f46af2da4cfa84322b"
  },
  {
    "url": "assets/js/32.c5fad2fa.js",
    "revision": "20c55ef8acf5532c46e414c71aef9ef9"
  },
  {
    "url": "assets/js/33.3a293a7d.js",
    "revision": "574af388961a9a6a6cb49691c8831756"
  },
  {
    "url": "assets/js/34.fab5c573.js",
    "revision": "b3cd69c6cae1a9c9f0355a38dd748dac"
  },
  {
    "url": "assets/js/35.73764677.js",
    "revision": "db81dc7d4752e488db7231c8647ced66"
  },
  {
    "url": "assets/js/36.04fb7bde.js",
    "revision": "44ac2854bf4e0d0a693800d2ba768e28"
  },
  {
    "url": "assets/js/37.ef8e5eff.js",
    "revision": "bf69d1e7c1e0f9163d514834a6800763"
  },
  {
    "url": "assets/js/38.22920a2b.js",
    "revision": "464f4ace9b2a112593c77dad55cb2945"
  },
  {
    "url": "assets/js/39.caaf1001.js",
    "revision": "1e2a7fcb783ce076b21f7b60871c5365"
  },
  {
    "url": "assets/js/4.81f77f6c.js",
    "revision": "ed6c632df6b30c371ff2dc06191bbce1"
  },
  {
    "url": "assets/js/40.74ed6dfd.js",
    "revision": "0a8538a0b883ef46618a539f5a3fbd87"
  },
  {
    "url": "assets/js/41.81702466.js",
    "revision": "bfc4a963abad172aad3e9ab4cbd01221"
  },
  {
    "url": "assets/js/42.0cb371ab.js",
    "revision": "42749458f6fbd89917c7a785ee212fb0"
  },
  {
    "url": "assets/js/43.db5ad3c0.js",
    "revision": "3ba61dd8867e927d7760a43fe457b4ee"
  },
  {
    "url": "assets/js/44.8c002810.js",
    "revision": "fdd295e5ebe148ad84076b537715e249"
  },
  {
    "url": "assets/js/45.60925af0.js",
    "revision": "8d317fc15a066d6c6418cce5e899db36"
  },
  {
    "url": "assets/js/46.9df5e9e5.js",
    "revision": "ce8f7f0cdd05b0e90168e6c6f6f7c144"
  },
  {
    "url": "assets/js/47.6ff73410.js",
    "revision": "28d2cd7846e498457f4cee455094dfbe"
  },
  {
    "url": "assets/js/48.d33b48bf.js",
    "revision": "cda87a4c706b80d68a65e6d88ef53b36"
  },
  {
    "url": "assets/js/49.82ba0144.js",
    "revision": "bb239a5fa170aaaef93d4d38dc456474"
  },
  {
    "url": "assets/js/5.767bfa77.js",
    "revision": "992b4f267c9a938b0201bc22c6601370"
  },
  {
    "url": "assets/js/50.4753bf5a.js",
    "revision": "4fc20b99c0e35fd5d404a4828fd2d928"
  },
  {
    "url": "assets/js/51.c393fe43.js",
    "revision": "205536e19f66b6b8c4f451bf08fe5a7c"
  },
  {
    "url": "assets/js/52.6feeaa0c.js",
    "revision": "5a4a9b270365fb664a155b5e953e3f11"
  },
  {
    "url": "assets/js/53.38c1f2a4.js",
    "revision": "e40d62edc2f0378592e569763c96f5d7"
  },
  {
    "url": "assets/js/54.b2884f16.js",
    "revision": "250d81a96a5f85dc4716667499327f4e"
  },
  {
    "url": "assets/js/55.00158c33.js",
    "revision": "d4189e09997eeee314d980169e09fdfa"
  },
  {
    "url": "assets/js/56.f7530b12.js",
    "revision": "dcce251d863b6614c8047979d264d5a5"
  },
  {
    "url": "assets/js/57.5a3ec558.js",
    "revision": "2ac48e37ab1c71264493010f1a538dc8"
  },
  {
    "url": "assets/js/58.01a91a28.js",
    "revision": "f17c3c43fdd3432608121b81727e5bc8"
  },
  {
    "url": "assets/js/59.c3138807.js",
    "revision": "316c6bdc8508a31c39d296605857bf68"
  },
  {
    "url": "assets/js/6.16d6db7f.js",
    "revision": "06d3263a594a5e4ad184dfddac34a6f4"
  },
  {
    "url": "assets/js/60.42f935c3.js",
    "revision": "828cbfcc22b3dad3372dfcc52e9eb9cb"
  },
  {
    "url": "assets/js/61.10416e5a.js",
    "revision": "0aca485d37cdec206a023db944139fa6"
  },
  {
    "url": "assets/js/62.b0a12105.js",
    "revision": "198a6d1fe57f5b87d636c6d3c22b9d29"
  },
  {
    "url": "assets/js/63.018a4bdc.js",
    "revision": "9a7772cecac7962e88947c9ec8591672"
  },
  {
    "url": "assets/js/64.c514b639.js",
    "revision": "07b8ae68541754b1b9a8b01261138484"
  },
  {
    "url": "assets/js/65.e6e9ce74.js",
    "revision": "21aa26336ac04ae2e4dcaae1737f8c79"
  },
  {
    "url": "assets/js/66.4d2e3a76.js",
    "revision": "007c7785a1e3a1752382d03e6a4e361f"
  },
  {
    "url": "assets/js/67.d3e1eabf.js",
    "revision": "7ab91ee9e0e7fb7aa0f94e7475a6fe6d"
  },
  {
    "url": "assets/js/68.d655f59d.js",
    "revision": "435a501b2003de6d5eecc9179f225a29"
  },
  {
    "url": "assets/js/69.edf36709.js",
    "revision": "899e915c067b946e7eed408d58043305"
  },
  {
    "url": "assets/js/7.98617c13.js",
    "revision": "7d9b36532091e038f59e54b98ebf5318"
  },
  {
    "url": "assets/js/70.65f1d53c.js",
    "revision": "d2768c86e098e2384cce043db62108bb"
  },
  {
    "url": "assets/js/71.aa89949f.js",
    "revision": "c27449c9b1cdfec52a8d5e64f864db92"
  },
  {
    "url": "assets/js/72.15970a38.js",
    "revision": "6f8622d31b3f9628b6aed95a5feecfe9"
  },
  {
    "url": "assets/js/73.2cd464f0.js",
    "revision": "b42d699ee90fc3f89a038e8081fed4d4"
  },
  {
    "url": "assets/js/74.7affeaf4.js",
    "revision": "f21770caf55b92e95f41011a7e1c5c18"
  },
  {
    "url": "assets/js/75.61e31688.js",
    "revision": "def25370c84f1dd2080f113c75ebe423"
  },
  {
    "url": "assets/js/76.b83a15cd.js",
    "revision": "e88f92b9afb837a707c4f9671db30efa"
  },
  {
    "url": "assets/js/77.bb6fc790.js",
    "revision": "1686b1833403ef258dcb20f90e96a32e"
  },
  {
    "url": "assets/js/78.d29d0814.js",
    "revision": "1719992dc272651f467c7c54ab00371e"
  },
  {
    "url": "assets/js/79.59e20bfb.js",
    "revision": "277fb2094586000958c5b3897f2602c8"
  },
  {
    "url": "assets/js/8.ed2025a8.js",
    "revision": "9fd372508793c2bfaa2962d065e2a544"
  },
  {
    "url": "assets/js/80.1b1464a7.js",
    "revision": "aecf329bcb641deb1a4aa17bc3ab9dc5"
  },
  {
    "url": "assets/js/81.3ec3cb7f.js",
    "revision": "d9891c16cea045bf7eade32963e579eb"
  },
  {
    "url": "assets/js/82.5e898c5e.js",
    "revision": "8892aeb3fa0182ce96835d06ee1b2c81"
  },
  {
    "url": "assets/js/83.3c3339b6.js",
    "revision": "8f3e7d6b7bb2c034f7ae5b52498ac05f"
  },
  {
    "url": "assets/js/84.efb9f2ca.js",
    "revision": "f88095bb8e441d51ffec2503e48c1f2b"
  },
  {
    "url": "assets/js/85.cfd8b161.js",
    "revision": "00581f17c5ca47b031db5f86b4af7958"
  },
  {
    "url": "assets/js/86.f70e3ba9.js",
    "revision": "09e9bf8f69d41cd88bcd7bd7921a1ad5"
  },
  {
    "url": "assets/js/87.6657840b.js",
    "revision": "8f950642fcb9479a94d53e89810c1efd"
  },
  {
    "url": "assets/js/88.66eaeac3.js",
    "revision": "84a66bf2966bc8df3d4a6bd56c22bf4e"
  },
  {
    "url": "assets/js/89.c2583a3a.js",
    "revision": "c0d38019ca1a5e0dfa0531b1e069ea05"
  },
  {
    "url": "assets/js/9.a55de85c.js",
    "revision": "4f097f1b96df0a8190643f4dedf68683"
  },
  {
    "url": "assets/js/90.c98b2688.js",
    "revision": "780d66882e1a83db3f8f0dde41bfbe40"
  },
  {
    "url": "assets/js/91.1ff323e6.js",
    "revision": "e311285c4c6e1329b7748d9112e56eb0"
  },
  {
    "url": "assets/js/92.92052608.js",
    "revision": "380b11e3c16899fcddc16ccbb4740e69"
  },
  {
    "url": "assets/js/93.6f1a224d.js",
    "revision": "8ba933b574e40a56e95df19f0951f20d"
  },
  {
    "url": "assets/js/94.dd179f27.js",
    "revision": "b3eebc3f850b8c725e2ecb396ce9f465"
  },
  {
    "url": "assets/js/95.55aadcee.js",
    "revision": "e4950cf29a542a70cdd50a88b33f095f"
  },
  {
    "url": "assets/js/96.c9d7bcdf.js",
    "revision": "d23a32ec99aebd43bf89f276bda8c093"
  },
  {
    "url": "assets/js/97.73cc1f32.js",
    "revision": "fd703926eb3420ae8a8d3ea02624fdeb"
  },
  {
    "url": "assets/js/98.d266567f.js",
    "revision": "3987ebf845eea45d5e9f615624141b5c"
  },
  {
    "url": "assets/js/99.160a53d3.js",
    "revision": "07343fb854d3c44aec3426c38c62a4eb"
  },
  {
    "url": "assets/js/app.3efc71f5.js",
    "revision": "7a8dec6d82fee671f6640dd6215b908a"
  },
  {
    "url": "assets/js/vendors~docsearch.b15e65d3.js",
    "revision": "b74cf40fe83ff3b84902ef5b48bbc8f5"
  },
  {
    "url": "connex/api.html",
    "revision": "750bf998bb3e12c1132038b096b376a0"
  },
  {
    "url": "connex/index.html",
    "revision": "9e3d673f5c125716e36ca1163c561167"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "dd23d06b064793fd7b785fdea40f1c6c"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/development-resources.html",
    "revision": "cfb77b5c3d6f0c13934fdcabea874f37"
  },
  {
    "url": "others/miscellaneous.html",
    "revision": "1e327a8ffd6c10eb5d817cc66ffd9488"
  },
  {
    "url": "pt/connex/api.html",
    "revision": "acf090e25a69ee83e434a72819780816"
  },
  {
    "url": "pt/connex/index.html",
    "revision": "b9fe0cc20f6df7ccc1c757262d52f998"
  },
  {
    "url": "pt/index.html",
    "revision": "963a7042bed228aa8baa259addda74f4"
  },
  {
    "url": "pt/others/development-resources.html",
    "revision": "498d9ecf9cc1083a272525317866ad70"
  },
  {
    "url": "pt/others/miscellaneous.html",
    "revision": "59ecda27566d8b2008facc56f7059aad"
  },
  {
    "url": "pt/sync/download-and-install.html",
    "revision": "d1e2f6f32eecf28aa8d3dc3f9043af42"
  },
  {
    "url": "pt/sync/faq.html",
    "revision": "f4e6ca2bac04304506fb6a391e10a895"
  },
  {
    "url": "pt/sync/user-guide/activities.html",
    "revision": "29e78b936e18e14c0276b5fe7f358a0d"
  },
  {
    "url": "pt/sync/user-guide/browse-dapp-and-web.html",
    "revision": "d4173038a9463e1f13cfbe0852e05f49"
  },
  {
    "url": "pt/sync/user-guide/contribute.html",
    "revision": "3e1314849ffd96ad4ab2483659c032d4"
  },
  {
    "url": "pt/sync/user-guide/contributing.html",
    "revision": "d7346532d8851551d209170b524c5f9d"
  },
  {
    "url": "pt/sync/user-guide/import-ledger.html",
    "revision": "31d60bc6039466e8636979dfeec5a2ca"
  },
  {
    "url": "pt/sync/user-guide/index.html",
    "revision": "7e8cc5b1214b96a8afa8a4230ea99ca8"
  },
  {
    "url": "pt/sync/user-guide/interact-with-dapps.html",
    "revision": "03073e3be3f8febfc7956aeb8a1fe0e5"
  },
  {
    "url": "pt/sync/user-guide/report-issue.html",
    "revision": "9e97417a508eaf1058d807cc87b6bd96"
  },
  {
    "url": "pt/sync/user-guide/settings.html",
    "revision": "57ad0b74066b7e7df94a213bc99c9b37"
  },
  {
    "url": "pt/sync2/faq.html",
    "revision": "2735c378dfde81671235ca9728b61ba2"
  },
  {
    "url": "pt/sync2/get-started.html",
    "revision": "e375920c52cc18e980b5ea2249f3393d"
  },
  {
    "url": "pt/sync2/user-guide/activities.html",
    "revision": "7103abd02c9e1ed25f48db867416f3b4"
  },
  {
    "url": "pt/sync2/user-guide/index.html",
    "revision": "a2e3fdb896ed54d13093cb21fad60fab"
  },
  {
    "url": "pt/sync2/user-guide/settings.html",
    "revision": "edef6ab300763dafbdcaa240430c96d9"
  },
  {
    "url": "pt/sync2/user-guide/signing.html",
    "revision": "82c3c936afe7b3a5c1d5b1a9df3e3019"
  },
  {
    "url": "pt/sync2/user-guide/wallet.html",
    "revision": "6c2cc74a88bf058ed56ebe528b732f08"
  },
  {
    "url": "pt/thor/get-started/api.html",
    "revision": "e0bd8d7bcc378214ebb1edbfbaa92063"
  },
  {
    "url": "pt/thor/get-started/custom-network.html",
    "revision": "4313e101599fe3b3072c4c769b0656a4"
  },
  {
    "url": "pt/thor/get-started/installation.html",
    "revision": "3130afba1243998ade4353412055b2d6"
  },
  {
    "url": "pt/thor/learn/block.html",
    "revision": "2a1cbca74be4ec68eb78c346860dad39"
  },
  {
    "url": "pt/thor/learn/builtin-contracts.html",
    "revision": "fdde3d97bdc9eac7979f199a84f83d51"
  },
  {
    "url": "pt/thor/learn/faq.html",
    "revision": "a5b793ee129170870d3b03feb1c46501"
  },
  {
    "url": "pt/thor/learn/fee-delegation.html",
    "revision": "cf02915ea9fa3e8cf44e65b7ba582e67"
  },
  {
    "url": "pt/thor/learn/index.html",
    "revision": "3fc1bb9bc771efb9c52b0454c7fdd89c"
  },
  {
    "url": "pt/thor/learn/proof-of-authority.html",
    "revision": "6e11fdcd480e7f0f4118e077b68ba9f1"
  },
  {
    "url": "pt/thor/learn/transaction-calculation.html",
    "revision": "ded7ea0c83e826d02afa23b9c5944fa8"
  },
  {
    "url": "pt/thor/learn/transaction-model.html",
    "revision": "f72767db31470f6ba5a14e4d56054cb3"
  },
  {
    "url": "pt/thor/learn/two-token-design.html",
    "revision": "2129933882d7db5fc936e51068549d3f"
  },
  {
    "url": "pt/tutorials/Connex-upgrade-Connex2_en.html",
    "revision": "3c9e91739660cddb69d38300597e53d3"
  },
  {
    "url": "pt/tutorials/Connex-upgrade-Connex2.html",
    "revision": "2a8641034f72a9937d4894d2f5b21adc"
  },
  {
    "url": "pt/tutorials/contribute.html",
    "revision": "ec1b8a8d7eabf768182334dce9da2a30"
  },
  {
    "url": "pt/tutorials/designated-fee-delegation.html",
    "revision": "86c682c21e189dfc3deb154130a807be"
  },
  {
    "url": "pt/tutorials/forcible-transaction-dependency.html",
    "revision": "4e6305afd8eea28237a414be9b44c72e"
  },
  {
    "url": "pt/tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "119d920b8ef3f30f3444ed807fdfb910"
  },
  {
    "url": "pt/tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "35fea5c5840edd86fa2898993ae41e95"
  },
  {
    "url": "pt/tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "0595d5a175a9481e9f0e99fe64999b16"
  },
  {
    "url": "pt/tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "5a48bae148c8a1fcf4368e0bc1654b2d"
  },
  {
    "url": "pt/tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "b233c88160aa5a493b16dc01702e34c0"
  },
  {
    "url": "pt/tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "62c79d8bf3879f8bd8ce4fc62112c2f9"
  },
  {
    "url": "pt/tutorials/index.html",
    "revision": "f0cddbf972e702507a6ed32541f9d7ef"
  },
  {
    "url": "pt/tutorials/Useful-tips-for-building-a-dApp.html",
    "revision": "b173b1c8a21d11523c0753860cfa86d3"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "f8efaea5b9df56c144f812d12319326b"
  },
  {
    "url": "sync/faq.html",
    "revision": "8edabf2cdf4019bea06bdfc2e4388475"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "1ccc7b614e17cafb4f47e49ec89b228f"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "a5695322f0431c277e9ea4a9327c5e6d"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "a392969dd4ceb1ae05a87a7ea80e1120"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "0f896bd9b983eaabcd819146b50050a2"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "018b1f9d38389fa1f9fcfe29551d00fe"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "5dabd9acb74cff7d7b8046daaef1cf9d"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "e4f75fe1ffa8592985496c87717a4e22"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "f3d05c1e4112e06c52b0e50be67d54e2"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "5a5aac2dd5d0fbc0994f2b92c83fc998"
  },
  {
    "url": "sync2/faq.html",
    "revision": "92672ae12f7f8d01dc1db12972325d5f"
  },
  {
    "url": "sync2/get-started.html",
    "revision": "621d96a0b14071acaaec797fff193ae3"
  },
  {
    "url": "sync2/user-guide/activities.html",
    "revision": "17d329fe8649ea64cffb37c6d52896ee"
  },
  {
    "url": "sync2/user-guide/index.html",
    "revision": "f4822f78f93b159e6c74d07f6aab95f6"
  },
  {
    "url": "sync2/user-guide/settings.html",
    "revision": "7157440eb2195379d4fa002960686652"
  },
  {
    "url": "sync2/user-guide/signing.html",
    "revision": "8764ffae0c97c4b9c2248ce2dedafa99"
  },
  {
    "url": "sync2/user-guide/wallet.html",
    "revision": "255ce65e0a7968800b0835a663d3f288"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "f0fe405014cf9a40eba2dc8d46b07327"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "691055a17aaa1292cb9b30de4607fd2d"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "3bca5c3228132005b313dcc6ea20834e"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "25a24010105a5295308cffc7f21611a0"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "9f3736471bdc1e8fbcd2c1408e953f7b"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "25f26c609530653714d2932faf6512e8"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "dc24f1182f7e6f0d9f09e0e833454b53"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "20128a658e0143681529b0d6caa4e205"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "c2e737c14b01417ca69c0d224443f535"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "8eb535cf97cc08193374b31a9fcdb2a6"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "6e4003a21797dafc379611d7f156cb39"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "e27b42cf1d1e31df1f127cd94bcc3170"
  },
  {
    "url": "tutorials/Connex-upgrade-Connex2_en.html",
    "revision": "a91fcb4ef61f17fb47b33e0824402837"
  },
  {
    "url": "tutorials/Connex-upgrade-Connex2.html",
    "revision": "53a1ae0d4729bf22203bba2b83887b1e"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "9c1c2bcdbf239e07e6418181a048b2e7"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "f7a4c137a4e94cfba5873a3f68b6122f"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "430527dd2492c35fe9b871ee4735ce20"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "93cf47d54d3df513006c12f08a22147f"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "1dfb6dd8a9d1dbeaa60cd63acecd14c3"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "1c0baeada3168a58df44073b9bd384d4"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "6f0d9a20d9aff3e3392f2785b3b13d28"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "0315ace88045bbf284d0a2d1c06b6fb7"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "4408e55202c5cf64474c79a42145b0cb"
  },
  {
    "url": "tutorials/index.html",
    "revision": "e51a070cf6be42750f86ee6ce9a900d1"
  },
  {
    "url": "tutorials/Useful-tips-for-building-a-dApp.html",
    "revision": "68295533c60cceb8b432b6ca858b09ab"
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
