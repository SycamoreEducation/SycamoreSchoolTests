module.exports = {
    tags: ['communicationTests', 'communicationReportsTests',
        'communicationReportsCommonTest'],

    'Communication Reports Common Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@communication')
            .click('@communication')
            .assert.visible('@communicationReports')
            .click('@communicationReports');
        client.frame(null);

        client.frame(2);
        client.page.communication.reports()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Communication/ Reports')

            .activeTab('Common')

            .assert.visible('@customTab')
            .assert.containsText('@customTab', 'Custom')

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
