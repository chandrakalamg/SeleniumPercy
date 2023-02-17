const { chromium } = require('playwright');
const {GoogleHomePage} = require('../pages/googlehome.page');

describe('google search demo page', () => {
   
    let browser = null;
    let page = null;
    let googlehomePage  = null;
    
    beforeAll( async ()=>{ 
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        googlehomePage = new GoogleHomePage(page);
    });

    afterAll( async ()=>{
        
        await browser.close();
    });


    test('Should be able to search text', async() => {
        await googlehomePage.navigate();
        await googlehomePage.searchtext();
        await searchtext.clicklink();
       expect(await page.title()).not.toBeNull();
    })





});