module.exports = {
    tags: ['schoolTests', 'newsTests', 'newsSearchTabTest'],

    'School News Search Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@school')
            .click('@school')
            .assert.visible('@schoolNews')
            .click('@schoolNews')
        client.frame(null);

        client.frame(2);
        client.pause(2000)
        client.page.news()

            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'School/News/ Browse')

            .click('@searchTab')

            .assert.visible('@searchCurrentTab')
            .assert.containsText('@searchCurrentTab', 'Current')
            .assert.attributeEquals('@searchCurrentTab', 'href', page.url() + '/news.php?type=2&classid=0&tab=0')

            .assert.visible('@searchArchivetab')
            .assert.containsText('@searchArchivetab', 'Archive')
            .assert.attributeEquals('@searchArchivetab', 'href', page.url() + '/news.php?type=3&classid=0&tab=1')

            .assert.visible('@searchSearchTab')
            .assert.containsText('@searchSearchTab', 'Search')

            .assert.visible('@searchField')

            .assert.visible('@searchBtn')
            .assert.attributeEquals('@searchBtn', 'value', 'Search')

            .assert.visible('@searchDate')
            .assert.containsText('@searchDate', 'Date')

            .assert.visible('@searchHeadline')
            .assert.containsText('@searchHeadline', 'Headline')

        client.frame(null)

        client.end();
    }
};
