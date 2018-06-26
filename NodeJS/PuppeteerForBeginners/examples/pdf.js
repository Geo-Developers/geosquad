const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://www.laloterianavidad.com/pedrea/completa.html');
  await page.pdf({
    path: 'loteria.pdf',
    format: 'A4'
  });

  await browser.close();
})();