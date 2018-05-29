module.exports = {
    tags: ['emailTest', 'menuTests'],

    'Email Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@email')
            .assert.containsText('@email', '\273 Email')
            .assert.attributeEquals('@email', 'href', page.url() + '/schoolmenu.php#')

            .assert.hidden('@emailInbox')
            .assert.hidden('@emailFolders')
            .assert.hidden('@emailCompose')
            .assert.hidden('@emailPreferences')
            .assert.hidden('@emailAccounts')

            .click('@email')
            .assert.visible('@emailInbox')
            .assert.visible('@emailFolders')
            .assert.visible('@emailCompose')
            .assert.visible('@emailPreferences')
            .assert.visible('@emailAccounts')
            .assert.containsText('@emailInbox', 'Inbox')
            .assert.containsText('@emailFolders', 'Folders')
            .assert.containsText('@emailCompose', 'Compose')
            .assert.containsText('@emailPreferences', 'Preferences')
            .assert.containsText('@emailAccounts', 'Accounts')
            .assert.attributeEquals('@emailInbox', 'href', page.url() + '/rclogin.php?_task=mail')
            .assert.attributeEquals('@emailFolders', 'href', page.url() + '/rclogin.php?_task=settings&_action=folders')
            .assert.attributeEquals('@emailCompose', 'href', page.url() + '/rclogin.php?_task=mail&_action=compose')
            .assert.attributeEquals('@emailPreferences', 'href', page.url() + '/rclogin.php?_task=settings')
            .assert.attributeEquals('@emailAccounts', 'href', page.url() + '/rcaccounts.php')

            .click('@email')
            .assert.hidden('@emailInbox')
            .assert.hidden('@emailFolders')
            .assert.hidden('@emailCompose')
            .assert.hidden('@emailPreferences')
            .assert.hidden('@emailAccounts')

        client.frame(null);

        client.end();
    }
};
