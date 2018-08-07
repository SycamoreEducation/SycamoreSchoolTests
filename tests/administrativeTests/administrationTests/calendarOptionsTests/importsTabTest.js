module.exports = {
    tags: ['administrativeTests', 'administrationTests', 'calendarOptionsTests',
        'calendarOptionsImportsTabTest'],

    'Calendar Options Imports Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@administration')
            .click('@administration')
            .assert.visible('@administrationCalendarOptions')
            .click('@administrationCalendarOptions');
        client.frame(null);

        client.frame(2);
        client.page.administrative.administration.calendarOptions
            .categoriesTab()

            .waitForElementVisible('@importsTab', 5000)
            .click('@importsTab');

        client.page.administrative.administration.calendarOptions.importsTab()

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Administration/ Calendar Options')

            .activeTab('Imports')

            .assert.visible('@categoriesTab')
            .assert.containsText('@categoriesTab', 'Categories')

            .assert.visible('@daysOfWeekTab')
            .assert.containsText('@daysOfWeekTab', 'Days of Week')

            .assert.visible('@specialsDaysTab')
            .assert.containsText('@specialsDaysTab', 'Specials Days')

            .assert.visible('@addImportBtn')
            .assert.attributeEquals('@addImportBtn', 'value', 'Add Import')
            .assert.attributeEquals('@addImportBtn', 'onclick', 'addimport()')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@urlHeader')
            .assert.containsText('@urlHeader', 'URL')

            .assert.visible('@updatedHeader')
            .assert.containsText('@updatedHeader', 'Updated')

            .assert.visible('@eventsHeader')
            .assert.containsText('@eventsHeader', 'Events');

        client.frame(null);

        client.end();
    }
};
