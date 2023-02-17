import {expect, FrameLocator, Locator, Page, Key } from '@playwright/test';
import { text } from 'stream/consumers';
import { BasePage} from '../pages/base.page'

export class GoogleHomePage extends BasePage{
    readonly searchbox: string;
    readonly searchtextlink: string;
    
    
    constructor(page:Page){
        super(page);
    
   //locator
   
   this.searchbox =  "//input[@name='q']"  ;
   this.searchtextlink = "//a[@href='https://surpass.com/en-gb/']"; 

    }

    async navigate(){
        await super.navigate('https://google.com');
    }
    
        async searchtext(input:string){
            await this.page.locator(this.searchbox).sendKeys(input,Key.RETURN);
           
        }
        async clickonlink(){
            await this.page.locator(this.searchtextlink).click();
           
        }
    
        async gettitle(){
            return await this.page.gettitle();
        }

};