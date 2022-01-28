const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://github.com/FengYungz');
  const random = Math.random()
  await page.screenshot({ path: `${random}.png` });

  await browser.close();
})();