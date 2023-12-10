import { WebDriver, Builder, By } from 'selenium-webdriver';
import 'chromedriver';
import { validLoginTest } from './validLoginTest';
import { invalidLoginTest } from './invalidLoginTest';
import { noLoginInputTest } from './noLoginInputTest';
import { sessionPersistenceTest } from './sessionPersistenceTest';
import { multiTabLogoutTest } from './multiTabLogoutTest';
import { newUserRegistrationTest } from './newUserRegistrationTest';

describe('Regression Test', async function () {
    let driver: WebDriver;

    before(async function () {

    });

    after(async function () {

    });

    validLoginTest();

    invalidLoginTest();

    noLoginInputTest();

    sessionPersistenceTest();

    multiTabLogoutTest();

    newUserRegistrationTest();
});