module.exports = {
    tags: ['administrativeTests', 'administrationTests', 'reportArchivesTest',],

    'Administration Report Archives Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@administration')
            .click('@administration')
            .assert.visible('@administrationReportArchives')
            .click('@administrationReportArchives')
        client.frame(null);

        client.frame(2);
        client.page.administrative.administration.reportArchives()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Report Archives')

            .activeTab('Reports')

            .assert.visible('@yearSelect')
            .assert.attributeEquals('@yearSelect', 'onchange', 
                'changeyear(this)')
            
            .assert.visible('@dateHeader')
            .assert.containsText('@dateHeader', 'Date')

            .assert.visible('@sizeHeader')
            .assert.containsText('@sizeHeader', 'Size')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

        client.frame(null)

        client.end();
    }
};
