module.exports = {
    tags: ['myCommunicationTest', 'menuTests'],

    'My Communication Menu Test': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .schoolLogin(username, password, schoolID);

        client.frame(1);
        client.page.menu()
            .assert.visible('@myCommunication')
            .assert.containsText('@myCommunication', '\273 My Communication')
            .assert.attributeEquals('@myCommunication', 'href', 'http://web/schoolmenu.php#')

            .assert.hidden('@myBatchEmail')
            .assert.hidden('@myBlogs')

            .click('@myCommunication')
            .assert.visible('@myBatchEmail')
            .assert.visible('@myBlogs')
            .assert.containsText('@myBatchEmail', 'My Batch Email')
            .assert.containsText('@myBlogs', 'My Blogs')
            .assert.attributeEquals('@myBatchEmail', 'href', 'http://web/batchemail3.php?classid=-1')
            .assert.attributeEquals('@myBlogs', 'href', 'http://web/blogs.php?task=mine')

            .click('@myCommunication')
            .assert.hidden('@myBatchEmail')
            .assert.hidden('@myBlogs')

        client.frame(null);

        client.end();
    }
};
