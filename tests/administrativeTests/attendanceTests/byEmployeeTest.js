var moment = require('moment');

module.exports = {
    tags: ['administrativeTests', 'attendanceTests', 
        'attendanceByEmployeeTest'],

    'Attendance Employee Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@attendance')
            .click('@attendance')
            .assert.visible('@attendanceByEmployee')
            .click('@attendanceByEmployee')
        client.frame(null);

        client.frame(2);
        client.page.administrative.attendance.byEmployee()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Attendance/ By Employee')

            .activeTab('Attendance')

            .assert.visible('@submitAttendanceBtn')
            .assert.attributeEquals('@submitAttendanceBtn', 'value', 
                'Submit Attendance')
            .assert.attributeEquals('@submitAttendanceBtn', 'onclick', 
                'doSubmit()')

            .assert.visible('@monthSelect')
            .assert.containsText('@monthSelect', moment().format('MMM'))
            .assert.attributeEquals('@monthSelect', 'onchange', 'redo()')

            .assert.visible('@daySelect')
            .assert.containsText('@daySelect', moment().format('DD'))
            .assert.attributeEquals('@daySelect', 'onchange', 'redo()')

            .assert.visible('@yearSelect')
            .assert.containsText('@yearSelect', moment().format('YYYY'))
            .assert.attributeEquals('@yearSelect', 'onchange', 'redo()')

            .assert.visible('@calendarBtn')
            .assert.attributeEquals('@calendarBtn', 'src', page.url() + 
                '/images/calendar.jpg')
        
            .assert.visible('@uncheckAllBtn')
            .assert.attributeEquals('@uncheckAllBtn', 'value', ' Uncheck All ')
            .assert.attributeEquals('@uncheckAllBtn', 'onclick', 'unCheckAll()')

            .assert.visible('@employeeHeader')
            .assert.containsText('@employeeHeader', 'Employee')

            .assert.visible('@presentHeader')
            .assert.containsText('@presentHeader', 'Present')

            .assert.visible('@typeHeader')
            .assert.containsText('@typeHeader', 'Type')

            .assert.visible('@hoursHeader')
            .assert.containsText('@hoursHeader', 'Hours')

            .assert.visible('@notesHeader')
            .assert.containsText('@notesHeader', 'Notes')

            .assert.visible('@viewBtn')
            .assert.attributeEquals('@viewBtn', 'src', page.url() + 
                '/images/history.gif')

            .assert.visible('@employeeName')

            .assert.visible('@checkbox')

            .assert.visible('@type')

            .assert.visible('@hours')

            .assert.visible('@notes')

        client.frame(null)

        client.end();
    }
};
