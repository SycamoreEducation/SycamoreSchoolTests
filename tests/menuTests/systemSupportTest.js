module.exports = {
    tags: ['systemSupportTest', 'menuTests'],

    'System Support Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@systemSupport')
            .assert.containsText('@systemSupport', '\273 System Support')
            .assert.attributeEquals('@systemSupport', 'href', page.url() + 
                '/schoolmenu.php#')

            .assert.hidden('@supportTickets')
            .assert.hidden('@legacyTickets')

            .click('@systemSupport')
            .assert.visible('@supportTickets')
            .assert.containsText('@supportTickets', 'Support Tickets')
            .assert.attributeEquals('@supportTickets', 'onclick', 
                'doVerify(event)')
            
            .assert.visible('@legacyTickets')
            .assert.containsText('@legacyTickets', 'Legacy Tickets')
            .assert.attributeEquals('@legacyTickets', 'href', page.url() +
                '/support.php')

            .click('@systemSupport')

            .assert.visible('@systemSupport')

            .assert.hidden('@supportTickets')
            .assert.hidden('@legacyTickets');

        client.frame(null);

        client.end();
    }
};
