if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,n,s)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(n.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=s(...e);return r.default||(r.default=i),r}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/2722a505.a7e2462cfd97d830f2b8.js",revision:"yMegIg1GiTpErtAzfqV19"},{url:"/_next/static/chunks/3ef630e34cd10ba68f9d468ac363ff81c534e1e9.ca31a7351ccc5fb63aa9.js",revision:"yMegIg1GiTpErtAzfqV19"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.283cd434ff6aa69171fb.js",revision:"yMegIg1GiTpErtAzfqV19"},{url:"/_next/static/chunks/ea88be26.51d1767090a2670c437e.js",revision:"yMegIg1GiTpErtAzfqV19"},{url:"/_next/static/chunks/framework.53cfa66f9846f4090096.js",revision:"yMegIg1GiTpErtAzfqV19"},{url:"/_next/static/chunks/main-87540a9247cfbf6cbf55.js",revision:"yMegIg1GiTpErtAzfqV19"},{url:"/_next/static/chunks/pages/_app-8a8177903416f23b310e.js",revision:"yMegIg1GiTpErtAzfqV19"},{url:"/_next/static/chunks/pages/_error-b52f8b678ce4b85a362a.js",revision:"yMegIg1GiTpErtAzfqV19"},{url:"/_next/static/chunks/pages/index-40d2fc09c6ffd412e7f1.js",revision:"yMegIg1GiTpErtAzfqV19"},{url:"/_next/static/chunks/pages/profile-4cf392f940e310d94f1f.js",revision:"yMegIg1GiTpErtAzfqV19"},{url:"/_next/static/chunks/polyfills-fa276ba060a4a8ac7eef.js",revision:"yMegIg1GiTpErtAzfqV19"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"yMegIg1GiTpErtAzfqV19"},{url:"/_next/static/yMegIg1GiTpErtAzfqV19/_buildManifest.js",revision:"yMegIg1GiTpErtAzfqV19"},{url:"/_next/static/yMegIg1GiTpErtAzfqV19/_ssgManifest.js",revision:"yMegIg1GiTpErtAzfqV19"},{url:"/android-icon-144x144.png",revision:"b4c751e9ddbfefebab7b275743c0a8c7"},{url:"/android-icon-192x192.png",revision:"85117f3f0d43ebcbaee06b4c3256c469"},{url:"/android-icon-36x36.png",revision:"db68e9433d180bff81e006d0b47b6373"},{url:"/android-icon-48x48.png",revision:"d39f97fd47810e372d517dd19ccbbbb7"},{url:"/android-icon-512x512.png",revision:"316dd8271fc72340a1ad9daf8d44ea44"},{url:"/android-icon-72x72.png",revision:"6be77d683d3debdaec2f806f92eb0d73"},{url:"/android-icon-96x96.png",revision:"30032cc85145902511ee6647614eeeb3"},{url:"/apple-icon-114x114.png",revision:"debc4ca061d804d5d744732a6a02b503"},{url:"/apple-icon-120x120.png",revision:"36295f2be11a87a48eecd06a17b7a6b1"},{url:"/apple-icon-144x144.png",revision:"b4c751e9ddbfefebab7b275743c0a8c7"},{url:"/apple-icon-152x152.png",revision:"fc559131bb5875acc1688f24b727f871"},{url:"/apple-icon-180x180.png",revision:"48d07f6505623a90dadff933797207b8"},{url:"/apple-icon-57x57.png",revision:"2d2710a20d8b0ba47b4ff94df9d0043d"},{url:"/apple-icon-60x60.png",revision:"9b82741bd08c71fee213a1784361fd19"},{url:"/apple-icon-72x72.png",revision:"6be77d683d3debdaec2f806f92eb0d73"},{url:"/apple-icon-76x76.png",revision:"31fe6ff5c7b38917800b98627b208251"},{url:"/apple-icon-precomposed.png",revision:"596a5cadc873a854b729b6dce52afd28"},{url:"/apple-icon.png",revision:"596a5cadc873a854b729b6dce52afd28"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon-16x16.png",revision:"c1a6ae76e6ed3a49c3cae0c512660264"},{url:"/favicon-32x32.png",revision:"036c69df9ede41cd7caa1c164b8653ff"},{url:"/favicon-96x96.png",revision:"30032cc85145902511ee6647614eeeb3"},{url:"/favicon.ico",revision:"020fe26d71564285d64995275bd03156"},{url:"/img/projects/MedecinsSansFrontieres.jpg",revision:"a5a37d109a4b72e77c65da4179c31ddc"},{url:"/img/projects/coloqio.jpg",revision:"b8565f2d06eb802101dee0d58858c11a"},{url:"/img/projects/maldita.jpg",revision:"e6f380219495842ceac4fae021e17a82"},{url:"/img/projects/metaledger.jpg",revision:"948b94d7d2654a2bc0ec069d8631b297"},{url:"/img/projects/odos.jpg",revision:"a32e29309438c56d57a7de13174a996a"},{url:"/img/projects/pdc.jpg",revision:"72d8e1203e461ff1d9f553f86d89e9cd"},{url:"/img/projects/polder.jpg",revision:"2dedf49d4270b5cce82446482871f0e3"},{url:"/img/projects/yotengo.jpg",revision:"e7b2d978569a6a87211b10dbf33cf15c"},{url:"/manifest.json",revision:"4a0106dd7a6d8d2d9d2ded14cc67cd93"},{url:"/ms-icon-144x144.png",revision:"b4c751e9ddbfefebab7b275743c0a8c7"},{url:"/ms-icon-150x150.png",revision:"5f7bff33f11131278ecc3fb6cf63aa4a"},{url:"/ms-icon-310x310.png",revision:"387c40121efb626e121052df205846c7"},{url:"/ms-icon-70x70.png",revision:"ed85825c41edfb8fcc59b464b1f7ad5d"},{url:"/robots.txt",revision:"f71d20196d4caf35b6a670db8c70b03d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
