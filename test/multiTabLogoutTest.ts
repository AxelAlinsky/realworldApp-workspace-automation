import { expect, assert} from 'chai';
import { WebDriver, Builder, By, error } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import 'chromedriver';
import { Main } from '../src/components/main';
import { App  } from '../src/app';
import { ErrorMsg, pageUrl, UserCredentials } from '../src/components/data/data';

let compMain = new Main();
let objApp: App;

export function multiTabLogoutTest() {
    describe('Test Case: Multi-Tab Logout Test', async function () {
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
    
        it('Step 2: Enter Credentials and Login', async function () {
            await objApp.insertText(By.css(compMain.userNameInput), UserCredentials.standardUser.username);
    
            await objApp.insertText(By.css(compMain.userPassInput), UserCredentials.standardUser.password); 
    
            await objApp.click(By.css(compMain.loginButton));
    
            await objApp.verifyUrl(pageUrl.realworldDhashboard);
        });
    
        it('Step 3: Open New Tab and Verify User is logged in', async function () {      
            await driver.executeScript(`window.open('${pageUrl.realworld}','_blank');`);     
        });
    
        it('Step 4: Logout in New Tab', async function () {
            await objApp.switchToTab(1);

            // Click the logout button
            await objApp.click(By.css(compMain.logoutButton));

            // Close the tab
            await driver.close();
        });
    
        it('Step 5: Switch to Original Tab Without Refreshing', async function () {
            await objApp.switchToTab(0);

            // Verify the url
            await objApp.verifyUrl(pageUrl.realworldDhashboard);
        });
    
        it('Step 6: Refresh Original Tab and Verify Logout', async function () {
            // refresh the page
            await driver.navigate().refresh();

            // Verify the url
            await objApp.verifyUrl(pageUrl.realworld);
        });
    });
}
// multiTabLogoutTest();
