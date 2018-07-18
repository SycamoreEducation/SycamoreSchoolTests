module.exports = {
    tags: ['academicTests', 'academicGradeMgrTests', 
        'academicGradeMgrReportCardsTests', 'reportCardsStudentsTabTest'],

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
            .assert.visible('@gradeMgrReportCards')
            .click('@gradeMgrReportCards');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.gradeMgr.reportCards.parametersTab()
            .waitForElementVisible('@studentsTab', 5000)
            .click('@studentsTab');

        client.page.academic.gradeMgr.reportCards.studentsTab()

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Grade Mgr/ Report Cards')

            .assert.visible('@parametersTab')
            .assert.containsText('@parametersTab', 'Parameters')

            .assert.visible('@studentsTab')
            .assert.containsText('@studentsTab', 'Students')
            .assert.cssClassPresent('@studentsTab', 'active')

            .assert.visible('@generateBtn')
            .assert.attributeEquals('@generateBtn', 'value', ' Generate ')

            .assert.visible('@gradeLabel')
            .assert.containsText('@gradeLabel', 'Grade')

            .assert.visible('@gradeSelect')
            .assert.containsText('@gradeSelect', 'Select Grade')
            .assert.attributeEquals('@gradeSelect', 'onchange', 
                'updateStudents(0)()')

            .assert.visible('@homeRoomLabel')
            .assert.containsText('@homeRoomLabel', 'or Home Room')

            .assert.visible('@homeRoomSelect')
            .assert.containsText('@homeRoomSelect', 'Select Homeroom Class')
            .assert.attributeEquals('@homeRoomSelect', 'onchange', 
                'updateStudents(1)')
            
            .assert.visible('@checkboxHeader')
            .assert.attributeEquals('@checkboxHeader', 'onclick', 
                'SetChecked();return false;')

            .assert.visible('@lastNameHeader')
            .assert.containsText('@lastNameHeader', 'Lastname')

            .assert.visible('@firstNameHeader')
            .assert.containsText('@firstNameHeader', 'Firstname')

            .assert.visible('@teacherHeader')
            .assert.containsText('@teacherHeader', 'Teacher');

        client.frame(null);

        client.end();
    }
};
