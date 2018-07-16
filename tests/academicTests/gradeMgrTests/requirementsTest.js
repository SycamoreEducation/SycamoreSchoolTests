module.exports = {
    tags: ['academicTests', 'academicGradeMgrTests', 
        'academicGradeMgrRequirementsTest'],

    'Academic Grade Mgr Requirements Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@gradeMgr')
            .click('@gradeMgr')
            .assert.visible('@gradeMgrRequirements')
            .click('@gradeMgrRequirements');
        client.frame(null);

        client.frame(2);
        client.page.academic.gradeMgr.requirements()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Grade Mgr/ Requirements')

            .activeTab('Requirements')

            .assert.visible('@sectionsBtn')
            .assert.attributeEquals('@sectionsBtn', 'value', 'Sections')
            .assert.attributeEquals('@sectionsBtn', 'onclick', 'viewsections()')

            .assert.visible('@newRequirementBtn')
            .assert.attributeEquals('@newRequirementBtn', 'value', 
                'New Requirement')
            .assert.attributeEquals('@newRequirementBtn', 'onclick', 
                'viewrequirement(0)')

            .assert.visible('@codeHeader')
            .assert.containsText('@codeHeader', 'Code')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@creditsHeader')
            .assert.containsText('@creditsHeader', 'Credits');

        client.frame(null);

        client.end();
    }
};
