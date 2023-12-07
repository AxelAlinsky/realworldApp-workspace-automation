import { WebDriver, Builder, By } from 'selenium-webdriver';
import 'chromedriver';
import { validLoginTest } from './validLoginTest';


describe('Test Case: Regression Test', async function () {
    let driver: WebDriver;

    before(async function () {

    });

    after(async function () {

    });

    validLoginTest();

});