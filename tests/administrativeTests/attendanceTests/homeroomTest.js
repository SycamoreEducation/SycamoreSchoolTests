var moment = require('moment');

module.exports = {
    tags: ['administrativeTests', 'attendanceTests', 'attendanceHomeroomTest'],

    'Attendance Homeroom Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@attendance')
            .click('@attendance')
            .assert.visible('@attendanceHomeroom')
            .click('@attendanceHomeroom');
        client.frame(null);

        client.frame(2);
        client.page.administrative.attendance.homeroom()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Attendance/ Homeroom')

            .activeTab('Attendance')

            .assert.visible('@backMonth')
            .assert.attributeEquals('@backMonth', 'href', page.url() +
                `/homeroom.php?year=${moment().format('YYYY')}` +
                `&month=${moment().subtract(1, 'months').format('M')}`)

            .assert.visible('@monthBtn')
            .assert.attributeEquals('@monthBtn', 'value', 
                moment().format('MMMM YYYY'))
            .assert.attributeEquals('@monthBtn', 'onclick', 'doMonth()')

            .assert.visible('@forwardMonth')
            .assert.attributeEquals('@forwardMonth', 'href', page.url() +
                `/homeroom.php?year=${moment().format('YYYY')}` +
                `&month=${moment().add(1, 'months').format('M')}`)
            
            .assert.visible('@dayStatus')

            .assert.visible('@printBtn')
            .assert.containsText('@printBtn', ' Print')
            .assert.attributeEquals('@printBtn', 'onclick', 'doOverview()')

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

            .assert.visible('@classHeader')
            .assert.containsText('@classHeader', 'Class')

            .assert.visible('@sectionHeader')
            .assert.containsText('@sectionHeader', 'Section')

            .assert.visible('@presentHeader')
            .assert.containsText('@presentHeader', 'Present')

            .assert.visible('@tardyHeader')
            .assert.containsText('@tardyHeader', 'Tardy')

            .assert.visible('@totalHeader')
            .assert.containsText('@totalHeader', 'Total')

            .assert.visible('@hrTitle')
            .assert.containsText('@hrTitle', 'HR')

            .assert.visible('@nameTitle')
            .assert.containsText('@nameTitle', 'Name')

            .assert.visible('@presentTitle')
            .assert.containsText('@presentTitle', 'Present')

            .assert.visible('@tardyTitle')
            .assert.containsText('@tardyTitle', 'Tardy')

            .assert.visible('@excusedTitle')
            .assert.containsText('@excusedTitle', 'Excused')

            .assert.visible('@unExcusedTitle')
            .assert.containsText('@unExcusedTitle', 'UnExcused')

            .assert.visible('@typeTitle')
            .assert.containsText('@typeTitle', 'Type')

            .assert.visible('@notesTitle')
            .assert.containsText('@notesTitle', 'Notes');

        client.frame(null);

        client.end();
    }
};
