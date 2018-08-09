module.exports = {
    tags: ['academicTests', 'academicAssessmentMgrTests', 
        'academicAssessmentMgrAssessmentsTest'],

    'Academic Assessment Mgr Assessments Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@assessmentMgr')
            .click('@assessmentMgr')
            .assert.visible('@assessmentMgrAssessments')
            .click('@assessmentMgrAssessments');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.assessmentMgr.assessments()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Assessment Mgr/ Assessments')

            .activeTab('Configuration')

            .assert.visible('@configurationBtn')
            .assert.attributeEquals('@configurationBtn', 'value',
                'Configuration')
            .assert.attributeEquals('@configurationBtn', 'onclick',
                'doconfig()')

            .assert.visible('@updateBtn')
            .assert.attributeEquals('@updateBtn', 'value', ' Update ')
            .assert.attributeEquals('@updateBtn', 'onclick', 'doUpdate()')

            .assert.visible('@schoolYearLabel')
            .assert.containsText('@schoolYearLabel', 'School Year')

            .assert.visible('@schoolYearSelect')
            .assert.attributeEquals('@schoolYearSelect', 'onchange',
                'newinfo()')
            
            .assert.visible('@gradeLabel')
            .assert.containsText('@gradeLabel', 'Grade')

            .assert.visible('@gradeSelect')
            .assert.containsText('@gradeSelect', 'Select Grade')
            .assert.attributeEquals('@gradeSelect', 'onchange', 'newinfo()')

            .assert.visible('@subjectsHeader')
            .assert.containsText('@subjectsHeader', 'Subjects')

            .assert.visible('@nationalAveragesHeader')
            .assert.containsText('@nationalAveragesHeader', 'National Averages')

            .assert.visible('@localAveragesHeader')
            .assert.containsText('@localAveragesHeader', 'Local Averages')

            .assert.visible('@possibleHeader')
            .assert.containsText('@possibleHeader', 'Possible');

        client.frame(null);

        client.end();
    }
};
