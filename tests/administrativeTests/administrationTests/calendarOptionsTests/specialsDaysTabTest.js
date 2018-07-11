module.exports = {
    tags: ['administrativeTests', 'administrationTests', 'calendarOptionsTests',
        'calendarOptionsSpecialsDaysTabTest'],

    'Calendar Options Specials Days Tab Test': (client) => {

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
            .click('@administrationCalendarOptions')
        client.frame(null);

        client.frame(2);
        client.page.administrative.administration.calendarOptions
            .categoriesTab()

            .waitForElementVisible('@specialsDaysTab', 5000)
            .click('@specialsDaysTab');

        client.page.administrative.administration.calendarOptions
            .specialsDaysTab()

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Calendar Specials Days')

            .activeTab('Specials Days')

            .assert.visible('@categoriesTab')
            .assert.containsText('@categoriesTab', 'Categories')

            .assert.visible('@importsTab')
            .assert.containsText('@importsTab', 'Imports')

            .assert.visible('@daysOfWeekTab')
            .assert.containsText('@daysOfWeekTab', 'Days of Week')

            .assert.visible('@addDateBtn')
            .assert.attributeEquals('@addDateBtn', 'value', 'Add Date')
            .assert.attributeEquals('@addDateBtn', 'onclick', 'viewdate()')

            .assert.visible('@dateHeader')
            .assert.containsText('@dateHeader', 'Date')

            .assert.visible('@shortHeader')
            .assert.containsText('@shortHeader', 'Short')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

        client.frame(null)

        client.end();
    }
};
