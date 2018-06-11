exports.command = function(username, password, school) {
    if(username === undefined && password === undefined && school === undefined) {
        this
            .setValue('input[name=entered_login]', 'superuser')
            .assert.value('input[name=entered_login]', 'superuser')
            .setValue('input[name=entered_password]', 'guest')
            .assert.value('input[name=entered_password]', 'guest')
            .setValue('input[name=entered_schid]', '1')
            .assert.value('input[name=entered_schid]', '1')
    }
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
