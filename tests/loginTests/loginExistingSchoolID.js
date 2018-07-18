module.exports = {
    tags: ['loginExistingSchoolID', 'loginTests'],

    'Login Existing School ID Test': (client) => {

        var page = client.page.loginExistingSchoolID();

        page.navigate()
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')
            .assert.visible('@loginButton')
            .assert.elementNotPresent('@toast')

            .schoolLogin(client.globals.USERNAME, client.globals.PASSWORD);

        client.end();
    }
};
