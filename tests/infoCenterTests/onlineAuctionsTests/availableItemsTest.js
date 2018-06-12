module.exports = {
    tags: ['infoCenterTests', 'infoCenterOnlineAuctionsTests', 
        'onlineAuctionsAvailableItemsTest'],

    'Info Center Online Auctions Available Items Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@infoCenter')
            .click('@infoCenter')
            .assert.visible('@infoCenterOnlineAuctions')
            .click('@infoCenterOnlineAuctions')
        client.frame(null);

        client.frame(2);
        client.page.infoCenter.onlineAuctions()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Info Center/ Online Auction')

            .assert.visible('@availableItemsTab')
            .assert.containsText('@availableItemsTab', 'Available Items')

            .assert.visible('@categoryLabel')
            .assert.containsText('@categoryLabel', 'Browse by Category')

            .assert.visible('@categorySelect')
            .assert.attributeEquals('@categorySelect', 'onchange', 'dogroup()')

            .assert.visible('@popularHeader')
            .assert.containsText('@popularHeader', 'Popular')

        client.frame(null)

        client.end();
    }
};
