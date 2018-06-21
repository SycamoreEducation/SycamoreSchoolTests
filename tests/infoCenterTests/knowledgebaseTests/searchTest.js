module.exports = {
    tags: ['infoCenterTests', 'infoCenterKnowledgebaseTests',
        'knowledgebaseSearchTest'],

    'Info Center Knowledgebase Browse Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@infoCenter')
            .click('@infoCenter')
            .assert.visible('@infoCenterKnowledgebase')
            .click('@infoCenterKnowledgebase')
        client.frame(null);

        client.frame(2);
        client.page.infoCenter.knowledgebase()
            .waitForElementVisible('@searchTab', 5000)
            .click('@searchTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Knowledge Base')

            .activeTab('Search')

            .assert.visible('@browseTab')
            .assert.containsText('@browseTab', 'Browse')

            .assert.visible('@searchInput')
            .assert.attributeEquals('@searchInput', 'type', 'text')
            
            .assert.visible('@searchBtn')
            .assert.attributeEquals('@searchBtn', 'value', 'Search')
            .assert.attributeEquals('@searchBtn', 'type', 'submit')

            .assert.visible('@questionHeader')
            .assert.containsText('@questionHeader', 'Question')

        client.frame(null)

        client.end();
    }
};
