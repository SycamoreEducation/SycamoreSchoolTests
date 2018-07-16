module.exports = {
    tags: ['administrativeTests', 'administrationTests', 'calendarOptionsTests',
        'calendarOptionsCategoriesTabTest'],

    'Calendar Options Categoreis Tab Test': (client) => {

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

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Administration/ Calendar Options')

            .activeTab('Categories')

            .assert.visible('@importsTab')
            .assert.containsText('@importsTab', 'Imports')

            .assert.visible('@daysOfWeekTab')
            .assert.containsText('@daysOfWeekTab', 'Days of Week')

            .assert.visible('@specialsDaysTab')
            .assert.containsText('@specialsDaysTab', 'Specials Days')

            .assert.visible('@addCategoryBtn')
            .assert.attributeEquals('@addCategoryBtn', 'value', 'Add Category')
            .assert.attributeEquals('@addCategoryBtn', 'onclick', 
                'addcategory()')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description');

        client.frame(null);

        client.end();
    }
};
