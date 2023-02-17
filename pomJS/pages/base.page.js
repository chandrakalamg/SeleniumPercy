class BasePage{
    constructor(page){
        this.page = page;
    }
   
    async navigate(){
        await this.page.goto('https://google.com/')
    }
}
module.exports = BasePage;