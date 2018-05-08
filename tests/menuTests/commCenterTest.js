module.exports = {
    tags: ['commCenterTest', 'menuTests'],

    'Comm Center Test': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .schoolLogin(username, password, schoolID);

        client.frame(1);
        client.page.menu()
            .assert.visible('@commCenter')
            .assert.containsText('@commCenter', '\273 Comm Center')
            .assert.attributeEquals('@commCenter', 'href', 'http://web/schoolmenu.php#')

            .assert.hidden('@commCenterBlogs')
            .assert.hidden('@commCenterBlogs')

            .click('@commCenter')

            .assert.visible('@commCenter')
            .assert.visible('@commCenterBlogs')
            .assert.visible('@commCenterDiscussions')

            .assert.containsText('@commCenterBlogs', 'Blogs')
            .assert.containsText('@commCenterDiscussions', 'Discussions')

            .assert.attributeEquals('@commCenterBlogs', 'href', 'http://web/blogs.php')
            .assert.attributeEquals('@commCenterDiscussions', 'href', 'http://web/forumboard.php?pid=0')


            .click('@commCenter')

            .assert.visible('@commCenter')

            .assert.hidden('@commCenterBlogs')
            .assert.hidden('@commCenterDiscussions')

        client.frame(null);

        client.end();
    }
};
