module.exports = {
    tags: ['administrativeTests', 'backOfficeMgrTests', 'backOfficeStudentTests',
        'backOfficeStudentActivitiesTest'],

    'Back Office Student Activities Test': (client) => {

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
            .assert.visible('@backOfficeMgrStudentsActivites')
            .click('@backOfficeMgrStudentsActivites')
        client.frame(null);

        client.frame(2);
        client.page.administrative.backOfficeMgr.students.activities
            .activitiesTab()

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Back Office/Students/ Activities')

            .activeTab('Activities')

            .assert.visible('@newActivityBtn')
            .assert.attributeEquals('@newActivityBtn', 'value', 'New Activity')
            .assert.attributeEquals('@newActivityBtn', 'onclick', 
                'addactivity()')

            .assert.visible('@schoolYearLabel')
            .assert.containsText('@schoolYearLabel', 'School Year')

            .assert.visible('@schoolYearSelect')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@countHeader')
            .assert.containsText('@countHeader', 'Count')

        client.frame(null)

        client.end();
    }
};
