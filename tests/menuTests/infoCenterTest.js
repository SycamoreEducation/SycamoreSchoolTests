module.exports = {
    tags: ['infoCenterTest', 'menuTests'],

    'Info Center Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@infoCenter')
            .assert.containsText('@infoCenter', '\273 Info Center')
            .assert.attributeEquals('@infoCenter', 'href', page.url() + '/schoolmenu.php#')

            .assert.hidden('@infoCenterCafeteria')
            .assert.hidden('@infoCenterOnlineAuctions')
            .assert.hidden('@infoCenterDatabases')
            .assert.hidden('@infoCenterOnlineForms')
            .assert.hidden('@infoCenterEventRegistration')
            .assert.hidden('@infoCenterKnowledgebase')

            .click('@infoCenter')
            .assert.visible('@infoCenterCafeteria')
            .assert.visible('@infoCenterOnlineAuctions')
            .assert.visible('@infoCenterDatabases')
            .assert.visible('@infoCenterOnlineForms')
            .assert.visible('@infoCenterEventRegistration')
            .assert.visible('@infoCenterKnowledgebase')
            .assert.containsText('@infoCenterCafeteria', 'Cafeteria')
            .assert.containsText('@infoCenterOnlineAuctions', 'Online Auctions')
            .assert.containsText('@infoCenterDatabases', 'Databases')
            .assert.containsText('@infoCenterOnlineForms', 'Online Forms')
            .assert.containsText('@infoCenterEventRegistration', 'Event Registration')
            .assert.containsText('@infoCenterKnowledgebase', 'Knowledgebase')
            .assert.attributeEquals('@infoCenterCafeteria', 'href', page.url() + '/lunch.php')
            .assert.attributeEquals('@infoCenterOnlineAuctions', 'href', page.url() + '/auctionblock.php')
            .assert.attributeEquals('@infoCenterDatabases', 'href', page.url() + '/databases.php')
            .assert.attributeEquals('@infoCenterOnlineForms', 'href', page.url() + '/forms.php')
            .assert.attributeEquals('@infoCenterEventRegistration', 'href', page.url() + '/eventproperty.php')
            .assert.attributeEquals('@infoCenterKnowledgebase', 'href', page.url() + '/knowledge.php')

            .click('@infoCenter')
            .assert.hidden('@infoCenterCafeteria')
            .assert.hidden('@infoCenterOnlineAuctions')
            .assert.hidden('@infoCenterDatabases')
            .assert.hidden('@infoCenterOnlineForms')
            .assert.hidden('@infoCenterEventRegistration')
            .assert.hidden('@infoCenterKnowledgebase')

        client.frame(null);

        client.end();
    }
};
