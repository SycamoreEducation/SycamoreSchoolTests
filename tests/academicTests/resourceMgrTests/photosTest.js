module.exports = {
    tags: ['academicTests', 'academicResourceMgrTests', 
        'academicResourceMgrPhotosTest'],

    'Academic Resource Mgr Photos Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@resourceMgr')
            .click('@resourceMgr')
            .assert.visible('@resourceMgrPhotos')
            .click('@resourceMgrPhotos');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.resourceMgr.photos()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Resource Mgr/ Photos')

            .activeTab('by Teacher')

            .assert.visible('@teacherLabel')
            .assert.containsText('@teacherLabel', 'Teacher')

            .assert.visible('@teacherSelect')
            .assert.containsText('@teacherSelect', 'Choose Teacher')

            .assert.visible('@reassignLabel')
            .assert.containsText('@reassignLabel', 'Reassign To')

            .assert.visible('@reassignSelect')
            .assert.containsText('@reassignSelect', 'Choose User')

            .assert.visible('@moveBtn')
            .assert.attributeEquals('@moveBtn', 'value', 'Move')

            .assert.visible('@checkboxHeader')
            .assert.attributeEquals('@checkboxHeader', 'onclick', 
                'SetChecked(); return false;')

            .assert.visible('@titleHeader')
            .assert.containsText('@titleHeader', 'Title');

        client.frame(null);

        client.end();
    }
};
