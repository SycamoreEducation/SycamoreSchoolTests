module.exports = {
    tags: ['communicationTests', 'eVerificationTests', 
        'eVerificationCurrentTabTest'],

    'E-Verification Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@communication')
            .click('@communication')
            .assert.visible('@communicationEVerification')
            .click('@communicationEVerification')
        client.frame(null);

        client.frame(2);
        client.page.communication.eVerification()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Communication/ E-Verification')

            .activeTab('Current')

            .assert.visible('@newItemBtn')
            .assert.attributeEquals('@newItemBtn', 'value', 'New Item')
            .assert.attributeEquals('@newItemBtn', 'onclick', 'newchecklist()')

            .assert.visible('@titleHeader')
            .assert.containsText('@titleHeader', 'Title')

            .assert.visible('@authorHeader')
            .assert.containsText('@authorHeader', 'Author')

            .assert.visible('@expireHeader')
            .assert.containsText('@expireHeader', 'Expire')

            .assert.visible('@countHeader')
            .assert.containsText('@countHeader', 'Count')

        client.frame(null)

        client.end();
    }
};
