import { Role } from 'testcafe';
import {selectors, staticTexts} from '../constants/login_page_constants';
import loginPage from '../pages/login_page';
import envConfig from '../helpers/env.json'

const registeredUser = Role(envConfig.loginPageURL, async t => {
    await t
        .typeText(loginPage.username, loginPage.loginAdmin)
        .typeText(loginPage.password, loginPage.passwordAdmin)
        .click(loginPage.signIn)
});

export {registeredUser};