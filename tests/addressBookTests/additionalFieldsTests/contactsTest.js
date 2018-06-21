module.exports = {
    tags: ['addressBookTests', 'addressBookAdditionalFieldsTests', 
        'additionalFieldsContactsTest'],

    'Additional Fields Contacts Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@addressBook')
            .click('@addressBook')
            .assert.visible('@addressBookAdditionalFields')
            .click('@addressBookAdditionalFields')
        client.frame(null);

        client.frame(2);
        client.page.addressBook.additionalFields.additionalFields()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Address Book/ Additional Fields')

            .activeTab('Contacts')

            .assert.visible('@companyTab')
            .assert.containsText('@companyTab', 'Company')

            .assert.visible('@newFieldBtn')
            .assert.containsText('@newFieldBtn', 'New Field')
            .assert.attributeEquals('@newFieldBtn', 'onclick', 'addstat(1)')

            .assert.visible('@groupsBtn')
            .assert.containsText('@groupsBtn', 'Groups')
            .assert.attributeEquals('@groupsBtn', 'onclick', 'groups(1)')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@attributesHeader')
            .assert.containsText('@attributesHeader', 'Attributes')

            .assert.visible('@typeHeader')
            .assert.containsText('@typeHeader', 'Type')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@dbIdHeader')
            .assert.containsText('@dbIdHeader', 'DB ID')

        client.frame(null)

        client.end();
    }
};
