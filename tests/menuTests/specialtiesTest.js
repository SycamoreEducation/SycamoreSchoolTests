module.exports = {
    tags: ['specialtiesTest', 'menuTests'],

    'Specialties Menu Test': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .schoolLogin(username, password, schoolID);

        client.frame(1);
        client.page.menu()
            .assert.visible('@specialties')
            .assert.containsText('@specialties', '» Specialties')
            .assert.attributeEquals('@specialties', 'href', 'http://web/schoolmenu.php#')

            .assert.hidden('@athleticDirector')
            .assert.hidden('@ptConferences')

            .click('@specialties')

            .assert.visible('@athleticDirector')
            .assert.visible('@ptConferences')

            .assert.containsText('@athleticDirector', 'Athletic Director')
            .assert.containsText('@ptConferences', 'P/T Conference')

            .assert.attributeEquals('@athleticDirector', 'href', 'http://web/schoolmenu.php#')
            .assert.attributeEquals('@ptConferences', 'href', 'http://web/schoolmenu.php#')

            .click('@athleticDirector')
            .assert.visible('@sports')
            .assert.visible('@teams')
            .assert.visible('@scoreboard')
            .assert.visible('@equipment')
            .assert.containsText('@sports', 'Sports')
            .assert.containsText('@teams', 'Teams')
            .assert.containsText('@scoreboard', 'Scoreboard')
            .assert.containsText('@equipment', 'Equipment')
            .assert.attributeEquals('@sports', 'href', 'http://web/adsports.php')
            .assert.attributeEquals('@teams', 'href', 'http://web/adteams.php')
            .assert.attributeEquals('@scoreboard', 'href', 'http://web/adscoreboard.php')
            .assert.attributeEquals('@equipment', 'href', 'http://web/eqinventory.php')

            .click('@athleticDirector')
            .assert.hidden('@sports')
            .assert.hidden('@teams')
            .assert.hidden('@scoreboard')
            .assert.hidden('@equipment')

            .click('@ptConferences')
            .assert.visible('@ptConferencesTeachers')
            .assert.visible('@ptConferencesByDate')
            .assert.visible('@ptConferencesByTeacher')
            .assert.visible('@ptConferencesConfiguration')
            .assert.containsText('@ptConferencesTeachers', 'Teachers')
            .assert.containsText('@ptConferencesByDate', 'by Date')
            .assert.containsText('@ptConferencesByTeacher', 'by Teacher')
            .assert.containsText('@ptConferencesConfiguration', 'Configuration')
            .assert.attributeEquals('@ptConferencesTeachers', 'href', 'http://web/ptconf_teachers.php')
            .assert.attributeEquals('@ptConferencesByDate', 'href', 'http://web/ptconf_admin.php?view=date')
            .assert.attributeEquals('@ptConferencesByTeacher', 'href', 'http://web/ptconf_admin.php?view=staff')
            .assert.attributeEquals('@ptConferencesConfiguration', 'href', 'http://web/ptconf_admin.php?view=config')

            .click('@ptConferences')
            .assert.hidden('@ptConferencesTeachers')
            .assert.hidden('@ptConferencesByDate')
            .assert.hidden('@ptConferencesByTeacher')
            .assert.hidden('@ptConferencesConfiguration')

            .click('@specialties')
            .assert.hidden('@athleticDirector')
            .assert.hidden('@ptConferences')

        client.frame(null);

        client.end();
    }
};
