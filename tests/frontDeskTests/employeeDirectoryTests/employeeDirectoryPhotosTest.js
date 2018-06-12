module.exports = {
    tags: ['frontDeskTests', 'employeeDirectoryTests', 'employeeDirectoryPhotosTest'],

    'Employee Directory List Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@frontDesk')
            .click('@frontDesk')
            .assert.visible('@frontDeskEmployeeDirectory')
            .click('@frontDeskEmployeeDirectory')
        client.frame(null);

        client.frame(2);
        client.page.frontDesk.employeeDirectory()
            .waitForElementVisible('@breadcrumb', 5000)

            .click('@photosTab')

            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Front Desk/ Employee Directory')

            .assert.visible('@listTab')
            .assert.containsText('@listTab', 'List')

            .assert.visible('@photosTab')
            .assert.visible('@photosTab', 'Photos')

            .assert.visible('@tomPhoto')
            .assert.attributeEquals('@tomPhoto', 'onclick', 'DoUser(2)')

            .assert.visible('@tomCaption')
            .assert.containsText('@tomCaption', 'Tom Employee')

            .assert.visible('@johnPhoto')
            .assert.attributeEquals('@johnPhoto', 'onclick', 'DoUser(1)')

            .assert.visible('@johnCaption')
            .assert.containsText('@johnCaption', 'John Superuser')

        client.frame(null)

        client.end();
    }
};
