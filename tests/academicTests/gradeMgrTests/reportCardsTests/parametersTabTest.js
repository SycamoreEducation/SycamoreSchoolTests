module.exports = {
    tags: ['academicTests', 'academicGradeMgrTests', 
        'academicGradeMgrReportCardsTests', 'reportCardsParametersTabTest'],

    'Academic Grade Mgr Report Cards Parameters Tab Test': (client) => {

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
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Grade Mgr/ Report Cards')

            .activeTab('Parameters')

            .assert.visible('@studentsTab')
            .assert.containsText('@studentsTab', 'Students')

            .assert.visible('@generateBtn')
            .assert.attributeEquals('@generateBtn', 'value', ' Generate ')
            
            .assert.visible('@quarterLabel')
            .assert.containsText('@quarterLabel', 'Quarter')

            .assert.visible('@quarterSelect')
            .assert.containsText('@quarterSelect', '4')
            .assert.attributeEquals('@quarterSelect', 'onchange', 
                'changecode()')

            .assert.visible('@gradeLabel')
            .assert.containsText('@gradeLabel', 'Grade')

            .assert.visible('@gradeInput')

            .assert.visible('@formatLabel')
            .assert.containsText('@formatLabel', 'Format')

            .assert.visible('@formatSelect')
            .assert.containsText('@formatSelect', 'Select Format')
            .assert.attributeEquals('@formatSelect', 'onchange', 'doFormat()')

            .assert.visible('@label1Label')
            .assert.containsText('@label1Label', 'Label 1')

            .assert.visible('@label1Input')

            .assert.visible('@label2Label')
            .assert.containsText('@label2Label', 'Label 2')

            .assert.visible('@label2Input')

            .assert.visible('@memoLabel')
            .assert.containsText('@memoLabel', 'Memo')

            .assert.visible('@memoTextArea')
            .assert.attributeEquals('@memoTextArea', 'onkeydown', 
                'limitText(this.form.gcnotes,this.form.countdown,64);')

            .assert.visible('@memoTextCounter')
            .assert.attributeEquals('@memoTextCounter', 'value', '64')

            .assert.visible('@academicOptionsHeader')
            .assert.containsText('@academicOptionsHeader', 'Academic Options')

            .assert.visible('@displayLabel')
            .assert.containsText('@displayLabel', 'Display')

            .assert.visible('@displaySelect')
            .assert.containsText('@displaySelect', 'Numeric Grades')

            .assert.visible('@quarterGradesCheckbox')
            
            .assert.visible('@quarterGradesLabel')
            .assert.containsText('@quarterGradesLabel', 
                'Display Quarter Grades')

            .assert.visible('@semesterGradesCheckbox')

            .assert.visible('@semesterGradesLabel')
            .assert.containsText('@semesterGradesLabel', 
                'Display Semester Grades')

            .assert.visible('@semesterFinalCheckbox')

            .assert.visible('@semesterFinalLabel')
            .assert.containsText('@semesterFinalLabel', 
                'Display Semester Final Exam')

            .assert.visible('@yearlyAverageCheckbox')

            .assert.visible('@yearlyAverageLabel')
            .assert.containsText('@yearlyAverageLabel', 
                'Display Yearly Average')

            .assert.visible('@finalGradeCheckbox')

            .assert.visible('@finalGradeLabel')
            .assert.containsText('@finalGradeLabel', 'Use Final Grade GPA')

            .assert.visible('@fontSizeLabel')
            .assert.containsText('@fontSizeLabel', 'Font Size')

            .assert.visible('@fontSizeSelect')
            .assert.containsText('@fontSizeSelect', '6')
            
            .assert.visible('@fontFamilyLabel')
            .assert.containsText('@fontFamilyLabel', 'Font Family')

            .assert.visible('@fontFamilySelect')
            .assert.containsText('@fontFamilySelect', 'Helvetica')

            .assert.visible('@archivingOptionsHeader')
            .assert.containsText('@archivingOptionsHeader', 'Archiving Options')

            .assert.visible('@versionMgtBtn')
            .assert.attributeEquals('@versionMgtBtn', 'value', ' Version Mgt ')
            .assert.attributeEquals('@versionMgtBtn', 'onclick', 'doVersions()')

            .assert.visible('@quarterInput')
            .assert.attributeEquals('@quarterInput', 'value', 'Q4')

            .assert.visible('@studentDocumentsCheckbox')

            .assert.visible('@studentDocumentsLabel')
            .assert.containsText('@studentDocumentsLabel', 
                'Post Grade Card to Student Documents')

            .assert.visible('@electronicSignatureCheckbox')

            .assert.visible('@electronicSignatureLabel')
            .assert.containsText('@electronicSignatureLabel', 
                'Require Electronic Signature');

        client.frame(null);

        client.end();
    }
};
