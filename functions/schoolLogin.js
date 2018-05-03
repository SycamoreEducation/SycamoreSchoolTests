exports.command = function(username, password, school) {
    if(username) {
        this
            .setValue('input[name=entered_login]', username)
            .assert.value('input[name=entered_login]', username)
    }
    if(password) {
        this
            .setValue('input[name=entered_password]', password)
            .assert.value('input[name=entered_password]', password)
    }
    if(school) {
        this
            .setValue('input[name=entered_schid]', school)
            .assert.value('input[name=entered_schid]', school)
    }
    this
        .click('div.loginLoginButtonDiv')
    return this;
};
