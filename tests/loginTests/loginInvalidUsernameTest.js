module.exports = {
    tags: ['loginInvalidUsernameTest', 'loginTests'],

    'Login Invalid Username': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuse';
        var password = 'guest';

        page.navigate()
            .assert.visible('@schoolField')
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')
            .assert.visible('@loginButton')
            .assert.elementNotPresent('@toast')

            .loginFunc(schoolID, username, password)

            .waitForElementVisible('@toast', 45000, false)
            .assert.visible('@toast')
            .assert.containsText('@toast', 'Non Active User: ' + schoolID + ' - ' + username);

        client.end();
    }
};
