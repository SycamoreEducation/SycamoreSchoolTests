var moment = require('moment');

module.exports = {
    tags: ['communicationTests', 'textMessagingTests', 'messageLogsTest'],

    'Message Logs Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@communication')
            .click('@communication')
            .assert.visible('@communicationTextMessaging')
            .click('@communicationTextMessaging')
            .assert.visible('@communicationTextMessagingMessageLogs')
            .click('@communicationTextMessagingMessageLogs');
        client.frame(null);

        client.frame(2);
        client.page.communication.textMessaging.messageLogs()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Communication/Text Messaging/ SMS Logs')

            .assert.visible('@jan')
            .assert.containsText('@jan', 'Jan')

            .assert.visible('@feb')
            .assert.containsText('@feb', 'Feb')

            .assert.visible('@mar')
            .assert.containsText('@mar', 'Mar')

            .assert.visible('@apr')
            .assert.containsText('@apr', 'Apr')

            .assert.visible('@may')
            .assert.containsText('@may', 'May')

            .assert.visible('@jun')
            .assert.containsText('@jun', 'Jun')
            
            .assert.visible('@jul')
            .assert.containsText('@jul', 'Jul')

            .assert.visible('@aug')
            .assert.containsText('@aug', 'Aug')

            .assert.visible('@sep')
            .assert.containsText('@sep', 'Sep')

            .assert.visible('@oct')
            .assert.containsText('@oct', 'Oct')

            .assert.visible('@nov')
            .assert.containsText('@nov', 'Nov')

            .assert.visible('@dec')
            .assert.containsText('@dec', 'Dec')

            .assert.visible('@messageTotal')
            .assert.containsText('@messageTotal', 
                'Message Count: 0  Cost: 0.00')

            .assert.visible('@yearLabel')
            .assert.containsText('@yearLabel', 'Year')

            .assert.visible('@yearSelect')
            .assert.containsText('@yearSelect', moment().format('YYYY'))
            .assert.attributeEquals('@yearSelect', 'onchange', 'changeyear()')

            .assert.visible('@dateHeader')
            .assert.containsText('@dateHeader', 'Date')

            .assert.visible('@typeHeader')
            .assert.containsText('@typeHeader', 'Type')

            .assert.visible('@fromHeader')
            .assert.containsText('@fromHeader', 'From')

            .assert.visible('@recipientNameHeader')
            .assert.containsText('@recipientNameHeader', 'Recipient Name')

            .assert.visible('@recipientNumberHeader')
            .assert.containsText('@recipientNumberHeader', 'Recipient Number')

            .assert.visible('@vendorHeader')
            .assert.containsText('@vendorHeader', 'Vendor')

            .assert.visible('@statusHeader')
            .assert.containsText('@statusHeader', 'Status');

        client.frame(null);

        client.end();
    }
};
