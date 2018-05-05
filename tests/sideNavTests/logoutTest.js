module.exports = {
    tags: ['logoutTest', 'menuTests'],

    'Logout Menu Test': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .schoolLogin(username, password, schoolID);

        client.frame(1);
        client.page.menu()
            .assert.visible('@logout')
            .assert.containsText('@logout', 'Logout (' + username + ')')
            .assert.attributeEquals('@logout', 'href', 'http://web/logout.php')

        client.frame(null);

        client.end();
    }
};
