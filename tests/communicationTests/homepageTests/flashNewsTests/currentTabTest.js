module.exports = {
    tags: ['communicationTests', 'homepageTests', 'flashNewsTests', 
        'flashNewsCurrentTabTest'],

    'Flash News Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@communication')
            .click('@communication')
            .assert.visible('@communicationHomepage')
            .click('@communicationHomepage')
            .assert.visible('@communicationHomepageFlashNews')
            .click('@communicationHomepageFlashNews')
        client.frame(null);

        client.frame(2);
        client.page.communication.homepage.flashNews()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Communication/Homepage/ Flash News')

            .activeTab('Current')

            .assert.visible('@newFlashBtn')
            .assert.attributeEquals('@newFlashBtn', 'value', 'New Flash')
            .assert.attributeEquals('@newFlashBtn', 'onclick', 'newflash()')

            .assert.visible('@headlineHeader')
            .assert.containsText('@headlineHeader', 'Headline')

            .assert.visible('@startHeader')
            .assert.containsText('@startHeader', 'Start')

            .assert.visible('@stopHeader')
            .assert.containsText('@stopHeader', 'Stop')

            .assert.visible('@authorHeader')
            .assert.containsText('@authorHeader', 'Author')

        client.frame(null)

        client.end();
    }
};
