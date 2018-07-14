var pauseTime = require('../../../globalVariables').pauseTime;

module.exports = {
    tags: ['frontDeskTests', 'facilityTests', 'browseTabTest'],

    'Facility Browse Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@frontDesk')
            .click('@frontDesk')
            .assert.visible('@frontDeskFacility')
            .click('@frontDeskFacility')
        client.frame(null);

        client.frame(2);
        client.pause(pauseTime);
        client.page.frontDesk.facility()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Front Desk/ Facility')

            .activeTab('Browse')

            .assert.visible('@plannerTab')
            .assert.containsText('@plannerTab', 'Planner')

            .assert.visible('@activitiesTab')
            .assert.containsText('@activitiesTab', 'Activities')

            .assert.visible('@searchTab')
            .assert.containsText('@searchTab', 'Search')

        client.frame(null)

        client.end();
    }
};
