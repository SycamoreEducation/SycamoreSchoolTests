module.exports = {
    tags: ['login', 'loginTests'],

    'Login Test': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuser';
        var password = 'guest';

        page.navigate()

            .assert.visible('@schoolField')
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')
            .assert.visible('@loginButton')
            .assert.elementNotPresent('@toast')

            .loginFunc(schoolID, username, password)

        client.frame(1);
        client.page.menu()
            .assert.containsText('@home', 'School Home')
        client.frame(null);

        client.page.studentProfile().navigate()
            .assert.containsText('@searchBar', 'Search');

        client.end();
    }
};
