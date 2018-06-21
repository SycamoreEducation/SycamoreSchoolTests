module.exports = {
    tags: ['communicationTests', 'homepageTests', 'sponsorAdsTests', 
        'sponsorAdsCurrentTabTest'],

    'Sponsor Ads Current Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@communication')
            .click('@communication')
            .assert.visible('@communicationHomepage')
            .click('@communicationHomepage')
            .assert.visible('@communicationHomepageSponsorAds')
            .click('@communicationHomepageSponsorAds')
        client.frame(null);

        client.frame(2);
        client.page.communication.homepage.sponsorAds()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Communication/Homepage/ Sponsor Ads')

            .activeTab('Current')

            .assert.visible('@newAdBtn')
            .assert.attributeEquals('@newAdBtn', 'value', 'New Ad')
            .assert.attributeEquals('@newAdBtn', 'onclick', 'newflash()')

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
