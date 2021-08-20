import {Selector,ClientFunction,t} from 'testcafe';
import {selectors, staticTexts,errorMessage} from '../constants/admin_page_constants';
import {generate_random_email} from '../helpers/admin'


class AdminPage {
    constructor() {
        this.userLoginError = errorMessage.userLoginError;
        this.adminPageUrl = staticTexts.adminPageUrl;
        this.button = selectors.button;
        this.users_button = selectors.users_button;
        this.name = selectors.name;
        this.last_name = selectors.last_name;
        this.email = selectors.email;
        this.role = selectors.role;
        this.definite_role = selectors.definite_role;
        this.service_location = selectors.service_location;
        this.save_button = selectors.save_button;
        this.success_msg = Selector(selectors.success_msg);
    }
    async register_user() {
        await t
        .click(this.button)
        .click(this.users_button)
        .typeText(this.name, 'Name')
        .typeText(this.last_name, 'last_name')
        .typeText(this.email, generate_random_email())
        .click(this.role)
        .click(this.definite_role)
        .typeText(this.service_location, 'Goris')
        .wait(1000)
        .pressKey('enter')
        .click(this.save_button)
        .expect(this.success_msg.visible).ok()
    }
}


export default new AdminPage