self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("fox-store")
      .then((cache) =>
        cache.addAll([
          "/DO3/",
          "/DO3/index.html",
          "/DO3/index.js",
          "/DO3/style.css",
          "/DO3/main.js",
          "/DO3/cage.JPG",
          "/DO3/innerRace.JPG",
          "/DO3/outerRace.JPG",
          "/DO3/Cheveron_process copy-frei.png",
          "/DO3/download.png",
          "/DO3/environment.env",
          "/DO3/gkn-au-stacked.svg",
          "/DO3/DO3-2.glb",
          "/DO3/Helvetica Neue STD/Helvetica Neue LT Std/HelveticaNeueLTStd-Lt.otf",
          "/DO3/Helvetica Neue STD/Helvetica Neue LT Std/HelveticaNeueLTStd-Bd.otf",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
