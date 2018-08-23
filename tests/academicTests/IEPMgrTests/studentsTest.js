module.exports = {
    tags: ['academicTests', 'academicIEMMgrTests', 
        'academicIEPMgrStudentsTest'],

    'Academic IEP Mgr Students Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@iepMgr')
            .click('@iepMgr')
            .assert.visible('@iepMgrStudents')
            .click('@iepMgrStudents');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.IEPMgr.students()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/IEP Mgr/ Students')

            .activeTab('Students')

            .assert.visible('@addBtn')
            .assert.attributeEquals('@addBtn', 'value', ' Add ')
            .assert.attributeEquals('@addBtn', 'onclick', 'showstudents()')

            .assert.visible('@listAll')
            .assert.containsText('@listAll', 'List All')

            .assert.visible('@a')
            .assert.containsText('@a', 'A')

            .assert.visible('@b')
            .assert.containsText('@b', 'B')

            .assert.visible('@c')
            .assert.containsText('@c', 'C')

            .assert.visible('@d')
            .assert.containsText('@d', 'D')

            .assert.visible('@e')
            .assert.containsText('@e', 'E')

            .assert.visible('@f')
            .assert.containsText('@f', 'F')

            .assert.visible('@g')
            .assert.containsText('@g', 'G')

            .assert.visible('@h')
            .assert.containsText('@h', 'H')

            .assert.visible('@i')
            .assert.containsText('@i', 'I')

            .assert.visible('@j')
            .assert.containsText('@j', 'J')

            .assert.visible('@k')
            .assert.containsText('@k', 'K')

            .assert.visible('@l')
            .assert.containsText('@l', 'L')

            .assert.visible('@m')
            .assert.containsText('@m', 'M')

            .assert.visible('@n')
            .assert.containsText('@n', 'N')

            .assert.visible('@o')
            .assert.containsText('@o', 'O')

            .assert.visible('@p')
            .assert.containsText('@p', 'P')

            .assert.visible('@q')
            .assert.containsText('@q', 'Q')

            .assert.visible('@r')
            .assert.containsText('@r', 'R')

            .assert.visible('@s')
            .assert.containsText('@s', 'S')

            .assert.visible('@t')
            .assert.containsText('@t', 'T')

            .assert.visible('@u')
            .assert.containsText('@u', 'U')

            .assert.visible('@v')
            .assert.containsText('@v', 'V')

            .assert.visible('@w')
            .assert.containsText('@w', 'W')

            .assert.visible('@x')
            .assert.containsText('@x', 'X')

            .assert.visible('@y')
            .assert.containsText('@y', 'Y')

            .assert.visible('@z')
            .assert.containsText('@z', 'Z')

            .assert.visible('@checkboxHeader')
            .assert.attributeEquals('@checkboxHeader', 'onclick',
                'SetChecked(); return false;')

            .assert.visible('@studentCodeHeader')
            .assert.containsText('@studentCodeHeader', 'Student Code')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@gradeHeader')
            .assert.containsText('@expireHeader', 'Expire')

            .assert.visible('@daysHeader')
            .assert.containsText('@daysHeader', 'Days');

        client.frame(null);

        client.end();
    }
};
