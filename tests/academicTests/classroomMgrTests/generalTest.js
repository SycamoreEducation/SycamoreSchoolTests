module.exports = {
    tags: ['academicTests', 'academicClassroomMgrTests', 
        'academicClassroomMgrGeneralTest'],

    'Academic Classroom Mgr General Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@classroomMgr')
            .click('@classroomMgr')
            .assert.visible('@classroomMgrGeneral')
            .click('@classroomMgrGeneral');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.classroomMgr.general()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Classroom Mgr/ General')

            .activeTab('General')

            .assert.visible('@dayLongTab')
            .assert.containsText('@dayLongTab', 'Day Long')

            .assert.visible('@periodLongTab')
            .assert.containsText('@periodLongTab', 'Period Long')

            .assert.visible('@printBtn')
            .assert.containsText('@printBtn', 'Print')
            .assert.attributeEquals('@printBtn', 'onclick', 
                `popPrint('printclasses')`)

            .assert.visible('@newClassBtn')
            .assert.attributeEquals('@newClassBtn', 'value', 'New Class')
            .assert.attributeEquals('@newClassBtn', 'onclick', 'addclass()')
                            
            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')
                
            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')
                
            .assert.visible('@homeHeader')
            .assert.containsText('@homeHeader', 'Home')
                
            .assert.visible('@teacherHeader')
            .assert.containsText('@teacherHeader', 'Teacher')
                
            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')
                
            .assert.visible('@roomHeader')
            .assert.containsText('@roomHeader', 'Room')
                
            .assert.visible('@activityHeader')
            .assert.containsText('@activityHeader', 'Activity');

        client.frame(null);

        client.end();
    }
};
