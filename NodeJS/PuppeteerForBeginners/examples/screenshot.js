const puppeteer = require('puppeteer'); //importar pupperteer

puppeteer.launch().then(async browser => { //función en línea que se invoca inmediatamente // se crea el navegador llamndo al método launch
  const page = await browser.newPage(); //crea la página de navegador
  await page.goto('https://www.mondosonoro.com/') //la pagina creada "visita" la url
  await page.screenshot({
    path: 'mondosonoro.png'
  });
  await browser.close();
});



//Creamos el navegador, le decimos vista esta página y devuélveme el contenido


const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://www.mondosonoro.com/')
  await page.screenshot({
    path: 'mondosonoro.png'
  });
  await browser.close();
});