module.exports = {
    tags: ['academicTests', 'academicGradeMgrTests', 
        'academicGradeMgrGradingScalesTest'],

    'Academic Grade Mgr Grading Scales Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@gradeMgr')
            .click('@gradeMgr')
            .assert.visible('@gradeMgrGradingScales')
            .click('@gradeMgrGradingScales')
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.gradeMgr.gradingScales()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Grade Mgr/ Grading Scales')

            .activeTab('Scales')

            .assert.visible('@newScaleBtn')
            .assert.attributeEquals('@newScaleBtn', 'value', ' New Scale ')
            .assert.attributeEquals('@newScaleBtn', 'onclick', 'addscale()')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@globalHeader')
            .assert.containsText('@globalHeader', 'Global')

            .assert.visible('@roundingHeader')
            .assert.containsText('@roundingHeader', 'Rounding')

        client.frame(null)

        client.end();
    }
};
