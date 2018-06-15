module.exports = {
    tags: ['addressBookTests', 'addressBookReportsTests', 
        'reportsCommonTabTest'],

    'Address Book Reports Common Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@addressBook')
            .click('@addressBook')
            .assert.visible('@addressBookReports')
            .click('@addressBookReports')
        client.frame(null);

        client.frame(2);
        client.page.addressBook.reports.reports()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Address Book/ Reports')
            
            .assert.visible('@commonTab')
            .assert.containsText('@commonTab', 'Common')

            .assert.visible('@customTab')
            .assert.containsText('@customTab', 'Custom')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@reportName')
            
            .assert.visible('@reportDescription')

        client.frame(null)

        client.end();
    }
};
