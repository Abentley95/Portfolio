"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Portfolio/index.html","6748c030199d186dc32b03237475cc49"],["/Portfolio/static/js/main.783fbcbc.js","1ece5651b4746417f3af9a8de9facc0d"],["/Portfolio/static/media/AustinBentley.fdda3753.jpg","fdda37531e64f67a8ce84290901ae632"],["/Portfolio/static/media/IconDragThumbnail.4035c5a0.PNG","4035c5a00f1794d45dadb09e3fb59447"],["/Portfolio/static/media/NNMBackground.c910c1c0.jpg","c910c1c0cb0a8e271eb34b9d23678e17"],["/Portfolio/static/media/RheinTech.9c711912.png","9c7119123f7040d43593ba9db82be088"],["/Portfolio/static/media/draggable.c4be234f.PNG","c4be234f94b621bd889900326139dce7"],["/Portfolio/static/media/internshipfinal.8e5629f4.png","8e5629f4c72d0d4a6bb9b35132e0f5f4"],["/Portfolio/static/media/laptops1.e908972f.jpg","e908972f3f58d063c7fa8d57395fcf6f"],["/Portfolio/static/media/laptops2.b6815558.jpg","b68155580a45ca07edd5b41ed990f6b4"],["/Portfolio/static/media/laptops3.fa7b0f5f.jpg","fa7b0f5fb1721df4158652bd3c32c259"],["/Portfolio/static/media/laptops4.36fa7ec8.jpg","36fa7ec8f8a97e12122c772a483a2812"],["/Portfolio/static/media/logoXviridis1.321396bc.jpg","321396bc10425c1a53334ac1a63c2f2e"],["/Portfolio/static/media/me.1fd7efcf.jpg","1fd7efcf5c7d0672b8597ec08aaec5c7"],["/Portfolio/static/media/nationalnuclearmuseum.b53b7813.png","b53b78134b2bb33b56077b9fcad479cf"],["/Portfolio/static/media/rheintechhome.114bf9d0.PNG","114bf9d0672760b5aea83aef9f9bcbda"],["/Portfolio/static/media/slider.d26bccc7.PNG","d26bccc7acd789558a27fce52dd01be8"],["/Portfolio/static/media/tokyoghoul1.1fd2794e.png","1fd2794e11cf02e1a47d2686959c2a07"],["/Portfolio/static/media/tokyoghoul2.7461a7b4.jpg","7461a7b4cbca25f959fd4c85afec4bb9"],["/Portfolio/static/media/wave_01.30a77ff9.png","30a77ff9af9ddc8b7fbf54c2a297cacd"],["/Portfolio/static/media/wave_02.8e0883f3.png","8e0883f3f639fc00c94cba818385d70e"],["/Portfolio/static/media/wave_03.59f0c07e.png","59f0c07ef4dc3b7d53b1db5a30642d34"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/Portfolio/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});