module.exports = {
    tags: ['academicTests', 'academicIEPMgrTests', 'IEPMgrReportsTests',
        'IEPMgrReportsCustomTest'],

    'Academic IEP Mgr Reports Custom Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@iepMgr')
            .click('@iepMgr')
            .assert.visible('@iepMgrReports')
            .click('@iepMgrReports');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.IEPMgr.reports()
            .waitForElementVisible('@customTab', 5000)
            .click('@customTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/IEP/ Reports')

            .activeTab('Custom')

            .assert.visible('@customTab')
            .assert.containsText('@customTab', 'Custom')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name');

        client.frame(null);

        client.end();
    }
};
