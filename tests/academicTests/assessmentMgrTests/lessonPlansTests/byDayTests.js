var moment = require('moment');

module.exports = {
    tags: ['academicTests', 'academicAssessmentMgrTests', 
        'academicAssessmentMgrLessonPlansByDayTest'],

    'Academic Assessment Mgr Lesson Plans By Day Test': (client) => {

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
            .assert.visible('@assessmentMgrLessonPlansByDay')
            .click('@assessmentMgrLessonPlansByDay');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.assessmentMgr.lessonPlans.byDay()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Assessment Mgr/Lesson Plans/ By Day')

            .activeTab('by Day')

            .assert.visible('@byClassTab')
            .assert.containsText('@byClassTab', 'by Class')

            .assert.visible('@printBtn')
            .assert.containsText('@printBtn', 'Print')
            .assert.attributeEquals('@printBtn', 'onclick', 'print();')

            .assert.visible('@dateInput')
            .assert.attributeEquals('@dateInput', 'value', 
                moment().format('MM/DD/YYYY'))

            .assert.visible('@showOnlyLessonCheckbox')
            .assert.attributeEquals('@showOnlyLessonCheckbox', 'onchange',
                'doChange()')

            .assert.visible('@showOnlyLessonLabel')
            .assert.containsText('@showOnlyLessonLabel', 
                'Show Classes without Lesson Plans')

            .assert.visible('@classHeader')
            .assert.containsText('@classHeader', 'Class')

            .assert.visible('@sectionHeader')
            .assert.containsText('@sectionHeader', 'Section')

            .assert.visible('@subjectHeader')
            .assert.containsText('@subjectHeader', 'Subject')

            .assert.visible('@topicUnitHeader')
            .assert.containsText('@topicUnitHeader', 'Topic / Unit')

            .assert.visible('@teacherHeader')
            .assert.containsText('@teacherHeader', 'Teacher')

            .assert.visible('@statusHeader')
            .assert.containsText('@statusHeader', 'Status');

        client.frame(null);

        client.end();
    }
};
