module.exports = {
    elements: {
        breadcrumb: 'body > ul.breadcrumb',
        localSearchTab: 'body > ul.nav.nav-tabs > li:nth-child(1) > a',
        googleSearchTab: 'body > ul.nav.nav-tabs > li:nth-child(2) > a',
        // Local Search Tab Elements
        byTitle: 'body > form > table > tbody > tr > td:nth-child(2) > table > tbody > tr.se-font-small > td > input[type="radio"]:nth-child(1)',
        byAuthor: 'body > form > table > tbody > tr > td:nth-child(2) > table > tbody > tr.se-font-small > td > input[type="radio"]:nth-child(2)',
        byKeyWord: 'body > form > table > tbody > tr > td:nth-child(2) > table > tbody > tr.se-font-small > td > input[type="radio"]:nth-child(3)',
        inputField: 'body > form > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > input.small',
        searchBooksBtn: 'body > form > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > input.btn.btn-mini.btn-primary',
        librariesSelect: '#llid',
        libraryBreadcrumb: 'body > form > ul',
        // Google Search Tab Elements
        googleBooksHeader: 'body > ul.nav.nav-tabs > font',
        searchHeader: 'body > font > form > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td',
        googleInputField: '#search',
        googleSearchBooksBtn: 'body > font > form > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > input.btn.btn-mini.btn-primary',
        searchSubHeading: 'body > font > form > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(3)',
        cover: 'body > font > form > div > table > tbody > tr > td:nth-child(1)',
        title: 'body > font > form > div > table > tbody > tr > td:nth-child(2)',
        author: 'body > font > form > div > table > tbody > tr > td:nth-child(3)',
        localNum: 'body > font > form > div > table > tbody > tr > td:nth-child(4)',
        identifiers: 'body > font > form > div > table > tbody > tr > td:nth-child(5)'
    }
};
