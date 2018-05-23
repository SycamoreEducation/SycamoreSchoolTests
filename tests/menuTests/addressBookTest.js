module.exports = {
    tags: ['addressBookTest', 'menuTests'],

    'Address Book Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.addressBook()
            .assert.visible('@addressBook')
            .assert.containsText('@addressBook', '\273 Address Book')
            .assert.attributeEquals('@addressBook', 'href', page.url() + '/schoolmenu.php#')

            .assert.hidden('@addressBookByLastName')
            .assert.hidden('@addressBookByCompany')
            .assert.hidden('@addressBookCategories')
            .assert.hidden('@addressBookAdditionalFields')
            .assert.hidden('@addressBookReports')

            .click('@addressBook')
            .assert.visible('@addressBookByLastName')
            .assert.visible('@addressBookByCompany')
            .assert.visible('@addressBookCategories')
            .assert.visible('@addressBookAdditionalFields')
            .assert.visible('@addressBookReports')
            .assert.containsText('@addressBookByLastName', 'By Lastname')
            .assert.containsText('@addressBookByCompany', 'By Company')
            .assert.containsText('@addressBookCategories', 'Categories')
            .assert.containsText('@addressBookAdditionalFields', 'Additional Fields')
            .assert.containsText('@addressBookReports', 'Reports')
            .assert.attributeEquals('@addressBookByLastName', 'href', page.url() + '/contact.php')
            .assert.attributeEquals('@addressBookByCompany', 'href', page.url() + '/contactcompanies.php')
            .assert.attributeEquals('@addressBookCategories', 'href', page.url() + '/contactcatagories.php')
            .assert.attributeEquals('@addressBookAdditionalFields', 'href', page.url() + '/contactstatistics.php')
            .assert.attributeEquals('@addressBookReports', 'href', page.url() + '/reports.php?type=6')

            .click('@addressBook')
            .assert.hidden('@addressBookByLastName')
            .assert.hidden('@addressBookByCompany')
            .assert.hidden('@addressBookCategories')
            .assert.hidden('@addressBookAdditionalFields')
            .assert.hidden('@addressBookReports')

        client.frame(null);

        client.end();
    }
};
