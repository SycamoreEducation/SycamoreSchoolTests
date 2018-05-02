exports.command = function(school, username, password) {

  this
    .setValue('input[name=entered_schid]', school)
    .setValue('input[name=entered_login]', username)
    .setValue('input[name=entered_password]', password)
    .click('div.loginLoginButtonDiv')

  return this;
};