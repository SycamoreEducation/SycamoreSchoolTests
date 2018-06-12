module.exports = {
    url: function() {

        return this.api.launchUrl + '/news.php';
    },
    elements: {
        breadcrumb: 'body > ul.breadcrumb',
        currentTab: 'body > ul.nav.nav-tabs > li:nth-child(1) > a',
        archiveTab: 'body > ul.nav.nav-tabs > li:nth-child(2) > a',
        searchTab: 'body > ul.nav.nav-tabs > li:nth-child(3) > a',
        newArticleBtn: 'body > ul.nav.nav-tabs > input',
        //Current/Archive Tab Elements
        browseListBtn: 'body > div.tab-content > form > div > span.se-font-small > a',
        browseListText: 'body > div.tab-content > form > div > span.se-font-small',
        resultMsg: 'body > div.tab-content > form > div > span.se-font.se-bold',
        checkbox: 'body > div.tab-content > form > table > tbody > tr > td.setChecked > a',
        date: 'body > div.tab-content > form > table > tbody > tr > td:nth-child(2)',
        author: 'body > div.tab-content > form > table > tbody > tr > td:nth-child(3)',
        headline: 'body > div.tab-content > form > table > tbody > tr > td:nth-child(4)',
        archiveCurrentBtn: 'body > div.tab-content > form > input[type="submit"]:nth-child(8)',
        deleteBtn: 'body > div.tab-content > form > input.btn.btn-mini.pull-right.btn-danger',
        //Search Tab Elements
        searchCurrentTab: 'body > form > ul.nav.nav-tabs > li:nth-child(1) > a',
        searchArchivetab: 'body > form > ul.nav.nav-tabs > li:nth-child(2) > a',
        searchSearchTab: 'body > form > ul.nav.nav-tabs > li.active > a',
        searchField: 'body > form > ul.nav.nav-tabs > input.search-query.pull-right',
        searchBtn: 'body > form > ul.nav.nav-tabs > input.btn.btn-primary.btn-mini.pull-right',
        searchDate: 'body > table > tbody > tr > td:nth-child(1)',
        searchHeadline: 'body > table > tbody > tr > td:nth-child(2)'
    }
};
