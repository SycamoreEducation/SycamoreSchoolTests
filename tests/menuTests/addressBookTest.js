module.exports = {
    tags: ['addressBookTest', 'menuTests'],

    'Address Book Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@addressBook')
            .assert.containsText('@addressBook', '\273 Address Book')
            .assert.attributeEquals('@addressBook', 'href', 
                page.url() + '/schoolmenu.php#')

            .assert.hidden('@addressBookByLastName')
            .assert.hidden('@addressBookByCompany')
            .assert.hidden('@addressBookCategories')
            .assert.hidden('@addressBookAdditionalFields')
            .assert.hidden('@addressBookReports')

            .click('@addressBook')

            .assert.visible('@addressBookByLastName')
            .assert.containsText('@addressBookByLastName', 'By Lastname')
            .assert.attributeEquals('@addressBookByLastName', 'href', 
                page.url() + '/contact.php')

            .assert.visible('@addressBookByCompany')
            .assert.containsText('@addressBookByCompany', 'By Company')
            .assert.attributeEquals('@addressBookByCompany', 'href', 
                page.url() + '/contactcompanies.php')

            .assert.visible('@addressBookCategories')
            .assert.containsText('@addressBookCategories', 'Categories')
            .assert.attributeEquals('@addressBookCategories', 'href', 
                page.url() + '/contactcatagories.php')

            .assert.visible('@addressBookAdditionalFields')
            .assert.containsText('@addressBookAdditionalFields', 
                'Additional Fields')
            .assert.attributeEquals('@addressBookAdditionalFields', 'href', 
                page.url() + '/contactstatistics.php')

            .assert.visible('@addressBookReports')
            .assert.containsText('@addressBookReports', 'Reports')
            .assert.attributeEquals('@addressBookReports', 'href', 
                page.url() + '/reports.php?type=6')

            .click('@addressBook')
            .assert.hidden('@addressBookByLastName')
            .assert.hidden('@addressBookByCompany')
            .assert.hidden('@addressBookCategories')
            .assert.hidden('@addressBookAdditionalFields')
            .assert.hidden('@addressBookReports');

        client.frame(null);

        client.end();
    }
};
