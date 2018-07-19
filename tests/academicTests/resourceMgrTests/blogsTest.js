module.exports = {
    tags: ['academicTests', 'academicResourceMgrTests', 
        'academicResourceMgrBlogsTest'],

    'Academic Resource Mgr Blogs Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@resourceMgr')
            .click('@resourceMgr')
            .assert.visible('@resourceMgrBlogs')
            .click('@resourceMgrBlogs');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.resourceMgr.blogs()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Resource Mgr/ Blogs')

            .activeTab('by Teacher')

            .assert.visible('@teacherLabel')
            .assert.containsText('@teacherLabel', 'Teacher')

            .assert.visible('@teacherSelect')
            .assert.containsText('@teacherSelect', 'Choose Teacher')
            .assert.attributeEquals('@teacherSelect', 'onchange', 'reDo()')

            .assert.visible('@deleteBtn')
            .assert.attributeEquals('@deleteBtn', 'value', 'Delete')
            .assert.attributeEquals('@deleteBtn', 'onclick', 'dodelete()')

            .assert.visible('@checkboxHeader')
            .assert.attributeEquals('@checkboxHeader', 'onclick', 
                'SetChecked(); return false;')

            .assert.visible('@updatedHeader')
            .assert.containsText('@updatedHeader', 'Updated')

            .assert.visible('@subjectHeader')
            .assert.containsText('@subjectHeader', 'Subject');

        client.frame(null);

        client.end();
    }
};
