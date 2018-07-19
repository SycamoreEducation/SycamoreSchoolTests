module.exports = {
    tags: ['academicTests', 'academicClassroomMgrTests', 
        'academicClassroomMgrReportsTests', 'classroomMgrReportsCommonTabTest'],

    'Academic Classroom Mgr Reports Common Tab Test': (client) => {

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
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Classroom/ Reports')

            .activeTab('Common')

            .assert.visible('@customTab')
            .assert.containsText('@customTab', 'Custom')

            .assert.visible('@templatesTab')
            .assert.containsText('@templatesTab', 'Templates')

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
