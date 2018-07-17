module.exports = {
    tags: ['systemSupportTest', 'menuTests'],

    'System Support Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@systemSupport')
            .assert.containsText('@systemSupport', '\273 System Support')
            .assert.attributeEquals('@systemSupport', 'href', page.url() + 
                '/schoolmenu.php#')

            .assert.hidden('@openTickets')
            .assert.hidden('@closedTickets')

            .click('@systemSupport')
            .assert.visible('@openTickets')
            .assert.containsText('@openTickets', 'Open Tickets')
            .assert.attributeEquals('@openTickets', 'href', page.url() + 
                '/support.php?type=open')
            
            .assert.visible('@closedTickets')
            .assert.containsText('@closedTickets', 'Closed Tickets')
            .assert.attributeEquals('@closedTickets', 'href', page.url() +
                '/support.php?type=closed')

            .click('@systemSupport')

            .assert.visible('@systemSupport')

            .assert.hidden('@openTickets')
            .assert.hidden('@closedTickets');

        client.frame(null);

        client.end();
    }
};
