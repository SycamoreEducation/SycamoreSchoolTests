var moment = require('moment');

module.exports = {
    tags: ['administrativeTests', 'attendanceTests', 'attendanceByStudentTest'],

    'Attendance By Student Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@attendance')
            .click('@attendance')
            .assert.visible('@attendanceByStudent')
            .click('@attendanceByStudent');
        client.frame(null);

        client.frame(2);
        client.page.administrative.attendance.byStudent()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Attendance/ By Student')

            .activeTab('Attendance')

            .assert.visible('@studentAttendanceBtn')
            .assert.attributeEquals('@studentAttendanceBtn', 'value', 
                'Student Attendance')
            .assert.attributeEquals('@studentAttendanceBtn', 'onclick', 
                'doStudent(0)')

            .assert.visible('@backMonthBtn')
            .assert.attributeEquals('@backMonthBtn', 'href', page.url() +
                `/attendstudents.php?grade=-99&year=${moment().format('YYYY')}`
                 + `&month=${moment().subtract(1, 'months').format('M')}`)

            .assert.visible('@forwardMonthBtn')
            .assert.attributeEquals('@forwardMonthBtn', 'href', page.url() +
                `/attendstudents.php?grade=-99&year=${moment().format('YYYY')}` 
                + `&month=${moment().add(1, 'months').format('M')}`)

            .assert.visible('@dateHeader')
            .assert.containsText('@dateHeader', moment().format('MMMM YYYY'))

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

            .assert.visible('@gradesHeader')
            .assert.containsText('@gradesHeader', 'Grades')

            .assert.visible('@kindergarten')
            .assert.containsText('@kindergarten', 'Kindergarten')

            .assert.visible('@firstGrade')
            .assert.containsText('@firstGrade', '1st')

            .assert.visible('@secondGrade')
            .assert.containsText('@secondGrade', '2nd')

            .assert.visible('@thirdGrade')
            .assert.containsText('@thirdGrade', '3rd')

            .assert.visible('@fourthGrade')
            .assert.containsText('@fourthGrade', '4th')

            .assert.visible('@fifthGrade')
            .assert.containsText('@fifthGrade', '5th')

            .assert.visible('@sixthGrade')
            .assert.containsText('@sixthGrade', '6th')

            .assert.visible('@seventhGrade')
            .assert.containsText('@seventhGrade', '7th')

            .assert.visible('@eigthGrade')
            .assert.containsText('@eigthGrade', '8th')

            .assert.visible('@freshman')
            .assert.containsText('@freshman', 'Freshman')

            .assert.visible('@sophomore')
            .assert.containsText('@sophomore', 'Sophomore')

            .assert.visible('@junior')
            .assert.containsText('@junior', 'Junior')

            .assert.visible('@senior')
            .assert.containsText('@senior', 'Senior')

            .assert.visible('@gradeTitle')
            .assert.containsText('@gradeTitle', 'Grade:')

            .assert.visible('@batchAttendanceBtn')
            .assert.attributeEquals('@batchAttendanceBtn', 'value', 
                ' Batch Attendance ')
            .assert.attributeEquals('@batchAttendanceBtn', 'onclick', 
                'domultistudents()')

            .assert.visible('@checkboxHeader')
            .assert.attributeEquals('@checkboxHeader', 'src', 
                page.url() + '/images/check_mark.gif')

            .assert.visible('@studentNameHeader')
            .assert.containsText('@studentNameHeader', 'Student Name');

        client.frame(null);

        client.end();
    }
};
