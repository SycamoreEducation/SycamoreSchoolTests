module.exports = {
    tags: ['academicTests', 'academicResourceMgrTests', 
        'academicResourceMgrOnlineTestsTest'],

    'Academic Resource Mgr Online Tests Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@resourceMgr')
            .click('@resourceMgr')
            .assert.visible('@resourceMgrOnlineTests')
            .click('@resourceMgrOnlineTests');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.resourceMgr.onlineTests()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Resource Mgr/ Online Tests')

            .activeTab('by Teacher')

            .assert.visible('@teacherLabel')
            .assert.containsText('@teacherLabel', 'Teacher')

            .assert.visible('@teacherSelect')
            .assert.containsText('@teacherSelect', 'Teacher')
            .assert.attributeEquals('@teacherSelect', 'onchange', 'reDo()')

            .assert.visible('@checkboxHeader')
            .assert.attributeEquals('@checkboxHeader', 'onclick', 'SetChecked(); return false;')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@titleHeader')
            .assert.containsText('@titleHeader', 'Title')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description');

        client.frame(null);

        client.end();
    }
};
