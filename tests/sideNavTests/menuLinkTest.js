module.exports = {
    'menuLinkTest': function(client) {
        client
            .url(client.launch_url)
            .setValue('input[name=entered_schid]', '1')
            .setValue('input[name=entered_login]', 'superuser')
            .setValue('input[name=entered_password]', 'guest')
            .click('div[class="loginLoginButtonDiv"]')
            .pause(1000)
            .assert.title('Sycamore School - 1')
    },

    'School Home': function(client) {
        client.frame(1);
        client.page.menu()
            .assert.containsText('@home', 'School Home')
        client.frame(null);
    },

    client.end();
}
};
