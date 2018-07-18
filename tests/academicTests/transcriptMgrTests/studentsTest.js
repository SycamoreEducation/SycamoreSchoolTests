var moment = require('moment');

module.exports = {
    tags: ['academicTests', 'academicTranscriptMgrTests', 
        'academicTranscriptMgrStudentsTest'],

    'Academic Transcript Mgr Students Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@transcriptMgr')
            .click('@transcriptMgr')
            .assert.visible('@transcriptMgrStudents')
            .click('@transcriptMgrStudents');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.transcriptMgr.students()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Grade Mgr/ Transcripts')

            .activeTab('Students')

            .assert.visible('@searchField')
            .assert.attributeEquals('@searchField', 'placeholder', 'Search...')

            .assert.visible('@searchBtn')
            
            .assert.visible('@generateBtn')
            .assert.containsText('@generateBtn', 'Generate')

            .assert.visible('@dropDownBtn')

            .assert.visible('@graduationYearSelect')
            .assert.containsText('@graduationYearSelect', 
                moment().format('YYYY'))

            .assert.visible('@gradeSelect')
            .assert.containsText('@gradeSelect', 'Select Current Grade')

            .assert.visible('@homeroomSelect')
            .assert.containsText('@homeroomSelect', 'Select Homeroom Class')

            .assert.visible('@statusSelect')
            .assert.containsText('@statusSelect', 'Select Status')

            .assert.visible('@typeSelect')
            .assert.containsText('@typeSelect', 'All Types')

            .assert.visible('@templateSelect')
            .assert.containsText('@templateSelect', 'Select Template')

            .assert.visible('@all')
            .assert.containsText('@all', 'ALL')

            .assert.visible('@a')
            .assert.containsText('@a', 'A')

            .assert.visible('@b')
            .assert.containsText('@b', 'B')

            .assert.visible('@c')
            .assert.containsText('@c', 'C')

            .assert.visible('@d')
            .assert.containsText('@d', 'D')

            .assert.visible('@e')
            .assert.containsText('@e', 'E')

            .assert.visible('@f')
            .assert.containsText('@f', 'F')

            .assert.visible('@g')
            .assert.containsText('@g', 'G')

            .assert.visible('@h')
            .assert.containsText('@h', 'H')

            .assert.visible('@i')
            .assert.containsText('@i', 'I')

            .assert.visible('@j')
            .assert.containsText('@j', 'J')

            .assert.visible('@k')
            .assert.containsText('@k', 'K')

            .assert.visible('@l')
            .assert.containsText('@l', 'L')

            .assert.visible('@m')
            .assert.containsText('@m', 'M')

            .assert.visible('@n')
            .assert.containsText('@n', 'N')

            .assert.visible('@o')
            .assert.containsText('@o', 'O')

            .assert.visible('@p')
            .assert.containsText('@p', 'P')

            .assert.visible('@q')
            .assert.containsText('@q', 'Q')

            .assert.visible('@r')
            .assert.containsText('@r', 'R')

            .assert.visible('@s')
            .assert.containsText('@s', 'S')

            .assert.visible('@t')
            .assert.containsText('@t', 'T')

            .assert.visible('@u')
            .assert.containsText('@u', 'U')

            .assert.visible('@v')
            .assert.containsText('@v', 'V')

            .assert.visible('@w')
            .assert.containsText('@w', 'W')

            .assert.visible('@x')
            .assert.containsText('@x', 'X')

            .assert.visible('@y')
            .assert.containsText('@y', 'Y')

            .assert.visible('@z')
            .assert.containsText('@z', 'Z')

            .assert.visible('@checkboxHeader')
            .assert.attributeEquals('@checkboxHeader', 'onclick', 
                'SetChecked(); return false;')

            .assert.visible('@codeHeader')
            .assert.containsText('@codeHeader', 'Code')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@gradYearHeader')
            .assert.containsText('@gradYearHeader', 'Grad Year')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', 'Numeric')

            .assert.visible('@gpaHeader')
            .assert.containsText('@gpaHeader', 'GPA')

            .assert.visible('@rankingHeader')
            .assert.containsText('@rankingHeader', 'Ranking');

        client.frame(null);

        client.end();
    }
};
