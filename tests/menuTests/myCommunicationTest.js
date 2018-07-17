module.exports = {
    tags: ['myCommunicationTest', 'menuTests'],

    'My Communication Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@myCommunication')
            .assert.containsText('@myCommunication', '\273 My Communication')
            .assert.attributeEquals('@myCommunication', 'href', page.url() + 
                '/schoolmenu.php#')

            .assert.hidden('@myBatchEmail')
            .assert.hidden('@myBlogs')

            .click('@myCommunication')
            .assert.visible('@myBatchEmail')
            .assert.containsText('@myBatchEmail', 'My Batch Email')
            .assert.attributeEquals('@myBatchEmail', 'href', page.url() + 
                '/batchemail3.php?classid=-1')
            
            .assert.visible('@myBlogs')
            .assert.containsText('@myBlogs', 'My Blogs')
            .assert.attributeEquals('@myBlogs', 'href', page.url() + 
                '/blogs.php?task=mine')

            .click('@myCommunication')
            .assert.hidden('@myBatchEmail')
            .assert.hidden('@myBlogs');

        client.frame(null);

        client.end();
    }
};
