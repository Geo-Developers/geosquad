const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://www.mondosonoro.com/')
  const html = await page.content();
  const cookies = await page.cookies();
  console.log(html);
});
