module.exports = {
    tags: ['frontDeskTests', 'classroomDirectoryTest'],

    'Classroom Directory Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@frontDesk')
            .click('@frontDesk')
            .assert.visible('@frontDeskClassroomDirectory')
            .click('@frontDeskClassroomDirectory')
        client.frame(null);

        client.frame(2);
        client.page.frontDesk.classroomDirectory()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Front Desk/ Classroom Directory')

            .activeTab('Open Classes')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

        client.frame(null)

        client.end();
    }
};
