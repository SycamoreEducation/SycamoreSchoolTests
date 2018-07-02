var moment = require('moment');

module.exports = {
    tags: ['administrativeTests', 'attendanceTests', 'attendanceCheckInOutTests', 
        'attendanceCheckInOutStudentsTabTests'],

    'Attendance Check In/Out Student Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@attendance')
            .click('@attendance')
            .assert.visible('@attendanceCheckInOut')
            .click('@attendanceCheckInOut')
        client.frame(null);

        client.frame(2);
        client.page.administrative.attendance.checkInOut.studentsTab()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Attendance/ Check In - Out')

            .activeTab('Students')

            .assert.visible('@guestTab')
            .assert.containsText('@guestTab', 'Guest')

            .assert.visible('@refreshBtn')
            .assert.attributeEquals('@refreshBtn', 'value', 'Refresh')
            .assert.attributeEquals('@refreshBtn', 'onclick', 'doRefresh()')

            .assert.visible('@monthSelect')
            .assert.containsText('@monthSelect', moment().format('MMM'))
            .assert.attributeEquals('@monthSelect', 'onchange', 'DateChange()')

            .assert.visible('@daySelect')
            .assert.containsText('@daySelect', moment().format('DD'))
            .assert.attributeEquals('@daySelect', 'onchange', 'DateChange()')

            .assert.visible('@yearSelect')
            .assert.containsText('@yearSelect', moment().format('YYYY'))
            .assert.attributeEquals('@yearSelect', 'onchange', 'DateChange()')

            .assert.visible('@nameInput')
            .assert.attributeEquals('@nameInput', 'onkeyup', 
                'sendRequest(this.value, event)')

            .assert.visible('@reasonInput')

            .assert.visible('@submitBtn')
            .assert.attributeEquals('@submitBtn', 'value', 'Submit')
            .assert.attributeEquals('@submitBtn', 'onclick', 
                'doStudentSubmit()')

            .assert.visible('@checkboxHeader')
            .assert.attributeEquals('@checkboxHeader', 'src', page.url() + 
                '/images/check_mark.gif')

            .assert.visible('@codeHeader')
            .assert.containsText('@codeHeader', 'Code')

            .assert.visible('@studentNameHeader')
            .assert.containsText('@studentNameHeader', 'Student Name')

            .assert.visible('@gradeHeader')
            .assert.containsText('@gradeHeader', 'Grade')

            .assert.visible('@reasonHeader')
            .assert.containsText('@reasonHeader', 'Reason')

            .assert.visible('@checkOutHeader')
            .assert.containsText('@checkOutHeader', 'Check Out')

            .assert.visible('@checkInHeader')
            .assert.containsText('@checkInHeader', 'Check In')

        client.frame(null)

        client.end();
    }
};
