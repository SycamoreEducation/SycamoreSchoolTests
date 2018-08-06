module.exports = {
    tags: ['academicTests', 'academicCurriculumMgrTests', 
        'academicCurriculumMgrByGradeTest'],

    'Academic Curriculum Mgr By Grade Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@curriculumMgr')
            .click('@curriculumMgr')
            .assert.visible('@curriculumMgrByGrade')
            .click('@curriculumMgrByGrade');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.curriculumMgr.byGrade()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Curriculum Mgr/ By Grade')

            .activeTab('By Grade')

            .assert.visible('@bySubjectTab')
            .assert.containsText('@bySubjectTab', 'By Subject')
            
            .assert.visible('@gradeLabel')
            .assert.containsText('@gradeLabel', 'Grade')

            .assert.visible('@gradeSelect')
            .assert.attributeEquals('@gradeSelect', 'onchange', 
                'ChangeGrade()')

            .assert.visible('@codeHeader')
            .assert.containsText('@codeHeader', 'Code')

            .assert.visible('@courseNameHeader')
            .assert.containsText('@courseNameHeader', 'Course Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@assignmentCountHeader')
            .assert.containsText('@assignmentCountHeader', 'Assignment Count');

        client.frame(null);

        client.end();
    }
};
