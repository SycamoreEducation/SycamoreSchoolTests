module.exports = {
    tags: ['addressBookTests', 'addressBookByLastnameTests', 'addressBookByLastnameLastnameTest'],

    'By Lastname Lastname Test': (client) => {

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
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Address Book/ By Lastname')

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

            .assert.visible('@a')
            .assert.containsText('@a', 'A')

            .assert.visible('@b')
            .assert.containsText('@b', 'B')

            .assert.visible('@c')
            .assert.containsText('@c', 'C')

            .assert.visible('@d')
            .assert.containsText('@d', 'D')

            .assert.visible('@e')
            .assert.containsText('@e', 'E')

            .assert.visible('@f')
            .assert.containsText('@f', 'F')

            .assert.visible('@g')
            .assert.containsText('@g', 'G')

            .assert.visible('@h')
            .assert.containsText('@h', 'H')

            .assert.visible('@i')
            .assert.containsText('@i', 'I')

            .assert.visible('@j')
            .assert.containsText('@j', 'J')

            .assert.visible('@k')
            .assert.containsText('@k', 'K')

            .assert.visible('@l')
            .assert.containsText('@l', 'L')

            .assert.visible('@m')
            .assert.containsText('@m', 'M')

            .assert.visible('@n')
            .assert.containsText('@n', 'N')

            .assert.visible('@o')
            .assert.containsText('@o', 'O')

            .assert.visible('@p')
            .assert.containsText('@p', 'P')

            .assert.visible('@q')
            .assert.containsText('@q', 'Q')

            .assert.visible('@r')
            .assert.containsText('@r', 'R')

            .assert.visible('@s')
            .assert.containsText('@s', 'S')

            .assert.visible('@t')
            .assert.containsText('@t', 'T')

            .assert.visible('@u')
            .assert.containsText('@u', 'U')

            .assert.visible('@v')
            .assert.containsText('@v', 'V')

            .assert.visible('@w')
            .assert.containsText('@w', 'W')

            .assert.visible('@x')
            .assert.containsText('@x', 'X')

            .assert.visible('@y')
            .assert.containsText('@y', 'Y')

            .assert.visible('@z')
            .assert.containsText('@z', 'Z')

            .assert.visible('@nameTitle')
            .assert.containsText('@nameTitle', 'Name')

            .assert.visible('@companyTitle')
            .assert.containsText('@companyTitle', 'Company')

            .assert.visible('@descriptionTitle')
            .assert.containsText('@descriptionTitle', 'Description')

            .assert.visible('@phoneTitle')
            .assert.containsText('@phoneTitle', 'Phone')

            .click('@c');

            client.page.addressBook.byLastname.users()

            .assert.visible('@janeName')
            .assert.containsText('@janeName', 'Current, Jane')
            .assert.attributeEquals('@janeName', 'onclick', 'viewcontact(2); return false;')

            .assert.visible('@janeEnvelope')
            .assert.attributeEquals('@janeEnvelope', 'onclick', 'envelope(2); return false;')

            .assert.visible('@janeNote')
            .assert.attributeEquals('@janeNote', 'onclick', 'addnote(2); return false;')

            .assert.visible('@janeDocs')
            .assert.attributeEquals('@janeDocs', 'onclick', 'doMerge(2); return false;')

            .assert.visible('@janeCard')
            .assert.attributeEquals('@janeCard', 'onclick', 'vcard(2); return false;')

            .assert.visible('@johnName')
            .assert.containsText('@johnName', 'Current, John')
            .assert.attributeEquals('@johnName', 'onclick', 'viewcontact(1); return false;')

            .assert.visible('@johnEnvelope')
            .assert.attributeEquals('@johnEnvelope', 'onclick', 'envelope(1); return false;')

            .assert.visible('@johnNote')
            .assert.attributeEquals('@johnNote', 'onclick', 'addnote(1); return false;')

            .assert.visible('@johnDocs')
            .assert.attributeEquals('@johnDocs', 'onclick', 'doMerge(1); return false;')

            .assert.visible('@johnCard')
            .assert.attributeEquals('@johnCard', 'onclick', 'vcard(1); return false;')

        client.frame(null)

        client.end();
    }
};
