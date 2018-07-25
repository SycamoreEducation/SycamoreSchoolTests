module.exports = {
    tags: ['academicTests', 'academicIEMMgrTests', 
        'academicIEPMgrCoordinatorsTest'],

    'Academic IEP Mgr Coordinators Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@iepMgr')
            .click('@iepMgr')
            .assert.visible('@iepMgrCoordinators')
            .click('@iepMgrCoordinators');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.IEPMgr.coordinators()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/IEP Mgr/ Coordinators')

            .activeTab('Members')

            .assert.visible('@manageBtn')
            .assert.attributeEquals('@manageBtn', 'value', ' Manage ')
            .assert.attributeEquals('@manageBtn', 'onclick', 'modifyteam()')

            .assert.visible('@PANHeader')
            .assert.attributeEquals('@PANHeader', 'src', page.url() + 
                '/images/pan.gif')
            .assert.attributeEquals('@PANHeader', 'onclick', 'doBlast()')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@titleHeader')
            .assert.containsText('@titleHeader', 'Title')

            .assert.visible('@phoneHeader')
            .assert.containsText('@phoneHeader', 'Phone');

        client.frame(null);

        client.end();
    }
};
