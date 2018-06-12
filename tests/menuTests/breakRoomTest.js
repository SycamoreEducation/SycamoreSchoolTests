module.exports = {
    tags: ['breakRoomTest', 'menuTests'],

    'Break Room Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@breakRoom')
            .assert.containsText('@breakRoom', '\273 Break Room')
            .assert.attributeEquals('@breakRoom', 'href', page.url() + '/schoolmenu.php#')

            .assert.hidden('@classifiedAds')

            .click('@breakRoom')

            .assert.visible('@classifiedAds')
            .assert.containsText('@classifiedAds', 'Classified Ads')
            .assert.attributeEquals('@classifiedAds', 'href', page.url() + '/classified.php')

            .click('@breakRoom')

            .assert.visible('@breakRoom')

            .assert.hidden('@classifiedAds')

        client.frame(null);

        client.end();
    }
};
