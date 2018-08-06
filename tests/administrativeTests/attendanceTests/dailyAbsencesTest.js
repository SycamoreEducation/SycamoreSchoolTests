var moment = require('moment');

module.exports = {
    tags: ['administrativeTests', 'attendanceTests', 
        'attendanceDailyAbsencesTest'],

    'Attendance Daily Absences Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@attendance')
            .click('@attendance')
            .assert.visible('@attendanceDailyAbsences')
            .click('@attendanceDailyAbsences');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.administrative.attendance.dailyAbsences()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Attendance/ Daily Absences')

            .activeTab('Students')

            .assert.visible('@printBtn')
            .assert.containsText('@printBtn', 'Print')
            .assert.attributeEquals('@printBtn', 'onclick', 'doPrint()')

            .assert.visible('@backDayBtn')
            .assert.attributeEquals('@backDayBtn', 'href', 
                page.url() + `/attendabsents.php?` +
                `day=${moment().subtract(1, 'days').format('DD')}&` + 
                `month=${moment().subtract(1, 'days').format('MM')}&` +
                `year=${moment().subtract(1, 'days').format('YYYY')}`)

            .assert.visible('@forwardDayBtn')
            .assert.attributeEquals('@forwardDayBtn', 'href', 
                page.url() + `/attendabsents.php?` +
                `day=${moment().add(1, 'days').format('DD')}&` + 
                `month=${moment().add(1, 'days').format('MM')}&` +
                `year=${moment().add(1, 'days').format('YYYY')}`)

            .assert.visible('@dateTitle')
            .assert.containsText('@dateTitle', moment()
                .format('dddd MMMM D YYYY'))

            .assert.visible('@dateSelect')
            .assert.attributeEquals('@dateSelect', 'value', moment()
                .format('MM/DD/YYYY'))

            .assert.visible('@studentNameHeader')
            .assert.containsText('@studentNameHeader', 'Student Name');

        client.frame(null);

        client.end();
    }
};
