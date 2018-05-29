module.exports = {
    tags: ['myResourcesTest', 'menuTests'],

    'My Resources Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@myResources')
            .assert.containsText('@myResources', '\273 My Resources')
            .assert.attributeEquals('@myResources', 'href', page.url() + '/schoolmenu.php#')

            .assert.hidden('@myResourcesNews')
            .assert.hidden('@myResourcesPhotos')
            .assert.hidden('@myResourcesDocuments')
            .assert.hidden('@myResourcesOnlineTests')
            .assert.hidden('@myResourcesGradeBook')

            .click('@myResources')
            .assert.visible('@myResourcesNews')
            .assert.visible('@myResourcesPhotos')
            .assert.visible('@myResourcesDocuments')
            .assert.visible('@myResourcesOnlineTests')
            .assert.visible('@myResourcesGradeBook')
            .assert.containsText('@myResourcesNews', 'News')
            .assert.containsText('@myResourcesPhotos', 'Photos')
            .assert.containsText('@myResourcesDocuments', 'Documents')
            .assert.containsText('@myResourcesOnlineTests', 'Online Tests')
            .assert.containsText('@myResourcesGradeBook', 'Grade Book')
            .assert.attributeEquals('@myResourcesNews', 'href', page.url() + '/cloudnews.php')
            .assert.attributeEquals('@myResourcesPhotos', 'href', page.url() + '/cloudphotos.php')
            .assert.attributeEquals('@myResourcesDocuments', 'href', page.url() + '/clouddocuments.php')
            .assert.attributeEquals('@myResourcesOnlineTests', 'href', page.url() + '/myonlinetests.php')
            .assert.attributeEquals('@myResourcesGradeBook', 'href', page.url() + '/mygradebooks.php')

            .click('@myResources')
            .assert.hidden('@myResourcesNews')
            .assert.hidden('@myResourcesPhotos')
            .assert.hidden('@myResourcesDocuments')
            .assert.hidden('@myResourcesOnlineTests')
            .assert.hidden('@myResourcesGradeBook')

        client.frame(null);

        client.end();
    }
};
