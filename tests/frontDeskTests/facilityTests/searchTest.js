module.exports = {
    tags: ['frontDeskTests', 'facilityTests', 'searchTabTest'],

    'Facility Search Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@frontDesk')
            .click('@frontDesk')
            .assert.visible('@frontDeskFacility')
            .click('@frontDeskFacility');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.frontDesk.facility()
            .waitForElementVisible('@searchTab', 5000)
            .click('@searchTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Utilities/Facility Mgr/ Search')

            .activeTab('Search')

            .assert.visible('@browseTab')
            .assert.containsText('@browseTab', 'Browse')

            .assert.visible('@plannerTab')
            .assert.containsText('@plannerTab', 'Planner')

            .assert.visible('@activitiesTab')
            .assert.containsText('@activitiesTab', 'Activities')

            .assert.visible('@searchBtn')
            .assert.attributeEquals('@searchBtn', 'value', 'Search')
            .assert.attributeEquals('@searchBtn', 'type', 'submit')

            .assert.visible('@nameLabel')
            .assert.containsText('@nameLabel', 'Name')

            .assert.visible('@nameInput')
            .assert.attributeEquals('@nameInput', 'type', 'text')

            .assert.visible('@descriptionLabel')
            .assert.containsText('@descriptionLabel', 'Description')

            .assert.visible('@descriptionInput')
            .assert.attributeEquals('@descriptionInput', 'type', 'text')

            .assert.visible('@buildingLabel')
            .assert.containsText('@buildingLabel', 'Building')

            .assert.visible('@buildingInput')
            .assert.containsText('@buildingInput', 'Choose Building')

            .assert.visible('@roomLabel')
            .assert.containsText('@roomLabel', 'Room #')

            .assert.visible('@roomInput')
            .assert.attributeEquals('@roomInput', 'type', 'text')

            .assert.visible('@capacityLabel')
            .assert.containsText('@capacityLabel', 'Capacity')

            .assert.visible('@capacityInput')
            .assert.attributeEquals('@capacityInput', 'type', 'text')

            .assert.visible('@ownerLabel')
            .assert.containsText('@ownerLabel', 'Owner')

            .assert.visible('@ownerInput')
            .assert.containsText('@ownerInput', 'Choose User');

        client.frame(null);

        client.end();
    }
};
