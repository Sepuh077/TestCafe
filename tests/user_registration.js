import { registeredUser } from '../helpers/roles'
import { ClientFunction } from 'testcafe'
import envConfig from '../helpers/env.json'
import adminPage from '../pages/admin_page'

const getURL = ClientFunction(() => window.location.href)

fixture`Getting Started`
    .page`${envConfig.loginPageURL}`

test('My Test', async t => {
    await t
        .useRole(registeredUser)
        .expect(getURL()).eql(adminPage.adminPageUrl, adminPage.userLoginError);
        await adminPage.register_user()
})