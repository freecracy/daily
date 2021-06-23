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
    "url": "2021-2021-03/2021-03-07-code.html",
    "revision": "d4fe5400db593e7a368c7b88b62dfafa"
  },
  {
    "url": "2021-2021-03/2021-03-08-code.html",
    "revision": "a09b0008e947bc288a0044b108f92e53"
  },
  {
    "url": "2021-2021-03/2021-03-08-news.html",
    "revision": "c8d5ec11a9cfe100f31d6efb2f04d250"
  },
  {
    "url": "2021-2021-03/2021-03-09-code.html",
    "revision": "51a6787f6c6c92b2a871c55dcbfed3e8"
  },
  {
    "url": "2021-2021-03/2021-03-10-code.html",
    "revision": "70a34db8e5e46f8c75501052a675efcd"
  },
  {
    "url": "2021-2021-03/2021-03-10-news.html",
    "revision": "7069797529a8099d4ea922cac570ab2f"
  },
  {
    "url": "2021-2021-03/2021-03-11-code.html",
    "revision": "08aee1636f308b74bbfe26b688b81f89"
  },
  {
    "url": "2021-2021-03/2021-03-11-news.html",
    "revision": "13e01895c760bd77b3bc6116cad8b6ae"
  },
  {
    "url": "2021-2021-03/2021-03-12-code.html",
    "revision": "cf08bfb7fc7519c982cd2bf55a21b7aa"
  },
  {
    "url": "2021-2021-03/2021-03-12-news.html",
    "revision": "356000366ff06f4a4fd2d96149e45200"
  },
  {
    "url": "2021-2021-03/2021-03-13-code.html",
    "revision": "45ae628a4ef793e30b40025de28b986f"
  },
  {
    "url": "2021-2021-03/2021-03-13-news.html",
    "revision": "6a4de08fab79001be1eff4f0ce7e0378"
  },
  {
    "url": "2021-2021-03/2021-03-14-code.html",
    "revision": "b035a61d0288379a81d721e7d56760cc"
  },
  {
    "url": "2021-2021-03/2021-03-14-news.html",
    "revision": "d703f8bf924a1fec4275dc41a4f4bf0f"
  },
  {
    "url": "2021-2021-03/2021-03-15-code.html",
    "revision": "b5fcdc5f02c817f547de0c568443023a"
  },
  {
    "url": "2021-2021-03/2021-03-15-news.html",
    "revision": "e6954f7f428ba1e0808c3a22582d1ef0"
  },
  {
    "url": "2021-2021-03/2021-03-16-news.html",
    "revision": "c31f7f896851c6e0ddaa85d06bad166c"
  },
  {
    "url": "2021-2021-03/2021-03-17-code.html",
    "revision": "9783e629f6bb3407b02972dae0187e47"
  },
  {
    "url": "2021-2021-03/2021-03-17-news.html",
    "revision": "0c0059a78b95e93d51a1f2f76108ecf7"
  },
  {
    "url": "2021-2021-03/2021-03-18-code.html",
    "revision": "bfd4cd30214384ac5bb456fc2f38f8ed"
  },
  {
    "url": "2021-2021-03/2021-03-18-news.html",
    "revision": "6fc9def4c5d663d0eeb49040bcf6abef"
  },
  {
    "url": "2021-2021-03/2021-03-19-code.html",
    "revision": "1fe2ffa4368edbbc2881782dc0192cf6"
  },
  {
    "url": "2021-2021-03/2021-03-19-news.html",
    "revision": "af58261e00a6dfa2270120d32a030103"
  },
  {
    "url": "2021-2021-03/2021-03-20-code.html",
    "revision": "eb512580899f40aa5fe0a2f307376071"
  },
  {
    "url": "2021-2021-03/2021-03-20-news.html",
    "revision": "8deb089db1b2816dbdf74aba4808febc"
  },
  {
    "url": "2021-2021-03/2021-03-21-code.html",
    "revision": "70c8ad311e7907d0b2ff082ee611d5d8"
  },
  {
    "url": "2021-2021-03/2021-03-21-news.html",
    "revision": "e470ef5574eb8778cb55ee6e0e85b215"
  },
  {
    "url": "2021-2021-03/2021-03-22-code.html",
    "revision": "45868376fd4e5424222d8093308f68f2"
  },
  {
    "url": "2021-2021-03/2021-03-22-news.html",
    "revision": "fc29566df073effcb3cf3c20aa6cd9cd"
  },
  {
    "url": "2021-2021-03/2021-03-23-code.html",
    "revision": "ab7e6ea61752df5329dbb131453ca6b7"
  },
  {
    "url": "2021-2021-03/2021-03-23-news.html",
    "revision": "1fedb366008040b3052c0c4bedaee360"
  },
  {
    "url": "2021-2021-03/2021-03-24-code.html",
    "revision": "959a71e77066e054ed005303eec8aedd"
  },
  {
    "url": "2021-2021-03/2021-03-24-news.html",
    "revision": "0ad86491e239eae4418c8712337cedd6"
  },
  {
    "url": "2021-2021-03/2021-03-25-code.html",
    "revision": "5c40c341d75e89e66af1557818ccde13"
  },
  {
    "url": "2021-2021-03/2021-03-26-code.html",
    "revision": "7729630f38ed3f8a39516bdd111fdd39"
  },
  {
    "url": "2021-2021-03/2021-03-26-news.html",
    "revision": "327cbc0f60ac7d9baef00a1725708a29"
  },
  {
    "url": "2021-2021-03/2021-03-27-code.html",
    "revision": "d69bacb16ee0bb2d01f8162a9fb2e65d"
  },
  {
    "url": "2021-2021-03/2021-03-27-news.html",
    "revision": "11be3c393f36b3c8996a8ab683660f46"
  },
  {
    "url": "2021-2021-03/2021-03-28-code.html",
    "revision": "f04f76bf786824a82fbf6ef5354f0df2"
  },
  {
    "url": "2021-2021-03/2021-03-28-news.html",
    "revision": "e394b4a528be0e639ed0e845fa3d0b78"
  },
  {
    "url": "2021-2021-03/2021-03-29-code.html",
    "revision": "2788eb0d0c37c8090ec1035a514be064"
  },
  {
    "url": "2021-2021-03/2021-03-29-news.html",
    "revision": "c663e820f986af42e5a4bb270ea030f6"
  },
  {
    "url": "2021-2021-03/2021-03-30-code.html",
    "revision": "e56850aa564883548fcb30a637f4fb65"
  },
  {
    "url": "2021-2021-03/2021-03-30-news.html",
    "revision": "6cbbaef4c764d48b35a694999c29922d"
  },
  {
    "url": "2021-2021-03/2021-03-31-code.html",
    "revision": "c4f4a615264ec30a34e7ad699597b826"
  },
  {
    "url": "2021-2021-04/2021-04-01-code.html",
    "revision": "12f2b1ef776171307c0b6c4ad71cc698"
  },
  {
    "url": "2021-2021-04/2021-04-01-news.html",
    "revision": "d47049a651c3290f8124cbd9962741ba"
  },
  {
    "url": "2021-2021-04/2021-04-02-code.html",
    "revision": "aa03684a5093406b25a08d25411cdb23"
  },
  {
    "url": "2021-2021-04/2021-04-02-news.html",
    "revision": "d74ddd681d0d8f46cf5c8df7e39e229b"
  },
  {
    "url": "2021-2021-04/2021-04-03-code.html",
    "revision": "13e94f5161e4c428ab385b6285a5a067"
  },
  {
    "url": "2021-2021-04/2021-04-03-news.html",
    "revision": "4309d09aa886758e5d67569dabca9fb8"
  },
  {
    "url": "2021-2021-04/2021-04-04-code.html",
    "revision": "46c92d613ce6831cc60e020ad0dcfe6c"
  },
  {
    "url": "2021-2021-04/2021-04-04-news.html",
    "revision": "8c8e7129853427857523b0bc38edc171"
  },
  {
    "url": "2021-2021-04/2021-04-05-code.html",
    "revision": "ad96d692996a8db077da603623d0e195"
  },
  {
    "url": "2021-2021-04/2021-04-05-news.html",
    "revision": "e76ada65620ebd71c8b15bf008fd082c"
  },
  {
    "url": "2021-2021-04/2021-04-06-code.html",
    "revision": "240223b336ccefd79b8fb2fb193953a6"
  },
  {
    "url": "2021-2021-04/2021-04-06-news.html",
    "revision": "ef7dca585bd2ee02b38b3b2b4af47c84"
  },
  {
    "url": "2021-2021-04/2021-04-07-news.html",
    "revision": "595646892f40e865b8c4f5f47d078e3c"
  },
  {
    "url": "2021-2021-04/2021-04-08-code.html",
    "revision": "624e70629bba897c89f8f0ea733d0dfb"
  },
  {
    "url": "2021-2021-04/2021-04-08-news.html",
    "revision": "beede313372f46c0ce68dabd9c337dff"
  },
  {
    "url": "2021-2021-04/2021-04-09-code.html",
    "revision": "f1374a5671d0ec8bcbfd96fdf20c0b51"
  },
  {
    "url": "2021-2021-04/2021-04-09-news.html",
    "revision": "dff1450a6aaeccbf35fdfa5333e57ae3"
  },
  {
    "url": "2021-2021-04/2021-04-10-code.html",
    "revision": "040c337a5a5cd49e7f9de104bea6eb40"
  },
  {
    "url": "2021-2021-04/2021-04-10-news.html",
    "revision": "e1aeb371f23c1408b373ff7927cbe5d9"
  },
  {
    "url": "2021-2021-04/2021-04-11-code.html",
    "revision": "476dc39ad58aa16912375a19a7576bc5"
  },
  {
    "url": "2021-2021-04/2021-04-11-news.html",
    "revision": "ff4b3af3f35f8ba219d28020e55eda53"
  },
  {
    "url": "2021-2021-04/2021-04-12-code.html",
    "revision": "5913045abcc88b76841c3b8d1c81993b"
  },
  {
    "url": "2021-2021-04/2021-04-12-news.html",
    "revision": "4b4aa3f25b222aba71004118b37909c9"
  },
  {
    "url": "2021-2021-04/2021-04-13-code.html",
    "revision": "b8651e542be07a5f667dde511f1ec564"
  },
  {
    "url": "2021-2021-04/2021-04-13-news.html",
    "revision": "7f2713b8194b54dad329b379e8ce761f"
  },
  {
    "url": "2021-2021-04/2021-04-14-code.html",
    "revision": "c8e3b21faa9ec34bfba35b6f6da5a78b"
  },
  {
    "url": "2021-2021-04/2021-04-14-news.html",
    "revision": "f4c522de49d4067f977ab0a84f1c46a9"
  },
  {
    "url": "2021-2021-04/2021-04-15-code.html",
    "revision": "730ae3627047f68007294031d97eba00"
  },
  {
    "url": "2021-2021-04/2021-04-15-news.html",
    "revision": "e94056d488a579745070a17c393f6077"
  },
  {
    "url": "2021-2021-04/2021-04-16-code.html",
    "revision": "4f4b1cf1d1c36816d67fdfbdf2769f5e"
  },
  {
    "url": "2021-2021-04/2021-04-16-news.html",
    "revision": "e4726c7106c0fd574b403b308072fb28"
  },
  {
    "url": "2021-2021-04/2021-04-17-code.html",
    "revision": "1e02486d839db735493117d9da41d23e"
  },
  {
    "url": "2021-2021-04/2021-04-17-news.html",
    "revision": "ff1629605a82f7ae2294cc304bee5e35"
  },
  {
    "url": "2021-2021-04/2021-04-18-code.html",
    "revision": "901e14210859a62339442dbf2f48e9d0"
  },
  {
    "url": "2021-2021-04/2021-04-18-news.html",
    "revision": "397d307c2e209f46945911a9f97ee764"
  },
  {
    "url": "2021-2021-04/2021-04-19-code.html",
    "revision": "31adcfe47e1abb55d378b7bc5659b17c"
  },
  {
    "url": "2021-2021-04/2021-04-19-news.html",
    "revision": "fc0648a50a5d94d195a2315e798b7623"
  },
  {
    "url": "2021-2021-04/2021-04-20-code.html",
    "revision": "e5232a4640b26d5380223c8279aebc27"
  },
  {
    "url": "2021-2021-04/2021-04-20-news.html",
    "revision": "e13c26cb1894938a1b4bd3f3f89bbea2"
  },
  {
    "url": "2021-2021-04/2021-04-21-code.html",
    "revision": "65a9a9c696db355bc456a082adead3d4"
  },
  {
    "url": "2021-2021-04/2021-04-21-news.html",
    "revision": "b0a38f6b42dae3b01d1c3638850f040f"
  },
  {
    "url": "2021-2021-04/2021-04-22-code.html",
    "revision": "35816b45e21e154ff9988d9c1ebfccd7"
  },
  {
    "url": "2021-2021-04/2021-04-22-news.html",
    "revision": "fa12f260def65488d021ba65931b9d5e"
  },
  {
    "url": "2021-2021-04/2021-04-23-code.html",
    "revision": "10c20b651140c82f32897f7286d7277f"
  },
  {
    "url": "2021-2021-04/2021-04-23-news.html",
    "revision": "d823bd732d0e5c7279d25c4f41e1c499"
  },
  {
    "url": "2021-2021-04/2021-04-24-code.html",
    "revision": "4a30e0496b625145ebca17b5243306c8"
  },
  {
    "url": "2021-2021-04/2021-04-24-news.html",
    "revision": "62b71ec9af1189a72b9a285c15fce5d3"
  },
  {
    "url": "2021-2021-04/2021-04-25-code.html",
    "revision": "f17ddc87a0d68f0b4fcccb3306932d1b"
  },
  {
    "url": "2021-2021-04/2021-04-25-news.html",
    "revision": "39c9a7e80223eeee32a427ca3361a2c6"
  },
  {
    "url": "2021-2021-04/2021-04-26-code.html",
    "revision": "63b219b0aac9b22a0a60c4c8f646b9ea"
  },
  {
    "url": "2021-2021-04/2021-04-26-news.html",
    "revision": "4d9f0138bb6e0607d2e2f7c310b2821b"
  },
  {
    "url": "2021-2021-04/2021-04-27-code.html",
    "revision": "1c684c38e43be45455f8fc7d35b67da0"
  },
  {
    "url": "2021-2021-04/2021-04-27-news.html",
    "revision": "38ece0e02a8036b1c2e89c422a9ea3fc"
  },
  {
    "url": "2021-2021-04/2021-04-28-code.html",
    "revision": "f129d580121bc3fb8e946a2fb4562f74"
  },
  {
    "url": "2021-2021-04/2021-04-28-news.html",
    "revision": "1a0115d07ee07647f91efcdc7b3ca7cb"
  },
  {
    "url": "2021-2021-04/2021-04-29-code.html",
    "revision": "868a4fa0e6d3cf66e74afad15282dced"
  },
  {
    "url": "2021-2021-04/2021-04-29-news.html",
    "revision": "3fc8cd1ecc450a29c47c72d6d53782ef"
  },
  {
    "url": "2021-2021-04/2021-04-30-code.html",
    "revision": "96a5a93006473bcd154ba45fc8742cf3"
  },
  {
    "url": "2021-2021-04/2021-04-30-news.html",
    "revision": "1232238262fddb990e1758a90852b449"
  },
  {
    "url": "2021-2021-05/2021-05-01-code.html",
    "revision": "1f79753ef2953f718f3eb4710643f114"
  },
  {
    "url": "2021-2021-05/2021-05-01-news.html",
    "revision": "4e2c286a48e474c97574d3120a0187a0"
  },
  {
    "url": "2021-2021-05/2021-05-02-code.html",
    "revision": "087ae7b18f58897a0c0c743870b368b4"
  },
  {
    "url": "2021-2021-05/2021-05-02-news.html",
    "revision": "6718fe65555e06dabdec8776e4a9f643"
  },
  {
    "url": "2021-2021-05/2021-05-03-code.html",
    "revision": "ee7f91dc0a9b85b7d0e6358852dac010"
  },
  {
    "url": "2021-2021-05/2021-05-03-news.html",
    "revision": "63cc5aa9f7ea79756c4bc71b2ab36141"
  },
  {
    "url": "2021-2021-05/2021-05-04-code.html",
    "revision": "f3d37dff905ae75fca89c2862a78e53a"
  },
  {
    "url": "2021-2021-05/2021-05-04-news.html",
    "revision": "39bbae44a8d54b5b56a03bcfa43774d6"
  },
  {
    "url": "2021-2021-05/2021-05-05-code.html",
    "revision": "df19cefac50697301dcc962e97212bc2"
  },
  {
    "url": "2021-2021-05/2021-05-05-news.html",
    "revision": "02fe4c1b74be824bfb86019beb439fef"
  },
  {
    "url": "2021-2021-05/2021-05-06-code.html",
    "revision": "4e90cd4309cb4c1cc320adc3e7638ed0"
  },
  {
    "url": "2021-2021-05/2021-05-06-news.html",
    "revision": "684e82685f7e58e625c85053f3cd9cc0"
  },
  {
    "url": "2021-2021-05/2021-05-07-code.html",
    "revision": "6a703d99c4abb93c6c527a41c8a0c378"
  },
  {
    "url": "2021-2021-05/2021-05-07-news.html",
    "revision": "2b8a23b143579856f6ec4df99a0c6cd7"
  },
  {
    "url": "2021-2021-05/2021-05-08-code.html",
    "revision": "9f2a14f7dd3d03635002df1f19c8cd51"
  },
  {
    "url": "2021-2021-05/2021-05-08-news.html",
    "revision": "30118498ec625ac427cfbe0ab49f2ec1"
  },
  {
    "url": "2021-2021-05/2021-05-09-code.html",
    "revision": "e6b07e4ba7b7d9d8911353d67823c5dd"
  },
  {
    "url": "2021-2021-05/2021-05-09-news.html",
    "revision": "3bcc48ec506fd42d7c6cfa6e37fab620"
  },
  {
    "url": "2021-2021-05/2021-05-10-code.html",
    "revision": "ae3b4adf17444adb7667cce6d9cfb29f"
  },
  {
    "url": "2021-2021-05/2021-05-10-news.html",
    "revision": "c89e680d454701523cbe3a1b99f66fd2"
  },
  {
    "url": "2021-2021-05/2021-05-11-code.html",
    "revision": "f7999e198556e5d56856466a9d8382c7"
  },
  {
    "url": "2021-2021-05/2021-05-12-code.html",
    "revision": "fff7da84415fd99426cc8eb9855fb82c"
  },
  {
    "url": "2021-2021-05/2021-05-13-code.html",
    "revision": "eaf85bc900621223938789eeea5bbbcc"
  },
  {
    "url": "2021-2021-05/2021-05-14-code.html",
    "revision": "750e01ade996e6a954f5cdbd34c05642"
  },
  {
    "url": "2021-2021-05/2021-05-15-code.html",
    "revision": "dbc398d9d987f104c6c55e7e343e2daa"
  },
  {
    "url": "2021-2021-05/2021-05-16-code.html",
    "revision": "abd0394fac09d9be92b5a3a2005a8307"
  },
  {
    "url": "2021-2021-05/2021-05-17-code.html",
    "revision": "4e2479b3847a223e4549cb22d65e761f"
  },
  {
    "url": "2021-2021-05/2021-05-18-code.html",
    "revision": "6075b013038676fec2dc0d7cf0a0c056"
  },
  {
    "url": "2021-2021-05/2021-05-20-code.html",
    "revision": "29a1fb7f68ebdeb313180d2e706638f7"
  },
  {
    "url": "2021-2021-05/2021-05-21-code.html",
    "revision": "40bb8d8bef1984c7fb282e5d4e266979"
  },
  {
    "url": "2021-2021-05/2021-05-22-code.html",
    "revision": "d1ad8190dc3aeda63a8eb57c11bbc169"
  },
  {
    "url": "2021-2021-05/2021-05-23-code.html",
    "revision": "52043650661c8d96ae09317c1c4ba0ec"
  },
  {
    "url": "2021-2021-05/2021-05-24-code.html",
    "revision": "6cbaa9513aa10516e6ed3cc2f51ac908"
  },
  {
    "url": "2021-2021-05/2021-05-25-code.html",
    "revision": "82f39a2dd1cc8471585c0fb48948fdc4"
  },
  {
    "url": "2021-2021-05/2021-05-26-code.html",
    "revision": "4d6f11c9b509473fba8c1ed3b72e57e2"
  },
  {
    "url": "2021-2021-05/2021-05-27-code.html",
    "revision": "e57400b7d4e4532e1f242113cd0c1656"
  },
  {
    "url": "2021-2021-05/2021-05-28-code.html",
    "revision": "03eaf8c2d4a1af70b5a9fe1a6f91d332"
  },
  {
    "url": "2021-2021-05/2021-05-29-code.html",
    "revision": "f8b1395ba8be43aa5dc9d191916f2d78"
  },
  {
    "url": "2021-2021-05/2021-05-30-code.html",
    "revision": "f58c65719c4d619f7d00012f073cb1c6"
  },
  {
    "url": "2021-2021-05/2021-05-31-code.html",
    "revision": "449357d92b75e6123e485de19abc7e66"
  },
  {
    "url": "2021-2021-06/2021-06-01-code.html",
    "revision": "f975cd23e366aa96e4512d5c40099404"
  },
  {
    "url": "2021-2021-06/2021-06-02-code.html",
    "revision": "43da242c7bb8b4c987043565edf42042"
  },
  {
    "url": "2021-2021-06/2021-06-03-code.html",
    "revision": "b118a74b9d59bb0b361b13c7cd31a81f"
  },
  {
    "url": "2021-2021-06/2021-06-04-code.html",
    "revision": "a2a7b34ccf2c46aa9eefac91ebabbfe4"
  },
  {
    "url": "2021-2021-06/2021-06-05-code.html",
    "revision": "67709a9884985cd16bb26a4486aa7312"
  },
  {
    "url": "2021-2021-06/2021-06-07-code.html",
    "revision": "917c9cbd3e5588ced68f1c244f32bddd"
  },
  {
    "url": "2021-2021-06/2021-06-08-code.html",
    "revision": "c99c9c9888679f98c68282a06faf9a03"
  },
  {
    "url": "2021-2021-06/2021-06-09-code.html",
    "revision": "14bb3400cd9425240ad41ca8367bda08"
  },
  {
    "url": "2021-2021-06/2021-06-10-code.html",
    "revision": "e56811b8c859b3881faeb13807d6e175"
  },
  {
    "url": "2021-2021-06/2021-06-11-code.html",
    "revision": "b2e981dd7a49acaead8ec7ad83d2c426"
  },
  {
    "url": "2021-2021-06/2021-06-12-code.html",
    "revision": "ec3af03f87b02a73fac787f88458ed68"
  },
  {
    "url": "2021-2021-06/2021-06-13-code.html",
    "revision": "824fad55852bcf02fdfbb89ea5aaf799"
  },
  {
    "url": "2021-2021-06/2021-06-14-code.html",
    "revision": "58429b934a87816e4e5933b9820941f9"
  },
  {
    "url": "2021-2021-06/2021-06-15-code.html",
    "revision": "17ed438fb317babb422861223a0b44d3"
  },
  {
    "url": "2021-2021-06/2021-06-16-code.html",
    "revision": "1bca0594bd52715ae6c4b0eb409c88a2"
  },
  {
    "url": "2021-2021-06/2021-06-17-code.html",
    "revision": "af73b729caae004ca6087628078b605c"
  },
  {
    "url": "2021-2021-06/2021-06-18-code.html",
    "revision": "96070c79dd5d5874bc5c887f341effb0"
  },
  {
    "url": "2021-2021-06/2021-06-19-code.html",
    "revision": "7db5bceca96fa39ccdd3a8d6676f99f5"
  },
  {
    "url": "2021-2021-06/2021-06-20-code.html",
    "revision": "57a7c6fac455679efb986e18489286e7"
  },
  {
    "url": "2021-2021-06/2021-06-21-code.html",
    "revision": "1b922e978f32dd8a19d0fd433bc5804e"
  },
  {
    "url": "2021-2021-06/2021-06-22-code.html",
    "revision": "1efed82e0a7d3ca3273ec09bb2207c2e"
  },
  {
    "url": "2021-2021-06/2021-06-23-code.html",
    "revision": "741a8777cf0d998eb1a6ea6915922c69"
  },
  {
    "url": "2021-2021-06/2021-06-24-code.html",
    "revision": "1bb1ec9c1b9d8eb9e5f6815b21699123"
  },
  {
    "url": "404.html",
    "revision": "877fcf457923dee6f5aa5230d1fcbfc9"
  },
  {
    "url": "assets/css/0.styles.056b6093.css",
    "revision": "901f6f889960daa00b1ca7020e8b6227"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.11b697f1.js",
    "revision": "ef8c04d581c761c93fd4e9c05a2b0fea"
  },
  {
    "url": "assets/js/100.ae98d05f.js",
    "revision": "5d5cf974ef0be2995f714543c36d18d6"
  },
  {
    "url": "assets/js/101.70e7ed8a.js",
    "revision": "5139b6fef845d6081f62e317e0684b2a"
  },
  {
    "url": "assets/js/102.480259db.js",
    "revision": "35d21ec5084e50aedcc9a91da16c8050"
  },
  {
    "url": "assets/js/103.618be71e.js",
    "revision": "1b53b78e8e4f5457f7718a772cce27cc"
  },
  {
    "url": "assets/js/104.9c2aec5d.js",
    "revision": "fed7d248e86c2cd52674a08c62ea5476"
  },
  {
    "url": "assets/js/105.38f651fd.js",
    "revision": "b304050f1c131727c78a21e6cf68a463"
  },
  {
    "url": "assets/js/106.6374a4c2.js",
    "revision": "643c9d403d87a3354fd25cad6169666b"
  },
  {
    "url": "assets/js/107.3a8b7103.js",
    "revision": "68e3707997049d5ed328ac16ad119245"
  },
  {
    "url": "assets/js/108.c9158762.js",
    "revision": "17e387cccdeec3f52971516fb78b334b"
  },
  {
    "url": "assets/js/109.55b1ba2b.js",
    "revision": "93e47842e8bc421993226731a6117496"
  },
  {
    "url": "assets/js/11.095655e7.js",
    "revision": "414c3d88e5df7e74d8cd6b1e28f0b2f4"
  },
  {
    "url": "assets/js/110.2f95bbce.js",
    "revision": "8020364196971706cf26be4f66a148b4"
  },
  {
    "url": "assets/js/111.425427b7.js",
    "revision": "8be7e9a0ac6e300d043cdda346907ac2"
  },
  {
    "url": "assets/js/112.1ca3bad0.js",
    "revision": "836c5aa16ffc0e7c02a204d53c80fe20"
  },
  {
    "url": "assets/js/113.5b581a04.js",
    "revision": "98b543767c351d2633749748772768e7"
  },
  {
    "url": "assets/js/114.0a76e35b.js",
    "revision": "d1b4e32482dec25097ee9909d838c93a"
  },
  {
    "url": "assets/js/115.cff55ecf.js",
    "revision": "16d9201c1f83bc767b3198f5168039dd"
  },
  {
    "url": "assets/js/116.b31fd829.js",
    "revision": "16057fab7e4e2879dab5f824dc6ab398"
  },
  {
    "url": "assets/js/117.4f83bd10.js",
    "revision": "cc2be935f87d8c7f131360e304d5c95b"
  },
  {
    "url": "assets/js/118.80dac608.js",
    "revision": "760d4b61ddc0479cd2a44137e5d09505"
  },
  {
    "url": "assets/js/119.c50ef242.js",
    "revision": "e5db2409331614ce05a2385232d53cda"
  },
  {
    "url": "assets/js/12.a065c28c.js",
    "revision": "b05de892d4e6034b38e757b8f24a588c"
  },
  {
    "url": "assets/js/120.2dbf3357.js",
    "revision": "86d509d14c8b58f080bc56b4401e930b"
  },
  {
    "url": "assets/js/121.09dfefa2.js",
    "revision": "5444ccef9c0f91a2cbb8b25ed1cd82d0"
  },
  {
    "url": "assets/js/122.b86c8da4.js",
    "revision": "71287e9c12bd4d0e1cca0dd2acdea36a"
  },
  {
    "url": "assets/js/123.45f19d48.js",
    "revision": "bd6338c828e123a840afcdc94a17cb50"
  },
  {
    "url": "assets/js/124.0c1bb952.js",
    "revision": "ebad501e32a7b16b1e3f7350bf6ff0d0"
  },
  {
    "url": "assets/js/125.406bd474.js",
    "revision": "31b03633c1262841991e05241a766773"
  },
  {
    "url": "assets/js/126.63ce3a42.js",
    "revision": "c35852588b13aba4d454b2f458ee757e"
  },
  {
    "url": "assets/js/127.1de1a365.js",
    "revision": "8fbd4fb729d34a960d965065f4d0cf04"
  },
  {
    "url": "assets/js/128.0c1147ea.js",
    "revision": "5f56aa8be2149699a35d12f1efaeac97"
  },
  {
    "url": "assets/js/129.9c7d424e.js",
    "revision": "cd55e510d39e786a7429cf6fb177c8ff"
  },
  {
    "url": "assets/js/13.dc620359.js",
    "revision": "46ab309185fa16f1c1a3dae55eb7647c"
  },
  {
    "url": "assets/js/130.a343030d.js",
    "revision": "5769fd595e5db266696606ebbed1af50"
  },
  {
    "url": "assets/js/131.3e55226c.js",
    "revision": "312f6202a227f07f6512e83dab9d5ccd"
  },
  {
    "url": "assets/js/132.2152e1dd.js",
    "revision": "7183c2a10a3fdd006e52224b8a421163"
  },
  {
    "url": "assets/js/133.56dba616.js",
    "revision": "d0c6ac6abfc0c7561c9fa7bb2423414b"
  },
  {
    "url": "assets/js/134.465c1361.js",
    "revision": "bcf6bfd6761009c928030fc5905684dc"
  },
  {
    "url": "assets/js/135.3d101281.js",
    "revision": "c22166416a3d2ae6a7aec299861f8718"
  },
  {
    "url": "assets/js/136.1b2dbbfa.js",
    "revision": "59de413fa281c0f5194bec7f51929366"
  },
  {
    "url": "assets/js/137.c6d11767.js",
    "revision": "d41633059980b8bcc817fb2f744773a2"
  },
  {
    "url": "assets/js/138.07d20d7f.js",
    "revision": "cbb6e702ba435246c6eff6d667e5ea17"
  },
  {
    "url": "assets/js/139.0e0fa708.js",
    "revision": "67450d55753298967345ce93ebc97e94"
  },
  {
    "url": "assets/js/14.ee8af007.js",
    "revision": "6eee91046d9b0e7a42e7ba0b8a40e80d"
  },
  {
    "url": "assets/js/140.2ec4f64b.js",
    "revision": "877a6fd6d428bcf35e7a7c9b907b7726"
  },
  {
    "url": "assets/js/141.1fc1181e.js",
    "revision": "0282b42700fb01552c44716fad758dfb"
  },
  {
    "url": "assets/js/142.452f1421.js",
    "revision": "cddadd9cb2de708f971d495ffe452ac8"
  },
  {
    "url": "assets/js/143.485d4943.js",
    "revision": "6ef4f8a9f1e99df5936c6b508e9f4e80"
  },
  {
    "url": "assets/js/144.0a7e6bda.js",
    "revision": "ed5b3e0f9855c55d3fc2cc3dc1f431ea"
  },
  {
    "url": "assets/js/145.e3aa78d6.js",
    "revision": "71587dd0d841a84372862ed65ccc4bf5"
  },
  {
    "url": "assets/js/146.89bc3ddf.js",
    "revision": "04c37e8e8cc34c1160c1a1412f2fd1d5"
  },
  {
    "url": "assets/js/147.5dde6a06.js",
    "revision": "b347354590278b667c5e093117258f11"
  },
  {
    "url": "assets/js/148.2448daaa.js",
    "revision": "f0f45a415625843d3798c5ddc0aa8604"
  },
  {
    "url": "assets/js/149.bc81eac3.js",
    "revision": "25a35e2113a3e551444ef8b27bfcd9a9"
  },
  {
    "url": "assets/js/15.d37f732f.js",
    "revision": "a008f8ef91bae00f408a0051a9508ee9"
  },
  {
    "url": "assets/js/150.e643baa7.js",
    "revision": "faf9a49dbfd8c7b69a06e1b719d17871"
  },
  {
    "url": "assets/js/151.881d84ba.js",
    "revision": "49f42b312d88914de817e7024950de9f"
  },
  {
    "url": "assets/js/152.6f541e3b.js",
    "revision": "78bad0f7835ed7bebd231f9a20c66c26"
  },
  {
    "url": "assets/js/153.031b33e6.js",
    "revision": "1507b72067bb1c93a5f241847997b359"
  },
  {
    "url": "assets/js/154.0e46ed9d.js",
    "revision": "3cefeed53f8c8d82868bd964650a2e5b"
  },
  {
    "url": "assets/js/155.4fcf3621.js",
    "revision": "2db159b84e3625c0384497eaf1e408da"
  },
  {
    "url": "assets/js/156.f4301677.js",
    "revision": "6335753599e1bbd046b44abeb443d323"
  },
  {
    "url": "assets/js/157.721ba984.js",
    "revision": "27e2cb5c6bd4724c39da162772fe3591"
  },
  {
    "url": "assets/js/158.1b88be28.js",
    "revision": "2fc94e0bfe93da9216142b0e7f7724a2"
  },
  {
    "url": "assets/js/159.47046be0.js",
    "revision": "65dede3bb589d16a54143bcfc035c3b6"
  },
  {
    "url": "assets/js/16.26991a9b.js",
    "revision": "8bfe451d262071c5aa808c743ce5e81a"
  },
  {
    "url": "assets/js/160.2e5acaa9.js",
    "revision": "85602bf85d8962fbea8f6cc83115d0d7"
  },
  {
    "url": "assets/js/161.d0b36e80.js",
    "revision": "da8a55ac2ff8c432918a6e88b71a603a"
  },
  {
    "url": "assets/js/162.9b1a0f4a.js",
    "revision": "7a5c31751773558b4c845eababd18ec3"
  },
  {
    "url": "assets/js/163.61681d51.js",
    "revision": "e5ea4f7858cd2bd9bcca7f5d9180f71a"
  },
  {
    "url": "assets/js/164.f7f174ce.js",
    "revision": "a23cd621afe46a418be2e1de5dac95b7"
  },
  {
    "url": "assets/js/165.7a507a22.js",
    "revision": "870c664bb0268a092bca30597f2cb5ba"
  },
  {
    "url": "assets/js/166.6efa7e45.js",
    "revision": "d72726acdb8ddae50613fe3319537bf5"
  },
  {
    "url": "assets/js/167.794a80d7.js",
    "revision": "0966ab61e736fc4555b23a5c5ed8f59a"
  },
  {
    "url": "assets/js/168.880a2822.js",
    "revision": "63c8ac412b0e852d3d9a44adb1cc4ad3"
  },
  {
    "url": "assets/js/169.9a13293f.js",
    "revision": "6e2852e4e9ee80f477ee3fe1e6086e66"
  },
  {
    "url": "assets/js/17.7e7e0e76.js",
    "revision": "cac49cd95fedad5b662df79f59ff6d6e"
  },
  {
    "url": "assets/js/170.6bd7d520.js",
    "revision": "9a7490b37c7a34ebd331b6a9888fd9c7"
  },
  {
    "url": "assets/js/171.912086ac.js",
    "revision": "c89c5df28387ad0e6ca6c736d2760ed7"
  },
  {
    "url": "assets/js/172.701c76c6.js",
    "revision": "db1271292db72d1b93ad18fcdedf2717"
  },
  {
    "url": "assets/js/173.267033e8.js",
    "revision": "80e44861b0b596c4dfac2e17ba552735"
  },
  {
    "url": "assets/js/174.6ebfa0b1.js",
    "revision": "6fcdd8638332e0e5ebafe00112c21b84"
  },
  {
    "url": "assets/js/175.fdd92031.js",
    "revision": "f66627b2f1d82189e30394585ffc6c90"
  },
  {
    "url": "assets/js/18.3a6c03b4.js",
    "revision": "9da3d617f36fe6598020ab4198ad9128"
  },
  {
    "url": "assets/js/19.812ab622.js",
    "revision": "ad174f6376e596e490bef208d0769446"
  },
  {
    "url": "assets/js/2.035d0167.js",
    "revision": "db4a116bb145e8be61495e61e3751730"
  },
  {
    "url": "assets/js/20.65c4e456.js",
    "revision": "543b511882d80ca7a201d0bc0755c116"
  },
  {
    "url": "assets/js/21.769601c4.js",
    "revision": "84abe1e835e82c9ab542388f81e85393"
  },
  {
    "url": "assets/js/22.c0f5ea33.js",
    "revision": "2c4c70f01eb32d18fbcaaef72a53636e"
  },
  {
    "url": "assets/js/23.356188b9.js",
    "revision": "ddb7cd5c779b23b4c58a8c25f190ad9b"
  },
  {
    "url": "assets/js/24.0853b7ee.js",
    "revision": "25273bc53494b6bedca26126010be3e1"
  },
  {
    "url": "assets/js/25.648bf6a5.js",
    "revision": "5f12a1683b692f6d584c5ea376722082"
  },
  {
    "url": "assets/js/26.4e0756a8.js",
    "revision": "ff6af1ae5d592d76018d1fde60c9959b"
  },
  {
    "url": "assets/js/27.a0f71346.js",
    "revision": "b0a2aa90823f7648a55bcde40126ac30"
  },
  {
    "url": "assets/js/28.f5228a9b.js",
    "revision": "2aee3d255309eef128fc18732bcfa905"
  },
  {
    "url": "assets/js/29.75cdc6a8.js",
    "revision": "a6ead88900bdc4e20b497f3ebf574367"
  },
  {
    "url": "assets/js/3.38050f54.js",
    "revision": "26ff9c0d96267f7e6731a3ccd22141bf"
  },
  {
    "url": "assets/js/30.9048459d.js",
    "revision": "ea4c3ea6276b55e455352356d98d767b"
  },
  {
    "url": "assets/js/31.3d03ecf2.js",
    "revision": "5d727d9a22a5f241ca6cc426dd31086e"
  },
  {
    "url": "assets/js/32.46309290.js",
    "revision": "33eb1f978fa527191692d1c60cd9f473"
  },
  {
    "url": "assets/js/33.9ec6f2ed.js",
    "revision": "12bde4c647a3cc2efd2d0adfeb456c69"
  },
  {
    "url": "assets/js/34.966cf5af.js",
    "revision": "3559b94d03b0d380e2b683c9b0671637"
  },
  {
    "url": "assets/js/35.434a3dbf.js",
    "revision": "dbf7d3d1511c4777b40e9779139d6931"
  },
  {
    "url": "assets/js/36.26de390c.js",
    "revision": "81dc8cbc0585398796ae62fb81eafcd9"
  },
  {
    "url": "assets/js/37.017a85a7.js",
    "revision": "366703eabcaa0c6b7650530f83d1723e"
  },
  {
    "url": "assets/js/38.c7a88c4a.js",
    "revision": "07c55a309174adf7ed47e83b785c2826"
  },
  {
    "url": "assets/js/39.f977ae09.js",
    "revision": "6558a9e8efb5d48c405820ea88044380"
  },
  {
    "url": "assets/js/4.f45af201.js",
    "revision": "7740440e860557eb69c6aec9449e8b41"
  },
  {
    "url": "assets/js/40.6a2554a7.js",
    "revision": "ce01e4eca51b9a50fa2146bc65d80c1f"
  },
  {
    "url": "assets/js/41.16fec854.js",
    "revision": "e613b71d9ef755f3f679638147310831"
  },
  {
    "url": "assets/js/42.4b9ce859.js",
    "revision": "538c291d2a077063955b46a3097739ca"
  },
  {
    "url": "assets/js/43.ccb9cfc3.js",
    "revision": "13c31654c114fe06ea31bd376664c6f0"
  },
  {
    "url": "assets/js/44.b8c72264.js",
    "revision": "f615fbc202f146dc0eab76b6af73ba97"
  },
  {
    "url": "assets/js/45.b20960b7.js",
    "revision": "4cee7eedd3582b96d6565486174dea09"
  },
  {
    "url": "assets/js/46.db74e942.js",
    "revision": "46a056e9096d1e4964fcd008f84d11a8"
  },
  {
    "url": "assets/js/47.a4dbd91e.js",
    "revision": "0fb313f89364231183fd83facd662c32"
  },
  {
    "url": "assets/js/48.bff00f28.js",
    "revision": "8966304cf7c891440eaa3ae840826a49"
  },
  {
    "url": "assets/js/49.aa3bfec9.js",
    "revision": "afe51da2aa99d64159feb28724b329e9"
  },
  {
    "url": "assets/js/5.d9a3afea.js",
    "revision": "c936add97947d7153e746907154158c6"
  },
  {
    "url": "assets/js/50.e26d560f.js",
    "revision": "e48e142fe6e0d57a9779529d7b02b868"
  },
  {
    "url": "assets/js/51.5e46da83.js",
    "revision": "4a018c2e390fedc1afb07ef4abeb6eff"
  },
  {
    "url": "assets/js/52.ced27256.js",
    "revision": "083b03e4ac612c1c6e505a247800f45a"
  },
  {
    "url": "assets/js/53.89d814cf.js",
    "revision": "c0a282ed6bf8dd6410f8e6929fee13d7"
  },
  {
    "url": "assets/js/54.8d072ef4.js",
    "revision": "6d2f61b595a1a6122a195ab4729876b5"
  },
  {
    "url": "assets/js/55.0de346aa.js",
    "revision": "700cbff19f155e236b344b3164b51c02"
  },
  {
    "url": "assets/js/56.6bfd9412.js",
    "revision": "a23ced2a69b5101b8f3f38a7b6ab04dd"
  },
  {
    "url": "assets/js/57.deba561e.js",
    "revision": "87f45e313f5e3025860df36a514707d1"
  },
  {
    "url": "assets/js/58.d55a6e8a.js",
    "revision": "f9a5c412053eaedb5fa7b4c08fead053"
  },
  {
    "url": "assets/js/59.95147a1c.js",
    "revision": "9cb572e8f8307f3ea787420b58528b6c"
  },
  {
    "url": "assets/js/6.5ede2895.js",
    "revision": "bda504422e22a118c8451c74a135e120"
  },
  {
    "url": "assets/js/60.151d927a.js",
    "revision": "e65bb84224ebedc2da3ec75d2532496c"
  },
  {
    "url": "assets/js/61.946b84a3.js",
    "revision": "9a538a08aae1f2abb3c56bb6b46ad8b0"
  },
  {
    "url": "assets/js/62.38abda4b.js",
    "revision": "68552fbe7832bf6c0be0f241a37c903f"
  },
  {
    "url": "assets/js/63.ae2adddd.js",
    "revision": "d3e5e496c98d4049078be759b7237430"
  },
  {
    "url": "assets/js/64.86b986a2.js",
    "revision": "3cea64ec5df97a0185076fe4d36a6278"
  },
  {
    "url": "assets/js/65.aadc33ae.js",
    "revision": "75623933d4514dd7739b518b84f80f20"
  },
  {
    "url": "assets/js/66.43e0b38f.js",
    "revision": "ab4e90d4aa093b2b1e3683ea8850512f"
  },
  {
    "url": "assets/js/67.509bc9a5.js",
    "revision": "647f5780048cf4dc7825764896e74007"
  },
  {
    "url": "assets/js/68.7907daf6.js",
    "revision": "f520a706f984fc57f3387ecc6809cbd9"
  },
  {
    "url": "assets/js/69.1bbc38bf.js",
    "revision": "dfe579dc69fdcd6b1ff4ffc742e6bd1d"
  },
  {
    "url": "assets/js/7.99959cf1.js",
    "revision": "14095a9c0bfef9283742321aa9c4beaa"
  },
  {
    "url": "assets/js/70.0e3b5215.js",
    "revision": "c1281269393ba020d5ca6fb0e5b48bd8"
  },
  {
    "url": "assets/js/71.9f0f2317.js",
    "revision": "669dd60098a487b0875e51e0a38bf0bd"
  },
  {
    "url": "assets/js/72.066be174.js",
    "revision": "8129133b061dcfba307ecfed3e910b10"
  },
  {
    "url": "assets/js/73.442fecca.js",
    "revision": "df94bc6a8866073f5c45329b4f398a28"
  },
  {
    "url": "assets/js/74.12981292.js",
    "revision": "14699c210ebb2f261111d5152ff70d70"
  },
  {
    "url": "assets/js/75.39099a19.js",
    "revision": "6166be90bd93151902c433c47efbe5fd"
  },
  {
    "url": "assets/js/76.9e01b8ff.js",
    "revision": "42aee05fcc30a00038366dd1e7dacd52"
  },
  {
    "url": "assets/js/77.d663be05.js",
    "revision": "54d7fc40a908963a418105931ff83d2b"
  },
  {
    "url": "assets/js/78.c883babe.js",
    "revision": "d724f28a1668939ffee5e563af89aa33"
  },
  {
    "url": "assets/js/79.b1df61b9.js",
    "revision": "06ba561c858ade552d62a2500ef16b57"
  },
  {
    "url": "assets/js/8.886ecb06.js",
    "revision": "1f1231c14171773e48a88b8e88e32587"
  },
  {
    "url": "assets/js/80.8b34cef8.js",
    "revision": "5e7391c92acd251f4014df9fcb9d7ab8"
  },
  {
    "url": "assets/js/81.c172b10a.js",
    "revision": "37ae9f54484d77c33b9787b3d4e796eb"
  },
  {
    "url": "assets/js/82.f3cf4f0a.js",
    "revision": "07166751120365b9ba2dd2f8e1896910"
  },
  {
    "url": "assets/js/83.fc3fb99e.js",
    "revision": "a7ab003f6e2fd69d3bde8816e3b78023"
  },
  {
    "url": "assets/js/84.e129a4db.js",
    "revision": "0d9b32b0ff5d5d0b6f0e38c04934de83"
  },
  {
    "url": "assets/js/85.d1137253.js",
    "revision": "7dae0b14418e020cddba7b0e1ebc3859"
  },
  {
    "url": "assets/js/86.e7c83952.js",
    "revision": "2facba2f9b9328cb8e49d4943295fe61"
  },
  {
    "url": "assets/js/87.3a4b6eb5.js",
    "revision": "2a96bd0508c1e3f55a5846f5112cbcb1"
  },
  {
    "url": "assets/js/88.24d2425e.js",
    "revision": "17d384385769c83c8ac5612da786f033"
  },
  {
    "url": "assets/js/89.fece7923.js",
    "revision": "7db417f6e38538a566a2a25bdf59c9b3"
  },
  {
    "url": "assets/js/9.6d5cef4e.js",
    "revision": "68cd0a957ef2bd4c8d31ac2f48049552"
  },
  {
    "url": "assets/js/90.91670764.js",
    "revision": "5975f6384984ecca060fd03e4095bd1a"
  },
  {
    "url": "assets/js/91.c2f4efc5.js",
    "revision": "142ea390c45624e56baaa8936d4d2da5"
  },
  {
    "url": "assets/js/92.66756a02.js",
    "revision": "e8c4cf8050b8b0ff1468e2f000ff1701"
  },
  {
    "url": "assets/js/93.f78ed151.js",
    "revision": "d1d69e861db34e73008200b6fd6b26bd"
  },
  {
    "url": "assets/js/94.2f9d573c.js",
    "revision": "7cefd0c49af05186d88f89d17dab2c2a"
  },
  {
    "url": "assets/js/95.8dfadc05.js",
    "revision": "4587f65f28c27fc599559522e02778ac"
  },
  {
    "url": "assets/js/96.d20e268b.js",
    "revision": "7f28cb8d4c3645961e91467e6100dcdb"
  },
  {
    "url": "assets/js/97.f4b35b8a.js",
    "revision": "a1cff7a812a23568d17ddccb02294523"
  },
  {
    "url": "assets/js/98.ed29b3fe.js",
    "revision": "ce3c5523bed83f03c004530045fa516d"
  },
  {
    "url": "assets/js/99.1fce88a9.js",
    "revision": "4ed12296c6cff4e35fff6e81a938932a"
  },
  {
    "url": "assets/js/app.8e09440d.js",
    "revision": "bb0989f5e1bc5cd980365094c2595167"
  },
  {
    "url": "index.html",
    "revision": "f1fc0fceb27c28d45d7e880caf74854e"
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
