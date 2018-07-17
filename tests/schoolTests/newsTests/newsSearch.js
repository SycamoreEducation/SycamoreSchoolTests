module.exports = {
    tags: ['schoolTests', 'newsTests', 'newsSearchTest'],

    'School News Search Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@school')
            .click('@school')
            .assert.visible('@schoolNews')
            .click('@schoolNews');
        client.frame(null);

        client.frame(2);
        client.page.school.news()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'School/News/ Browse')

            .click('@searchTab')

            .activeTab('Search')

            .assert.visible('@searchCurrentTab')
            .assert.containsText('@searchCurrentTab', 'Current')
            .assert.attributeEquals('@searchCurrentTab', 'href', page.url() + 
                '/news.php?type=2&classid=0&tab=0')

            .assert.visible('@searchArchivetab')
            .assert.containsText('@searchArchivetab', 'Archive')
            .assert.attributeEquals('@searchArchivetab', 'href', page.url() + 
                '/news.php?type=3&classid=0&tab=1')

            .assert.visible('@searchField')

            .assert.visible('@searchBtn')
            .assert.attributeEquals('@searchBtn', 'value', 'Search')

            .assert.visible('@searchDate')
            .assert.containsText('@searchDate', 'Date')

            .assert.visible('@searchHeadline')
            .assert.containsText('@searchHeadline', 'Headline');

        client.frame(null);

        client.end();
    }
};
