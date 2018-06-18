module.exports = {
    tags: ['communicationTests', 'safetyAlertTest'],

    'Safety Alert Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@communication')
            .click('@communication')
            .assert.visible('@communicationSafetyAlerts')
            .click('@communicationSafetyAlerts')
        client.frame(null);

        client.frame(2);
        client.page.communication.safetyAlert()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Communication/ Safety Alert')

            .assert.visible('@standbyTab')
            .assert.containsText('@standbyTab', 'Standby')

            .assert.visible('@clearBtn')
            .assert.attributeEquals('@clearBtn', 'value', ' Clear ')
            .assert.attributeEquals('@clearBtn', 'onclick', 'clearalert()')

            .assert.visible('@typeLabel')
            .assert.containsText('@typeLabel', 'Type')

            .assert.visible('@timeLabel')
            .assert.containsText('@timeLabel', 'Time')

            .assert.visible('@authorLabel')
            .assert.containsText('@authorLabel', 'Author')

            .assert.visible('@messageLabel')
            .assert.containsText('@messageLabel', 'Message')

            .assert.visible('@timeHeader')
            .assert.containsText('@timeHeader', 'Time')

            .assert.visible('@userHeader')
            .assert.containsText('@userHeader', 'User')

        client.frame(null)

        client.end();
    }
};
