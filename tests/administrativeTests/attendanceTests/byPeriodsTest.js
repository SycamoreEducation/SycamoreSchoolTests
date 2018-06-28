var moment = require('moment');

module.exports = {
    tags: ['administrativeTests', 'attendanceTests', 'attendanceByPeriodsTest'],

    'Attendance By Periods Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@attendance')
            .click('@attendance')
            .assert.visible('@attendanceByPeriods')
            .click('@attendanceByPeriods')
        client.frame(null);

        client.frame(2);
        client.page.administrative.attendance.byPeriods()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Attendance/ By Periods')

            .activeTab('Attendance')

            .assert.visible('@dateHeader')
            .assert.containsText('@dateHeader', moment().format('MMMM YYYY'))

            .assert.visible('@backMonthBtn')
            .assert.attributeEquals('@backMonthBtn', 'href', page.url() + 
                `/attendperiods.php?year=${moment().format('YYYY')}&` + 
                `month=${moment().subtract(1, 'months').format('M')}`)

            .assert.visible('@forwardMonthBtn')
            .assert.attributeEquals('@forwardMonthBtn', 'href', page.url() + 
                `/attendperiods.php?year=${moment().format('YYYY')}&` + 
                `month=${moment().add(1, 'months').format('M')}`)

            .assert.visible('@sun')
            .assert.containsText('@sun', 'Sun')

            .assert.visible('@mon')
            .assert.containsText('@mon', 'Mon')

            .assert.visible('@tue')
            .assert.containsText('@tue', 'Tue')

            .assert.visible('@wed')
            .assert.containsText('@wed', 'Wed')

            .assert.visible('@thu')
            .assert.containsText('@thu', 'Thu')

            .assert.visible('@fri')
            .assert.containsText('@fri', 'Fri')

            .assert.visible('@sat')
            .assert.containsText('@sat', 'Sat')

            .assert.visible('@periodLabel')
            .assert.containsText('@periodLabel', 'Period')

            .assert.visible('@periodSelect')
            .assert.attributeEquals('@periodSelect', 'onchange', 'newPeriod()')

            .assert.visible('@classHeader')
            .assert.containsText('@classHeader', 'Class')

            .assert.visible('@sectionHeader')
            .assert.containsText('@sectionHeader', 'Section')

            .assert.visible('@presentHeader')
            .assert.containsText('@presentHeader', 'Present')

            .assert.visible('@absentHeader')
            .assert.containsText('@absentHeader', 'Absent')

            .assert.visible('@tardyHeader')
            .assert.containsText('@tardyHeader', 'Tardy')

            .assert.visible('@totalHeader')
            .assert.containsText('@totalHeader', 'Total')

            .assert.visible('@attendanceTitle')
            .assert.containsText('@attendanceTitle', 'Attendance')

            .assert.visible('@attendanceName')
            .assert.containsText('@attendanceName', 'Name')

            .assert.visible('@attendancePresent')
            .assert.containsText('@attendancePresent', 'Present')

            .assert.visible('@attendanceTardy')
            .assert.containsText('@attendanceTardy', 'Tardy')

            .assert.visible('@attendanceExcused')
            .assert.containsText('@attendanceExcused', 'Excused')

            .assert.visible('@attendanceUnExcused')
            .assert.containsText('@attendanceUnExcused', 'UnExcused')

            .assert.visible('@attendanceNotes')
            .assert.containsText('@attendanceNotes', 'Notes')

        client.frame(null)

        client.end();
    }
};
