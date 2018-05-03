exports.command = function(username, password, school) {
    this
        .setValue('input[name=entered_schid]', school)
        .setValue('input[name=entered_login]', username)
        .setValue('input[name=entered_password]', password)

        .assert.value('input[name=entered_login]', username)
        .assert.value('input[name=entered_password]', password)

        .click('div.loginLoginButtonDiv')
    return this;
};
