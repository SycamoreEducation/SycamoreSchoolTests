module.exports = {
    tags: ['spiritStoreTest', 'menuTests'],

    'Spirit Store Menu Test': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .schoolLogin(username, password, schoolID);

        client.frame(1);
        client.page.menu()
            .assert.visible('@spiritStore')
            .assert.containsText('@spiritStore', 'Spirit Store')
            .assert.attributeEquals('@spiritStore', 'href', 'http://web/spiritstore.php')

        client.frame(null);

        client.end();
    }
};
