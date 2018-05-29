module.exports = {
    tags: ['mySchoolTest', 'menuTests'],

    'My School Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@mySchool')
            .assert.containsText('@mySchool', '\273 My School')
            .assert.attributeEquals('@mySchool', 'href', page.url() + '/schoolmenu.php#')

            .assert.hidden('@myClasses')
            .assert.hidden('@myStudents')
            .assert.hidden('@myServiceLogs')
            .assert.hidden('@myLessonPlans')
            .assert.hidden('@myDisciplineLogs')
            .assert.hidden('@myConnectionLogs')
            .assert.hidden('@myNotifications')
            .assert.hidden('@myWorkFlow')
            .assert.hidden('@myTimecard')
            .assert.hidden('@myEmployees')
            .assert.hidden('@staffDiscussions')
            .assert.hidden('@schoolSchedule')

            .click('@mySchool')
            .assert.visible('@myClasses')
            .assert.visible('@myStudents')
            .assert.visible('@myServiceLogs')
            .assert.visible('@myLessonPlans')
            .assert.visible('@myDisciplineLogs')
            .assert.visible('@myConnectionLogs')
            .assert.visible('@myNotifications')
            .assert.visible('@myWorkFlow')
            .assert.visible('@myTimecard')
            .assert.visible('@myEmployees')
            .assert.visible('@staffDiscussions')
            .assert.visible('@schoolSchedule')
            .assert.containsText('@myClasses', 'My Classes')
            .assert.containsText('@myStudents', 'My Students')
            .assert.containsText('@myServiceLogs', 'My Service Logs')
            .assert.containsText('@myLessonPlans', 'My Lesson Plans')
            .assert.containsText('@myDisciplineLogs', 'My Discipline Logs')
            .assert.containsText('@myConnectionLogs', 'My Connection Logs')
            .assert.containsText('@myNotifications', 'My Notifications')
            .assert.containsText('@myWorkFlow', 'My Workflow')
            .assert.containsText('@myTimecard', 'My Timecard')
            .assert.containsText('@myEmployees', 'My Employees')
            .assert.containsText('@staffDiscussions', 'Staff Discussions')
            .assert.containsText('@schoolSchedule', 'School Schedule')
            .assert.attributeEquals('@myClasses', 'href', page.url() + '/myclasses.php')
            .assert.attributeEquals('@myStudents', 'href', page.url() + '/mystudents.php')
            .assert.attributeEquals('@myServiceLogs', 'href', page.url() + '/myservicelog.php')
            .assert.attributeEquals('@myLessonPlans', 'href', page.url() + '/mylesson.php')
            .assert.attributeEquals('@myDisciplineLogs', 'href', page.url() + '/mydiscipline.php')
            .assert.attributeEquals('@myConnectionLogs', 'href', page.url() + '/myconnectlogs.php')
            .assert.attributeEquals('@myNotifications', 'href', page.url() + '/mycommconfig.php')
            .assert.attributeEquals('@myWorkFlow', 'href', page.url() + '/myticket.php')
            .assert.attributeEquals('@myTimecard', 'href', page.url() + '/mytimecard.php')
            .assert.attributeEquals('@myEmployees', 'href', page.url() + '/users.php?task=mine&type=1')
            .assert.attributeEquals('@staffDiscussions', 'href', page.url() + '/forumboard.php?classid=-1')
            .assert.attributeEquals('@schoolSchedule', 'href', page.url() + '/myschedule.php')

            .click('@mySchool')
            .assert.hidden('@myClasses')
            .assert.hidden('@myStudents')
            .assert.hidden('@myServiceLogs')
            .assert.hidden('@myLessonPlans')
            .assert.hidden('@myDisciplineLogs')
            .assert.hidden('@myConnectionLogs')
            .assert.hidden('@myNotifications')
            .assert.hidden('@myWorkFlow')
            .assert.hidden('@myTimecard')
            .assert.hidden('@myEmployees')
            .assert.hidden('@staffDiscussions')
            .assert.hidden('@schoolSchedule')

        client.frame(null);

        client.end();
    }
};
