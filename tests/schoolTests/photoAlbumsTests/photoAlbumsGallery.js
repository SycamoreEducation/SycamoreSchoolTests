module.exports = {
    tags: ['schoolTests', 'photoAlbumsTests', 'photoAlbumsGalleryTest'],

    'School Photo Albums Gallery Test': (client) => {

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
        client.page.school.photoAlbums()
            .waitForElementVisible('@breadcrumb', 10000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'School/Photos/ Albums')

            .assert.visible('@albumsTab')
            .assert.containsText('@albumsTab', 'Albums')

            .assert.visible('@galleryTab')
            .assert.visible('@galleryTab', 'Gallery')

            .click('@galleryTab')
            
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'School/Photos/ Gallery')

            .activeTab('Gallery')

            .assert.visible('@albumsTab')
            .assert.containsText('@albumsTab', 'Albums')

            .assert.visible('@thumbnailListSelector')
            .assert.containsText('@thumbnailListSelector', 'Thumbnail | List')
            
            .assert.visible('@photoList')            

        client.frame(null)

        client.end();
    }
};
