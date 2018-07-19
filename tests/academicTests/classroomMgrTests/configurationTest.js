module.exports = {
    tags: ['academicTests', 'academicClassroomMgrTests', 
        'academicClassroomMgrConfigurationTest'],

    'Academic Classroom Mgr Configuration Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@classroomMgr')
            .click('@classroomMgr')
            .assert.visible('@classroomMgrConfiguration')
            .click('@classroomMgrConfiguration');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.classroomMgr.configuration()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Classroom Mgr/ Configuration')

            .activeTab('Options')

            .assert.visible('@updateBtn')
            .assert.attributeEquals('@updateBtn', 'value', 'Update')
            
            .assert.visible('@classroomHeader')
            .assert.containsText('@classroomHeader', 'Classroom Availability');

        client.frame(null);

        client.end();
    }
};
