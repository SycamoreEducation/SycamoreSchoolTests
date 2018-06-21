module.exports = {
    tags: ['schoolTests', 'multimediaTests', 'multimediaVideoTest'],

    'School Multimedia Video Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@school')
            .click('@school')
            .assert.visible('@schoolMultimedia')
            .click('@schoolMultimedia')
        client.frame(null);

        client.frame(2);
        client.page.school.multimedia()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'School/ Multimedia')

            .activeTab('Video')
            
            .assert.visible('@audioTab')
            .assert.containsText('@audioTab', 'Audio')

            .assert.visible('@groupsBtn')
            .assert.attributeEquals('@groupsBtn', 'value', 'Groups')
            .assert.attributeEquals('@groupsBtn', 'onclick', 'groups()')

            .assert.visible('@addVideoLinkBtn')
            .assert.attributeEquals('@addVideoLinkBtn', 'value', 'Add Video Link')
            .assert.attributeEquals('@addVideoLinkBtn', 'onclick', 'addmedia(0)')

            .assert.visible('@date')
            .assert.containsText('@date', 'Date')

            .assert.visible('@name')
            .assert.containsText('@name', 'Name')

            .assert.visible('@source')
            .assert.containsText('@source', 'Source')

            .assert.visible('@comments')
            .assert.visible('@comments', 'Comments')

        client.frame(null)

        client.end();
    }
};
