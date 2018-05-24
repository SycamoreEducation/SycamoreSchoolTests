module.exports = {
    url: function() {

        return this.api.launchUrl + '/news.php';
    },
    elements: {
        breadcrumb: 'body > form > ul.breadcrumb',
        albumsTab: 'body > form > ul.nav.nav-tabs > li:nth-child(1) > a',
        galleryTab: 'body > form > ul.nav.nav-tabs > li:nth-child(2) > a',
        //Albums tab elements
        newAlbum: 'body > form > ul.nav.nav-tabs > input',
        thumbnailListSelector: 'body > form > table > tbody > tr > td:nth-child(2) > font',
        photoList: 'body > form > div'
    }
};
