module.exports = {
    tags: ['addressBookTests', 'addressBookByLastnameTests', 'addressBookByLastnameCategoriesTest'],

    'By Last Name Categories Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@addressBook')
            .click('@addressBook')
            .assert.visible('@addressBookByLastName')
            .click('@addressBookByLastName')
        client.frame(null);

        client.frame(2);
        client.page.addressBook.byLastname.lastnameTab()

            .waitForElementVisible('@categoriesTab', 5000)
            .click('@categoriesTab');

        client.page.addressBook.byLastname.categoriesTab()
        
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Address Book/ Category')

            .assert.visible('@lastNameTab')
            .assert.containsText('@lastNameTab', 'Last Name')

            .assert.visible('@categoriesTab')
            .assert.containsText('@categoriesTab', 'Categories')

            .assert.visible('@searchTab')
            .assert.containsText('@searchTab', 'Search')

            .assert.visible('@inputField')
            .assert.attributeEquals('@inputField', 'type', 'text')

            .assert.visible('@searchBtn')
            .assert.attributeEquals('@searchBtn', 'value', 'Search')
            .assert.attributeEquals('@searchBtn', 'type', 'submit')

            .assert.visible('@newContactBtn')
            .assert.attributeEquals('@newContactBtn', 'value', 'New Contact')
            .assert.attributeEquals('@newContactBtn', 'onclick', 'addcontact()')

            .assert.visible('@categoryLabel')
            .assert.containsText('@categoryLabel', 'Category')

            .assert.visible('@categorySelect')
            .assert.containsText('@categorySelect', 'Select Category')
            .assert.attributeEquals('@categorySelect', 'onchange', 'GetCatagory()')

            .assert.visible('@nameTitle')
            .assert.containsText('@nameTitle', 'Name')

            .assert.visible('@companyTitle')
            .assert.containsText('@companyTitle', 'Company')

            .assert.visible('@descriptionTitle')
            .assert.containsText('@descriptionTitle', 'Description')

            .assert.visible('@phoneTitle')
            .assert.containsText('@phoneTitle', 'Phone')

        client.frame(null)

        client.end();
    }
};
