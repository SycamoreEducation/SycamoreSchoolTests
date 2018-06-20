module.exports = {
    tags: ['administrativeTests', 'backOfficeMgrTests', 'backOfficeStudentTests',
        'backOfficeStudentTypesTests', 'backOfficeStudentTypesCurrentTabTest'],

    'Back Office Student Types Current Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@backOfficeMgr')
            .click('@backOfficeMgr')
            .assert.visible('@backOfficeMgrStudents')
            .click('@backOfficeMgrStudents')
            .assert.visible('@backOfficeMgrStudentsTypes')
            .click('@backOfficeMgrStudentsTypes')
        client.frame(null);

        client.frame(2);
        client.page.administrative.backOfficeMgr.students.types.currentTab()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Back Office/Students/ Types')

            .assert.visible('@currentTab')
            .assert.containsText('@currentTab', 'Current')

            .assert.visible('@newTypeBtn')
            .assert.attributeEquals('@newTypeBtn', 'value', 'New Type')
            .assert.attributeEquals('@newTypeBtn', 'onclick', 'addtype()')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

        client.frame(null)

        client.end();
    }
};
