module.exports = {
    tags: ['administrativeTests', 'attendanceTests', 
        'attendanceRecordTypesTest'],

    'Attendance Record Types Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@attendance')
            .click('@attendance')
            .assert.visible('@attendanceRecordTypes')
            .click('@attendanceRecordTypes')
        client.frame(null);

        client.frame(2);
        client.page.administrative.attendance.recordTypes()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.containsText('@breadcrumb', 
                'Administrative/Attendance/ Record Types')

            .activeTab('Current')

            .assert.visible('@newTypeBtn')
            .assert.attributeEquals('@newTypeBtn', 'value', 'New Type')
            .assert.attributeEquals('@newTypeBtn', 'onclick', 'addtype()')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

        client.frame(null)

        client.end();
    }
};
