module.exports = {
    tags: ['frontDeskTests', 'departmentsTest'],

    'Departments Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@frontDesk')
            .click('@frontDesk')
            .assert.visible('@frontDeskDepartments')
            .click('@frontDeskDepartments')
        client.frame(null);

        client.frame(2);
        client.page.frontDesk.departments()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Administrative/Human Resources/ Departments')

            .assert.visible('@browseTab')
            .assert.containsText('@browseTab', 'Browse')

        client.frame(null)

        client.end();
    }
};
