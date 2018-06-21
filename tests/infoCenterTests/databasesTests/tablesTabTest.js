module.exports = {
    tags: ['infoCenterTests', 'infoCenterDatabasesTests', 'databasesTablesTest'],

    'Info Center Databases Tables Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@infoCenter')
            .click('@infoCenter')
            .assert.visible('@infoCenterDatabases')
            .click('@infoCenterDatabases')
        client.frame(null);

        client.frame(2);
        client.page.infoCenter.databases()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Info Center/ Databases')

            .activeTab('Tables')

            .assert.visible('@tableNameHeader')
            .assert.containsText('@tableNameHeader', 'Table Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

        client.frame(null)

        client.end();
    }
};
