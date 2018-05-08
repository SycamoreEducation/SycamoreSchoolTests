module.exports = {
    tags: ['frontDeskTest', 'menuTests'],

    'Front Desk Test': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .schoolLogin(username, password, schoolID);

        client.frame(1);
        client.page.menu()
            .assert.visible('@frontDesk')
            .assert.containsText('@frontDesk', '\273 Front Desk')
            .assert.attributeEquals('@frontDesk', 'href', 'http://web/schoolmenu.php#')

            .assert.hidden('@frontDeskFamilyDirectory')
            .assert.hidden('@frontDeskEmployeeDirectory')
            .assert.hidden('@frontDeskClassroomDirectory')
            .assert.hidden('@frontDeskDepartments')

            .click('@frontDesk')

            .assert.visible('@frontDesk')
            .assert.visible('@frontDeskFamilyDirectory')
            .assert.visible('@frontDeskEmployeeDirectory')
            .assert.visible('@frontDeskClassroomDirectory')
            .assert.visible('@frontDeskDepartments')

            .assert.containsText('@frontDeskFamilyDirectory', 'Family Directory')
            .assert.containsText('@frontDeskEmployeeDirectory', 'Employee Directory')
            .assert.containsText('@frontDeskClassroomDirectory', 'Classroom Directory')
            .assert.containsText('@frontDeskDepartments', 'Departments')

            .assert.attributeEquals('@frontDeskFamilyDirectory', 'href', 'http://web/directory.php?task=view&grade=-1')
            .assert.attributeEquals('@frontDeskEmployeeDirectory', 'href', 'http://web/directory.php?task=staffphoto')
            .assert.attributeEquals('@frontDeskClassroomDirectory', 'href', 'http://web/directory.php?task=classes')
            .assert.attributeEquals('@frontDeskDepartments', 'href', 'http://web/departments.php?task=browse')

            .click('@frontDesk')

            .assert.visible('@frontDesk')

            .assert.hidden('@frontDeskFamilyDirectory')
            .assert.hidden('@frontDeskEmployeeDirectory')
            .assert.hidden('@frontDeskClassroomDirectory')
            .assert.hidden('@frontDeskDepartments')

        client.frame(null);

        client.end();
    }
};
