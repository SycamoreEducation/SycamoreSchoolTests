module.exports = {
  tags: ['loginSecondaryInvalidUsername', 'loginTests'],

  'Login Secondary Invalid Username Test': (client) => {

    const page = client.page.loginSecondary();

    const username = 'superuse';
    const password = 'guest';

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
      .assert.containsText('@toast', 'Non Active User: 1 - ' + username);

    client.end();
  }
};