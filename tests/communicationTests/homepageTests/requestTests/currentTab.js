module.exports = {
    tags: ['communicationTests', 'homepageTests', 'homepageRequestsTests', 
        'requestsCurrentTabTest'],

    'Request Current Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@communication')
            .click('@communication')
            .assert.visible('@communicationHomepage')
            .click('@communicationHomepage')
            .assert.visible('@communicationHomepageRequest')
            .click('@communicationHomepageRequest')
        client.frame(null);

        client.frame(2);
        client.page.communication.homepage.requests()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Communication/ Request')

            .assert.visible('@currentTab')
            .assert.containsText('@currentTab', 'Current')

            .assert.visible('@newRequestBtn')
            .assert.attributeEquals('@newRequestBtn', 'value', 'New Request')
            .assert.attributeEquals('@newRequestBtn', 'onclick', 'newrequest()')

            .assert.visible('@startHeader')
            .assert.containsText('@startHeader', 'Start')

            .assert.visible('@stopHeader')
            .assert.containsText('@stopHeader', 'Stop')
            
            .assert.visible('@headlineHeader')
            .assert.containsText('@headlineHeader', 'Headline')

            .assert.visible('@authorHeader')
            .assert.containsText('@authorHeader', 'Author')

        client.frame(null)

        client.end();
    }
};
