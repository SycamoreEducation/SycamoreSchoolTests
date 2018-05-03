module.exports = {
    tags: ['loginExistingSchoolIDInvalidUsername', 'loginTests'],

    'Login Existing School ID Invalid Username Test': (client) => {

        var page = client.page.loginExistingSchoolID();

        var username = 'superuse';
        var password = 'guest';

        page.navigate()
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')
            .assert.visible('@loginButton')
            .assert.elementNotPresent('@toast')

            .schoolLogin(username, password)

            .waitForElementVisible('@toast', 45000, false)
            .assert.visible('@toast')
            .assert.containsText('@toast', 'Non Active User: 1 - ' + username);

        client.end();
    }
};
