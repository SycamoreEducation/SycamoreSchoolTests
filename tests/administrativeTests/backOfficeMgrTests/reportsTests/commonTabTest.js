module.exports = {
    tags: ['administrativeTests', 'backOfficeMgrTests', 
        'backOfficeReportsTests', 'backOfficeReportsCommonTabTest'],

    'Back Office Reports Common Tab Test': (client) => {

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
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Back Office/ Reports')

            .activeTab('Common')

            .assert.visible('@customTab')
            .assert.containsText('@customTab', 'Custom')

            .assert.visible('@templatesTab')
            .assert.containsText('@templatesTab', 'Templates')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@testReportName')

            .assert.visible('@testReportDescription');

        client.frame(null);

        client.end();
    }
};
