require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const _ = require("lodash");
const stringify = require("csv-stringify");
const puppeteer = require("puppeteer");

const env = process.env;

const writeFile = (file, row) => {
  stringify([row], (err, output) => {
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

const getFormData = (forms) => {
  let tabData = {};
  forms.each((i, form) => {
    const label = $(form).find("label").text();
    const visibleForm = $(form).css("display");
    if (!label || visibleForm == "none") return;
    let propData = null;
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
  return transform(tabData);
};

const crawl = async (item) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox"],
    executablePath: process.env.PUPPETEER_EXEC_PATH,
  });
  const page = await browser.newPage();
  await page.goto(
    `https://doshopify.com/product-personalizer/manage.php?${item}`
  );
  await page.setRequestInterception(true);
  page.on("request", (request) => {
    if (request.resourceType() === "image") request.abort();
    else request.continue();
  });
  const ck = env.COOKIE.split("; ");
  let cookies = [];
  for (const item of ck) {
    let cks = item.split("=");
    cookies.push({
      name: cks[0],
      value: cks[1],
      expires: 2147483647,
    });
  }

  await page.setCookie(...cookies);

  await page.goto(
    `https://doshopify.com/product-personalizer/manage.php?${item}`
    // { timeout: 10000, waitUntil: "load" }
  );

  // await new Promise((resolve) => setTimeout(resolve, 10000)).catch();

  // await page.exposeFunction("getFormData", getFormData);
  await page.exposeFunction("transform", transform);

  const personalize = await page.evaluate(async () => {
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
      personalize.all_variant_image = allVariantImage.val() == 1 ? true : false;
    }
    const tabs = $("div.tab-pane.in.clone");
    let blocks = [];
    tabs.each(async (i, tab) => {
      $("li.fieldtab.ui-sortable-handle")[i].click();
      const akbForms = $(tab).find("div.akb div.form-group");
      let akbData = {};
      akbForms.each((i, form) => {
        const label = $(form).find("label").text();
        const visibleForm = $(form).css("display");
        if (!label || visibleForm == "none") return;
        let propData = null;
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
        akbData[label] = propData;
      });
      const tabForms = $(tab).find("div.bhoechie-tab-content div");
      let tabData = {};
      tabForms.each((i, form) => {
        const label = $(form).find("label").text();
        const visibleParent = $(form).parent().css("display");
        const visibleForm = $(form).css("display");
        if (!label || visibleForm == "none" || visibleParent == "none") return;
        let propData = null;
        const option = $(form).find(`option[selected]`).text();
        if (option) {
          if (option.match(/.png|.jpg|.jpeg/g)) {
            propData = `https://doshopify.com/product-personalizer/${$(form)
              .find(`option`)
              .val()}`;
          } else {
            propData = option == `--Select--` ? null : option;
          }
          const parentSelect = $(form).find(`option[selected]`).parent();
          const parentOptions = $(parentSelect).find("option");
          if (label.trim() == "Required Condition") {
            tabData["options"] = [];
            parentOptions.each((i, item) => {
              tabData.options.push($(item).text());
            });
          }
        } else {
          const op = $(form).find(`option`).val();
          if (op) {
            propData = op;
          }
          const parentSelect = $(form).find(`option`).parent();
          const parentOptions = $(parentSelect).find("option");
          if (label.trim() == "Required Condition") {
            tabData["options"] = [];
            parentOptions.each((i, item) => {
              tabData.options.push($(item).text());
            });
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
        if (typeof propData == "String") {
          propData = propData.replace(
            /[^\u00A0\u2122\u00AE\u00A9\u0020-\u007e]/gm,
            ""
          );
        }
        tabData[label] = propData;
      });
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

      const toSnakeCase = (str) =>
        str &&
        str
          .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
          )
          .map((x) => x.toLowerCase())
          .join("_");

      let newAkb = {};
      for (let key in akbData) {
        let newKey = key
          .replace(/\n\s+/g, " ")
          .replace(/\t+|\n+|\r\n+/g, "")
          .trim();
        newKey = toSnakeCase(newKey);
        if (numberLabel.includes(newKey)) {
          newAkb[newKey] = parseFloat(akbData[key]);
        } else {
          newAkb[newKey] = akbData[key];
        }
      }

      let newTab = {};
      for (let key in tabData) {
        let newKey = key
          .replace(/\n\s+/g, " ")
          .replace(/\t+|\n+|\r\n+/g, "")
          .trim();
        newKey = toSnakeCase(newKey);
        if (numberLabel.includes(newKey)) {
          newTab[newKey] = parseFloat(tabData[key]);
        } else {
          newTab[newKey] = tabData[key];
        }
      }
      blocks = blocks.concat([{ ...newAkb, ...newTab }]);
    });
    personalize.blocks = blocks;
    const svpForms = $(`div.svp div.form-group`);
    svpForms.each((i, svp) => {
      const label = $(svp).find("label").text();
      personalize[label] =
        $(svp).find("option[selected]").text() || $(svp).find("input").val();
    });
    // const conditionTab = $("div.tab-pane.fade.in.active")[0];
    // const conds = $(conditionTab).find("div.conds");
    const conditionTab = $("div#tabx")[0];
    const conds = $(conditionTab).find("div.conds");
    let conditions = [];
    conds.each((i, cond) => {
      const when = $(cond)
        .find("span.divwhen option[selected]")
        .text()
        .trim()
        .match(/[^\d\.]+/g)[0];
      let is = $(cond)
        .find("span.divis option[selected]")
        .text()
        .trim()
        .match(/[^\d\.]+/g)[0]
        .replace(/\s+/g, ",");
      if (is.match(/\w,\w/g)) {
        is = is.split(",");
      } else {
        is = is.match(/\w+/g);
      }
      const then = $(cond)
        .find("span.divthen option[selected]")
        .text()
        .trim()
        .match(/[^\d\.]+/g)[0];
      let targets = $(cond)
        .find("span.divtarget option[selected]")
        .text()
        .trim()
        .match(/[^\d\.]+/g)[0]
        .replace(/\s+/g, ",");
      if (targets.match(/\w,\w/g)) {
        targets = targets.split(",");
      } else {
        targets = targets.match(/\w+/g);
      }
      conditions.push({
        when: {
          field: when,
          values: is,
        },
        then: {
          action: then,
          fields: targets,
        },
      });
    });
    personalize.conditions = conditions;
    personalize = transform(personalize);
    return personalize;
  });
  await browser.close();
  return personalize;
};

(async () => {
  const crtTime = new Date().getTime();
  const file = __dirname + `/designs_${crtTime}.csv`;
  writeFile(file, ["id", "data", "published"]);
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
      const id = item.match(/\d+/g)[0];
      const result = await crawl(item);
      console.log("CRAWLING ITEM: ", itemIndex);
      itemIndex++;
      writeFile(file, [
        id,
        JSON.stringify(result),
        data.enable_customization ? "true" : "false",
      ]);
    }
    idx += 20;
  } while (idx > -1);
})();
