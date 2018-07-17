module.exports = {
    tags: ['loginExistingSchoolIDNoInput', 'loginTests'],

    'Login Existing School ID No Input Test': (client) => {

        var page = client.page.loginExistingSchoolID();

        var username = '';
        var password = '';

        page.navigate()
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')
            .assert.visible('@loginButton')
            .assert.elementNotPresent('@toast')

            .schoolLogin(username, password)

            .waitForElementVisible('@toast', 45000, false)
            .assert.visible('@toast')
            .assert.containsText('@toast', 
                'Please make sure all fields have been filled out');

        client.end();
    }
};
