module.exports = {
    tags: ['schoolTests', 'photoAlbumsTests', 'photoAlbumsAlbumsTest'],

    'School News Archive Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@school')
            .click('@school')
            .assert.visible('@schoolPhotoAlbums')
            .click('@schoolPhotoAlbums')
        client.frame(null);

        client.frame(2);
        client.page.schoolPhotoAlbums()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'School/Photos/ Albums')

        client.frame(null)

        client.end();
    }
};
