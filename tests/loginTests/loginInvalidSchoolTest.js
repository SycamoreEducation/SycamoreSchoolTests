module.exports = {
    tags: ['loginInvalidSchoolTest', 'loginTests'],

    'Login Invalid School ID': (client) => {

        var page = client.page.login();

        var schoolID = '0';
        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .assert.visible('@schoolField')
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')
            .assert.visible('@loginButton')
            .assert.elementNotPresent('@toast')

            .loginFunc(schoolID, username, password)

            // TODO: WHY DOESN'T A TOAST APPEAR FOR INVALID SCHOOL?
            .assert.elementNotPresent('@toast');

        client.end();
    }
};
