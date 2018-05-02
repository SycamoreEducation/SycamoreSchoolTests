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

            .setValue('@schoolField', schoolID)
            .setValue('@usernameField', username)
            .setValue('@passwordField', password)

            .assert.value('@schoolField', schoolID)
            .assert.value('@usernameField', username)
            .assert.value('@passwordField', password)

            .click('@loginButton')

            // TODO: WHY DOESN'T A TOAST APPEAR FOR INVALID SCHOOL?
            .assert.elementNotPresent('@toast');

        client.end();
    }
};
