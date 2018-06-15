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
            .assert.attributeEquals('@frontDesk', 'href', 
                page.url() + '/schoolmenu.php#')

            .assert.hidden('@frontDeskFamilyDirectory')
            .assert.hidden('@frontDeskEmployeeDirectory')
            .assert.hidden('@frontDeskClassroomDirectory')
            .assert.hidden('@frontDeskDepartments')
            .assert.hidden('@frontDeskFacility')

            .click('@frontDesk')

            .assert.visible('@frontDesk')
            
            .assert.visible('@frontDeskFamilyDirectory')
            .assert.containsText('@frontDeskFamilyDirectory', 
                'Family Directory')
            .assert.attributeEquals('@frontDeskFamilyDirectory', 'href', 
                page.url() + '/directory.php?task=view&grade=-1')

            .assert.visible('@frontDeskEmployeeDirectory')
            .assert.containsText('@frontDeskEmployeeDirectory', 
                'Employee Directory')
            .assert.attributeEquals('@frontDeskEmployeeDirectory', 'href', 
                page.url() + '/directory.php?task=staffphoto')

            .assert.visible('@frontDeskClassroomDirectory')
            .assert.containsText('@frontDeskClassroomDirectory', 
                'Classroom Directory')
            .assert.attributeEquals('@frontDeskClassroomDirectory', 'href', 
                page.url() + '/directory.php?task=classes')

            .assert.visible('@frontDeskDepartments')
            .assert.containsText('@frontDeskDepartments', 'Departments')
            .assert.attributeEquals('@frontDeskDepartments', 'href', 
                page.url() + '/departments.php?task=browse')

            .assert.visible('@frontDeskFacility')
            .assert.containsText('@frontDeskFacility', 'Facility')
            .assert.attributeEquals('@frontDeskFacility', 'href', 
                page.url() + '/facility.php')

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
