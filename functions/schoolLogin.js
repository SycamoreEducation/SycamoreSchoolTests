exports.command = function(username, password, school) {
    if(username === undefined && password === undefined && 
        school === undefined) {
        this
            .setValue('input[name=entered_login]', this.globals.USERNAME)
            .assert.value('input[name=entered_login]', this.globals.USERNAME)
            .setValue('input[name=entered_password]', this.globals.PASSWORD)
            .assert.value('input[name=entered_password]', this.globals.PASSWORD)
            .setValue('input[name=entered_schid]', this.globals.SCHOOL_ID)
            .assert.value('input[name=entered_schid]', this.globals.SCHOOL_ID);
    }
    if(username) {
        this
            .setValue('input[name=entered_login]', username)
            .assert.value('input[name=entered_login]', username);
    }
    if(password) {
        this
            .setValue('input[name=entered_password]', password)
            .assert.value('input[name=entered_password]', password);
    }
    if(school) {
        this
            .setValue('input[name=entered_schid]', school)
            .assert.value('input[name=entered_schid]', school);
    }
    this
        .click('div.loginLoginButtonDiv');

    return this;
};
