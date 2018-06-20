module.exports = {
    tags: ['administrativeTests', 'backOfficeMgrTests', 'backOfficeStudentTests',
        'backOfficeStudentAdditionalFieldsTest'],

    'Back Office Student Additional Fields Student Tab Test': (client) => {

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
            .assert.visible('@backOfficeMgrStudentsAdditionalFields')
            .click('@backOfficeMgrStudentsAdditionalFields')
        client.frame(null);

        client.frame(2);
        client.page.administrative.backOfficeMgr.students.additionalFields
            .studentsTab()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Back Office/Students/ Additional Fields')

            .assert.visible('@studentsTab')
            .assert.containsText('@studentsTab', 'Students')

            .assert.visible('@newFieldBtn')
            .assert.containsText('@newFieldBtn', 'New Field')
            .assert.attributeEquals('@newFieldBtn', 'onclick', 'addField()')
            
            .assert.visible('@groupsBtn')
            .assert.containsText('@groupsBtn', 'Groups')
            .assert.attributeEquals('@groupsBtn', 'onclick', 'viewGroups()')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@attributesHeader')
            .assert.containsText('@attributesHeader', 'Attributes')

            .assert.visible('@typeHeader')
            .assert.containsText('@typeHeader', 'Type')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@profileHeader')
            .assert.containsText('@profileHeader', 'Profile')

            .assert.visible('@RPIDHeader')
            .assert.containsText('@RPIDHeader', 'RPID')

        client.frame(null)

        client.end();
    }
};
