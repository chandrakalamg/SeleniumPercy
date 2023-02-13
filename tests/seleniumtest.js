const percySnapshot = require('@percy/selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
require("chromedriver");

(async function testPercysnapshot() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get('https://www.google.com/ncr');
    await driver.findElement(By.xpath("//*[text()='Accept all']")).click();
    await percySnapshot(driver,"google main page");
     await driver.findElement(By.xpath("//input[@name='q']")).sendKeys("Surpass",Key.RETURN);
     await driver.findElement(By.xpath("//a[@href='https://surpass.com/en-gb/']")).click();
     await driver.wait(until.titleIs('Surpass Assessment - Technology & Test Development Services'), 1000);
     await percySnapshot(driver,"Surpass main page");
  } finally {
    await driver.quit();
  }
})();