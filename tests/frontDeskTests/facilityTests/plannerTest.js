var moment = require('moment');

module.exports = {
    tags: ['frontDeskTests', 'facilityTests', 'plannerTabTest'],

    'Facility Planner Test': (client) => {

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
        client.pause(client.globals.pauseTime);
        client.page.frontDesk.facility()
            .waitForElementVisible('@plannerTab', 5000)
            .click('@plannerTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Utilities/Facility Mgr/ Planner')

            .activeTab('Planner')

            .assert.visible('@browseTab')
            .assert.containsText('@browseTab', 'Browse')

            .assert.visible('@activitiesTab')
            .assert.containsText('@activitiesTab', 'Activities')

            .assert.visible('@searchTab')
            .assert.containsText('@searchTab', 'Search')

            .assert.visible('@plannerDateInput')
            .assert.attributeEquals('@plannerDateInput', 'value', 
                moment().format('MM/DD/YYYY'))
            .assert.attributeEquals('@plannerDateInput', 'type', 'text')

            .assert.visible('@goBtn')
            .assert.attributeEquals('@goBtn', 'value', 'Go')
            .assert.attributeEquals('@goBtn', 'onclick', 'changeDate()')

            .assert.visible('@backDayBtn')
            .assert.containsText('@backDayBtn', 
                moment().subtract(1, 'days').format('MMMM DD, YYYY'))
            .assert.attributeEquals('@backDayBtn', 'href', 
                `${page.url()}/facilityplanner.php?selectdate=${moment()
                .subtract(1, 'days').format('MM/DD/YYYY')}`)

            .assert.visible('@forwardDayBtn')
            .assert.containsText('@forwardDayBtn', 
                moment().add(1, 'days').format('MMMM DD, YYYY'))
            .assert.attributeEquals('@forwardDayBtn', 'href', 
                `${page.url()}/facilityplanner.php?selectdate=${moment()
                .add(1, 'days').format('MM/DD/YYYY')}`)

            .assert.visible('@dayHeader')
            .assert.containsText('@dayHeader', 
                moment().format('dddd MMMM DD, YYYY'))

            .assert.visible('@sixAm')
            .assert.containsText('@sixAm', '6AM')
            
            .assert.visible('@sevenAm')
            .assert.containsText('@sevenAm', '7AM')

            .assert.visible('@eightAm')
            .assert.containsText('@eightAm', '8AM')

            .assert.visible('@nineAm')
            .assert.containsText('@nineAm', '9AM')

            .assert.visible('@tenAm')
            .assert.containsText('@tenAm', '10AM')

            .assert.visible('@elevenAm')
            .assert.containsText('@elevenAm', '11AM')

            .assert.visible('@twelvePm')
            .assert.containsText('@twelvePm', '12PM')

            .assert.visible('@onePm')
            .assert.containsText('@onePm', '1PM')

            .assert.visible('@twoPm')
            .assert.containsText('@twoPm', '2PM')
            
            .assert.visible('@threePm')
            .assert.containsText('@threePm', '3PM')

            .assert.visible('@fourPm')
            .assert.containsText('@fourPm', '4PM')

            .assert.visible('@fivePm')
            .assert.containsText('@fivePm', '5PM')

            .assert.visible('@sixPm')
            .assert.containsText('@sixPm', '6PM')

            .assert.visible('@sevenPm')
            .assert.containsText('@sevenPm', '7PM')
            
            .assert.visible('@eightPm')
            .assert.containsText('@eightPm', '8PM')

            .assert.visible('@ninePm')
            .assert.containsText('@ninePm', '9PM')

        client.frame(null)

        client.end();
    }
};
