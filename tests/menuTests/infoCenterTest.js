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
            .assert.containsText('@infoCenterCafeteria', 'Cafeteria')
            .assert.attributeEquals('@infoCenterCafeteria', 'href', page.url() + '/lunch.php')

            .assert.visible('@infoCenterOnlineAuctions')
            .assert.containsText('@infoCenterOnlineAuctions', 'Online Auctions')
            .assert.attributeEquals('@infoCenterOnlineAuctions', 'href', page.url() + '/auctionblock.php')

            .assert.visible('@infoCenterDatabases')
            .assert.containsText('@infoCenterDatabases', 'Databases')
            .assert.attributeEquals('@infoCenterDatabases', 'href', page.url() + '/databases.php')

            .assert.visible('@infoCenterOnlineForms')
            .assert.containsText('@infoCenterOnlineForms', 'Online Forms')     
            .assert.attributeEquals('@infoCenterOnlineForms', 'href', page.url() + '/forms.php')

            .assert.visible('@infoCenterEventRegistration')
            .assert.containsText('@infoCenterEventRegistration', 'Event Registration')
            .assert.attributeEquals('@infoCenterEventRegistration', 'href', page.url() + '/eventproperty.php')

            .assert.visible('@infoCenterKnowledgebase')
            .assert.containsText('@infoCenterKnowledgebase', 'Knowledgebase')
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
