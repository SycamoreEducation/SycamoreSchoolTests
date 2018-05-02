module.exports = {
  tags: ['login', 'loginTests'],

  'Login Test': (client) => {

    const page = client.page.login();

    const schoolID = '1';
    const username = 'superuser';
    const password = 'guest';

    page.navigate()
      .assert.visible('@schoolField')
      .assert.visible('@usernameField')
      .assert.visible('@passwordField')
      .assert.visible('@loginButton')
      .assert.elementNotPresent('@toast')

      .setValue('@schoolField', schoolID)
      .setValue('@usernameField', username)
      .setValue('@passwordField', password)

      .assert.value('@schoolField', schoolID)
      .assert.value('@usernameField', username)
      .assert.value('@passwordField', password)

      .click('@loginButton');

    client.frame(1);
    client.page.menu()
      .assert.containsText('@home', 'School Home')
    client.frame(null);

    client.page.studentProfile().navigate()
      .assert.containsText('@searchBar', 'Search');

    client.end();
  }
};