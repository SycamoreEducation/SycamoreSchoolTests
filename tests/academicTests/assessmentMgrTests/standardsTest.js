module.exports = {
    tags: ['academicTests', 'academicAssessmentMgrTests', 
        'academicAssessmentMgrStandardsTest'],

    'Academic Assessment Mgr Standards Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@assessmentMgr')
            .click('@assessmentMgr')
            .assert.visible('@assessmentMgrStandards')
            .click('@assessmentMgrStandards');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.assessmentMgr.standards()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Assessment Mgr/ Standards')

            .activeTab('Standards')

            .assert.visible('@subjectsBtn')
            .assert.attributeEquals('@subjectsBtn', 'value', 'Subjects')
            .assert.attributeEquals('@subjectsBtn', 'onclick', 'subjects()')

            .assert.visible('@newStandardBtn')
            .assert.attributeEquals('@newStandardBtn', 'value', 'New Standard')
            .assert.attributeEquals('@newStandardBtn', 'onclick', 
                'newstandard()')
            
            .assert.visible('@importCommonCoreBtn')
            .assert.attributeEquals('@importCommonCoreBtn', 'value', 
                'Import Common Core')
            .assert.attributeEquals('@importCommonCoreBtn', 'onclick', 
                'importccstandards()')

            .assert.visible('@gradeSelect')
            .assert.containsText('@gradeSelect', 'Select Grade')
            .assert.attributeEquals('@gradeSelect', 'onchange', 'changeGrade()')

            .assert.visible('@sectionHeader')
            .assert.containsText('@sectionHeader', 'Section')

            .assert.visible('@categoryHeader')
            .assert.containsText('@categoryHeader', 'Category')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description');

        client.frame(null);

        client.end();
    }
};
