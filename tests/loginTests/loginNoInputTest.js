module.exports = {
    tags: ['loginNoInputTest', 'loginTests'],

    'Login No Input': (client) => {

        var page = client.page.login();

        var schoolID = '';
        var username = '';
        var password = '';

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
            .assert.containsText('@toast', 'Please make sure all fields have been filled out');

        client.end();
    }
};
