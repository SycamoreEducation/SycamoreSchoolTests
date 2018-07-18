module.exports = {
    tags: ['login', 'loginTests'],

    'Login Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .assert.visible('@schoolField')
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')
            .assert.visible('@loginButton')
            .assert.elementNotPresent('@toast')

            .schoolLogin(client.globals.USERNAME, client.globals.PASSWORD,
                client.globals.SCHOOL_ID);

        client.end();
    }
};
