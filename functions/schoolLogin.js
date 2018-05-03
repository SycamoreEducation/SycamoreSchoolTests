exports.command = function(username, password, school) {
    if (school) {
        this
            .setValue('input[name=entered_schid]', school)
            .setValue('input[name=entered_login]', username)
            .setValue('input[name=entered_password]', password)
            .assert.value('input[name=entered_schid]', school)
    } else {
        this
            .setValue('input[name=entered_login]', username)
            .setValue('input[name=entered_password]', password)
    }
    this
        .assert.value('input[name=entered_login]', username)
        .assert.value('input[name=entered_password]', password)

        .click('div.loginLoginButtonDiv')
    return this;
};
