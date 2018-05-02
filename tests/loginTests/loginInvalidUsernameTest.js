module.exports = {
    tags: ['loginInvalidUsernameTest', 'loginTests'],

    'Login Invalid Username': (client) => {

        const page = client.page.login();

        const schoolID = '1';
        const username = 'superuse';
        const password = 'guest';

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
            .assert.containsText('@toast', 'Non Active User: ' + schoolID + ' - ' + username);

        client.end();
    }
};
