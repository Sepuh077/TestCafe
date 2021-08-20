module.exports = {
    selectors: {
        button: '.nav.nav-primary li:nth-child(2) .collapsed',
        users_button: '.model-user .addlink',
        name: '#id_name',
        last_name: '#id_last_name',
        email: '#id_email',
        role: '#id_role',
        definite_role: '#id_role option:nth-child(3)',
        service_location: '.select2',
        save_button: '.default',
        success_msg: '.success',
    },
    staticTexts: {
        adminPageUrl: "http://127.0.0.1:8000/"
    },
    errorMessage: {
        userLoginError: "User did not login"
    }
}