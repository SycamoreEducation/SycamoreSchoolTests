module.exports = {
  'Login' : function (client) {
    client
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .assert.title('Sycamore Education')
      .assert.visible('input[name=entered_schid]')
      .setValue('input[name=entered_schid]', '1')
      .assert.visible('input[name=entered_login]')
      .setValue('input[name=entered_login]', 'superuser')
      .assert.visible('input[name=entered_password]')
      .setValue('input[name=entered_password]', 'guest')
      .click('div[class="loginLoginButtonDiv"]')
      .pause(1000)
      .assert.title('Sycamore School - 1')
  },

  'Student Profile' : function (client) {
    client
      .url('http://localhost:8080/students.php')
      .assert.containsText('div#ccdiv', 'Search')
      .end();
  }
};
