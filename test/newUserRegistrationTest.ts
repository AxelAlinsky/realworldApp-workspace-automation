import { expect, assert} from 'chai';
import { WebDriver, Builder, By } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import 'chromedriver';
import { Main } from '../src/components/main';
import { App  } from '../src/app';
import { pageUrl, UserCredentials, ErrorMsg } from '../src/components/data/data';

let compMain = new Main();
let objApp: App;

export function newUserRegistrationTest() {
    describe('Test Case: Validate No Input Test', async function () {
        let driver: WebDriver;
    
        before(async function () {
            driver = await App.buildDriver();
            driver = await new Builder().forBrowser('chrome').build(); // Uncomment this line if you want to use the default chrome browser 
            objApp = new App(driver); // Pass the driver instance here
            await driver.manage().window().maximize(); // Maximize the browser window
        });
    
        after(async function () {
            await driver.quit(); // Close the driver after each test case
        });
    
        it('Step 1: Open Browser and Navigate to Registration Page', async function () {
            await driver.get(pageUrl.realworld); // Navigate to the website
        
            await objApp.verifyUrl(pageUrl.realworld); // Verify the url

            await objApp.click(By.css(compMain.registerLink));

            await objApp.verifyUrl(pageUrl.realWrodlRegister);
        });
    
        it('Step 2: Enter Registration Details', async function () {
            await objApp.insertText(By.css(compMain.userRegInput), UserCredentials.randomUser.username);

            await objApp.insertText(By.css(compMain.emailRegInput), UserCredentials.randomUser.email);

            await objApp.insertText(By.css(compMain.passRegInput), UserCredentials.randomUser.password);
        });
    
        it('Step 3: Submit Registration', async function () {
            await objApp.click(By.css(compMain.submitRegButton));
        });
    
        it('Step 4: Verify Automatic Login', async function () {
            await objApp.verifyUrl(pageUrl.realworldDhashboard);
        });
    });    
}
// newUserRegistrationTest();
