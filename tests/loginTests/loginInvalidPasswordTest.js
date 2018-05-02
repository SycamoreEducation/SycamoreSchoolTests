module.exports = {
    tags: ['loginInvalidPasswordTest', 'loginTests'],

    'Login Invalid Password': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuser';
        var password = 'gues';

        page.navigate()
            .assert.visible('@schoolField')
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')
            .assert.visible('@loginButton')
            .assert.elementNotPresent('@toast')

            .setValue('@schoolField', schoolID)
            .setValue('@usernameField', username)
            .setValue('@passwordField', password)

            .assert.value('@schoolField', schoolID)
            .assert.value('@usernameField', username)
            .assert.value('@passwordField', password)

            .click('@loginButton')

            .waitForElementVisible('@toast', 45000, false)
            .assert.visible('@toast')
            .assert.containsText('@toast', 'U/P Incorrect: ' + schoolID + ' - ' + username);

        client.end();
    }
};
