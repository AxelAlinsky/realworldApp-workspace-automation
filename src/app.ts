import { assert } from 'chai';
import { Builder, By, until, WebDriver, Capabilities } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import { Main } from '../src/components/main';
import { pageUrl } from '../src/components/data/data';

let compMain = new Main();
let driver: WebDriver;

export class App {
    private driver: WebDriver;
    private compMain: Main; // Property to hold the Main instance
    
  
    constructor(driver: WebDriver) {
        this.driver = driver;
        this.compMain = new Main(); // Initialize the Main instance
        this.switchToTab = this.switchToTab.bind(this);
    }

    // Static method to initialize the WebDriver with headless configuration
    static async buildDriver(): Promise<WebDriver> {
        let options = new chrome.Options();
        options.addArguments('--headless');
        options.addArguments('--no-sandbox'); // Bypass OS security model, crucial for Docker/CI environments
        options.addArguments('--disable-dev-shm-usage'); // Overcome limited resource problems
        options.addArguments('--disable-gpu'); // Applicable for some versions of Chrome
    
        const driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    
        return driver;
    }


    async verifyErrorMsg(expectedMsg: string, locator: By) {
        const TIMEOUT = 5000; // Timeout in milliseconds
    
        try {
            // Wait for the element to be present in the DOM
            const element = await this.driver.wait(until.elementLocated(locator), TIMEOUT, `Element located by ${locator} not found within timeout.`);
    
            // Wait for the element to be visible
            await this.driver.wait(until.elementIsVisible(element), TIMEOUT, `Element located by ${locator} is not visible within timeout.`);
    
            // Get the text of the element and compare it to the expected message
            const actualMsg = await element.getText();
            if (actualMsg === expectedMsg) {
                console.log(`Verified error message: '${expectedMsg}'`);
            } else {
                throw new Error(`Expected error message '${expectedMsg}', but found '${actualMsg}'`);
            }
        } catch (error) {
            console.error(`Error verifying error message '${expectedMsg}':`, error);
            throw error;
        }
    }   

    async switchToTab(tabIndex: number) {
        try {
            const handles = await this.driver.getAllWindowHandles();
            if (handles.length <= tabIndex) {
                throw new Error(`Expected at least ${tabIndex + 1} tabs, but found less.`);
            }
            await this.driver.switchTo().window(handles[tabIndex]);
        } catch (error) {
            console.error(`Error while switching to tab ${tabIndex}:`, error);
            throw error;
        }
    }
    

    // ---URL--- ------------->>>
    async verifyUrl(expectedUrl: string) {
        const TIMEOUT = 5000; // Timeout in milliseconds
    
        try {
            // Wait for the URL to be the expected URL
            await this.driver.wait(async () => {
                const actualUrl = await this.driver.getCurrentUrl();
                return actualUrl === expectedUrl;
            }, TIMEOUT, `Expected URL '${expectedUrl}' was not reached within timeout.`);
    
            // Get the current URL for assertion
            const actualUrl = await this.driver.getCurrentUrl();
            assert.strictEqual(actualUrl, expectedUrl, `Expected URL '${expectedUrl}', but found '${actualUrl}'`);
    
            console.log(`Verified URL: '${expectedUrl}'`);
        } catch (error) {
            console.error(`Error verifying URL '${expectedUrl}':`, error);
            throw error;
        }
    }
    
    

    // ---INTERACTION--- ------------->>>
    async insertText(locator: By, text: string) {
        const TIMEOUT = 5000; // Timeout in milliseconds
    
        try {
            // Wait for the element to be located and visible
            const element = await this.driver.wait(until.elementLocated(locator), TIMEOUT, `Element located by ${locator} not found within timeout.`);
            await this.driver.wait(until.elementIsVisible(element), TIMEOUT, `Element located by ${locator} is not visible within timeout.`);
    
            // Clear the input
            await element.clear();
    
            // Send the text
            await element.sendKeys(text);
    
            // Optionally, wait for the value attribute to reflect the new text, if asynchronous behavior is expected
            await this.driver.wait(() => element.getAttribute('value').then(value => value === text), TIMEOUT, `Input value did not match '${text}' within timeout.`);
    
            console.log(`Text '${text}' inserted into element located by ${locator}`);
        } catch (error) {
            console.error(`Error inserting text into element located by ${locator}:`, error);
            throw error;
        }
    }
    

    async click(locator: By) {
        const TIMEOUT = 5000; // Timeout in milliseconds
        const RETRY_COUNT = 3; // Number of times to retry the click
    
        try {
            // Wait for the element to be located
            const element = await this.driver.wait(until.elementLocated(locator), TIMEOUT, `Element located by ${locator} not found`);
    
            // Wait for the element to be visible and enabled
            await this.driver.wait(until.elementIsVisible(element), TIMEOUT, `Element located by ${locator} not visible`);
            await this.driver.wait(until.elementIsEnabled(element), TIMEOUT, `Element located by ${locator} not enabled`);
    
            // Scrolling to the element
            await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
    
            // Perform the click action with retry
            for (let attempt = 0; attempt < RETRY_COUNT; attempt++) {
                try {
                    await element.click();
                    return; // Exit if the click is successful
                } catch (clickError) {
                    if (attempt === RETRY_COUNT - 1) {
                        throw clickError; // Rethrow error on the final attempt
                    }
                }
            }
        } catch (error) {
            console.error(`Error clicking on element located by ${locator}:`, error);
            throw error;
        }
    }
    

}
