module.exports = {
    tags: ['commCenterTests', 'discussionsTest'],

    'Discussions Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@commCenter')
            .click('@commCenter')
            .assert.visible('@commCenterDiscussions')
            .click('@commCenterDiscussions')
        client.frame(null);

        client.frame(2);
        client.page.commCenter.discussions()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Comm Center/ Discussions')

            .activeTab('Boards')

            .assert.visible('@newBoardBtn')
            .assert.attributeEquals('@newBoardBtn', 'value', 'New Board')
            .assert.attributeEquals('@newBoardBtn', 'onclick', 'addboard()')

            .assert.visible('@discussionAreaHeader')
            .assert.containsText('@discussionAreaHeader', 'Discussion Area')

            .assert.visible('@topicsHeader')
            .assert.containsText('@topicsHeader', 'Topics')

            .assert.visible('@updatedHeader')
            .assert.containsText('@updatedHeader', 'Updated')

        client.frame(null)

        client.end();
    }
};
