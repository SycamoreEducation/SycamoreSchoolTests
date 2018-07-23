module.exports = {
    tags: ['academicTests', 'academicClassroomMgrTests', 
        'academicClassroomMgrPeriodLongTest'],

    'Academic Classroom Mgr Period Long Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@classroomMgr')
            .click('@classroomMgr')
            .assert.visible('@classroomMgrPeriodLong')
            .click('@classroomMgrPeriodLong');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.classroomMgr.periodLong()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Classroom Mgr/ Period Long')

            .activeTab('Period Long')
            
            .assert.visible('@dayLongTab')
            .assert.containsText('@dayLongTab', 'Day Long')

            .assert.visible('@generalTab')
            .assert.containsText('@generalTab', 'General')

            .assert.visible('@printBtn')
            .assert.containsText('@printBtn', 'Print')
            .assert.attributeEquals('@printBtn', 'onclick' , 
                `popPrint('printclasses')`)

            .assert.visible('@newClassBtn')
            .assert.attributeEquals('@newClassBtn', 'value', 'New Class')
            .assert.attributeEquals('@newClassBtn', 'onclick', 'addclass()')

            .assert.visible('@semesterSelect')
            .assert.containsText('@semesterSelect', 'Second')
            .assert.attributeEquals('@semesterSelect', 'onchange', 
                'ChangeDept()')

            .assert.visible('@departmentSelect')
            .assert.containsText('@departmentSelect', 'Choose Department')
            .assert.attributeEquals('@departmentSelect', 'onchange', 
                'ChangeDept()')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@sectionHeader')
            .assert.containsText('@sectionHeader', 'Section')

            .assert.visible('@homeHeader')
            .assert.containsText('@homeHeader', 'Home')

            .assert.visible('@semester1Header')
            .assert.containsText('@semester1Header', 'S1')

            .assert.visible('@semester2Header')
            .assert.containsText('@semester2Header', 'S2')

            .assert.visible('@sunHeader')
            .assert.containsText('@sunHeader', 'Sun')

            .assert.visible('@monHeader')
            .assert.containsText('@monHeader', 'Mon')

            .assert.visible('@tueHeader')
            .assert.containsText('@tueHeader', 'Tue')

            .assert.visible('@wedHeader')
            .assert.containsText('@wedHeader', 'Wed')

            .assert.visible('@thuHeader')
            .assert.containsText('@thuHeader', 'Thu')

            .assert.visible('@friHeader')
            .assert.containsText('@friHeader', 'Fri')

            .assert.visible('@satHeader')
            .assert.containsText('@satHeader', 'Sat')

            .assert.visible('@primaryTeacherHeader')
            .assert.containsText('@primaryTeacherHeader', 'Primary Teacher')

            .assert.visible('@linkedHeader')
            .assert.containsText('@linkedHeader', 'Linked')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@activityHeader')
            .assert.containsText('@activityHeader', 'Activity');

        client.frame(null);

        client.end();
    }
};
