module.exports = {
    tags: ['siteAdminTest', 'menuTests'],

    'Site Admin Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@siteAdmin')
            .assert.containsText('@siteAdmin', '\273 Site Admin')
            .assert.attributeEquals('@siteAdmin', 'href', page.url() + '/schoolmenu.php#')

            .assert.hidden('@siteAdminInformation')
            .assert.hidden('@siteAdminConfiguration')
            .assert.hidden('@siteAdminSubscription')
            .assert.hidden('@siteAdminPermissions')
            .assert.hidden('@siteAdminEmailAccounts')
            .assert.hidden('@siteAdminYearEndCloseout')

            .assert.hidden('@systemLogs')
            .assert.hidden('@systemLogsSiteUsage')
            .assert.hidden('@systemLogsDailyOverview')
            .assert.hidden('@systmeLogsSecurityLogs')

            .assert.hidden('@connections')
            .assert.hidden('@connectionsIntegrations')
            .assert.hidden('@connectionsWebHooks')

            .assert.hidden('@importData')
            .assert.hidden('@importDataMigrationWizard')
            .assert.hidden('@importDataStudentPhotos')
            .assert.hidden('@importDataEmployeePhotos')
            .assert.hidden('@importDataMiscellaneous')

            .click('@siteAdmin')
            .assert.visible('@siteAdminInformation')
            .assert.visible('@siteAdminConfiguration')
            .assert.visible('@siteAdminSubscription')
            .assert.visible('@siteAdminPermissions')
            .assert.visible('@siteAdminEmailAccounts')
            .assert.visible('@siteAdminYearEndCloseout')
            .assert.visible('@systemLogs')
            .assert.visible('@connections')
            .assert.visible('@importData')
            .assert.containsText('@siteAdminInformation', 'Information')
            .assert.containsText('@siteAdminConfiguration', 'Configuration')
            .assert.containsText('@siteAdminSubscription', 'Subscription')
            .assert.containsText('@siteAdminPermissions', 'Permissions')
            .assert.containsText('@siteAdminEmailAccounts', 'Email Accounts')
            .assert.containsText('@siteAdminYearEndCloseout', 'Year End Closeout')
            .assert.containsText('@systemLogs', 'System Logs')
            .assert.containsText('@connections', 'Connections')
            .assert.containsText('@importData', 'Import Data')
            .assert.attributeEquals('@siteAdminInformation', 'href', page.url() + '/schoolinfo.php')
            .assert.attributeEquals('@siteAdminConfiguration', 'href', page.url() + '/schoolcfg.php')
            .assert.attributeEquals('@siteAdminSubscription', 'href', page.url() + '/schoolsubscription.php')
            .assert.attributeEquals('@siteAdminPermissions', 'href', page.url() + '/usersecurity.php')
            .assert.attributeEquals('@siteAdminEmailAccounts', 'href', page.url() + '/emailaccounts.php')
            .assert.attributeEquals('@siteAdminYearEndCloseout', 'href', page.url() + '/endofyear.php')
            .assert.attributeEquals('@systemLogs', 'href', page.url() + '/schoolmenu.php#')
            .assert.attributeEquals('@connections', 'href', page.url() + '/schoolmenu.php#')
            .assert.attributeEquals('@importData', 'href', page.url() + '/schoolmenu.php#')

            .click('@systemLogs')
            .assert.visible('@systemLogsSiteUsage')
            .assert.visible('@systemLogsDailyOverview')
            .assert.visible('@systmeLogsSecurityLogs')
            .assert.containsText('@systemLogsSiteUsage', 'Site Usage')
            .assert.containsText('@systemLogsDailyOverview', 'Daily Overview')
            .assert.containsText('@systmeLogsSecurityLogs', 'Security Logs')
            .assert.attributeEquals('@systemLogsSiteUsage', 'href', page.url() + '/usage.php')
            .assert.attributeEquals('@systemLogsDailyOverview', 'href', page.url() + '/overview.php')
            .assert.attributeEquals('@systmeLogsSecurityLogs', 'href', page.url() + '/securitylogs.php')

            .click('@systemLogs')
            .assert.hidden('@systemLogsSiteUsage')
            .assert.hidden('@systemLogsDailyOverview')
            .assert.hidden('@systmeLogsSecurityLogs')

            .click('@connections')
            .assert.visible('@connectionsIntegrations')
            .assert.visible('@connectionsWebHooks')
            .assert.containsText('@connectionsIntegrations', 'Integrations')
            .assert.containsText('@connectionsWebHooks', 'Web Hooks')
            .assert.attributeEquals('@connectionsIntegrations', 'href', page.url() + '/schoolcfg.php?view=integration')
            .assert.attributeEquals('@connectionsWebHooks', 'href', page.url() + '/webhooks.php')

            .click('@connections')
            .assert.hidden('@connectionsIntegrations')
            .assert.hidden('@connectionsWebHooks')

            .click('@importData')
            .assert.visible('@importDataMigrationWizard')
            .assert.visible('@importDataStudentPhotos')
            .assert.visible('@importDataEmployeePhotos')
            .assert.visible('@importDataMiscellaneous')
            .assert.containsText('@importDataMigrationWizard', 'Migration Wizard')
            .assert.containsText('@importDataStudentPhotos', 'Student Photos')
            .assert.containsText('@importDataEmployeePhotos', 'Employee Photos')
            .assert.containsText('@importDataMiscellaneous', 'Miscellaneous')
            .assert.attributeEquals('@importDataMigrationWizard', 'href', page.url() + '/importdatawizard.php')
            .assert.attributeEquals('@importDataStudentPhotos', 'href', page.url() + '/Reports/0/importuserphotos.php?type=0')
            .assert.attributeEquals('@importDataEmployeePhotos', 'href', page.url() + '/Reports/0/importuserphotos.php?type=2')
            .assert.attributeEquals('@importDataMiscellaneous', 'href', page.url() + '/importmisc.php')

            .click('@importData')
            .assert.hidden('@importDataMigrationWizard')
            .assert.hidden('@importDataStudentPhotos')
            .assert.hidden('@importDataEmployeePhotos')
            .assert.hidden('@importDataMiscellaneous')

            .click('@siteAdmin')
            .assert.hidden('@siteAdminInformation')
            .assert.hidden('@siteAdminConfiguration')
            .assert.hidden('@siteAdminSubscription')
            .assert.hidden('@siteAdminPermissions')
            .assert.hidden('@siteAdminEmailAccounts')
            .assert.hidden('@siteAdminYearEndCloseout')

            .assert.hidden('@systemLogs')
            .assert.hidden('@systemLogsSiteUsage')
            .assert.hidden('@systemLogsDailyOverview')
            .assert.hidden('@systmeLogsSecurityLogs')

            .assert.hidden('@connections')
            .assert.hidden('@connectionsIntegrations')
            .assert.hidden('@connectionsWebHooks')

            .assert.hidden('@importData')
            .assert.hidden('@importDataMigrationWizard')
            .assert.hidden('@importDataStudentPhotos')
            .assert.hidden('@importDataEmployeePhotos')
            .assert.hidden('@importDataMiscellaneous')

        client.frame(null);

        client.end();
    }
};
