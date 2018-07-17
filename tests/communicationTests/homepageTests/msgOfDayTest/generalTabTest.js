module.exports = {
    tags: ['communicationTests', 'homepageTests', 'msgOfDayTests', 
        'msgOfDayGeneralTabTest'],

    'Msg of the Day Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@communication')
            .click('@communication')
            .assert.visible('@communicationHomepage')
            .click('@communicationHomepage')
            .assert.visible('@communicationHomepageMsgOfTheDay')
            .click('@communicationHomepageMsgOfTheDay');
        client.frame(null);

        client.frame(2);
        client.page.communication.homepage.msgOfDay()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Communication/ Message Of The Day')

            .activeTab('General')

            .assert.visible('@newMessageBtn')
            .assert.attributeEquals('@newMessageBtn', 'value', 'New Message')
            .assert.attributeEquals('@newMessageBtn', 'onclick', 'addmotd()')

            .assert.visible('@dateHeader')
            .assert.containsText('@dateHeader', 'Date')

            .assert.visible('@titleHeader')
            .assert.containsText('@titleHeader', 'Title');

        client.frame(null);

        client.end();
    }
};
