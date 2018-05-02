module.exports = {
  tags: ['loginSecondaryNoInput', 'loginTests'],

  'Login Secondary No Input Test': (client) => {

    const page = client.page.loginSecondary();

    const username = '';
    const password = '';

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
      .assert.containsText('@toast', 'Please make sure all fields have been filled out');

    client.end();
  }
};