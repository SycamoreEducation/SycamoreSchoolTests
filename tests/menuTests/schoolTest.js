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
            .assert.attributeEquals('@school', 'href', 'http://web/schoolmenu.php#')

            .assert.hidden('@schoolNews')
            .assert.hidden('@schoolCalendar')
            .assert.hidden('@schoolDocuments')
            .assert.hidden('@schoolPhotoAlbums')
            .assert.hidden('@schoolMultimedia')
            .assert.hidden('@schoolFarvorites')

            .click('@school')
            .assert.visible('@schoolNews')
            .assert.visible('@schoolCalendar')
            .assert.visible('@schoolDocuments')
            .assert.visible('@schoolPhotoAlbums')
            .assert.visible('@schoolMultimedia')
            .assert.visible('@schoolFarvorites')
            .assert.containsText('@schoolNews', 'News')
            .assert.containsText('@schoolCalendar', 'Calendar')
            .assert.containsText('@schoolDocuments', 'Documents')
            .assert.containsText('@schoolPhotoAlbums', 'Photo Albums')
            .assert.containsText('@schoolMultimedia', 'Multimedia')
            .assert.containsText('@schoolFarvorites', 'Favorites')
            .assert.attributeEquals('@schoolNews', 'href', 'http://web/news.php?classid=0')
            .assert.attributeEquals('@schoolCalendar', 'href', 'http://web/calendar.php?classid=0')
            .assert.attributeEquals('@schoolDocuments', 'href', 'http://web/explorer.php?classid=0')
            .assert.attributeEquals('@schoolPhotoAlbums', 'href', 'http://web/photos.php?task=albums&classid=0')
            .assert.attributeEquals('@schoolMultimedia', 'href', 'http://web/multimedia.php?classid=0')
            .assert.attributeEquals('@schoolFarvorites', 'href', 'http://web/favorites.php?classid=0')

            .click('@school')
            .assert.hidden('@schoolNews')
            .assert.hidden('@schoolCalendar')
            .assert.hidden('@schoolDocuments')
            .assert.hidden('@schoolPhotoAlbums')
            .assert.hidden('@schoolMultimedia')
            .assert.hidden('@schoolFarvorites')

        client.frame(null);

        client.end();
    }
};
