import {test, chromium, Browser, expect, Page} from '@playwright/test';
import { GoogleHomePage} from '../pages/googlehome.page'


test.describe("Serach text in google searchbar", async() => {
    let browser: Browser;
    let page: Page;
    let homepage : GoogleHomePage;
    
    test.beforeAll(async () =>{
        browser = await chromium.launch();
        
        page = await browser.newPage();
        homepage = new GoogleHomePage(page);
    });

     test.afterAll(async () =>{
         await browser.close();
     });

    test('Should be able to click on surpass link', async() => {
        await homepage.navigate(); 
        
 
        await homepage.searchtext("Surpass")
        await homepage.clickonlink();
        const title = await homepage.gettitle();
        expect(title).toEqual("Surpass Assessment - Technology & Test Development Services'");
        
    });
});