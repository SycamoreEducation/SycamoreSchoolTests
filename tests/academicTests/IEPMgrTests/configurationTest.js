module.exports = {
    tags: ['academicTests', 'academicIEMMgrTests', 
        'academicIEPMgrConfigurationTest'],

    'Academic IEP Mgr Configuration Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@iepMgr')
            .click('@iepMgr')
            .assert.visible('@iepMgrConfiguration')
            .click('@iepMgrConfiguration');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.IEPMgr.configuration()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/IEP Mgr/ Configuration')

            .activeTab('Options')

            .assert.visible('@updateBtn')
            .assert.attributeEquals('@updateBtn', 'value', 'Update')

            .assert.visible('@optionsHeader')
            .assert.containsText('@optionsHeader', 'Progress Report Options')

            .assert.visible('@headerLabel')
            .assert.containsText('@headerLabel', 'Header')

            .assert.visible('@headerInput')

            .assert.visible('@footerLabel')
            .assert.containsText('@footerLabel', 'Footer')

            .assert.visible('@footerInput')

        client.frame(null);

        client.end();
    }
};
