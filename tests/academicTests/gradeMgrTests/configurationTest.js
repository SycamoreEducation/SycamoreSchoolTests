module.exports = {
    tags: ['academicTests', 'academicGradeMgrTests', 
        'academicGradeMgrConfigurationTest'],

    'Academic Grade Mgr Configuration Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@gradeMgr')
            .click('@gradeMgr')
            .assert.visible('@gradeMgrConfiguration')
            .click('@gradeMgrConfiguration');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.gradeMgr.configuration()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Grade Mgr/ Configuration')

            .activeTab('Grade Options')

            .assert.visible('@updateBtn')
            .assert.attributeEquals('@updateBtn', 'value', 'Update')
            
            .assert.visible('@attributeGradingHeader')
            .assert.containsText('@attributeGradingHeader', 'Attribute Grading')

            .assert.visible('@departmentDrivenCheckbox')
            
            .assert.visible('@departmentDrivenLabel')
            .assert.containsText('@departmentDrivenLabel', 'Department Driven' +
                '  - Ties Attribute Groups to Departments, allowing filtering' +
                ' at classroom level')

            .assert.visible('@gradeLockingHeader')
            .assert.containsText('@gradeLockingHeader', 'Class Grade Locking ' +
                '- (stops teachers from posting grades)')

            .assert.visible('@lockedHeader')
            .assert.containsText('@lockedHeader', 'Locked')

            .assert.visible('@q1Checkbox')
            
            .assert.visible('@q1Label')
            .assert.containsText('@q1Label', 'Q1')

            .assert.visible('@q2Checkbox')
            
            .assert.visible('@q2Label')
            .assert.containsText('@q2Label', 'Q2')

            .assert.visible('@q3Checkbox')
            
            .assert.visible('@q3Label')
            .assert.containsText('@q3Label', 'Q3')

            .assert.visible('@q1Checkbox')
            
            .assert.visible('@q4Label')
            .assert.containsText('@q4Label', 'Q4')

            .assert.visible('@gradeRoundingHeader')
            .assert.containsText('@gradeRoundingHeader', 'Grade Rounding')

            .assert.visible('@numericLabel')
            .assert.containsText('@numericLabel', 'Numeric')

            .assert.visible('@numericSelect')
            .assert.containsText('@numericSelect', '92.34')

            .assert.visible('@numericInfo')
            .assert.containsText('@numericInfo', '(All displayed numeric ' +
                'grades will be rounded to this decimal place.)')

            .assert.visible('@gpaLabel')
            .assert.containsText('@gpaLabel', 'GPA')

            .assert.visible('@gpaSelect')
            .assert.containsText('@gpaSelect', '3.2143')

            .assert.visible('@gpaInfo')
            .assert.containsText('@gpaInfo', '(All displayed GPAs will be ' +
                'rounded to this decimal place.)');

        client.frame(null);

        client.end();
    }
};
