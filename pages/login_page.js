import {Selector,ClientFunction,Role} from 'testcafe';
import {selectors, staticTexts} from '../constants/login_page_constants';


class LoginPage {
    constructor() {
        this.username = selectors.username;
        this.password = selectors.password;
        this.signIn = selectors.signIn;
        this.loginAdmin = staticTexts.loginAdmin;
        this.passwordAdmin = staticTexts.passwordAdmin
    }
}



export default new LoginPage