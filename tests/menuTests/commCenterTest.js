module.exports = {
    tags: ['commCenterTest', 'menuTests'],

    'Comm Center Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@commCenter')
            .assert.containsText('@commCenter', '\273 Comm Center')
            .assert.attributeEquals('@commCenter', 'href', 
                page.url() + '/schoolmenu.php#')

            .assert.hidden('@commCenterBlogs')
            .assert.hidden('@commCenterBlogs')

            .click('@commCenter')

            .assert.hidden('@commCenter')

            .assert.visible('@commCenterBlogs')
            .assert.containsText('@commCenterBlogs', 'Blogs')
            .assert.attributeEquals('@commCenterBlogs', 'href', 
                page.url() + '/blogs.php')

            .assert.visible('@commCenterDiscussions')
            .assert.containsText('@commCenterDiscussions', 'Discussions')
            .assert.attributeEquals('@commCenterDiscussions', 'href', 
                page.url() + '/forumboard.php?pid=0')

            .click('@commCenter')

            .assert.visible('@commCenter')

            .assert.hidden('@commCenterBlogs')
            .assert.hidden('@commCenterDiscussions');

        client.frame(null);

        client.end();
    }
};
