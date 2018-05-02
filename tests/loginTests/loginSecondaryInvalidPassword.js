module.exports = {
  tags: ['loginSecondaryInvalidPassword', 'loginTests'],

  'Login Secondary Invalid Password Test': (client) => {

    const page = client.page.loginSecondary();

    const username = 'superuser';
    const password = 'gues';
    const schoolID = '1';

    page.navigate()
      .assert.visible('@usernameField')
      .assert.visible('@passwordField')
      .assert.visible('@loginButton')
      .assert.elementNotPresent('@toast')

      .setValue('@usernameField', username)
      .setValue('@passwordField', password)

      .assert.value('@usernameField', username)
      .assert.value('@passwordField', password)

      .click('@loginButton')

      .waitForElementVisible('@toast', 45000, false)
      .assert.visible('@toast')
      .assert.containsText('@toast', 'U/P Incorrect: ' + schoolID + ' - ' + username);

    client.end();
  }
};