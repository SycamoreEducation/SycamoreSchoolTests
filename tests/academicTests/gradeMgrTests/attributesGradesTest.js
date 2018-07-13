module.exports = {
    tags: ['academicTests', 'academicGradeMgrTests', 
        'academicGradeMgrAttributesGradesTest'],

    'Academic Grade Mgr Attributes Grades Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@gradeMgr')
            .click('@gradeMgr')
            .assert.visible('@gradeMgrAttributesGrades')
            .click('@gradeMgrAttributesGrades')
        client.frame(null);

        client.frame(2);
        client.pause(100);
        client.page.academic.gradeMgr.attributesGrades()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Grade Mgr/ Attribute Grades')

            .assert.visible('@keysBtn')
            .assert.attributeEquals('@keysBtn', 'value', ' Keys ')
            .assert.attributeEquals('@keysBtn', 'onclick', 'scores()')

            .assert.visible('@groupsBtn')
            .assert.attributeEquals('@groupsBtn', 'value', 'Groups')
            .assert.attributeEquals('@groupsBtn', 'onclick', 'groups()')
            
            .assert.visible('@newAttributeBtn')
            .assert.attributeEquals('@newAttributeBtn', 'value', 
                'New Attribute')
            .assert.attributeEquals('@newAttributeBtn', 'onclick', 'addhabit()')

            .assert.visible('@gradeSelect')
            .assert.containsText('@gradeSelect', 'Select Grade')

            .assert.visible('@copyGradeSelect')
            .assert.containsText('@copyGradeSelect', 'Select Grade')

            .assert.visible('@copyBtn')
            .assert.attributeEquals('@copyBtn', 'value', 'Copy')
            .assert.attributeEquals('@copyBtn', 'type', 'submit')

            .assert.visible('@deleteBtn')
            .assert.attributeEquals('@deleteBtn', 'value', 'Delete')
            .assert.attributeEquals('@deleteBtn', 'onclick', 'doDelete()')

            .assert.visible('@checkboxHeader')
            .assert.attributeEquals('@checkboxHeader', 'onclick', 
                'SetChecked(); return false;')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@attributesHeader')
            .assert.containsText('@attributesHeader', 'Attributes')

        client.frame(null)

        client.end();
    }
};
