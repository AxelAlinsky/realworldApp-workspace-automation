import { expect, assert} from 'chai';
import { WebDriver, Builder, By, error } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import 'chromedriver';
import { Main } from '../src/components/main';
import { App  } from '../src/app';
import { ErrorMsg, pageUrl, UserCredentials } from '../src/components/data/data';

let compMain = new Main();
let objApp: App;

export function invalidLoginTest() {
    describe('Test Case: Invalid Login Attempt', async function () {
        let driver: WebDriver;
    
        before(async function () {
            driver = await App.buildDriver();
            // driver = await new Builder().forBrowser('chrome').build(); // Uncomment this line if you want to use the default chrome browser 
            objApp = new App(driver); // Pass the driver instance here
            await driver.manage().window().maximize(); // Maximize the browser window
        });
    
        after(async function () {
            await driver.quit(); // Close the driver after each test case
        });
    
        it('Step 1: Open Browser', async function () {
            await driver.get(pageUrl.realworld); // Navigate to the website
        
            await objApp.verifyUrl(pageUrl.realworld); // Verify the url
        });
    
        it('Step 2: Input in the application with valid username', async function () {
            await objApp.insertText(By.css(compMain.userNameInput), UserCredentials.invalidUser.username);
        });
    
        it('Step 3: Input in the applicatin with valid password', async function () {        
            await objApp.insertText(By.css(compMain.userPassInput), UserCredentials.invalidUser.password);
        });
    
        it('Step 4: Click on the login button', async function () {
            await objApp.click(By.css(compMain.loginButton));

            await objApp.verifyErrorMsg(ErrorMsg.invalidCredential, By.css(compMain.errorMsg));

            await objApp.verifyUrl(pageUrl.realworld); 
        });
    });    
}
invalidLoginTest();
