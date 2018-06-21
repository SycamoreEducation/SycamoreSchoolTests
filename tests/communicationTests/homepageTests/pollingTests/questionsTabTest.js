var moment = require('moment');

var year = moment().format('YYYY');

module.exports = {
    tags: ['communicationTests', 'homepageTests', 'pollingTests', 
        'pollingQuestionsTabTest'],

    'Polling Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@communication')
            .click('@communication')
            .assert.visible('@communicationHomepage')
            .click('@communicationHomepage')
            .assert.visible('@communicationHomepagePolling')
            .click('@communicationHomepagePolling')
        client.frame(null);

        client.frame(2);
        client.page.communication.homepage.polling()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Communication/Homepage/ Polling')

            .activeTab('Questions')

            .assert.visible('@newPollBtn')
            .assert.attributeEquals('@newPollBtn', 'value', 'New Poll')
            .assert.attributeEquals('@newPollBtn', 'onclick', 'addpoll()')

            .assert.visible('@dateHeader')
            .assert.containsText('@dateHeader', 'Date')

            .assert.visible('@votesHeader')
            .assert.containsText('@votesHeader', 'Votes')

            .assert.visible('@questionHeader')
            .assert.containsText('@questionHeader', 'Question')

        client.frame(null)

        client.end();
    }
};
