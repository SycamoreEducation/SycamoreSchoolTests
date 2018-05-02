module.exports = {
  tags: ['loginInvalidPasswordTest', 'loginTests'],

  'Login Invalid Password': (client) => {

    const page = client.page.login();

    const schoolID = '1';
    const username = 'superuser';
    const password = 'gues';

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

      .click('@loginButton')

      .waitForElementVisible('@toast', 45000, false)
      .assert.visible('@toast')
      .assert.containsText('@toast', 'U/P Incorrect: ' + schoolID + ' - ' + username);

    client.end();
  }
};