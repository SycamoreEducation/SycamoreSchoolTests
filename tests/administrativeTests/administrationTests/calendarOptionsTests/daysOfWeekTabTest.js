module.exports = {
    tags: ['administrativeTests', 'administrationTests', 'calendarOptionsTests',
        'calendarOptionsDaysOfWeekTabTest'],

    'Calendar Options Days of Week Tab Test': (client) => {

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

            .waitForElementVisible('@daysOfWeekTab', 5000)
            .click('@daysOfWeekTab');

        client.page.administrative.administration.calendarOptions
            .daysOfWeekTab()

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Administration/ Calendar Options')

            .activeTab('Days of Week')

            .assert.visible('@categoriesTab')
            .assert.containsText('@categoriesTab', 'Categories')

            .assert.visible('@importsTab')
            .assert.containsText('@importsTab', 'Imports')

            .assert.visible('@specialsDaysTab')
            .assert.containsText('@specialsDaysTab', 'Specials Days')

            .assert.visible('@saveBtn')
            .assert.attributeEquals('@saveBtn', 'value', 'Save')

            .assert.visible('@daysHeader')
            .assert.containsText('@daysHeader', 'Days')

            .assert.visible('@weekDayHeader')
            .assert.containsText('@weekDayHeader', 'Week Day Titles')

            .assert.visible('@sundayLabel')
            .assert.containsText('@sundayLabel', 'Sunday')

            .assert.visible('@sundayInput')

            .assert.visible('@mondayLabel')
            .assert.containsText('@mondayLabel', 'Monday')

            .assert.visible('@mondayInput')
            
            .assert.visible('@tuesdayLabel')
            .assert.containsText('@tuesdayLabel', 'Tuesday')

            .assert.visible('@tuesdayInput')

            .assert.visible('@wednesdayLabel')
            .assert.containsText('@wednesdayLabel', 'Wednesday')

            .assert.visible('@wednesdayInput')

            .assert.visible('@thursdayLabel')
            .assert.containsText('@thursdayLabel', 'Thursday')

            .assert.visible('@thursdayInput')

            .assert.visible('@fridayLabel')
            .assert.containsText('@fridayLabel', 'Friday')

            .assert.visible('@fridayInput')

            .assert.visible('@saturdayLabel')
            .assert.containsText('@saturdayLabel', 'Saturday')

            .assert.visible('@saturdayInput');

        client.frame(null);

        client.end();
    }
};
