module.exports = {
    tags: ['commCenterTests', 'blogsTests', 'blogTest'],

    'Blog Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@commCenter')
            .click('@commCenter')
            .assert.visible('@commCenterBlogs')
            .click('@commCenterBlogs')
        client.frame(null);

        client.frame(2);
        client.page.commCenter.blogs()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'My Communication/ Blogs')

            .assert.visible('@updatedTitle')
            .assert.containsText('@updatedTitle', 'Updated')

            .assert.visible('@authorTitle')
            .assert.containsText('@authorTitle', 'Author')

        client.frame(null)

        client.end();
    }
};
