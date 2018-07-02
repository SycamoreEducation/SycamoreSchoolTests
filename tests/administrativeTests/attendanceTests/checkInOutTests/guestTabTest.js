var moment = require('moment');

module.exports = {
    tags: ['administrativeTests', 'attendanceTests', 'attendanceCheckInOutTests', 
        'attendanceCheckInOutGuestTabTest'],

    'Attendance Check In/Out Guest Test': (client) => {

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
        client.page.administrative.attendance.checkInOut.guestTab()
            .waitForElementVisible('@guestTab', 5000)
            .click('@guestTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Attendance/ Check In - Out')

            .activeTab('Guest')

            .assert.visible('@studentsTab')
            .assert.containsText('@studentsTab', 'Students')

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

            .assert.visible('@guestNameInput')
            .assert.attributeEquals('@guestNameInput', 'onkeyup', 
                'doKeyUp(this, event)')

            .assert.visible('@toSeeInput')
            
            .assert.visible('@notesInput')

            .assert.visible('@submitBtn')
            .assert.attributeEquals('@submitBtn', 'value', 'Submit')
            .assert.attributeEquals('@submitBtn', 'onclick', 'doGuestSubmit()')

            .assert.visible('@checkboxHeader')
            .assert.attributeEquals('@checkboxHeader', 'src', page.url() + 
                '/images/check_mark.gif')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@toSeeHeader')
            .assert.containsText('@toSeeHeader', 'To See')

            .assert.visible('@reasonHeader')
            .assert.containsText('@reasonHeader', 'Reason')

            .assert.visible('@checkInHeader')
            .assert.containsText('@checkInHeader', 'Check In')

            .assert.visible('@checkOutHeader')
            .assert.containsText('@checkOutHeader', 'Check Out')

        client.frame(null)

        client.end();
    }
};
