module.exports = {
  'Login': function(client) {
    client
      .url(client.launch_url)
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

  'School Home': function(client) {
    client.frame(1);
    client.page.menu()
      .assert.containsText('@home', 'School Home')
    client.frame(null);
  },

  'Student Profile': function(client) {
    client.page.studentProfile().navigate()
      .assert.containsText('@searchBar', 'Search');

    client
      .end();
  }
};
