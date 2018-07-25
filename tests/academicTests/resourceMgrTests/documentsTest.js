module.exports = {
    tags: ['academicTests', 'academicResourceMgrTests', 
        'academicResourceMgrDocumentsTest'],

    'Academic Resource Mgr Documents Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@resourceMgr')
            .click('@resourceMgr')
            .assert.visible('@resourceMgrDocuments')
            .click('@resourceMgrDocuments');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.resourceMgr.documents()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Resource Mgr/ Documents')

            .activeTab('by User')

            .assert.visible('@userLabel')
            .assert.containsText('@userLabel', 'User')

            .assert.visible('@userSelect')
            .assert.containsText('@userSelect', 'Choose User')
            .assert.attributeEquals('@userSelect', 'onchange', 'reDo()')

            .assert.visible('@reassignLabel')
            .assert.containsText('@reassignLabel', 'Reassign To')

            .assert.visible('@reassignSelect')
            .assert.containsText('@reassignSelect', 'Choose User')

            .assert.visible('@moveBtn')
            .assert.attributeEquals('@moveBtn', 'value', 'Move')

            .assert.visible('@checkboxHeader')
            .assert.attributeEquals('@checkboxHeader', 'onclick', 
                'SetChecked(); return false;')

            .assert.visible('@dateTimeHeader')
            .assert.containsText('@dateTimeHeader', 'Date/Time')

            .assert.visible('@filenameHeader')
            .assert.containsText('@filenameHeader', 'Filename')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description');

        client.frame(null);

        client.end();
    }
};
