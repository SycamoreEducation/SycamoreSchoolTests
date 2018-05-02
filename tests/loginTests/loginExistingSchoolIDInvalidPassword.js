module.exports = {
    tags: ['loginExistingSchoolIDInvalidPassword', 'loginTests'],

    'Login Existing School ID Invalid Password Test': (client) => {

        var page = client.page.loginExistingSchoolID();

        var username = 'superuser';
        var password = 'gues';
        var schoolID = '1';

        page.navigate()
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')
            .assert.visible('@loginButton')
            .assert.elementNotPresent('@toast')

            .schoolLoginExistingSchoolID(username, password)

            .waitForElementVisible('@toast', 45000, false)
            .assert.visible('@toast')
            .assert.containsText('@toast', 'U/P Incorrect: ' + schoolID + ' - ' + username);

        client.end();
    }
};
