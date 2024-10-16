'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".firebase/hosting.YnVpbGRcd2Vi.cache": "bfaf351178f103d4ebd8a126649b20f7",
".git/COMMIT_EDITMSG": "7f6ba03cbf60957d5d452c8df6d6950b",
".git/config": "45ae365b39e1d8350906a3a62d7ee46a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "69f55bec51c5953ffd67db3056449a7a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "13bcfa19de6e6e109119aa2a7826b024",
".git/logs/refs/heads/master": "13bcfa19de6e6e109119aa2a7826b024",
".git/objects/06/37a088a01e8ddab3bf3fa98dbe804cbde1a0dc": "2fedb3e87c69aac3dea537cfcd7943b2",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/c6a97993e84995e204f68f5f729ff8995fc622": "aafc7962f81bbabee2efb45c2a640f47",
".git/objects/0b/db7c75195ffbfd6376e6b5b1067a9298575723": "fb85463ad55c2d0524b7570f676e562d",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/27911c020b42d96b5b06faaab8607729688928": "57db2700b90ac1fc495e23a6474900e5",
".git/objects/3a/0a3f84c0ae7a663a743c307c44c4e9cf1f703b": "d53a7475580a230e3cc8aa73a903d243",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/52/11d89f4815938a6b0350c54571d984f8d5b95f": "bc8655cee821a97c7901c4d3c9b6810b",
".git/objects/59/b73deb126b51eda8e4e3d896e2dae2d0aee73f": "31964da97d84fbe407c74a9262ef4cc0",
".git/objects/63/bdcde6d34582d3432657058cea87873252800e": "06babc9716704f190e7b308a403e052b",
".git/objects/66/037326c171ff15c5c73bb30860864ed8381291": "7e019f3d11a5dfd956970811a0d13ecb",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/70/93d7d3b7b5798da5ec37c9b02d94960095851e": "b7a3fa0a3a90e179cb1f8a6ffb57c543",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/7f6310755422d220e2c975ca4387ab465c95a0": "bfade2f38068d533f45c1eda0e60dd92",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/e9ad869ffbaf3143b83d4bc613e591f7cb09ab": "b0c89f4a5cc1a143fe0b5a8b11b24bf4",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/45e98fe34d4ce48638638d089d5a027e9ded7e": "e2cbe689df36d5c7e34d55260c8f869b",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/639519b96c2c0b6a93e756bb0a260706574429": "032880bebac3f1a86be86db76e630a81",
".git/objects/dc/ee0bb276e92b1265ce964914fd4cbcadb99285": "64a97fdb457111d8545b518b32817726",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/a31d2b43334876ba5d5cfab394c4c0b4cf8d74": "3bcf309a4cb55847a556384b552d220b",
".git/objects/ef/18345e229c2ebf47995bb19e41f64114381387": "3b14220db2440ef2c10a29a718376f72",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/master": "855b93295e6c32417e01a1dc63fde9a8",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"assets/NOTICES": "2364c4a9a49887e4a2c88f530dc9e66d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build/web/index.html": "ab290686469924579a596e3559df28e7",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase.json": "18500ee9b0fa2255ec701badcc73425d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "031623c9a67b7f9524f15abbc33f38cf",
"follow_check_web/.git/COMMIT_EDITMSG": "9544b6a13b710e2ad6852d60016f1d34",
"follow_check_web/.git/config": "750f613ffb75000ce11f9158ba39eac1",
"follow_check_web/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"follow_check_web/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"follow_check_web/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"follow_check_web/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"follow_check_web/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"follow_check_web/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"follow_check_web/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"follow_check_web/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"follow_check_web/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"follow_check_web/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"follow_check_web/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"follow_check_web/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"follow_check_web/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"follow_check_web/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"follow_check_web/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"follow_check_web/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"follow_check_web/.git/index": "34c023c97bc75ed9428e5de837b75b7a",
"follow_check_web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"follow_check_web/.git/logs/HEAD": "95e84b7d7800052db51833710aae5348",
"follow_check_web/.git/logs/refs/heads/main": "95e84b7d7800052db51833710aae5348",
"follow_check_web/.git/logs/refs/remotes/origin/HEAD": "6d4b280584585c7cee95e47ee93bd553",
"follow_check_web/.git/logs/refs/remotes/origin/main": "4189b2bfc3fe63184d22ad439dc46a91",
"follow_check_web/.git/objects/ca/c59f249e8dde3fd6336c1e3a17185664ae4995": "89ae5149c58d29e4f036f24e96b314b5",
"follow_check_web/.git/objects/pack/pack-d652d11f8d7352a028e1d5f882212044c3b7ded2.idx": "ce06510c4f6f01b06e34b317299e0b3e",
"follow_check_web/.git/objects/pack/pack-d652d11f8d7352a028e1d5f882212044c3b7ded2.pack": "a4efa7f6a58bee8eaec35faa52dc3468",
"follow_check_web/.git/objects/pack/pack-d652d11f8d7352a028e1d5f882212044c3b7ded2.rev": "0f44ebb34992c66aa20f879a828ca34f",
"follow_check_web/.git/packed-refs": "c76d34ec66947524ebbf8880744408f7",
"follow_check_web/.git/refs/heads/main": "940932e90a96ade777be210c47bcee15",
"follow_check_web/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"follow_check_web/.git/refs/remotes/origin/main": "940932e90a96ade777be210c47bcee15",
"follow_check_web/assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"follow_check_web/assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"follow_check_web/assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"follow_check_web/assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"follow_check_web/assets/NOTICES": "2364c4a9a49887e4a2c88f530dc9e66d",
"follow_check_web/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"follow_check_web/canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"follow_check_web/canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"follow_check_web/canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"follow_check_web/canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"follow_check_web/canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"follow_check_web/canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"follow_check_web/canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"follow_check_web/canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"follow_check_web/canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"follow_check_web/canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"follow_check_web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"follow_check_web/flutter.js": "f393d3c16b631f36852323de8e583132",
"follow_check_web/flutter_bootstrap.js": "e4d8be193e99df482823d665eebe2152",
"follow_check_web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"follow_check_web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"follow_check_web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"follow_check_web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"follow_check_web/index.html": "5b8f3e0ce71dc2986e5df1496bd43f6a",
"follow_check_web/main.dart.js": "94c87e516730d0499cbd9536dad05695",
"follow_check_web/manifest.json": "2d97902dd0b761670bd5a1951bbe37c6",
"follow_check_web/version.json": "468f9580b7765b1a0b44250dedf7ca13",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5b8f3e0ce71dc2986e5df1496bd43f6a",
"/": "5b8f3e0ce71dc2986e5df1496bd43f6a",
"main.dart.js": "94c87e516730d0499cbd9536dad05695",
"manifest.json": "2d97902dd0b761670bd5a1951bbe37c6",
"version.json": "468f9580b7765b1a0b44250dedf7ca13"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
