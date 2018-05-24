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
            .waitForElementVisible('@breadcrumb', 10000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'School/Photos/ Albums')

            .assert.visible('@albumsTab')
            .assert.containsText('@albumsTab', 'Albums')

            .assert.visible('@galleryTab')
            .assert.visible('@galleryTab', 'Gallery')

            .assert.visible('@newAlbum')
            .assert.attributeEquals('@newAlbum', 'value', 'New Album')
            .assert.attributeEquals('@newAlbum', 'onclick', 'newfolder()')

            .assert.visible('@thumbnailListSelector')
            .assert.containsText('@thumbnailListSelector', 'Thumbnail | List')

            .assert.visible('@photoList')

        client.frame(null)

        client.end();
    }
};
