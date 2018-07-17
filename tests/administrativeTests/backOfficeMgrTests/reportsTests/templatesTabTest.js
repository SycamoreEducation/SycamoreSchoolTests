module.exports = {
    tags: ['administrativeTests', 'backOfficeMgrTests', 
        'backOfficeReportsTests', 'backOfficeReportsTemplatesTabTest'],

    'Back Office Reports Templates Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@backOfficeMgr')
            .click('@backOfficeMgr')
            .assert.visible('@backOfficeReports')
            .click('@backOfficeReports');
        client.frame(null);

        client.frame(2);
        client.page.administrative.backOfficeMgr.reports()
            .waitForElementVisible('@templatesTab', 5000)
            .click('@templatesTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Report Mgr +/ Templates')

            .activeTab('Template')

            .assert.visible('@commonTab')
            .assert.containsText('@commonTab', 'Common')

            .assert.visible('@customTab')
            .assert.containsText('@customTab', 'Custom')

            .assert.visible('@generateBtn')
            .assert.attributeEquals('@generateBtn', 'value', 'Generate')
            .assert.attributeEquals('@generateBtn', 'onclick', 'dosubmit()')

            .assert.visible('@studentTypeLabel')
            .assert.containsText('@studentTypeLabel', 'Student Type')

            .assert.visible('@studentTypeSelect')
            .assert.containsText('@studentTypeSelect', 'All Types')
            .assert.attributeEquals('@studentTypeSelect', 'onchange', 
                'doRefresh()')

            .assert.visible('@gradeLabel')
            .assert.containsText('@gradeLabel', 'Grade')

            .assert.visible('@gradeSelect')
            .assert.containsText('@gradeSelect', 'Select Grade')
            .assert.attributeEquals('@gradeSelect', 'onchange', 'doRefresh()')

            .assert.visible('@gradeCaption')
            .assert.containsText('@gradeCaption', 
                'Selecting nothing will choose all grades')

            .assert.visible('@reportTemplateLabel')
            .assert.containsText('@reportTemplateLabel', 
                'Select Report Template')

            .assert.visible('@reportTemplateSelect')
            .assert.containsText('@reportTemplateSelect', 'Choose Report')

            .assert.visible('@studentDocumentsLabel')
            .assert.containsText('@studentDocumentsLabel', 
                'Post to Student Documents')

            .assert.visible('@studentDocumentsCheckbox')
            .assert.attributeEquals('@studentDocumentsCheckbox', 'type', 
                'checkbox')

            .assert.visible('@checkmarkHeader')
            .assert.attributeEquals('@checkmarkHeader', 'src', 
                page.url() + '/images/check_mark.gif')

            .assert.visible('@studentCodeLabel')
            .assert.containsText('@studentCodeLabel', 'Student Code')

            .assert.visible('@studentNameLabel')
            .assert.containsText('@studentNameLabel', 'Student Name')

            .assert.visible('@testStudentCheckbox')

            .assert.visible('@testStudentCode')

            .assert.visible('@testStudentName');

        client.frame(null);

        client.end();
    }
};
