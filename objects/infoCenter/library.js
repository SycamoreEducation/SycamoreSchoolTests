module.exports = {
    elements: {
        breadcrumb: 'body > ul.breadcrumb',
        localSearchTab: 'body > ul.nav.nav-tabs > li:nth-child(1) > a',
        googleSearchTab: 'body > ul.nav.nav-tabs > li:nth-child(2) > a',
        byTitle: 'body > form > table > tbody > tr > td:nth-child(2) > table > tbody > tr.se-font-small > td > input[type="radio"]:nth-child(1)',
        byAuthor: 'body > form > table > tbody > tr > td:nth-child(2) > table > tbody > tr.se-font-small > td > input[type="radio"]:nth-child(2)',
        byKeyWord: 'body > form > table > tbody > tr > td:nth-child(2) > table > tbody > tr.se-font-small > td > input[type="radio"]:nth-child(3)',
        inputField: 'body > form > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > input.small',
        searchBooksBtn: 'body > form > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > input.btn.btn-mini.btn-primary',
        librariesSelect: '#llid',
        libraryBreadcrumb: 'body > form > ul',
    }
};
