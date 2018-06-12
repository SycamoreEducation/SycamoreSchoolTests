module.exports = {
    tags: ['frontDeskTest', 'menuTests'],

    'Front Desk Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@frontDesk')
            .assert.containsText('@frontDesk', '\273 Front Desk')
            .assert.attributeEquals('@frontDesk', 'href', page.url() + '/schoolmenu.php#')

            .assert.hidden('@frontDeskFamilyDirectory')
            .assert.hidden('@frontDeskEmployeeDirectory')
            .assert.hidden('@frontDeskClassroomDirectory')
            .assert.hidden('@frontDeskDepartments')
            .assert.hidden('@frontDeskFacility')

            .click('@frontDesk')

            .assert.visible('@frontDesk')
            .assert.visible('@frontDeskFamilyDirectory')
            .assert.visible('@frontDeskEmployeeDirectory')
            .assert.visible('@frontDeskClassroomDirectory')
            .assert.visible('@frontDeskDepartments')
            .assert.visible('@frontDeskFacility')

            .assert.containsText('@frontDeskFamilyDirectory', 'Family Directory')
            .assert.containsText('@frontDeskEmployeeDirectory', 'Employee Directory')
            .assert.containsText('@frontDeskClassroomDirectory', 'Classroom Directory')
            .assert.containsText('@frontDeskDepartments', 'Departments')
            .assert.containsText('@frontDeskFacility', 'Facility')

            .assert.attributeEquals('@frontDeskFamilyDirectory', 'href', page.url() + '/directory.php?task=view&grade=-1')
            .assert.attributeEquals('@frontDeskEmployeeDirectory', 'href', page.url() + '/directory.php?task=staffphoto')
            .assert.attributeEquals('@frontDeskClassroomDirectory', 'href', page.url() + '/directory.php?task=classes')
            .assert.attributeEquals('@frontDeskDepartments', 'href', page.url() + '/departments.php?task=browse')
            .assert.attributeEquals('@frontDeskFacility', 'href', page.url() + '/facility.php')

            .click('@frontDesk')

            .assert.visible('@frontDesk')

            .assert.hidden('@frontDeskFamilyDirectory')
            .assert.hidden('@frontDeskEmployeeDirectory')
            .assert.hidden('@frontDeskClassroomDirectory')
            .assert.hidden('@frontDeskDepartments')
            .assert.hidden('@frontDeskFacility')

        client.frame(null);

        client.end();
    }
};
