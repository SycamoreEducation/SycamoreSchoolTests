module.exports = {
    tags: ['addressBookTest', 'menuTests'],

    'Address Book Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin('superuser', 'guest', '1');

        client.frame(1);
        client.page.menu()
            .assert.visible('@addressBook')
            .assert.containsText('@addressBook', '\273 Address Book')
            .assert.attributeEquals('@addressBook', 'href', 'http://web/schoolmenu.php#')

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
            .assert.attributeEquals('@addressBookByLastName', 'href', 'http://web/contact.php')
            .assert.attributeEquals('@addressBookByCompany', 'href', 'http://web/contactcompanies.php')
            .assert.attributeEquals('@addressBookCategories', 'href', 'http://web/contactcatagories.php')
            .assert.attributeEquals('@addressBookAdditionalFields', 'href', 'http://web/contactstatistics.php')
            .assert.attributeEquals('@addressBookReports', 'href', 'http://web/reports.php?type=6')

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
