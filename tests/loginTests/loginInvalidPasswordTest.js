module.exports = {
    tags: ['loginInvalidPasswordTest', 'loginTests'],

    'Login Invalid Password': (client) => {

        var page = client.page.login();

        var password = 'gues';

        page.navigate()
            .assert.visible('@schoolField')
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')
            .assert.visible('@loginButton')
            .assert.elementNotPresent('@toast')

            .schoolLogin(client.globals.USERNAME, password, 
                client.globals.SCHOOL_ID)

            .waitForElementVisible('@toast', 45000, false)
            .assert.visible('@toast')
            .assert.containsText('@toast', 'U/P Incorrect: ' + 
                client.globals.SCHOOL_ID + ' - ' + client.globals.USERNAME);

        client.end();
    }
};
