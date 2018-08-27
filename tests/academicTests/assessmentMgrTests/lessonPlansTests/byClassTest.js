module.exports = {
    tags: ['academicTests', 'academicAssessmentMgrTests', 
        'lessonPlansByClassTest'],

    'Academic Assessment Mgr Lesson Plans By Class Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@assessmentMgr')
            .click('@assessmentMgr')
            .assert.visible('@assessmentMgrLessonPlans')
            .click('@assessmentMgrLessonPlans')
            .assert.visible('@assessmentMgrLessonPlansByClass')
            .click('@assessmentMgrLessonPlansByClass');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.assessmentMgr.lessonPlans.byClass()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Assessment Mgr/Lesson Plans/ By Class')

            .activeTab('by Class')

            .assert.visible('@byDayTab')
            .assert.containsText('@byDayTab', 'by Day')

            .assert.visible('@exportBtn')
            .assert.attributeEquals('@exportBtn', 'value', ' Export ')

            .assert.visible('@classSelect')
            .assert.containsText('@classSelect', 'Select Class')
            .assert.attributeEquals('@classSelect', 'onchange', 'doChange()')

            .assert.visible('@termSelect')
            .assert.containsText('@termSelect', client.globals.CURRENT_QUARTER)
            .assert.attributeEquals('@termSelect', 'onchange', 'doChange()')

            .assert.visible('@dateHeader')
            .assert.containsText('@dateHeader', 'Date')

            .assert.visible('@subjectHeader')
            .assert.containsText('@subjectHeader', 'Subject')

            .assert.visible('@topicHeader')
            .assert.containsText('@topicHeader', 'Topic / Unit')

            .assert.visible('@teacherHeader')
            .assert.containsText('@teacherHeader', 'Teacher')

            .assert.visible('@statusHeader')
            .assert.containsText('@statusHeader', 'Status');

        client.frame(null);

        client.end();
    }
};
