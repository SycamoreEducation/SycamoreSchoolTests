module.exports = {
    tags: ['frontDeskTests', 'employeeDirectoryTests', 'employeeDirectoryListTest'],

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
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Front Desk/ Employee Directory')

            .assert.visible('@listTab')
            .assert.containsText('@listTab', 'List')

            .assert.visible('@photosTab')
            .assert.visible('@photosTab', 'Photos')

            .assert.visible('@name')
            .assert.containsText('@name', 'Name')

            .assert.visible('@position')
            .assert.containsText('@position', 'Position')

            .assert.visible('@manager')
            .assert.containsText('@manager', 'Manager')

            .assert.visible('@tomName')
            .assert.containsText('@tomName', 'Employee, Tom')

            .assert.visible('@tomNote')
            .assert.attributeEquals('@tomNote', 'onclick', 'doMsg(2); return false;')

            .assert.visible('@johnName')
            .assert.containsText('@johnName', 'Superuser, John')

            .assert.visible('@johnNote')
            .assert.attributeEquals('@johnNote', 'onclick', 'doMsg(1); return false;')

        client.frame(null)

        client.end();
    }
};
