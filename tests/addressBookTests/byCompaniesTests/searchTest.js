module.exports = {
    tags: ['addressBookTests', 'addressBookByCompaniesTests',
        'companiesSearchTest'],

    'By Companies Companies Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@addressBook')
            .click('@addressBook')
            .assert.visible('@addressBookByCompany')
            .click('@addressBookByCompany')
        client.frame(null);

        client.frame(2);
        client.page.addressBook.byCompany.companiesTab()
            .waitForElementVisible('@searchTab', 5000)
            .click('@searchTab');

        client.page.addressBook.byCompany.searchTab()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Address Book/ Company Search')

            .assert.visible('@companiesTab')
            .assert.containsText('@companiesTab', 'Companies')

            .assert.visible('@categoriesTab')
            .assert.containsText('@categoriesTab', 'Categories')

            .assert.visible('@searchBtn')
            .assert.attributeEquals('@searchBtn', 'value', 'Search')
            .assert.attributeEquals('@searchBtn', 'type', 'submit')

            .assert.visible('@companyLabel')
            .assert.containsText('@companyLabel', 'Company')

            .assert.visible('@companyInput')
            .assert.attributeEquals('@companyInput', 'type', 'text')

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
            .assert.attributeEquals('@emailInput', 'type', 'text')

            .assert.visible('@resultsHeader')
            .assert.containsText('@resultsHeader', 'Results')
            
        client.frame(null)

        client.end();
    }
};
