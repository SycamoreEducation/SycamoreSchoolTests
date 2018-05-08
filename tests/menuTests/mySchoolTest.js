module.exports = {
    tags: ['mySchoolTest', 'menuTests'],

    'My School Menu Test': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .schoolLogin(username, password, schoolID);

        client.frame(1);
        client.page.menu()
            .assert.visible('@mySchool')
            .assert.containsText('@mySchool', '\273 My School')
            .assert.attributeEquals('@mySchool', 'href', 'http://web/schoolmenu.php#')

            .assert.hidden('@myClasses')
            .assert.hidden('@myStudents')
            .assert.hidden('@myLessonPlans')
            .assert.hidden('@myNotifications')
            .assert.hidden('@myEmployees')
            .assert.hidden('@staffDiscussions')
            .assert.hidden('@schoolSchedule')

            .click('@mySchool')
            .assert.visible('@myClasses')
            .assert.visible('@myStudents')
            .assert.visible('@myLessonPlans')
            .assert.visible('@myNotifications')
            .assert.visible('@myEmployees')
            .assert.visible('@staffDiscussions')
            .assert.visible('@schoolSchedule')
            .assert.containsText('@myClasses', 'My Classes')
            .assert.containsText('@myStudents', 'My Students')
            .assert.containsText('@myLessonPlans', 'My Lesson Plans')
            .assert.containsText('@myNotifications', 'My Notifications')
            .assert.containsText('@myEmployees', 'My Employees')
            .assert.containsText('@staffDiscussions', 'Staff Discussions')
            .assert.containsText('@schoolSchedule', 'School Schedule')
            .assert.attributeEquals('@myClasses', 'href', 'http://web/myclasses.php')
            .assert.attributeEquals('@myStudents', 'href', 'http://web/mystudents.php')
            .assert.attributeEquals('@myLessonPlans', 'href', 'http://web/mylesson.php')
            .assert.attributeEquals('@myNotifications', 'href', 'http://web/mycommconfig.php')
            .assert.attributeEquals('@myEmployees', 'href', 'http://web/users.php?task=mine&type=1')
            .assert.attributeEquals('@staffDiscussions', 'href', 'http://web/forumboard.php?classid=-1')
            .assert.attributeEquals('@schoolSchedule', 'href', 'http://web/myschedule.php')

            .click('@mySchool')
            .assert.hidden('@myClasses')
            .assert.hidden('@myStudents')
            .assert.hidden('@myLessonPlans')
            .assert.hidden('@myNotifications')
            .assert.hidden('@myEmployees')
            .assert.hidden('@staffDiscussions')
            .assert.hidden('@schoolSchedule')

        client.frame(null);

        client.end();
    }
};
