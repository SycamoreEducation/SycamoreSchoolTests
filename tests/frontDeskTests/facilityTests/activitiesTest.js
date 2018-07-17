var moment = require('moment');

module.exports = {
    tags: ['frontDeskTests', 'facilityTests', 'activitiesTabTest'],

    'Facility Activities Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@frontDesk')
            .click('@frontDesk')
            .assert.visible('@frontDeskFacility')
            .click('@frontDeskFacility');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.frontDesk.facility()
            .waitForElementVisible('@activitiesTab', 5000)
            .click('@activitiesTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Utilities/Facility Mgr/ Activities')

            .activeTab('Activities')

            .assert.visible('@browseTab')
            .assert.containsText('@browseTab', 'Browse')

            .assert.visible('@plannerTab')
            .assert.containsText('@plannerTab', 'Planner')

            .assert.visible('@searchTab')
            .assert.containsText('@searchTab', 'Search')

            .assert.visible('@activitiesDateInput')
            .assert.attributeEquals('@activitiesDateInput', 'value', 
                moment().format('MM/DD/YYYY'))
            .assert.attributeEquals('@activitiesDateInput', 'type', 'text')

            .assert.visible('@goBtn')
            .assert.attributeEquals('@goBtn', 'value', 'Go')
            .assert.attributeEquals('@goBtn', 'onclick', 'changeDate()')

            .assert.visible('@backDayBtn')
            .assert.containsText('@backDayBtn', 
                moment().subtract(1, 'days').format('MMMM DD, YYYY'))
            .assert.attributeEquals('@backDayBtn', 'href', 
                `${page.url()}/facilityactivities.php?selectdate=${moment()
                    .subtract(1, 'days').format('MM/DD/YYYY')}`)

            .assert.visible('@forwardDayBtn')
            .assert.containsText('@forwardDayBtn', 
                moment().add(1, 'days').format('MMMM DD, YYYY'))
            .assert.attributeEquals('@forwardDayBtn', 'href', 
                `${page.url()}/facilityactivities.php?selectdate=${moment()
                    .add(1, 'days').format('MM/DD/YYYY')}`)

            .assert.visible('@dayHeader')
            .assert.containsText('@dayHeader', 
                moment().format('dddd MMMM DD, YYYY'));

        client.frame(null);

        client.end();
    }
};
