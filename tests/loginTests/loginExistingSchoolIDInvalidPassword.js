module.exports = {
    tags: ['loginExistingSchoolIDInvalidPassword', 'loginTests'],

    'Login Existing School ID Invalid Password Test': (client) => {

        var page = client.page.loginExistingSchoolID();

        var password = 'gues';

        page.navigate()
            .assert.visible('@usernameField')
            .assert.visible('@passwordField')
            .assert.visible('@loginButton')
            .assert.elementNotPresent('@toast')

            .schoolLogin(client.globals.USERNAME, password)

            .waitForElementVisible('@toast', 45000, false)
            .assert.visible('@toast')
            .assert.containsText('@toast', 'U/P Incorrect: ' + 
                client.globals.SCHOOL_ID + ' - ' + client.globals.USERNAME);

        client.end();
    }
};
