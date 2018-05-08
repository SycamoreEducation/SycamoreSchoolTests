module.exports = {
    tags: ['systemSupportTest', 'menuTests'],

    'System Support Menu Test': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .schoolLogin(username, password, schoolID);

        client.frame(1);
        client.page.menu()
            .assert.visible('@systemSupport')
            .assert.containsText('@systemSupport', '\273 System Support')
            .assert.attributeEquals('@systemHelp', 'href', 'http://web/schoolmenu.php#')

            .assert.hidden('@openTickets')
            .assert.hidden('@closedTickets')

            .click('@systemSupport')
            .assert.visible('@openTickets')
            .assert.visible('@closedTickets')
            .assert.containsText('@openTickets', 'Open Tickets')
            .assert.containsText('@closedTickets', 'Closed Tickets')
            .assert.attributeEquals('@openTickets', 'href', 'http://web/support.php?type=open')
            .assert.attributeEquals('@closedTickets', 'href', 'http://web/support.php?type=closed')

            .click('@systemSupport')
            .assert.hidden('@openTickets')
            .assert.hidden('@closedTickets')

        client.frame(null);

        client.end();
    }
};
