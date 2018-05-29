module.exports = {
    tags: ['logoutTest', 'menuTests'],

    'Logout Menu Test': (client) => {

        var page = client.page.login();

        var username = 'superuser';

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@logout')
            .assert.containsText('@logout', 'Logout (' + username + ')')
            .assert.attributeEquals('@logout', 'href', page.url() + '/logout.php')

        client.frame(null);

        client.end();
    }
};
