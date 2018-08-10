module.exports = {
    tags: ['academicTests', 'academicAssessmentMgrTests', 
        'academicAssessmentMgrAchievementsTest'],

    'Academic Assessment Mgr Achievements Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@assessmentMgr')
            .click('@assessmentMgr')
            .assert.visible('@assessmentMgrAchievements')
            .click('@assessmentMgrAchievements');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.assessmentMgr.achievements()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Assessment Mgr/ Achievements')

            .activeTab(client.globals.YEAR_START + '-' + 
                client.globals.YEAR_END)

            .assert.visible('@newAchievementBtn')
            .assert.attributeEquals('@newAchievementBtn', 'value',
                'New Achievement')
            .assert.attributeEquals('@newAchievementBtn', 'onclick',
                'newachievement()')

            .assert.visible('@schoolYearLabel')
            .assert.containsText('@schoolYearLabel', 'School Year')

            .assert.visible('@schoolYearSelect')
            .assert.containsText('@schoolYearSelect', '2017-2018')
            .assert.attributeEquals('@schoolYearSelect', 'onchange',
                'DoRefresh()')

            .assert.visible('@titleHeader')
            .assert.containsText('@titleHeader', 'Title')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@schoolAvgHeader')
            .assert.containsText('@schoolAvgHeader', 'School Avg')

            .assert.visible('@nationalAvgHeader')
            .assert.containsText('@nationalAvgHeader', 'National Avg')

            .assert.visible('@countHeader')
            .assert.containsText('@countHeader', 'Count');

        client.frame(null);

        client.end();
    }
};
