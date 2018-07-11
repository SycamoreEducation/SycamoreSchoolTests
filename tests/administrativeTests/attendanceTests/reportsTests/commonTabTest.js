module.exports = {
    tags: ['administrativeTests', 'attendanceTests', 'attendanceReportsTest',
        'attendanceReportsCommonTabTest'],

    'Attendance Reports Common Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@attendance')
            .click('@attendance')
            .assert.visible('@attendanceReports')
            .click('@attendanceReports')
        client.frame(null);

        client.frame(2);
        client.page.administrative.attendance.reports()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Attendance/ Reports')

            .activeTab('Common')

            .assert.visible('@customTab')
            .assert.containsText('@customTab', 'Custom')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@testReportName')

            .assert.visible('@testReportDescription')

        client.frame(null)

        client.end();
    }
};
