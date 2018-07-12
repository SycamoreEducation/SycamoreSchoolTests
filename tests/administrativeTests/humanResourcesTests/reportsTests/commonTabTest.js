module.exports = {
    tags: ['administrativeTests', 'humanResourcesTests', 
        'humanResourcesReportsTests', 'humanResourcesReportsCommonTabTest'],

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
            .click('@humanResourcesReports')
        client.frame(null);

        client.frame(2);
        client.page.administrative.humanResources.reports()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Human Resource/ Reports')

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

            .assert.visible('@testReportDescription')

        client.frame(null)

        client.end();
    }
};
