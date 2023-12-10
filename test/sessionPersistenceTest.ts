import { expect, assert} from 'chai';
import { WebDriver, Builder, By, Key, until } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import 'chromedriver';
import { Main } from '../src/components/main';
import { App  } from '../src/app';
import { pageUrl, UserCredentials, ErrorMsg } from '../src/components/data/data';


let compMain = new Main();
let objApp: App;

export function sessionPersistenceTest() {
    describe('Test Case: Validate Session Persistence After Reopening Browser Tab', async function () {
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

        
        it('Step 1: Open Browser and Navigate to Login Page', async function () {
            await driver.get(pageUrl.realworld); // Navigate to the website
        
            await objApp.verifyUrl(pageUrl.realworld); // Verify the url
        });

        it('Step 2: Enter Valid Credentials', async function () {
            await objApp.insertText(By.css(compMain.userNameInput), UserCredentials.standardUser.username);

            await objApp.insertText(By.css(compMain.userPassInput), UserCredentials.standardUser.password); 
        });

        it('Step 3: Click Login and Verify Successful Login', async function () {
            await objApp.click(By.css(compMain.loginButton));

            await objApp.verifyUrl(pageUrl.realworldDhashboard);
        });

        it('Step 4: Close Browser Tab', async function () {

            const originalWindow = await driver.getWindowHandle();

            await driver.executeScript("window.open('','_blank');");

            // Go back to the previous tab
            await driver.switchTo().window(originalWindow);

            // Close the current tab
            await driver.close();
        });

        it('Step 5: Open New Browser Tab and Navigate to Site', async function () {
            await driver.switchTo().window((await driver.getAllWindowHandles())[0]);

            await driver.get(pageUrl.realworld); 
        });

        it('Step 6: Verify User is Still Logged In', async function () {
            await objApp.verifyUrl(pageUrl.realworldDhashboard);
        });
    });    
}
// sessionPersistenceTest();
