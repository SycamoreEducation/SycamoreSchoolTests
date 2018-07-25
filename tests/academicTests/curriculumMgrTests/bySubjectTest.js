module.exports = {
    tags: ['academicTests', 'academicCurriculumMgrTests', 
        'academicCurriculumMgrBySubjectTest'],

    'Academic Curriculum Mgr By Subject Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@curriculumMgr')
            .click('@curriculumMgr')
            .assert.visible('@curriculumMgrBySubject')
            .click('@curriculumMgrBySubject');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.curriculumMgr.bySubject()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Curriculum Mgr/ By Subject')

            .activeTab('By Subject')

            .assert.visible('@byGradeTab')
            .assert.containsText('@byGradeTab', 'By Grade')

            .assert.visible('@newCourseBtn')
            .assert.attributeEquals('@newCourseBtn', 'value', 'New Course')
            .assert.attributeEquals('@newCourseBtn', 'onclick', 'addcourse()')
            
            .assert.visible('@subjectLabel')
            .assert.containsText('@subjectLabel', 'Subject')

            .assert.visible('@subjectSelect')
            .assert.attributeEquals('@subjectSelect', 'onchange', 
                'ChangeSubject()')

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
