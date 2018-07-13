module.exports = {
    tags: ['academicTests', 'academicGradeMgrTests', 
        'academicGradeMgrGPAScalesTest'],

    'Academic Grade Mgr GPA Scales Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@gradeMgr')
            .click('@gradeMgr')
            .assert.visible('@gradeMgrGpaScales')
            .click('@gradeMgrGpaScales')
        client.frame(null);

        client.frame(2);
        client.pause(100);
        client.page.academic.gradeMgr.gpaScales()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Grade Mgr/ GPA Scales')

            .assert.visible('@updateBtn')
            .assert.containsText('@updateBtn', 'Update')

            .assert.visible('@notationTitle')
            .assert.containsText('@notationTitle', 'Notation')

            .assert.visible('@gradeHeader')
            .assert.containsText('@gradeHeader', 'Grade')

            .assert.visible('@valueHeader')
            .assert.containsText('@valueHeader', 'Value')

            .assert.visible('@aPlusLabel')
            .assert.containsText('@aPlusLabel', 'A +')

            .assert.visible('@aPlusValue')

            .assert.visible('@aLabel')
            .assert.containsText('@aLabel', 'A')

            .assert.visible('@aValue')

            .assert.visible('@aMinusLabel')
            .assert.containsText('@aMinusLabel', 'A -')

            .assert.visible('@aMinusValue')

            .assert.visible('@bPlusLabel')
            .assert.containsText('@bPlusLabel', 'B +')

            .assert.visible('@bPlusValue')

            .assert.visible('@bLabel')
            .assert.containsText('@bLabel', 'B')

            .assert.visible('@bValue')

            .assert.visible('@bMinusLabel')
            .assert.containsText('@bMinusLabel', 'B -')

            .assert.visible('@bMinusValue')

            .assert.visible('@cPlusLabel')
            .assert.containsText('@cPlusLabel', 'C +')

            .assert.visible('@cPlusValue')

            .assert.visible('@cLabel')
            .assert.containsText('@cLabel', 'C')

            .assert.visible('@cValue')

            .assert.visible('@cMinusLabel')
            .assert.containsText('@cMinusLabel', 'C -')

            .assert.visible('@cMinusValue')

            .assert.visible('@dPlusLabel')
            .assert.containsText('@dPlusLabel', 'D +')

            .assert.visible('@dPlusValue')

            .assert.visible('@dLabel')
            .assert.containsText('@dLabel', 'D')

            .assert.visible('@dValue')

            .assert.visible('@dMinusLabel')
            .assert.containsText('@dMinusLabel', 'D -')

            .assert.visible('@dMinusValue')

            .assert.visible('@fPlusLabel')
            .assert.containsText('@fPlusLabel', 'F +')

            .assert.visible('@fPlusValue')

            .assert.visible('@fLabel')
            .assert.containsText('@fLabel', 'F')

            .assert.visible('@fValue')

            .assert.visible('@fMinusLabel')
            .assert.containsText('@fMinusLabel', 'F -')

            .assert.visible('@fMinusValue')

        client.frame(null)

        client.end();
    }
};
