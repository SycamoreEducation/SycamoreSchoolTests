module.exports = {
    tags: ['frontDeskTests', 'familyDirectoryTests', 'familyDirectorySearchTest'],

    'Family Directory Search Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@frontDesk')
            .click('@frontDesk')
            .assert.visible('@frontDeskFamilyDirectory')
            .click('@frontDeskFamilyDirectory')
        client.frame(null);

        client.frame(2);
        client.page.frontDesk.familyDirectory()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Front Desk/ Family Directory')

            .setValue('@inputField', 'Current')
            
            .click('@studentSearchBtn')

            .assert.visible('@searchName')

            .assert.visible('@searchAddress')

            .assert.visible('@searchInfo')

        client.frame(null)

        client.end();
    }
};
