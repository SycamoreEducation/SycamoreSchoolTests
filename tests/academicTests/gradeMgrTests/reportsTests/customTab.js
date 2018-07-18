module.exports = {
    tags: ['academicTests', 'academicGradeMgrTests', 'gradeMgrReportsTests',
        'gradeMgrReportsCustomTabTest'],

    'Academic Grade Mgr Reports Custom Tab Test': (client) => {

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
            .waitForElementVisible('@customTab', 5000)
            .click('@customTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Academic/Grades/ Reports')

            .activeTab('Custom')

            .assert.visible('@commonTab')
            .assert.containsText('@commonTab', 'Common')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description');

        client.frame(null);

        client.end();
    }
};
