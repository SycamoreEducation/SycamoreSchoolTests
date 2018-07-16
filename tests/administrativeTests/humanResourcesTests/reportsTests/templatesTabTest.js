module.exports = {
    tags: ['administrativeTests', 'humanResourcesTests', 
        'humanResourcesReportsTests', 'humanResourcesReportsTemplatesTabTest'],

    'Human Resources Reports Common Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@humanReources')
            .click('@humanReources')
            .assert.visible('@humanResourcesReports')
            .click('@humanResourcesReports');
        client.frame(null);

        client.frame(2);
        client.page.administrative.humanResources.reports()
            .waitForElementVisible('@templatesTab', 5000)
            .click('@templatesTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Report Mgr +/ Templates')

            .activeTab('Template')

            .assert.visible('@generateBtn')
            .assert.attributeEquals('@generateBtn', 'value', 'Generate')
            .assert.attributeEquals('@generateBtn', 'onclick', 'dosubmit()')

            .assert.visible('@reportTemplateLabel')
            .assert.containsText('@reportTemplateLabel', 
                'Select Report Template')

            .assert.visible('@reportTemplateSelect')
            .assert.containsText('@reportTemplateSelect', 'Choose Report')

            .assert.visible('@documentsLabel')
            .assert.containsText('@documentsLabel', 
                'Post to Employee Documents')

            .assert.visible('@documentsCheckbox')
            
            .assert.visible('@checkboxHeader')
            .assert.attributeEquals('@checkboxHeader', 'onclick', 
                `setChecked('.setCheckedBox','')`)

            .assert.visible('@lastNameHeader')
            .assert.containsText('@lastNameHeader', 'Last Name')
            
            .assert.visible('@firstNameHeader')
            .assert.containsText('@firstNameHeader', 'First Name')

            .assert.visible('@testCheckbox')

            .assert.visible('@testFirstName')

            .assert.visible('@testLastName');

        client.frame(null);

        client.end();
    }
};
