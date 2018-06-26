// SCRAPPING WEBSITE USING PUPPETEER
// ----------------------------------------------------------------------------

const puppeteer = require('puppeteer');

// Creating node parameter
var search = process.argv[2];

// Launching a browser
(async () => {
  const browser = await puppeteer.launch({
    // Indicating non headless
    headless: false
  });
  // Opening a new page
  const page = await browser.newPage();

  // -------------------------------------------------------------------------
  // Here you could include some code to find the anti-bot request and skip it
  // -------------------------------------------------------------------------

  // Navigating to a website
  await page.goto('https://www.idealista.com');

  // Waiting till css selector is charged
  await page.waitForSelector('#campoBus');
  // Typing the text introduced in node parameter in an HTML element
  await page.type('#campoBus', search);

  // Waiting till css selector is charged
  await page.waitForSelector('#btn-free-search');
  // Clicking the button
  await page.click('#btn-free-search');

  // Extracting information
  // You could do it dynamic calling a function that builds the array

  // Waiting till css selector is charged
  await page.waitForSelector('.item-info-container');

  // First, a general selector that contains all the information to extract from each property is applied
  // Then mapping to obtain the information
  const info_properties = await page.evaluate("Array.from(document.querySelectorAll('.item-info-container'))" +
    ".map(el => ({Title : el.querySelector('.item-link').textContent, " +
    "Price : el.querySelector('.item-price').textContent.replace('€',''), " +
    "Description : el.querySelector('.item-description p').textContent, " +
    "Phone : el.querySelector('.item-not-clickable-phone').textContent.replace(/ /g,'')}))");

  // Header of the table
  console.log("Title;Price;Description;Phone");

  // Rest of rows to be filled in the table
  info_properties.map(obj => console.log(`${obj.Title};${obj.Price};${obj.Description};${obj.Phone}`));

  // Waiting 5 seconds till browser is closed
  await page.waitFor(5000);
  await browser.close();
})();