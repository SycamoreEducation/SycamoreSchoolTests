module.exports = {
    tags: ['loginExistingSchoolID', 'loginTests'],

    'Login Existing School ID Test': (client) => {

        var page = client.page.loginSecondary();

        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')
            .assert.visible('@loginButton')
            .assert.elementNotPresent('@toast')

            .setValue('@usernameField', username)
            .setValue('@passwordField', password)

            .assert.value('@usernameField', username)
            .assert.value('@passwordField', password)

            .click('@loginButton');

        client.frame(1);
        client.page.menu()
            .assert.containsText('@home', 'School Home')
        client.frame(null);

        client.page.studentProfile().navigate()
            .assert.containsText('@searchBar', 'Search');

        client.end();
    }
};
