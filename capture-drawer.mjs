import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });

  console.log('Loading FORECOM site...');
  await page.goto('https://www.forecom-solutions.com/');
  await page.waitForSelector('nav', { timeout: 10000 });

  console.log('Taking normal state screenshot...');
  await page.screenshot({
    path: 'forecom-normal-state.png',
    fullPage: false
  });

  // Try to hover over navigation
  console.log('Hovering over navigation...');
  await page.hover('nav');
  await new Promise(resolve => setTimeout(resolve, 1500));

  console.log('Taking hover state screenshot...');
  await page.screenshot({
    path: 'forecom-hover-state.png',
    fullPage: false
  });

  await browser.close();
  console.log('Screenshots saved!');
})();