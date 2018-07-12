module.exports = {
    tags: ['administrativeTests', 'humanResourcesTests', 
        'humanResourcesPositionsTest'],

    'Human Resources Positions Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@humanReources')
            .click('@humanReources')
            .assert.visible('@humanResourcesPositions')
            .click('@humanResourcesPositions')
        client.frame(null);

        client.frame(2);
        client.pause(100);
        client.page.administrative.humanResources.positions()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Human Resources/ Positions')

            .activeTab('Current')

            .assert.visible('@newPositionBtn')
            .assert.attributeEquals('@newPositionBtn', 'value', 'New Position')
            .assert.attributeEquals('@newPositionBtn', 'onclick', 
                'addposition()')

            .assert.visible('@codeHeader')
            .assert.containsText('@codeHeader', 'Code')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

        client.frame(null)

        client.end();
    }
};
