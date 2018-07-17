module.exports = {
    tags: ['communicationTests', 'notificationListsTests', 
        'notificationListsParentsTabTest'],

    'Notification Lists Parents Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@communication')
            .click('@communication')
            .assert.visible('@communicationNotificationLists')
            .click('@communicationNotificationLists');
        client.frame(null);

        client.frame(2);
        client.page.communication.notificationList()
            .waitForElementVisible('@parentsTab', 5000)
            .click('@parentsTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Communication/ Notification Lists')

            .activeTab('Parents')

            .assert.visible('@employeesTab')
            .assert.containsText('@employeesTab', 'Employees')

            .assert.visible('@studentsTab')
            .assert.containsText('@studentsTab', 'Students')

            .assert.visible('@newListBtn')
            .assert.attributeEquals('@newListBtn', 'value', ' New List ')
            .assert.attributeEquals('@newListBtn', 'onclick', 'addlist(1)')
            
            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@optionsHeader')
            .assert.containsText('@optionsHeader', 'Options')

            .assert.visible('@countHeader')
            .assert.containsText('@countHeader', 'Count');

        client.frame(null);

        client.end();
    }
};
