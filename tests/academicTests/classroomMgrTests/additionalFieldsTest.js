module.exports = {
    tags: ['academicTests', 'academicClassroomMgrTests', 
        'academicClassroomMgrAdditionalFieldsTest'],

    'Academic Classroom Mgr Additional Fields Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@classroomMgr')
            .click('@classroomMgr')
            .assert.visible('@classroomMgrAdditionalFields')
            .click('@classroomMgrAdditionalFields');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.classroomMgr.additionalFields()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Classroom Mgr/ Additional Fields')

            .activeTab('Classes')

            .assert.visible('@groupsBtn')
            .assert.containsText('@groupsBtn', 'Groups')
            .assert.attributeEquals('@groupsBtn', 'onclick', 'viewGroups()')

            .assert.visible('@newFieldBtn')
            .assert.containsText('@newFieldBtn', 'New Field')
            .assert.attributeEquals('@newFieldBtn', 'onclick', 'addField()')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@typeHeader')
            .assert.containsText('@typeHeader', 'Type')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@dbidHeader')
            .assert.containsText('@dbidHeader', 'DBID');

        client.frame(null);

        client.end();
    }
};
