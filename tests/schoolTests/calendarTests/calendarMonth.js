var moment = require('moment');

var year = moment().format('YYYY');

module.exports = {
    tags: ['schoolTests', 'calendarMonthTest', 'calendarTests'],

    'Calendar Month Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@school')
            .click('@school')
            .assert.visible('@schoolCalendar')
            .click('@schoolCalendar')
        client.frame(null);

        client.frame(2);
        client.page.calendar()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'School/Calendar/ Month')

            .assert.visible('@monthTab')
            .assert.containsText('@monthTab', 'Month')

            .assert.visible('@weekTab')
            .assert.containsText('@weekTab', 'Week')

            .assert.visible('@dayTab')
            .assert.containsText('@dayTab', 'Day')

            .assert.visible('@exportiCalBtn')
            .assert.attributeEquals('@exportiCalBtn', 'value', 'Export iCal')
            .assert.attributeEquals('@exportiCalBtn', 'onclick', `icalexport(${moment().subtract(1, 'days').format('MM, YYYY')}, 4)`)

            .assert.visible('@searchField')
            .assert.attributeEquals('@searchField', 'type', 'text')
            
            .assert.visible('@searchBtn')
            .assert.attributeEquals('@searchBtn', 'value', 'Search')
            .assert.attributeEquals('@searchBtn', 'type', 'submit')

            .assert.visible('@printBtn')
            .assert.attributeEquals('@printBtn', 'value', ' Print ')
            .assert.attributeEquals('@printBtn', 'onclick', 'doPrint()')

            .assert.visible('@meetingMakerBtn')
            .assert.attributeEquals('@meetingMakerBtn', 'value', 'Meeting Maker')
            .assert.attributeEquals('@meetingMakerBtn', 'onclick', 'meetingmaker()')

            .assert.visible('@todayBtn')
            .assert.attributeEquals('@todayBtn', 'value', 'Today')
            .assert.attributeEquals('@todayBtn', 'onclick', `goto(${moment().format('DD, YYYY')})`)

            .assert.visible('@leftArrowBtn')
            .assert.attributeEquals('@leftArrowBtn', 'value', '<')
            .assert.attributeEquals('@leftArrowBtn', 'onclick', `goto(${moment().subtract(1, 'days').format('DD, YYYY')})`)

            .assert.visible('@rightArrowBtn')
            .assert.attributeEquals('@rightArrowBtn', 'value', '>')
            .assert.attributeEquals('@rightArrowBtn', 'onclick', `goto(${moment().add(1, 'days').format('DD, YYYY')})`)

            .assert.visible('@monthSelector')
            .assert.containsText('@monthSelector', moment().format('MMMM'))

            .assert.visible('@yearSelector')
            .assert.containsText('@yearSelector', year)

            .assert.visible('@monthYearHeader')
            .assert.containsText('@monthYearHeader', moment().format('MMMM YYYY'))

            .assert.visible('@categoryLabel')
            .assert.containsText('@categoryLabel', 'Category')

            .assert.visible('@categorySelector')

            .assert.visible('@janTab')
            .assert.containsText('@janTab', 'Jan')
            .click('@janTab')
            .assert.containsText('@monthYearHeader', `January ${year}`)
            .schoolCalendar(1)

            .assert.visible('@febTab')
            .assert.containsText('@febTab', 'Feb')
            .click('@febTab')
            .assert.containsText('@monthYearHeader', `February ${year}`)
            .schoolCalendar(2)

            .assert.visible('@marTab')
            .assert.containsText('@marTab', 'Mar')
            .click('@marTab')
            .assert.containsText('@monthYearHeader', `March ${year}`)
            .schoolCalendar(3)

            .assert.visible('@aprTab')
            .assert.containsText('@aprTab', 'Apr')
            .click('@aprTab')
            .assert.containsText('@monthYearHeader', `April ${year}`)
            .schoolCalendar(4)

            .assert.visible('@mayTab')
            .assert.containsText('@mayTab', 'May')
            .click('@mayTab')
            .assert.containsText('@monthYearHeader', `May ${year}`)
            .schoolCalendar(5)

            .assert.visible('@junTab')
            .assert.containsText('@junTab', 'Jun')
            .click('@junTab')
            .assert.containsText('@monthYearHeader', `June ${year}`)
            .schoolCalendar(6)

            .assert.visible('@julTab')
            .assert.containsText('@julTab', 'Jul')
            .click('@julTab')
            .assert.containsText('@monthYearHeader', `July ${year}`)
            .schoolCalendar(7)

            .assert.visible('@augTab')
            .assert.containsText('@augTab', 'Aug')
            .click('@augTab')
            .assert.containsText('@monthYearHeader', `August ${year}`)
            .schoolCalendar(8)

            .assert.visible('@sepTab')
            .assert.containsText('@sepTab', 'Sep')
            .click('@sepTab')
            .assert.containsText('@monthYearHeader', `September ${year}`)
            .schoolCalendar(9)

            .assert.visible('@octTab')
            .assert.containsText('@octTab', 'Oct')
            .click('@octTab')
            .assert.containsText('@monthYearHeader', `October ${year}`)
            .schoolCalendar(10)

            .assert.visible('@novTab')
            .assert.containsText('@novTab', 'Nov')
            .click('@novTab')
            .assert.containsText('@monthYearHeader', `November ${year}`)
            .schoolCalendar(11)

            .assert.visible('@decTab')
            .assert.containsText('@decTab', 'Dec')
            .click('@decTab')
            .assert.containsText('@monthYearHeader', `December ${year}`)
            .schoolCalendar(12)

        client.frame(null)

        client.end();
    }
};
