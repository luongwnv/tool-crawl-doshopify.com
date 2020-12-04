const http = require("http");
const path = require("path");
const mime = require("mime");
const fs = require("fs");
const request = require("request");

let links = [
  "font/Arial.ttf",
  "font/CurlzMT.ttf",
  "font/OpenSans-Bold.ttf",
  "font/1sttheworld.myshopify.com/Afterglow-regular.ttf",
  "font/1sttheworld.myshopify.com/Agencyfb.ttf",
  "font/1sttheworld.myshopify.com/Akadora.ttf",
  "font/1sttheworld.myshopify.com/Ambar-pearl-personal-use.ttf",
  "font/1sttheworld.myshopify.com/American-captain.ttf",
  "font/1sttheworld.myshopify.com/Aoncc-.ttf",
  "font/1sttheworld.myshopify.com/Arial-black.ttf",
  "font/1sttheworld.myshopify.com/Bebasneue-regular.ttf",
  "font/1sttheworld.myshopify.com/Big-caslon-medium.ttf",
  "font/1sttheworld.myshopify.com/Blue-ocean.ttf",
  "font/1sttheworld.myshopify.com/Carnevalee-freakshow.ttf",
  "font/1sttheworld.myshopify.com/Caviardreams-bold.ttf",
  "font/1sttheworld.myshopify.com/Caviardreams-bolditalic.ttf",
  "font/1sttheworld.myshopify.com/Caviardreams-italic.ttf",
  "font/1sttheworld.myshopify.com/Caviardreams.ttf",
  "font/1sttheworld.myshopify.com/Celtg-.ttf",
  "font/1sttheworld.myshopify.com/Celtic-gaelige.ttf",
  "font/1sttheworld.myshopify.com/Celtichd.ttf",
  "font/1sttheworld.myshopify.com/Copperplate.ttf",
  "font/1sttheworld.myshopify.com/Hollywoodhills.ttf",
  "font/1sttheworld.myshopify.com/Icielamerigraf.ttf",
  "font/1sttheworld.myshopify.com/Ifc-insane-rodeo.ttf",
  "font/1sttheworld.myshopify.com/Irishpenny.ttf",
  "font/1sttheworld.myshopify.com/Irishuncialfabeta-bold.ttf",
  "font/1sttheworld.myshopify.com/Keepcalm-medium.ttf",
  "font/1sttheworld.myshopify.com/Mermaid-swash-caps.ttf",
  "font/1sttheworld.myshopify.com/Mermaid1001.ttf",
  "font/1sttheworld.myshopify.com/Myriadpro-regular.ttf",
  "font/1sttheworld.myshopify.com/Oceanicdrift3d.ttf",
  "font/1sttheworld.myshopify.com/Oldlondon.ttf",
  "font/1sttheworld.myshopify.com/Oldlondonalternate.ttf",
  "font/1sttheworld.myshopify.com/Pictorial-signature.ttf",
  "font/1sttheworld.myshopify.com/Pirate-ship.ttf",
  "font/1sttheworld.myshopify.com/Shadeerah-demo.ttf",
  "font/1sttheworld.myshopify.com/Signatrue-2.ttf",
  "font/1sttheworld.myshopify.com/Signatrue-8.ttf",
  "font/1sttheworld.myshopify.com/Signatrue.ttf",
  "font/1sttheworld.myshopify.com/Sports-world-regular.ttf",
  "font/1sttheworld.myshopify.com/Svn-aptima-bold-1.ttf",
  "font/1sttheworld.myshopify.com/Svn-bear.ttf",
  "font/1sttheworld.myshopify.com/Svn-bira.ttf",
  "font/1sttheworld.myshopify.com/Svn-franko.ttf",
  "font/1sttheworld.myshopify.com/Svn-internation.ttf",
  "font/1sttheworld.myshopify.com/Svn-trebuchets.ttf",
  "font/1sttheworld.myshopify.com/Unifrakturmaguntia16.ttf",
  "font/1sttheworld.myshopify.com/Viking-hell.ttf",
  "font/1sttheworld.myshopify.com/Vogue.ttf",
];

links = links.map(
  (item) => `http://doshopify.com/product-personalizer/${item}`
);

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url).pipe(fs.createWriteStream(path)).on("close", callback);
  });
};

(async () => {
  for (const item of links) {
    const last = item.lastIndexOf("/") + 1;
    const name = item.substring(last);
    const file = fs.createWriteStream(name);

    await new Promise((resolve, reject) => {
      const stream = request({
        uri: item,
        headers: {
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language":
            "en-US,en;q=0.9,fr;q=0.8,ro;q=0.7,ru;q=0.6,la;q=0.5,pt;q=0.4,de;q=0.3",
          "Cache-Control": "max-age=0",
          Connection: "keep-alive",
          "Upgrade-Insecure-Requests": "1",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36",
        },
        gzip: true,
      })
        .pipe(file)
        .on("finish", () => {
          console.log(`Download - ${name} - completed`);
          resolve();
        })
        .on("error", (error) => {
          reject(error);
        });
    }).catch((error) => {
      console.log(`Something happened: ${error}`);
    });
  }
})();
