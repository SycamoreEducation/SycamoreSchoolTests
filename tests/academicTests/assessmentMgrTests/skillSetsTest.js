module.exports = {
    tags: ['academicTests', 'academicAssessmentMgrTests', 
        'academicAssessmentMgrSkillSetsTest'],

    'Academic Assessment Mgr Skill Sets Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@assessmentMgr')
            .click('@assessmentMgr')
            .assert.visible('@assessmentMgrSkillSets')
            .click('@assessmentMgrSkillSets');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.assessmentMgr.skillSets()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Assessment Mgr/ Skill Sets')

            .activeTab('Skills')

            .assert.visible('@subjectsBtn')
            .assert.attributeEquals('@subjectsBtn', 'value', 'Subjects')
            .assert.attributeEquals('@subjectsBtn', 'onclick', 'subjects()')

            .assert.visible('@newSkillBtn')
            .assert.attributeEquals('@newSkillBtn', 'value', 'New Skill')
            .assert.attributeEquals('@newSkillBtn', 'onclick', 'addskill()')

            .assert.visible('@gradeSelect')
            .assert.containsText('@gradeSelect', 'Select Grade')
            .assert.attributeEquals('@gradeSelect', 'onchange', 'changeGrade()')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description');

        client.frame(null);

        client.end();
    }
};
