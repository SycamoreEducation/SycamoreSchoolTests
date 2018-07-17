module.exports = {
    tags: ['administrativeTests', 'humanResourcesTests', 
        'humanResourcesTypesTest'],

    'Human Resources Types Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@humanReources')
            .click('@humanReources')
            .assert.visible('@humanResourcesTypes')
            .click('@humanResourcesTypes');
        client.frame(null);

        client.frame(2);
        client.page.administrative.humanResources.types()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Human Resources/ Types')

            .activeTab('Current')

            .assert.visible('@printBtn')
            .assert.containsText('@printBtn', 'Print')
            .assert.attributeEquals('@printBtn', 'onclick', 
                'popPrint("content", "Human Resource Types");')

            .assert.visible('@newTypeBtn')
            .assert.attributeEquals('@newTypeBtn', 'value', 'New Type')
            .assert.attributeEquals('@newTypeBtn', 'onclick', 'addtype()')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@DBIDHeader')
            .assert.containsText('@DBIDHeader', 'DB ID');

        client.frame(null);

        client.end();
    }
};
