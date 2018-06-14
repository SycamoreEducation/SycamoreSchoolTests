module.exports = {
    tags: ['addressBookTests', 'addressBookByCompaniesTests', 
        'byCompaniesCategoriesTest'],

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
            .waitForElementVisible('@categoriesTab', 5000)
            .click('@categoriesTab');

        client.page.addressBook.byCompany.categoriesTab()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Address Book/ By Company')

            .assert.visible('@companiesTab')
            .assert.containsText('@companiesTab', 'Companies')

            .assert.visible('@categoriesTab')
            .assert.containsText('@categoriesTab', 'Categories')

            .assert.visible('@searchTab')
            .assert.containsText('@searchTab', 'Search')

            .assert.visible('@searchInput')
            .assert.attributeEquals('@searchInput', 'type', 'text')

            .assert.visible('@searchBtn')
            .assert.attributeEquals('@searchBtn', 'value', 'Search')
            .assert.attributeEquals('@searchBtn', 'type', 'submit')

            .assert.visible('@newCompanyBtn')
            .assert.attributeEquals('@newCompanyBtn', 'value', 'New Company')
            .assert.attributeEquals('@newCompanyBtn', 'onclick', 
                'addcontactcompany()')

            .assert.visible('@newContactBtn')
            .assert.attributeEquals('@newContactBtn', 'value', 'New C&C')
            .assert.attributeEquals('@newContactBtn', 'onclick', 
                'addcontactcompanycontact()')

            .assert.visible('@categoryLabel')
            .assert.containsText('@categoryLabel', 'Category')

            .assert.visible('@categorySelect')
            .assert.containsText('@categorySelect', 'Select Category')
            .assert.attributeEquals('@categorySelect', 'onchange', 
                'GetCatagory()')

            .assert.visible('@companyNameHeader')
            .assert.containsText('@companyNameHeader', 'Company Name')

        client.frame(null)

        client.end();
    }
};
