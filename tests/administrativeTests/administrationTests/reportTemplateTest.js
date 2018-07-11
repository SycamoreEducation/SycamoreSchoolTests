module.exports = {
    tags: ['administrativeTests', 'administrationTests', 
        'administrationReportTemplateTest',],

    'Administration Report Template Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@administration')
            .click('@administration')
            .assert.visible('@administrationReportTemplate')
            .click('@administrationReportTemplate')
        client.frame(null);

        client.frame(2);
        client.page.administrative.administration.reportTemplate()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Administration/ Report Template +')

            .activeTab('Templates')

            .assert.visible('@newTemplateBtn')
            .assert.attributeEquals('@newTemplateBtn', 'value', 'New Template')
            .assert.attributeEquals('@newTemplateBtn', 'onclick', 'doNew()')

            .assert.visible('@areaLabel')
            .assert.containsText('@areaLabel', 'Template Area Tag')

            .assert.visible('@areaSelect')
            .assert.containsText('@areaSelect', 'Select Area')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

        client.frame(null)

        client.end();
    }
};
