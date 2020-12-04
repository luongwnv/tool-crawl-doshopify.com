require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const cheerio = require("cheerio");
const _ = require("lodash");
const stringify = require("csv-stringify");
const { last } = require("lodash");

const env = process.env;

const writeFile = (row) => {
  stringify([row], (err, output) => {
    const file = __dirname + `/designs.csv`;
    fs.appendFile(file, output, "utf8", (err) => {
      if (err) {
        console.log("err: ", err);
      }
    });
  });
};

const transform = (obj) => {
  const numberLabel = [
    "angle",
    "width",
    "height",
    "opacity",
    "font_size",
    "price_add",
    "arc_radius",
    "x_position",
    "y_position",
    "line_height",
    "effect_width",
    "options_list",
    "max_character",
    "number_of_line",
    "min_upload_width_px",
    "field_heading_as_tab",
    "min_upload_height_px",
    "font_size_initial_2nd",
    "font_size_initial_3rd",
    "x_position_initial_2nd",
    "x_position_initial_3rd",
    "y_position_initial_2nd",
    "y_position_initial_3rd",
    "customer_can_change_font_size",
    "customer_can_change_horizontal_alignment",
  ];
  let newObj = {};
  for (let key in obj) {
    let newKey = key
      .replace(/\n\s+/g, " ")
      .replace(/\t+|\n+|\r\n+/g, "")
      .trim();
    newKey = _.snakeCase(newKey);
    if (numberLabel.includes(newKey)) {
      newObj[newKey] = parseFloat(obj[key]);
    } else {
      newObj[newKey] = obj[key];
    }
  }
  return newObj;
};

(async () => {
  writeFile(["id", "data", "published"]);
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
      const response = await axios.get(
        `https://doshopify.com/product-personalizer/manage.php?${item}`,
        {
          headers: {
            Cookie: env.COOKIE,
          },
        }
      );
      const dt = response.data.toString();
      const $ = cheerio.load(dt);
      const id = item.match(/\d+/g)[0];
      let personalize = {};
      const enableCustomization = $(
        `div.checkbox label input[name="cstmfy_req"]`
      );
      if (enableCustomization) {
        personalize.enable_customization =
          enableCustomization.val() == 1 ? true : false;
      }
      const allVariantImage = $(`div.checkbox label input[name="cstmfy_all"]`);
      if (allVariantImage) {
        personalize.all_variant_image =
          allVariantImage.val() == 1 ? true : false;
      }
      const tabs = $("div.tab-pane.in.clone");
      let blocks = [];
      tabs.each((i, tab) => {
        let tabData = {};
        const forms = $(tab).find("div.form-group");
        forms.each((i, form) => {
          const label = $(form).find("label").text();
          if (!label) return;
          let propData = "";
          const option = $(form).find(`option[selected]`).text();
          if (option) {
            if (option.match(/.png|.jpg|.jpeg/g)) {
              propData = `https://doshopify.com/product-personalizer/${$(form)
                .find(`option`)
                .val()}`;
            } else {
              propData = option == `--Select--` ? null : option;
            }
          } else {
            const op = $(form).find(`option`).val();
            if (op) {
              propData = op;
            }
          }
          const textarea = $(form).find("textarea").val();
          if (textarea) {
            propData = textarea;
          }
          const input = $(form).find("input").val();
          if (input) {
            propData = input;
          }
          tabData[label] = propData;
        });
        tabData = transform(tabData);
        blocks.push(tabData);
      });
      personalize.blocks = blocks;
      const svpForms = $(`div.svp div.form-group`);
      svpForms.each((i, svp) => {
        const label = $(svp).find("label").text();
        personalize[label] =
          $(svp).find("option[selected]").text() || $(svp).find("input").val();
      });
      personalize = transform(personalize);
      console.log("CRAWLING ITEM: ", itemIndex);
      itemIndex++;
      writeFile([
        id,
        JSON.stringify(personalize),
        personalize.enable_customization ? "true" : "false",
      ]);
    }
    idx += 20;
  } while (idx < 20);
})();
