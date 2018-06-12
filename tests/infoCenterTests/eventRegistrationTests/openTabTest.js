module.exports = {
    tags: ['infoCenterTests', 'infoCenterEventRegistrationTests', 
        'eventRegistrationOpenTest'],

    'Info Center Cafeteria Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@infoCenter')
            .click('@infoCenter')
            .assert.visible('@infoCenterEventRegistration')
            .click('@infoCenterEventRegistration')
        client.frame(null);

        client.frame(2);
        client.page.infoCenter.eventRegistration()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Registration/ Event Registration')

            .assert.visible('@openTab')
            .assert.containsText('@openTab', 'Open')

            .assert.visible('@dayHeader')
            .assert.containsText('@dayHeader', 'Day')

            .assert.visible('@dateHeader')
            .assert.containsText('@dateHeader', 'Date')

            .assert.visible('@titleHeader')
            .assert.containsText('@titleHeader', 'Title')

            .assert.visible('@locationHeader')
            .assert.containsText('@locationHeader', 'Location')

        client.frame(null)

        client.end();
    }
};
