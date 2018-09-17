module.exports = {
    tags: ['academicTests', 'academicAssessmentMgrTests', 
        'lessonPlansConfigurationTest'],

    'Academic Assessment Mgr Lesson Plans Configuration Test': (client) => {

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
            .assert.visible('@assessmentMgrLessonPlansConfiguration')
            .click('@assessmentMgrLessonPlansConfiguration');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.assessmentMgr.lessonPlans.configuration()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Assessment Mgr/Lesson Plans/ Configuration')

            .activeTab('Configuration')

            .assert.visible('@updateBtn')
            .assert.attributeEquals('@updateBtn', 'value', ' Update ')

            .assert.visible('@lessonPlanLabelsHeader')
            .assert.containsText('@lessonPlanLabelsHeader',
                'Lesson Plan Labels')

            .assert.visible('@label1')
            .assert.containsText('@label1', 'Label 1:')

            .assert.visible('@objectivesInput')
            .assert.attributeEquals('@objectivesInput', 'value', 'Objectives')

            .assert.visible('@objectivesLabel')
            .assert.containsText('@objectivesLabel', 'Objectives')

            .assert.visible('@label2')
            .assert.containsText('@label2', 'Label 2:')

            .assert.visible('@resourcesInput')
            .assert.attributeEquals('@resourcesInput', 'value', 'Resources')

            .assert.visible('@resourcesLabel')
            .assert.containsText('@resourcesLabel', 'Resources')

            .assert.visible('@label3')
            .assert.containsText('@label3', 'Label 3:')

            .assert.visible('@proceduresInput')
            .assert.attributeEquals('@proceduresInput', 'value', 'Procedures')

            .assert.visible('@proceduresLabel')
            .assert.containsText('@proceduresLabel', 'Procedures')

            .assert.visible('@daysHeader')
            .assert.containsText('@daysHeader', 'Days of the Week')

            .assert.visible('@daysInstructions')
            .assert.containsText('@daysInstructions', 'Select the days of' + 
                ' the week to show in week views. School Days and days with' + 
                ' Lesson Plans will always be visible.')

            .assert.visible('@sundayCheckbox')
            
            .assert.visible('@sundayLabel')
            .assert.containsText('@sundayLabel', 'Sunday')

            .assert.visible('@mondayCheckbox')
            .assert.containsText('@mondayLabel', 'Monday')

            .assert.visible('@tuesdayCheckbox')

            .assert.visible('@tuesdayLabel')
            .assert.containsText('@tuesdayLabel', 'Tuesday')

            .assert.visible('@wednesdayCheckbox')

            .assert.visible('@wednesdayLabel')
            .assert.containsText('@wednesdayLabel', 'Wednesday')

            .assert.visible('@thursdayCheckbox')
            
            .assert.visible('@thursdayLabel')
            .assert.containsText('@thursdayLabel', 'Thursday')

            .assert.visible('@fridayCheckbox')
            
            .assert.visible('@fridayLabel')
            .assert.containsText('@fridayLabel', 'Friday')

            .assert.visible('@saturdayCheckbox')
            
            .assert.visible('@saturdayLabel')
            .assert.containsText('@saturdayLabel', 'Saturday');

        client.frame(null);

        client.end();
    }
};
