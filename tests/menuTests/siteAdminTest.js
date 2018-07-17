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
            .assert.attributeEquals('@siteAdmin', 'href', page.url() + 
                '/schoolmenu.php#')

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
            .assert.containsText('@siteAdminInformation', 'Information')
            .assert.attributeEquals('@siteAdminInformation', 'href', page.url() 
                + '/schoolinfo.php')
            
            .assert.visible('@siteAdminConfiguration')
            .assert.containsText('@siteAdminConfiguration', 'Configuration')
            .assert.attributeEquals('@siteAdminConfiguration', 'href', 
                page.url() + '/schoolcfg.php')
            
            .assert.visible('@siteAdminSubscription')
            .assert.containsText('@siteAdminSubscription', 'Subscription')
            .assert.attributeEquals('@siteAdminSubscription', 'href', page.url()
                + '/schoolsubscription.php')
            
            .assert.visible('@siteAdminPermissions')
            .assert.containsText('@siteAdminPermissions', 'Permissions')
            .assert.attributeEquals('@siteAdminPermissions', 'href', page.url() 
                + '/usersecurity.php')
            
            .assert.visible('@siteAdminEmailAccounts')
            .assert.containsText('@siteAdminEmailAccounts', 'Email Accounts')
            .assert.attributeEquals('@siteAdminEmailAccounts', 'href', 
                page.url() + '/emailaccounts.php')
            
            .assert.visible('@siteAdminYearEndCloseout')
            .assert.containsText('@siteAdminYearEndCloseout', 
                'Year End Closeout')
            .assert.attributeEquals('@siteAdminYearEndCloseout', 'href', 
                page.url() + '/endofyear.php')
            
            .assert.visible('@systemLogs')
            .assert.containsText('@systemLogs', 'System Logs')
            .assert.attributeEquals('@systemLogs', 'href', page.url() + 
                '/schoolmenu.php#')
            
            .assert.visible('@connections')
            .assert.containsText('@connections', 'Connections')
            .assert.attributeEquals('@connections', 'href', page.url() + 
                '/schoolmenu.php#')
            
            .assert.visible('@importData')
            .assert.containsText('@importData', 'Import Data')
            .assert.attributeEquals('@importData', 'href', page.url() + 
                '/schoolmenu.php#')

            .click('@systemLogs')
            .assert.visible('@systemLogsSiteUsage')
            .assert.containsText('@systemLogsSiteUsage', 'Site Usage')
            .assert.attributeEquals('@systemLogsSiteUsage', 'href', page.url() +
                '/usage.php')
            
            .assert.visible('@systemLogsDailyOverview')
            .assert.containsText('@systemLogsDailyOverview', 'Daily Overview')
            .assert.attributeEquals('@systemLogsDailyOverview', 'href', 
                page.url() + '/overview.php')
            
            .assert.visible('@systmeLogsSecurityLogs')
            .assert.containsText('@systmeLogsSecurityLogs', 'Security Logs')
            .assert.attributeEquals('@systmeLogsSecurityLogs', 'href', 
                page.url() + '/securitylogs.php')

            .click('@systemLogs')
            .assert.hidden('@systemLogsSiteUsage')
            .assert.hidden('@systemLogsDailyOverview')
            .assert.hidden('@systmeLogsSecurityLogs')

            .click('@connections')
            .assert.visible('@connectionsIntegrations')
            .assert.containsText('@connectionsIntegrations', 'Integrations')
            .assert.attributeEquals('@connectionsIntegrations', 'href', 
                page.url() + '/schoolcfg.php?view=integration')
            
            .assert.visible('@connectionsWebHooks')
            .assert.containsText('@connectionsWebHooks', 'Web Hooks')
            .assert.attributeEquals('@connectionsWebHooks', 'href', page.url() 
                + '/webhooks.php')

            .click('@connections')
            .assert.hidden('@connectionsIntegrations')
            .assert.hidden('@connectionsWebHooks')

            .click('@importData')
            .assert.visible('@importDataMigrationWizard')
            .assert.containsText('@importDataMigrationWizard', 
                'Migration Wizard')
            .assert.attributeEquals('@importDataMigrationWizard', 'href', 
                page.url() + '/importdatawizard.php')
            
            .assert.visible('@importDataStudentPhotos')
            .assert.containsText('@importDataStudentPhotos', 'Student Photos')
            .assert.attributeEquals('@importDataStudentPhotos', 'href', 
                page.url() + '/Reports/0/importuserphotos.php?type=0')
            
            .assert.visible('@importDataEmployeePhotos')
            .assert.containsText('@importDataEmployeePhotos', 'Employee Photos')
            .assert.attributeEquals('@importDataEmployeePhotos', 'href', 
                page.url() + '/Reports/0/importuserphotos.php?type=2')
            
            .assert.visible('@importDataMiscellaneous')
            .assert.containsText('@importDataMiscellaneous', 'Miscellaneous')
            .assert.attributeEquals('@importDataMiscellaneous', 'href', 
                page.url() + '/importmisc.php')

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
            .assert.hidden('@importDataMiscellaneous');

        client.frame(null);

        client.end();
    }
};
