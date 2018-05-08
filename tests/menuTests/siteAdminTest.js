module.exports = {
    tags: ['siteAdminTest', 'menuTests'],

    'Site Admin Menu Test': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .schoolLogin(username, password, schoolID);

        client.frame(1);
        client.page.menu()
            .assert.visible('@siteAdmin')
            .assert.containsText('@siteAdmin', '\273 Site Admin')
            .assert.attributeEquals('@siteAdmin', 'href', 'http://web/schoolmenu.php#')

            .assert.hidden('@information')
            .assert.hidden('@configuration')
            .assert.hidden('@subscription')
            .assert.hidden('@permissions')
            .assert.hidden('@emailAccounts')
            .assert.hidden('@yearEndCloseout')
            .assert.hidden('@systemLogs')
            .assert.hidden('@siteUsage')
            .assert.hidden('@dailyOverview')
            .assert.hidden('@securityLogs')
            .assert.hidden('@connections')
            .assert.hidden('@integrations')
            .assert.hidden('@webHooks')
            .assert.hidden('@importData')
            .assert.hidden('@migrationWizard')
            .assert.hidden('@studentPhotos')
            .assert.hidden('@employeePhotos')
            .assert.hidden('@miscellaneous')

            .click('@siteAdmin')
            .assert.visible('@information')
            .assert.visible('@configuration')
            .assert.visible('@subscription')
            .assert.visible('@permissions')
            .assert.visible('@emailAccounts')
            .assert.visible('@yearEndCloseout')
            .assert.visible('@systemLogs')
            .assert.visible('@connections')
            .assert.visible('@importData')
            .assert.containsText('@information', 'Information')
            .assert.containsText('@configuration', 'Configuration')
            .assert.containsText('@subscription', 'Subscription')
            .assert.containsText('@permissions', 'Permissions')
            .assert.containsText('@emailAccounts', 'Email Accounts')
            .assert.containsText('@yearEndCloseout', 'Year End Closeout')
            .assert.containsText('@systemLogs', 'System Logs')
            .assert.containsText('@connections', 'Connections')
            .assert.containsText('@importData', 'Import Data')
            .assert.attributeEquals('@information', 'href', 'http://web/schoolinfo.php')
            .assert.attributeEquals('@configuration', 'href', 'http://web/schoolcfg.php')
            .assert.attributeEquals('@subscription', 'href', 'http://web/schoolsubscription.php')
            .assert.attributeEquals('@permissions', 'href', 'http://web/usersecurity.php')
            .assert.attributeEquals('@emailAccounts', 'href', 'http://web/emailaccounts.php')
            .assert.attributeEquals('@yearEndCloseout', 'href', 'http://web/endofyear.php')
            .assert.attributeEquals('@systemLogs', 'href', 'http://web/schoolmenu.php#')
            .assert.attributeEquals('@connections', 'href', 'http://web/schoolmenu.php#')
            .assert.attributeEquals('@importData', 'href', 'http://web/schoolmenu.php#')

            .click('@systemLogs')
            .assert.visible('@siteUsage')
            .assert.visible('@dailyOverview')
            .assert.visible('@securityLogs')
            .assert.containsText('@siteUsage', 'Site Usage')
            .assert.containsText('@dailyOverview', 'Daily Overview')
            .assert.containsText('@securityLogs', 'Security Logs')
            .assert.attributeEquals('@siteUsage', 'href', 'http://web/usage.php')
            .assert.attributeEquals('@dailyOverview', 'href', 'http://web/overview.php')
            .assert.attributeEquals('@securityLogs', 'href', 'http://web/securitylogs.php')

            .click('@systemLogs')
            .assert.hidden('@siteUsage')
            .assert.hidden('@dailyOverview')
            .assert.hidden('@securityLogs')

            .click('@connections')
            .assert.visible('@integrations')
            .assert.visible('@webHooks')
            .assert.containsText('@integrations', 'Integrations')
            .assert.containsText('@webHooks', 'Web Hooks')
            .assert.attributeEquals('@integrations', 'href', 'http://web/schoolcfg.php?view=integration')
            .assert.attributeEquals('@webHooks', 'href', 'http://web/webhooks.php')

            .click('@connections')
            .assert.hidden('@integrations')
            .assert.hidden('@webHooks')

            .click('@importData')
            .assert.visible('@migrationWizard')
            .assert.visible('@studentPhotos')
            .assert.visible('@employeePhotos')
            .assert.visible('@miscellaneous')
            .assert.containsText('@migrationWizard', 'Migration Wizard')
            .assert.containsText('@studentPhotos', 'Student Photos')
            .assert.containsText('@employeePhotos', 'Employee Photos')
            .assert.containsText('@miscellaneous', 'Miscellaneous')
            .assert.attributeEquals('@migrationWizard', 'href', 'http://web/importdatawizard.php')
            .assert.attributeEquals('@studentPhotos', 'href', 'http://web/Reports/0/importuserphotos.php?type=0')
            .assert.attributeEquals('@employeePhotos', 'href', 'http://web/Reports/0/importuserphotos.php?type=2')
            .assert.attributeEquals('@miscellaneous', 'href', 'http://web/importmisc.php')

            .click('@importData')
            .assert.hidden('@migrationWizard')
            .assert.hidden('@studentPhotos')
            .assert.hidden('@employeePhotos')
            .assert.hidden('@miscellaneous')

            .click('@siteAdmin')
            .assert.hidden('@information')
            .assert.hidden('@configuration')
            .assert.hidden('@subscription')
            .assert.hidden('@permissions')
            .assert.hidden('@emailAccounts')
            .assert.hidden('@yearEndCloseout')
            .assert.hidden('@systemLogs')
            .assert.hidden('@connections')
            .assert.hidden('@importData')

        client.frame(null);

        client.end();
    }
};
