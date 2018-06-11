module.exports = {
    tags: ['systemHelpTest', 'menuTests'],

    'System Help Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@systemHelp')
            .assert.containsText('@systemHelp', '\273 System Help')
            .assert.attributeEquals('@systemHelp', 'href', page.url() + '/schoolmenu.php#')

            .assert.hidden('@welcomeAboard')
            .assert.hidden('@onlineHelp')
            .assert.hidden('@trainingVideos')
            .assert.hidden('@webinarTraining')
            .assert.hidden('@leafNotes')
            .assert.hidden('@releaseNotes')

            .click('@systemHelp')
            .assert.visible('@welcomeAboard')
            .assert.containsText('@welcomeAboard', 'Welcome Aboard')
            .assert.attributeEquals('@welcomeAboard', 'href', page.url() + '/welcome.php')
            
            .assert.visible('@onlineHelp')
            .assert.containsText('@onlineHelp', 'Online Help')
            .assert.attributeEquals('@onlineHelp', 'onclick', 'doHelpExternal();')
            
            .assert.visible('@trainingVideos')
            .assert.containsText('@trainingVideos', 'Training Videos')
            .assert.attributeEquals('@trainingVideos', 'href', page.url() + '/systemvideos.php')
            
            .assert.visible('@webinarTraining')
            .assert.containsText('@webinarTraining', 'Webinar Training')
            .assert.attributeEquals('@webinarTraining', 'href', page.url() + '/webinartraining.php')
            
            .assert.visible('@leafNotes')
            .assert.containsText('@leafNotes', 'Sycamore Leaf Notes')
            .assert.attributeEquals('@leafNotes', 'href', page.url() + '/systemleafnotes.php')
            
            .assert.visible('@releaseNotes')
            .assert.containsText('@releaseNotes', 'Release Notes')
            .assert.attributeEquals('@releaseNotes', 'href', page.url() + '/systemenhancements.php')

            .click('@systemHelp')

            .assert.visible('@systemHelp')

            .assert.hidden('@welcomeAboard')
            .assert.hidden('@onlineHelp')
            .assert.hidden('@trainingVideos')
            .assert.hidden('@webinarTraining')
            .assert.hidden('@leafNotes')
            .assert.hidden('@releaseNotes')

        client.frame(null);

        client.end();
    }
};
