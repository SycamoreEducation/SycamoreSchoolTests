module.exports = {
    tags: ['systemHelpTest', 'menuTests'],

    'System Help Menu Test': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .schoolLogin(username, password, schoolID);

        client.frame(1);
        client.page.menu()
            .assert.visible('@systemHelp')
            .assert.containsText('@systemHelp', '» System Help')
            .assert.attributeEquals('@systemHelp', 'href', 'http://web/schoolmenu.php#')

            .assert.hidden('@welcomeAboard')
            .assert.hidden('@onlineHelp')
            .assert.hidden('@trainingVideos')
            .assert.hidden('@webinarTraining')
            .assert.hidden('@sycamoreLeafNotes')
            .assert.hidden('@releaseNotes')

            .click('@systemHelp')
            .assert.visible('@welcomeAboard')
            .assert.visible('@onlineHelp')
            .assert.visible('@trainingVideos')
            .assert.visible('@webinarTraining')
            .assert.visible('@sycamoreLeafNotes')
            .assert.visible('@releaseNotes')
            .assert.containsText('@welcomeAboard', 'Welcome Aboard')
            .assert.containsText('@onlineHelp', 'Online Help')
            .assert.containsText('@trainingVideos', 'Training Videos')
            .assert.containsText('@webinarTraining', 'Webinar Training')
            .assert.containsText('@sycamoreLeafNotes', 'Sycamore Leaf Notes')
            .assert.containsText('@releaseNotes', 'Release Notes')
            .assert.attributeEquals('@welcomeAboard', 'href', 'http://web/welcome.php')
            .assert.attributeEquals('@onlineHelp', 'onclick', 'doHelpExternal();')
            .assert.attributeEquals('@trainingVideos', 'href', 'http://web/systemvideos.php')
            .assert.attributeEquals('@webinarTraining', 'href', 'http://web/webinartraining.php')
            .assert.attributeEquals('@sycamoreLeafNotes', 'href', 'http://web/systemleafnotes.php')
            .assert.attributeEquals('@releaseNotes', 'href', 'http://web/systemenhancements.php')

            .click('@systemHelp')
            .assert.hidden('@welcomeAboard')
            .assert.hidden('@onlineHelp')
            .assert.hidden('@trainingVideos')
            .assert.hidden('@webinarTraining')
            .assert.hidden('@sycamoreLeafNotes')
            .assert.hidden('@releaseNotes')

        client.frame(null);

        client.end();
    }
};
