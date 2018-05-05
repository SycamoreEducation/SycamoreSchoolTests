module.exports = {
    tags: ['myResourcesTest', 'menuTests'],

    'My Resources Menu Test': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .schoolLogin(username, password, schoolID);

        client.frame(1);
        client.page.menu()
            .assert.visible('@myResources')
            .assert.containsText('@myResources', '» My Resources')
            .assert.attributeEquals('@myResources', 'href', 'http://web/schoolmenu.php#')

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
            .assert.attributeEquals('@myResourcesNews', 'href', 'http://web/cloudnews.php')
            .assert.attributeEquals('@myResourcesPhotos', 'href', 'http://web/cloudphotos.php')
            .assert.attributeEquals('@myResourcesDocuments', 'href', 'http://web/clouddocuments.php')
            .assert.attributeEquals('@myResourcesOnlineTests', 'href', 'http://web/myonlinetests.php')
            .assert.attributeEquals('@myResourcesGradeBook', 'href', 'http://web/mygradebooks.php')

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
