// SCRAPPING DE lA WEB DE IDEALISTA UTILIZANDO PUPPETEER
// ----------------------------------------------------------------------------
// Se parte de la web principal, se escribe en el buscador una provincia y
// se realiza la busqueda (en este caso para viviendas en venta). Se podría
// modificar el script para cambiar el tipo de transaccion y de inmueble.
//
// Una vez se busca, se extrae informacion de los titulos, precios,
// descripciones y detalles de los anuncios de los inmuebles.
//
// Luego se sacan los resultados en la consola, permitiendo exportarlos a un
// archivo csv.
// ----------------------------------------------------------------------------

const puppeteer = require('puppeteer');

// Parámetro a introducir en consola
var provincia = process.argv[2];

(async () => {
  const browser = await puppeteer.launch({
    // Abrir instancia de navegador
    headless: false
  });

  const page = await browser.newPage();

  // Tomamos el control de que peticiones se cargan
  await page.setRequestInterception(true);

  // Aquí localizamos el script que cargan anti-bot: https://www.idealista.com/px/client/main.min.js
  page.on('request', request => {
    if (/main\.min.\js/.test(request.url())) {
      // console.log(`Skipping : [${request.url()}]`);
      // Impedimos que se cargue
      request.abort();
    } else {
      request.continue();
    }
  });

  // Ir a web de Idealista
  await page.goto('https://www.idealista.com');

  // Esperar a que cargue selector y escribir el texto introducido en el parametro
  await page.waitForSelector('#campoBus');
  await page.type('#campoBus', provincia);

  // Esperar a que se cargue el selector y pulsar boton
  await page.waitForSelector('#btn-free-search');
  await page.click('#btn-free-search');

  // Extraccion de informacion:
  // Se podria hacer dinamico llamando a una funcion que construye el array

  await page.waitForSelector('.item-info-container');

  // Primero se aplica un selector general que contiene toda la informacion a extraer de cada inmueble
  // Luego se mappea para obtener la informacion deseada
  const info_properties = await page.evaluate("Array.from(document.querySelectorAll('.item-info-container'))" +
    ".map(el => ({Title : el.querySelector('.item-link').textContent, " +
    "Price : el.querySelector('.item-price').textContent.replace('€',''), " +
    "Description : el.querySelector('.item-description p').textContent, " +
    "Telephone : el.querySelector('.item-not-clickable-phone').textContent.replace(/ /g,'')}))");

  // Cabecera de la tabla
  console.log("Titulo;Precio;Descripcion;Telefono");

  // Resto de filas a rellenar en la tabla
  info_properties.map(obj => console.log(`${obj.Title};${obj.Price};${obj.Description};${obj.Telephone}`));

  await page.waitFor(5000);

  await browser.close();
})();