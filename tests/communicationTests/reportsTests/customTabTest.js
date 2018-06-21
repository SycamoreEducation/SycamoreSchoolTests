module.exports = {
    tags: ['communicationTests', 'communicationReportsTests',
        'communicationReportsCustomTest'],

    'Communication Reports Custom Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@communication')
            .click('@communication')
            .assert.visible('@communicationReports')
            .click('@communicationReports')
        client.frame(null);

        client.frame(2);
        client.page.communication.reports()
            .waitForElementVisible('@customTab', 5000)
            .click('@customTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Communication/ Reports')

            .assert.visible('@activeTab')
            .assert.containsText('@activeTab', 'Custom')

            .assert.visible('@commonTab')
            .assert.containsText('@commonTab', 'Common')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

        client.frame(null)

        client.end();
    }
};
