module.exports = {
    url: function() {

        return this.api.launchUrl + '/news.php';
    },
    elements: {
        breadcrumb: 'body > form > ul.breadcrumb',
    }
};
