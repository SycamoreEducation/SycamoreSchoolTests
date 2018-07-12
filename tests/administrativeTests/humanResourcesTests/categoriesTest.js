module.exports = {
    tags: ['administrativeTests', 'humanResourcesTests', 
        'humanResourcesCategoriesTest'],

    'Human Resources Categories Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@humanReources')
            .click('@humanReources')
            .assert.visible('@humanResourcesCategories')
            .click('@humanResourcesCategories')
        client.frame(null);

        client.frame(2);
        client.page.administrative.humanResources.categories()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Human Resources/ Categories')

            .activeTab('Employees')

            .assert.visible('@groupsBtn')
            .assert.attributeEquals('@groupsBtn', 'value', 'Groups')
            .assert.attributeEquals('@groupsBtn', 'onclick', 'groups()')

            .assert.visible('@addCategoryBtn')
            .assert.attributeEquals('@addCategoryBtn', 'value', 'Add Category')
            .assert.attributeEquals('@addCategoryBtn', 'onclick', 
                'addcategory()')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@countHeader')
            .assert.containsText('@countHeader', 'Count')

        client.frame(null)

        client.end();
    }
};
