module.exports = {
    tags: ['infoCenterTest', 'menuTests'],

    'Info Center Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin('superuser', 'guest', '1');

        client.frame(1);
        client.page.menu()
            .assert.visible('@infoCenter')
            .assert.containsText('@infoCenter', '\273 Info Center')
            .assert.attributeEquals('@infoCenter', 'href', 'http://web/schoolmenu.php#')

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
            .assert.attributeEquals('@infoCenterCafeteria', 'href', 'http://web/lunch.php')
            .assert.attributeEquals('@infoCenterOnlineAuctions', 'href', 'http://web/auctionblock.php')
            .assert.attributeEquals('@infoCenterDatabases', 'href', 'http://web/databases.php')
            .assert.attributeEquals('@infoCenterOnlineForms', 'href', 'http://web/forms.php')
            .assert.attributeEquals('@infoCenterEventRegistration', 'href', 'http://web/eventproperty.php')
            .assert.attributeEquals('@infoCenterKnowledgebase', 'href', 'http://web/knowledge.php')


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
