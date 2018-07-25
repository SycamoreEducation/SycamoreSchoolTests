module.exports = {
    tags: ['academicTests', 'academicClassroomMgrTests', 
        'academicClassroomMgrReportsTests', 'classroomMgrReportsCustomTabTest'],

    'Academic Classroom Mgr Reports Custom Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@classroomMgr')
            .click('@classroomMgr')
            .assert.visible('@classroomMgrReports')
            .click('@classroomMgrReports');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.classroomMgr.reports()
            .waitForElementVisible('@customTab', 5000)
            .click('@customTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Classroom/ Reports')

            .activeTab('Custom')

            .assert.visible('@commonTab')
            .assert.containsText('@commonTab', 'Common')

            .assert.visible('@templatesTab')
            .assert.containsText('@templatesTab', 'Templates')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description');

        client.frame(null);

        client.end();
    }
};
