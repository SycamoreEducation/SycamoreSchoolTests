module.exports = {
    tags: ['administrativeTests', 'humanResourcesTests', 
        'humanResourcesAdditionalFieldsTest'],

    'Human Resources AdditionalFields Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@humanReources')
            .click('@humanReources')
            .assert.visible('@humanResourcesAdditionalFields')
            .click('@humanResourcesAdditionalFields');
        client.frame(null);

        client.frame(2);
        client.page.administrative.humanResources.additionalFields()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Back Office/Human Resources/ Additional Fields')

            .activeTab('Employees')

            .assert.visible('@newFieldBtn')
            .assert.containsText('@newFieldBtn', 'New Field')
            .assert.attributeEquals('@newFieldBtn', 'onclick', 'addField()')

            .assert.visible('@groupsBtn')
            .assert.containsText('@groupsBtn', 'Groups')
            .assert.attributeEquals('@groupsBtn', 'onclick', 'viewGroups()')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@typeHeader')
            .assert.containsText('@typeHeader', 'Type')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@profileHeader')
            .assert.containsText('@profileHeader', 'Profile')

            .assert.visible('@DBIDHeader')
            .assert.containsText('@DBIDHeader', 'DBID');

        client.frame(null);

        client.end();
    }
};
