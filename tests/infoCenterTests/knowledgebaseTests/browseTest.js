module.exports = {
    tags: ['infoCenterTests', 'infoCenterKnowledgebaseTests',
        'knowledgebaseBrowseTest'],

    'Info Center Knowledgebase Browse Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@infoCenter')
            .click('@infoCenter')
            .assert.visible('@infoCenterKnowledgebase')
            .click('@infoCenterKnowledgebase');
        client.frame(null);

        client.frame(2);
        client.page.infoCenter.knowledgebase()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Knowledge Base')

            .activeTab('Browse')

            .assert.visible('@searchTab')
            .assert.containsText('@searchTab', 'Search')

            .assert.visible('@newQuestionBtn')
            .assert.attributeEquals('@newQuestionBtn', 'value', 'New Question')
            .assert.attributeEquals('@newQuestionBtn', 'onclick', 
                'newquestion()');

        client.frame(null);

        client.end();
    }
};
