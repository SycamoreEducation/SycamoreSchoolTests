module.exports = {
    tags: ['loginInvalidUsernameTest', 'loginTests'],

    'Login Invalid Username': (client) => {

        var page = client.page.login();

        var username = 'superuse';

        page.navigate()
            .assert.visible('@schoolField')
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')
            .assert.visible('@loginButton')
            .assert.elementNotPresent('@toast')

            .schoolLogin(username, client.globals.PASSWORD, 
                client.globals.SCHOOL_ID)

            .waitForElementVisible('@toast', 45000, false)
            .assert.visible('@toast')
            .assert.containsText('@toast', 'Non Active User: ' + 
                client.globals.SCHOOL_ID + ' - ' + username);

        client.end();
    }
};
