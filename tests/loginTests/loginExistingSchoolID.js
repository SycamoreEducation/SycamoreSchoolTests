module.exports = {
    tags: ['loginExistingSchoolID', 'loginTests'],

    'Login Existing School ID Test': (client) => {

        var page = client.page.loginExistingSchoolID();

        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')
            .assert.visible('@loginButton')
            .assert.elementNotPresent('@toast')

            .loginExistingSchoolIDFunc(username, password);

        client.end();
    }
};
