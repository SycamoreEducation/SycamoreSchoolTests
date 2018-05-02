exports.command = function(username, password) {
    this
        .setValue('input[name=entered_login]', username)
        .setValue('input[name=entered_password]', password)

        .assert.value('input[name=entered_login]', username)
        .assert.value('input[name=entered_password]', password)

        .click('div.loginLoginButtonDiv')
    return this;
};
