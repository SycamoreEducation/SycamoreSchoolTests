module.exports = {
    tags: ['addressBookTests', 'addressBookByLastnameTests', 
        'addressBookByLastnameSearchTest'],

    'By Last Name Search Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@addressBook')
            .click('@addressBook')
            .assert.visible('@addressBookByLastName')
            .click('@addressBookByLastName');
        client.frame(null);

        client.frame(2);
        client.page.addressBook.byLastname.lastnameTab()

            .waitForElementVisible('@searchTab', 5000)
            .click('@searchTab');

        client.page.addressBook.byLastname.searchTab()
        
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Address Book/ Search')

            .activeTab('Search')

            .assert.visible('@lastNameTab')
            .assert.containsText('@lastNameTab', 'Last Name')

            .assert.visible('@categoriesTab')
            .assert.containsText('@categoriesTab', 'Categories')

            .assert.visible('@searchBtn')
            .assert.attributeEquals('@searchBtn', 'value', 'Search')
            .assert.attributeEquals('@searchBtn', 'type', 'submit')

            .assert.visible('@categoryLabel')
            .assert.containsText('@categoryLabel', 'Category')

            .assert.visible('@categorySelect')
            .assert.containsText('@categoryLabel', 'Category')

            .assert.visible('@companyLabel')
            .assert.containsText('@companyLabel', 'Company')

            .assert.visible('@companyInput')
            .assert.attributeEquals('@companyInput', 'type', 'text')

            .assert.visible('@descriptionLabel')
            .assert.containsText('@descriptionLabel', 'Description')
            
            .assert.visible('@descriptionInput')
            .assert.attributeEquals('@descriptionInput', 'type', 'text')

            .assert.visible('@firstNameLabel')
            .assert.containsText('@firstNameLabel', 'First Name')

            .assert.visible('@firstNameInput')
            .assert.attributeEquals('@firstNameInput', 'type', 'text')

            .assert.visible('@lastNameLabel')
            .assert.containsText('@lastNameLabel', 'Last Name')

            .assert.visible('@lastNameInput')
            .assert.attributeEquals('@lastNameInput', 'type', 'text')

            .assert.visible('@address1Label')
            .assert.containsText('@address1Label', 'Address 1')

            .assert.visible('@address1Input')
            .assert.attributeEquals('@address1Input', 'type', 'text')

            .assert.visible('@address2Label')
            .assert.containsText('@address2Label', 'Address 2')

            .assert.visible('@address2Input')
            .assert.attributeEquals('@address2Input', 'type', 'text')

            .assert.visible('@cityLabel')
            .assert.containsText('@cityLabel', 'City')

            .assert.visible('@cityInput')
            .assert.attributeEquals('@cityInput', 'type', 'text')

            .assert.visible('@stateLabel')
            .assert.containsText('@stateLabel', 'State')

            .assert.visible('@stateSelect')

            .assert.visible('@zipLabel')
            .assert.containsText('@zipLabel', 'Zip')

            .assert.visible('@zipInput')
            .assert.attributeEquals('@zipInput', 'type', 'text')

            .assert.visible('@phoneLabel')
            .assert.containsText('@phoneLabel', 'Phone')

            .assert.visible('@phoneInput')
            .assert.attributeEquals('@phoneInput', 'type', 'text')

            .assert.visible('@emailLabel')
            .assert.containsText('@emailLabel', 'EMail')

            .assert.visible('@emailInput')
            .assert.attributeEquals('@emailInput', 'type', 'text');

        client.frame(null);

        client.end();
    }
};
