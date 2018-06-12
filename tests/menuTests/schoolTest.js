module.exports = {
    tags: ['schoolTest', 'menuTests'],

    'School Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@school')
            .assert.containsText('@school', '\273 School')
            .assert.attributeEquals('@school', 'href', page.url() + '/schoolmenu.php#')

            .assert.hidden('@schoolNews')
            .assert.hidden('@schoolCalendar')
            .assert.hidden('@schoolDocuments')
            .assert.hidden('@schoolPhotoAlbums')
            .assert.hidden('@schoolMultimedia')
            .assert.hidden('@schoolFavorites')

            .click('@school')
            .assert.visible('@schoolNews')
            .assert.visible('@schoolCalendar')
            .assert.visible('@schoolDocuments')
            .assert.visible('@schoolPhotoAlbums')
            .assert.visible('@schoolMultimedia')
            .assert.visible('@schoolFavorites')
            .assert.containsText('@schoolNews', 'News')
            .assert.containsText('@schoolCalendar', 'Calendar')
            .assert.containsText('@schoolDocuments', 'Documents')
            .assert.containsText('@schoolPhotoAlbums', 'Photo Albums')
            .assert.containsText('@schoolMultimedia', 'Multimedia')
            .assert.containsText('@schoolFavorites', 'Favorites')
            .assert.attributeEquals('@schoolNews', 'href', page.url() + '/news.php?classid=0')
            .assert.attributeEquals('@schoolCalendar', 'href', page.url() + '/calendar.php?classid=0')
            .assert.attributeEquals('@schoolDocuments', 'href', page.url() + '/explorer.php?classid=0')
            .assert.attributeEquals('@schoolPhotoAlbums', 'href', page.url() + '/photos.php?task=albums&classid=0')
            .assert.attributeEquals('@schoolMultimedia', 'href', page.url() + '/multimedia.php?classid=0')
            .assert.attributeEquals('@schoolFavorites', 'href', page.url() + '/favorites.php?classid=0')

            .click('@school')
            .assert.hidden('@schoolNews')
            .assert.hidden('@schoolCalendar')
            .assert.hidden('@schoolDocuments')
            .assert.hidden('@schoolPhotoAlbums')
            .assert.hidden('@schoolMultimedia')
            .assert.hidden('@schoolFavorites')

        client.frame(null);

        client.end();
    }
};
