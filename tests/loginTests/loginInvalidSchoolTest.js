module.exports = {
    tags: ['loginInvalidSchoolTest', 'loginTests'],

    'Login Invalid School ID': (client) => {

        var page = client.page.login();

        var schoolID = '0';

        page.navigate()
            .assert.visible('@schoolField')
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')
            .assert.visible('@loginButton')
            .assert.elementNotPresent('@toast')

            .schoolLogin(client.globals.USERNAME, client.globals.PASSWORD, 
                schoolID)

            // TODO: WHY DOESN'T A TOAST APPEAR FOR INVALID SCHOOL?
            .assert.elementNotPresent('@toast');

        client.end();
    }
};
