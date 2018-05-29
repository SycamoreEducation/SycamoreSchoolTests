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
            .assert.containsText('@myClasses', 'My Classes')
            .assert.attributeEquals('@myClasses', 'href', page.url() + '/myclasses.php')
            
            .assert.visible('@myStudents')
            .assert.containsText('@myStudents', 'My Students')
            .assert.attributeEquals('@myStudents', 'href', page.url() + '/mystudents.php')
            
            .assert.visible('@myServiceLogs')
            .assert.containsText('@myServiceLogs', 'My Service Logs')
            .assert.attributeEquals('@myServiceLogs', 'href', page.url() + '/myservicelog.php')
            
            .assert.visible('@myLessonPlans')
            .assert.containsText('@myLessonPlans', 'My Lesson Plans')
            .assert.attributeEquals('@myLessonPlans', 'href', page.url() + '/mylesson.php')
            
            .assert.visible('@myDisciplineLogs')
            .assert.containsText('@myDisciplineLogs', 'My Discipline Logs')
            .assert.attributeEquals('@myDisciplineLogs', 'href', page.url() + '/mydiscipline.php')
            
            .assert.visible('@myConnectionLogs')
            .assert.containsText('@myConnectionLogs', 'My Connection Logs')
            .assert.attributeEquals('@myConnectionLogs', 'href', page.url() + '/myconnectlogs.php')
            
            .assert.visible('@myNotifications')
            .assert.containsText('@myNotifications', 'My Notifications')
            .assert.attributeEquals('@myNotifications', 'href', page.url() + '/mycommconfig.php')
            
            .assert.visible('@myWorkFlow')
            .assert.containsText('@myWorkFlow', 'My Workflow')
            .assert.attributeEquals('@myWorkFlow', 'href', page.url() + '/myticket.php')
            
            .assert.visible('@myTimecard')
            .assert.containsText('@myTimecard', 'My Timecard')
            .assert.attributeEquals('@myTimecard', 'href', page.url() + '/mytimecard.php')
            
            .assert.visible('@myEmployees')
            .assert.containsText('@myEmployees', 'My Employees')
            .assert.attributeEquals('@myEmployees', 'href', page.url() + '/users.php?task=mine&type=1')
            
            .assert.visible('@staffDiscussions')
            .assert.containsText('@staffDiscussions', 'Staff Discussions')
            .assert.attributeEquals('@staffDiscussions', 'href', page.url() + '/forumboard.php?classid=-1')
            
            .assert.visible('@schoolSchedule')
            .assert.containsText('@schoolSchedule', 'School Schedule')
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
