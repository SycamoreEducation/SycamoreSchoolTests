module.exports = {
    tags: ['addressBookTests', 'addressBookCategoriesTests', 
        'addressBookCompaniesTabTest'],

    'Address Book Companies Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@addressBook')
            .click('@addressBook')
            .assert.visible('@addressBookCategories')
            .click('@addressBookCategories')
        client.frame(null);

        client.frame(2);
        client.page.addressBook.categories.categories()
            .waitForElementVisible('@companiesTab', 5000)
            .click('@companiesTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Address Book/ Categories')

            .assert.visible('@contactTab')
            .assert.containsText('@contactTab', 'Contact')

            .assert.visible('@companiesTab')
            .assert.containsText('@companiesTab', 'Companies')

            .assert.visible('@newCategoryBtn')
            .assert.attributeEquals('@newCategoryBtn', 'value', 'New Category')
            .assert.attributeEquals('@newCategoryBtn', 'onclick', 
                'addcategory()')
            
            .assert.visible('@groupsBtn')
            .assert.attributeEquals('@groupsBtn', 'value', 'Groups')
            .assert.attributeEquals('@groupsBtn', 'onclick', 'groups()')

            .assert.visible('@poundHeader')
            .assert.containsText('@poundHeader', '#')

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
