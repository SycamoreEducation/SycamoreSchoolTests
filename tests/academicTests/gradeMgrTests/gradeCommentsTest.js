module.exports = {
    tags: ['academicTests', 'academicGradeMgrTests', 
        'academicGradeMgrGradeCommentsTest'],

    'Academic Grade Mgr Grade Comments Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@gradeMgr')
            .click('@gradeMgr')
            .assert.visible('@gradeMgrGradeComments')
            .click('@gradeMgrGradeComments');
        client.frame(null);

        client.frame(2);
        client.page.academic.gradeMgr.gradeComments()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Academic/Grade Mgr/ Grade Comments')

            .activeTab('Common')

            .assert.visible('@addComment')
            .assert.attributeEquals('@addComment', 'value', 'Add Comment')
            .assert.attributeEquals('@addComment', 'onclick', 'addcomment()')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@commentsHeader')
            .assert.containsText('@commentsHeader', 'Comments');

        client.frame(null);

        client.end();
    }
};
