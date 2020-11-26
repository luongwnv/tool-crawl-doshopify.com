require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");
const csvWriter = require("csv-write-stream");
const _ = require("lodash");

const env = process.env;

const writeStreamFile = (stream) => {
  const writeStream = fs.createWriteStream(__dirname + `/designs.csv`);
  new Promise((resolve, reject) => {
    stream.on("data", (chunk) => writeStream.write(chunk));
    stream.on("error", reject);
    stream.on("end", resolve);
  });
};

const tranformObj = (obj) => {
  let newObj = {};
  for (let key in obj) {
    let newKey = key
      .replace(/\n\s+/g, " ")
      .replace(/\t+|\n+|\r\n+/g, "")
      .trim();
    newKey = _.snakeCase(newKey);
    newObj[newKey] = obj[key];
  }
  return newObj;
};

(async () => {
  const writer = csvWriter({
    sendHeaders: false,
  });

  writer.write({
    id: "id",
    data: "data",
    published: "published",
  });
  let itemIndex = 0;
  let idx = 0;
  do {
    const res = await axios.get(
      `https://doshopify.com/product-personalizer/personalized.php?from=${idx}`,
      {
        headers: {
          Cookie: env.COOKIE,
        },
      }
    );
    const data = res.data.toString();
    const start = data.indexOf(
      `<tr ><td class="prr"><input type="checkbox" class="pdelete"`
    );
    const end = data.lastIndexOf(`Apply To</a></td></tr>`);
    const str = data.substring(start, end);
    if (!str) {
      return;
    }
    const links = str.match(/id=+\d+&shop_r=1sttheworld.myshopify.com/gi);
    for (const item of links) {
      const resl = await axios.get(
        `https://doshopify.com/product-personalizer/manage.php?${item}`,
        {
          headers: {
            Cookie: env.COOKIE,
          },
        }
      );
      const dt = resl.data.toString();
      const $ = cheerio.load(dt);
      const id = item.match(/\d+/g)[0];
      let dataCrawl = {};
      $("div.form-group").each((i, form) => {
        const label = $(form).find("label").text();
        if (!label) return;
        let itemData = "";
        const option = $(form).find(`option[selected]`).text();
        if (option) {
          if (option.match(/.png|.jpg|.jpeg/g)) {
            itemData = `https://doshopify.com/product-personalizer/${$(form)
              .find(`option`)
              .val()}`;
          } else {
            itemData = option;
          }
        } else {
          const op = $(form).find(`option`).val();
          if (op) {
            itemData = op;
          }
        }
        const textarea = $(form).find("textarea").val();
        if (textarea) {
          itemData = textarea;
        }
        const input = $(form).find("input").val();
        if (input) {
          itemData = input;
        }
        dataCrawl[label] = itemData;
      });
      console.log("CRAWLING ITEM: ", itemIndex);
      itemIndex++;
      const tfData = tranformObj(dataCrawl);
      writer.write({
        id,
        data: JSON.stringify(tfData),
        published: (tfData.enable_customization = 1 ? true : false),
      });
    }
    await writeStreamFile(writer);
    idx += 20;
  } while (idx > -1);
  writer.end();
})();
