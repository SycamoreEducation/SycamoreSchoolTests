module.exports = {
    tags: ['schoolTests', 'newsTest', 'newsArchiveTabTest'],

    'School News Archive Test': (client) => {

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

            .assert.visible('@archiveTab')
            .click('@archiveTab')

            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'School/News/ Browse')

            .assert.visible('@currentTab')
            .assert.containsText('@currentTab', 'Current')
            .assert.attributeEquals('@currentTab', 'href', 'http://web/news.php?type=2&classid=0&display=browse&tab=0')

            .assert.visible('@archiveTab')
            .assert.containsText('@archiveTab', 'Archive')

            .assert.visible('@searchTab')
            .assert.containsText('@searchTab', 'Search')
            .assert.attributeEquals('@searchTab', 'href', 'http://web/news.php?task=search&classid=0&display=browse&tab=2')

            .assert.visible('@newArticleBtn')
            .assert.attributeEquals('@newArticleBtn', 'value', 'New Article')
            .assert.attributeEquals('@newArticleBtn', 'onclick', 'newnews(0)')

            .assert.visible('@browseListBtn')

            .assert.visible('@browseListText')
            .assert.containsText('@browseListText', 'Browse | List')

            .assert.visible('@resultMsg')
            .assert.containsText('@resultMsg', 'No news articles found')

            .click('@browseListBtn')

            .assert.visible('@resultMsg')
            .assert.containsText('@resultMsg', 'No news articles found')

            .assert.visible('@checkbox')
            .assert.attributeEquals('@checkbox', 'onclick', 'setChecked(\'.setCheckedBox\',\'\')')

            .assert.visible('@date')
            .assert.containsText('@date', 'Date')

            .assert.visible('@author')
            .assert.containsText('@author', 'Author')

            .assert.visible('@headline')
            .assert.containsText('@headline', 'Headline')

            .assert.visible('@archiveCurrentBtn')
            .assert.attributeEquals('@archiveCurrentBtn', 'value', 'Current')

            .assert.visible('@deleteBtn')
            .assert.attributeEquals('@deleteBtn', 'value', 'Delete')
            .assert.attributeEquals('@deleteBtn', 'onclick', 'MakeSure()')

        client.frame(null)

        client.end();
    }
};
