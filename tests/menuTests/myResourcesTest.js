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
            .assert.attributeEquals('@myResources', 'href', page.url() + 
                '/schoolmenu.php#')

            .assert.hidden('@myResourcesNews')
            .assert.hidden('@myResourcesPhotos')
            .assert.hidden('@myResourcesDocuments')
            .assert.hidden('@myResourcesOnlineTests')
            .assert.hidden('@myResourcesGradeBook')

            .click('@myResources')
            .assert.visible('@myResourcesNews')
            .assert.containsText('@myResourcesNews', 'News')
            .assert.attributeEquals('@myResourcesNews', 'href', page.url() + 
                '/cloudnews.php')
            
            .assert.visible('@myResourcesPhotos')
            .assert.containsText('@myResourcesPhotos', 'Photos')
            .assert.attributeEquals('@myResourcesPhotos', 'href', page.url() + 
                '/cloudphotos.php')
            
            .assert.visible('@myResourcesDocuments')
            .assert.containsText('@myResourcesDocuments', 'Documents')
            .assert.attributeEquals('@myResourcesDocuments', 'href', page.url() 
                + '/clouddocuments.php')
            
            .assert.visible('@myResourcesOnlineTests')
            .assert.containsText('@myResourcesOnlineTests', 'Online Tests')
            .assert.attributeEquals('@myResourcesOnlineTests', 'href', 
                page.url() + '/myonlinetests.php')
            
            .assert.visible('@myResourcesGradeBook')
            .assert.containsText('@myResourcesGradeBook', 'Grade Book')
            .assert.attributeEquals('@myResourcesGradeBook', 'href', page.url() 
                + '/mygradebooks.php')

            .click('@myResources')
            .assert.hidden('@myResourcesNews')
            .assert.hidden('@myResourcesPhotos')
            .assert.hidden('@myResourcesDocuments')
            .assert.hidden('@myResourcesOnlineTests')
            .assert.hidden('@myResourcesGradeBook');

        client.frame(null);

        client.end();
    }
};
