var moment = require('moment');

module.exports = {
    tags: ['academicTests', 'academicTranscriptMgrTests', 
        'academicTranscriptMgrConfigurationTest'],

    'Academic Transcript Mgr Configuration Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@transcriptMgr')
            .click('@transcriptMgr')
            .assert.visible('@transcriptMgrConfiguration')
            .click('@transcriptMgrConfiguration');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.transcriptMgr.configuration()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Transcript Mgr/ Configuration')

            .activeTab('General')

            .assert.visible('@updateBtn')
            .assert.attributeEquals('@updateBtn', 'value', 'Update')

            .assert.visible('@processingOptionsHeader')
            .assert.containsText('@processingOptionsHeader',
                '* Processing Options')
            
            .assert.visible('@classesLabel')
            .assert.containsText('@classesLabel', 'Full Year Classes')

            .assert.visible('@classesSelect')
            .assert.containsText('@classesSelect', 'One entry on transcript')
            
            .assert.visible('@transferGradeLabel')
            .assert.containsText('@transferGradeLabel', 'Transfer Grade')

            .assert.visible('@transferGradeSelect')
            .assert.containsText('@transferGradeSelect', 'Posted i.e. 92')

            .assert.visible('@transferGradeText')
            .assert.containsText('@transferGradeText', '(Select which grade' +
                ' will be used to calculate the semester grade.)')

            .assert.visible('@weightedLabel')
            .assert.containsText('@weightedLabel', 'Weighted')

            .assert.visible('@weightedCheckbox')

            .assert.visible('@weightedText')
            .assert.containsText('@weightedText', 'Transcript Configuration ' + 
                '- Weighted')

            .assert.visible('@displayOptionsHeader')
            .assert.containsText('@displayOptionsHeader', '* Display Options')

            .assert.visible('@noteLabel')
            .assert.containsText('@noteLabel', 'General Note')

            .assert.visible('@noteInput')

            .assert.visible('@generalOptionsHeader')
            .assert.containsText('@generalOptionsHeader', '* Options below are' +
                ' not valid with Custom Transcripts')

            .assert.visible('@fontSizeLabel')
            .assert.containsText('@fontSizeLabel', 'Font Size')

            .assert.visible('@fontSizeSelect')
            .assert.containsText('@fontSizeSelect', '2 pt')

            .assert.visible('@fontFamilyLabel')
            .assert.containsText('@fontFamilyLabel', 'Font Family')

            .assert.visible('@fontFamilySelect')
            .assert.containsText('@fontFamilySelect', 'Helvetica')

            .assert.visible('@gradeDisplayLabel')
            .assert.containsText('@gradeDisplayLabel', 'Grade Display')

            .assert.visible('@gradeDisplaySelect')
            .assert.containsText('@gradeDisplaySelect', 'Both Number & Letter' +
                ' Grades')

            .assert.visible('@courseCodeLabel')
            .assert.containsText('@courseCodeLabel', 'Course Code')

            .assert.visible('@courseCodeCheckbox')            

            .assert.visible('@classRankingLabel')
            .assert.containsText('@classRankingLabel', 'Class Ranking')

            .assert.visible('@classRankingCheckbox')

            .assert.visible('@gradeYearsLabel')
            .assert.containsText('@gradeYearsLabel', 'Grade Years')

            .assert.visible('@gradeYearsCheckbox')

            .assert.visible('@GPALabel')
            .assert.containsText('@GPALabel', 'GPA')

            .assert.visible('@GPACheckbox')

            .assert.visible('@GPAScaleLabel')
            .assert.containsText('@GPAScaleLabel', 'GPA Scale')

            .assert.visible('@GPAScaleCheckbox')

            .assert.visible('@SATScoresLabel')
            .assert.containsText('@SATScoresLabel', 'SAT Scores')

            .assert.visible('@SATScoresCheckbox')

            .assert.visible('@ACTScoresLabel')
            .assert.containsText('@ACTScoresLabel', 'ACT Scores')

            .assert.visible('@ACTScoresCheckbox')

            .assert.visible('@customScoresLabel')
            .assert.containsText('@customScoresLabel', 'Custom Scores')

            .assert.visible('@customScoresCheckbox')

            .assert.visible('@numericAverageLabel')
            .assert.containsText('@numericAverageLabel', 'Numeric Average')

            .assert.visible('@numericAverageCheckbox')

            .assert.visible('@workInProgressLabel')
            .assert.containsText('@workInProgressLabel', 'Work in Progress')
            
            .assert.visible('@workInProgressCheckbox')

            .assert.visible('@signatureLabel')
            .assert.containsText('@signatureLabel', 'Signature')

            .assert.visible('@signatureCheckbox')

            .assert.visible('@officialLabel')
            .assert.containsText('@officialLabel', 'Require Official')

            .assert.visible('@officialCheckbox')

            .assert.visible('@formatLabel')
            .assert.containsText('@formatLabel', 'Default Format')

            .assert.visible('@templateARadio')

            .assert.visible('@templateBRadio')

            .assert.visible('@templateAImage')
            .assert.attributeEquals('@templateAImage', 'src', page.url() + 
                '/images/tc1.jpg')

            .assert.visible('@templateBImage')
            .assert.attributeEquals('@templateBImage', 'src', page.url() +
                '/images/tc2.jpg')

            .assert.visible('@templateALabel')
            .assert.containsText('@templateALabel', 'Template A')

            .assert.visible('@templateBLabel')
            .assert.containsText('@templateBLabel', 'Template B')

        client.frame(null);

        client.end();
    }
};
