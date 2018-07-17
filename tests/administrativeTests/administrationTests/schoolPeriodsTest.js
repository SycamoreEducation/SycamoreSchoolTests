module.exports = {
    tags: ['administrativeTests', 'administrationTests', 'schoolPeriodsTest'],

    'Administration School Periods Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@administration')
            .click('@administration')
            .assert.visible('@administrationSchoolPeriods')
            .click('@administrationSchoolPeriods');
        client.frame(null);

        client.frame(2);
        client.page.administrative.administration.schoolPeriods()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Administration/ School Periods')

            .activeTab('Periods')
            
            .assert.visible('@newPeriodBtn')
            .assert.attributeEquals('@newPeriodBtn', 'value', 'New Period')
            .assert.attributeEquals('@newPeriodBtn', 'onclick', 'addperiod()')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@codeHeader')
            .assert.containsText('@codeHeader', 'Code')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@startTimeHeader')
            .assert.containsText('@startTimeHeader', 'Start Time')

            .assert.visible('@stopTimeHeader')
            .assert.containsText('@stopTimeHeader', 'Stop Time')

            .assert.visible('@valueHeader')
            .assert.containsText('@valueHeader', 'Value');

        client.frame(null);

        client.end();
    }
};
