module.exports = {
    tags: ['administrativeTests', 'administrationTests', 'schoolYearsTest',],

    'Administration School Years Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@administration')
            .click('@administration')
            .assert.visible('@administrationSchoolYears')
            .click('@administrationSchoolYears')
        client.frame(null);

        client.frame(2);
        client.page.administrative.administration.schoolYears()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Administration/ School Years')

            .activeTab('General')

            .assert.visible('@newSchoolYearBtn')
            .assert.attributeEquals('@newSchoolYearBtn', 'value', 
                ' New School Year ')
            .assert.attributeEquals('@newSchoolYearBtn', 'onclick', 'addyear()')

            .assert.visible('@setCurrentYearBtn')
            .assert.attributeEquals('@setCurrentYearBtn', 'value', 
                ' Set Current Year ')
            .assert.attributeEquals('@setCurrentYearBtn', 'onclick', 
                'currentyear()')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@daysHeader')
            .assert.containsText('@daysHeader', 'Days')

            .assert.visible('@hoursHeader')
            .assert.containsText('@hoursHeader', 'Hours')

            .assert.visible('@dbIdHeader')
            .assert.containsText('@dbIdHeader', 'DB ID')
        client.frame(null)

        client.end();
    }
};
