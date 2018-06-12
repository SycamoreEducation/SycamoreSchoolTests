module.exports = {
    elements: {
        breadcrumb: 'body > ul',
        availableTab: 'body > form > ul > li:nth-child(1) > a',
        submittedTab: 'body > form > ul > li:nth-child(2) > a',
        //Available Tab Elements
        availableNameHeader: 'body > form > div > table > tbody > tr.se-bg-gray.se-bold > td:nth-child(2)',
        availableDescriptionHeader: 'body > form > div > table > tbody > tr.se-bg-gray.se-bold > td:nth-child(3)',
        //Submitted Tab Elements
        submittedHeader: 'body > form > div > table > tbody > tr.se-bg-gray.se-bold > td:nth-child(2)',
        submittedNameHeader: 'body > form > div > table > tbody > tr.se-bg-gray.se-bold > td:nth-child(3)',
        submittedDescriptionHeader: 'body > form > div > table > tbody > tr.se-bg-gray.se-bold > td:nth-child(4)'
    }
};
