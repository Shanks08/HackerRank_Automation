const puppeteer = require("puppeteer");
const email = "sikama9117@xxyxi.com";
const password = "password";
const ansKey = require("./ans");

(async function () {
  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  let newTab = await browser.newPage();
  await newTab.goto("https://www.hackerrank.com/auth/login");
  await newTab.waitForSelector('input[name="username"]');
  await newTab.type('input[name="username"]', email);
  await newTab.waitForSelector('input[name="password"]');
  await newTab.type('input[name="password"]', password);
  await newTab.click('button[type="submit"]');
  await newTab.waitForSelector('a[data-cd-topic-slug="algorithms"]');
  await newTab.click('a[data-cd-topic-slug="algorithms"]');
  await newTab.waitForSelector(".challengecard-title");
  await newTab.click(".challengecard-title");
  await newTab.waitForSelector(".checkBoxWrapper");
  await newTab.click(".checkBoxWrapper");
  await newTab.waitForSelector(".custominput");
  await newTab.type(".custominput", ansKey.ans[1]);
  await newTab.keyboard.down("Control");
  await newTab.keyboard.press("A");
  await newTab.keyboard.press("X");
  await newTab.click(".hr-monaco-base-editor");
  await newTab.keyboard.press("A");
  await newTab.keyboard.press("V");
  await newTab.click(".hr-monaco-submit");
})();
