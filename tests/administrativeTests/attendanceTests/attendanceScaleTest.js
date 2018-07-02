module.exports = {
    tags: ['administrativeTests', 'attendanceTests', 
        'attendanceScaleTest'],

    'Attendance Scale Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@attendance')
            .click('@attendance')
            .assert.visible('@attendanceScale')
            .click('@attendanceScale')
        client.frame(null);

        client.frame(2);
        client.page.administrative.attendance.attendanceScale()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Attendance/ Attendance Scale')

            .activeTab('Attendance')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@upperHeader')
            .assert.containsText('@upperHeader', 'Upper')

            .assert.visible('@lowerHeader')
            .assert.containsText('@lowerHeader', 'Lower')

            .assert.visible('@valueHeader')
            .assert.containsText('@valueHeader', 'Value')

            .assert.visible('@labelHeader')
            .assert.containsText('@labelHeader', 'Label')

        client.frame(null)

        client.end();
    }
};
