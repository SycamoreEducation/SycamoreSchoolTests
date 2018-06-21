module.exports = {
    tags: ['communicationTests', 'communicationChecklistTest'],

    'Communication Checklist Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@communication')
            .click('@communication')
            .assert.visible('@communicationChecklist')
            .click('@communicationChecklist')
        client.frame(null);

        client.frame(2);
        client.page.communication.checklist()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Communication/ Checklist')

            .activeTab('Current')

            .assert.visible('@newChecklistBtn')
            .assert.attributeEquals('@newChecklistBtn', 'value', 
                'New Check List')
            .assert.attributeEquals('@newChecklistBtn', 'onclick', 
                'newchecklist()')

            .assert.visible('@titleHeader')
            .assert.containsText('@titleHeader', 'Title')

            .assert.visible('@authorHeader')
            .assert.containsText('@authorHeader', 'Author')

            .assert.visible('@countHeader')
            .assert.containsText('@countHeader', 'Count')

        client.frame(null)

        client.end();
    }
};
