module.exports = {
    tags: ['administrativeTests', 'humanResourcesTests', 
        'humanResourcesReportsTests', 'humanResourcesReportsCustomTabTest'],

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
            .waitForElementVisible('@customTab', 5000)
            .click('@customTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Human Resource/ Reports')

            .activeTab('Custom')

            .assert.visible('@commonTab')
            .assert.containsText('@commonTab', 'Common')

            .assert.visible('@templatesTab')
            .assert.containsText('@templatesTab', 'Templates')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description');

        client.frame(null);

        client.end();
    }
};
