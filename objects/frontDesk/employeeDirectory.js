module.exports = {
    elements: {
        breadcrumb: 'body > ul.breadcrumb',
        listTab: 'body > ul.nav.nav-tabs > li:nth-child(1) > a',
        photosTab: 'body > ul.nav.nav-tabs > li:nth-child(2) > a',
        // List Tab Elements
        name: 'body > div.tab-content > table > tbody > tr:nth-child(1) > td:nth-child(1)',
        position: 'body > div.tab-content > table > tbody > tr:nth-child(1) > td:nth-child(2)',
        manager: 'body > div.tab-content > table > tbody > tr:nth-child(1) > td:nth-child(3)',
        tomName: 'body > div.tab-content > table > tbody > tr:nth-child(2) > td:nth-child(1)',
        tomNote: 'body > div.tab-content > table > tbody > tr:nth-child(2) > td:nth-child(5) > font > a',
        johnName: 'body > div.tab-content > table > tbody > tr:nth-child(3) > td:nth-child(1)',
        johnNote: 'body > div.tab-content > table > tbody > tr:nth-child(3) > td:nth-child(5) > font > a',
        // Photos Tab Elements
        tomPhoto: 'body > div.tab-content > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(1) > td > a',
        tomCaption: 'body > div.tab-content > table > tbody > tr:nth-child(2) > td:nth-child(1) > table > tbody > tr:nth-child(2) > td',
        johnPhoto: 'body > div.tab-content > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > a',
        johnCaption: 'body > div.tab-content > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td'
    }
};
