module.exports = {
    tags: ['academicTests', 'academicGradeMgrTests', 'gradeMgrReportsTests',
        'gradeMgrReportsCommonTabTest'],

    'Academic Grade Mgr Reports Common Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@gradeMgr')
            .click('@gradeMgr')
            .assert.visible('@gradeMgrReports')
            .click('@gradeMgrReports');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.gradeMgr.reports()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Academic/Grades/ Reports')

            .activeTab('Common')

            .assert.visible('@customTab')
            .assert.containsText('@customTab', 'Custom')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@testName')

            .assert.visible('@testDescription');

        client.frame(null);

        client.end();
    }
};
