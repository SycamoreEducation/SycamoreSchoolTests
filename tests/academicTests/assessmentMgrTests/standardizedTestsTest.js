module.exports = {
    tags: ['academicTests', 'academicAssessmentMgrTests',
        'academicAssessmentMgrStandardizedTests'
    ],

    'Academic Assessment Mgr Standardized Tests': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@assessmentMgr')
            .click('@assessmentMgr')
            .assert.visible('@assessmentMgrStandardizedTests')
            .click('@assessmentMgrStandardizedTests');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.assessmentMgr.standardizedTests()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb',
                'Academic/Assessment Mgr/ Standardized Tests')

            .activeTab('Tests')

            .assert.visible('@newTestBtn')
            .assert.attributeEquals('@newTestBtn', 'value', 'New Test')
            .assert.attributeEquals('@newTestBtn', 'onclick', 'addtest()')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')
            
            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description');

        client.frame(null);

        client.end();
    }
};
