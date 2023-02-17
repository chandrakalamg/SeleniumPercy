const BasePage = require("./base.page");

class GoogleHomePage extends BasePage{
    constructor(page){
        super(page);
        this.page = page;
        this.searchbox =  "//input[@name='q']"  ;
        this.searchlink = "//a[@href='https://surpass.com/en-gb/']";     
    }

    async navigate(){
        await super.navigate();
    }

    async searchtext(){
        await this.page.fill(this.searchbox,"Surpass");
        
    }
    async clicklink(){
        await this.page.click(this.searchlink);
    }

    async gettitle(){
        return await this.page.gettitle();
    }
}
module.exports = GoogleHomePage;