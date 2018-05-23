module.exports = {
    tags: ['communicationTest', 'menuTests'],

    'Communication Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@communication')
            .assert.containsText('@communication', '\273 Communication')
            .assert.attributeEquals('@communication', 'href', page.url() + '/schoolmenu.php#')

            .assert.hidden('@communicationHomepage')
            .assert.hidden('@communicationHomepagePolling')
            .assert.hidden('@communicationHomepageFlashNews')
            .assert.hidden('@communicationHomepageSponsorAds')
            .assert.hidden('@communicationHomepageRequest')
            .assert.hidden('@communicationHomepageMsgOfTheDay')

            .assert.hidden('@communicationBatchEmail')
            .assert.hidden('@communicationBatchEmailCompose')
            .assert.hidden('@communicationBatchEmailDrafts')
            .assert.hidden('@communicationBatchEmailScheduled')
            .assert.hidden('@communicationBatchEmailSent')

            .assert.hidden('@communicationTextMessaging')
            .assert.hidden('@communicationTextMessagingBatchTextMessage')
            .assert.hidden('@communicationTextMessagingMessageLogs')

            .assert.hidden('@communicationTemplates')
            .assert.hidden('@communicationSafetyAlerts')
            .assert.hidden('@communicationMemoMaker')
            .assert.hidden('@communicationEVerification')
            .assert.hidden('@communicationChecklist')
            .assert.hidden('@communicationNotificationLists')
            .assert.hidden('@communicationConfiguration')
            .assert.hidden('@communicationReports')

            .click('@communication')
            .assert.visible('@communicationHomepage')
            .assert.visible('@communicationBatchEmail')
            .assert.visible('@communicationTextMessaging')
            .assert.visible('@communicationTemplates')
            .assert.visible('@communicationSafetyAlerts')
            .assert.visible('@communicationMemoMaker')
            .assert.visible('@communicationEVerification')
            .assert.visible('@communicationChecklist')
            .assert.visible('@communicationNotificationLists')
            .assert.visible('@communicationConfiguration')
            .assert.visible('@communicationReports')

            .assert.containsText('@communicationHomepage', 'Homepage')
            .assert.containsText('@communicationBatchEmail', 'Batch Email')
            .assert.containsText('@communicationTextMessaging', 'Text Messaging')
            .assert.containsText('@communicationTemplates', 'Templates')
            .assert.containsText('@communicationSafetyAlerts', 'Safety Alert')
            .assert.containsText('@communicationMemoMaker', 'Memo Maker')
            .assert.containsText('@communicationEVerification', 'E-Verification')
            .assert.containsText('@communicationChecklist', 'Checklist')
            .assert.containsText('@communicationNotificationLists', 'Notification List')
            .assert.containsText('@communicationConfiguration', 'Configuration')
            .assert.containsText('@communicationReports', 'Reports')

            .assert.attributeEquals('@communicationTemplates', 'href', page.url() + '/templates.php')
            .assert.attributeEquals('@communicationSafetyAlerts', 'href', page.url() + '/safetyalert.php?task=list')
            .assert.attributeEquals('@communicationMemoMaker', 'href', page.url() + '/memomaker.php')
            .assert.attributeEquals('@communicationEVerification', 'href', page.url() + '/e-verify.php')
            .assert.attributeEquals('@communicationChecklist', 'href', page.url() + '/checklist.php')
            .assert.attributeEquals('@communicationNotificationLists', 'href', page.url() + '/commnotifylist.php')
            .assert.attributeEquals('@communicationConfiguration', 'href', page.url() + '/commconfig.php')
            .assert.attributeEquals('@communicationReports', 'href', page.url() + '/reports.php?type=32')

            .click('@communicationHomepage')
            .assert.visible('@communicationHomepagePolling')
            .assert.visible('@communicationHomepageFlashNews')
            .assert.visible('@communicationHomepageSponsorAds')
            .assert.visible('@communicationHomepageRequest')
            .assert.visible('@communicationHomepageMsgOfTheDay')
            .assert.containsText('@communicationHomepagePolling', 'Polling')
            .assert.containsText('@communicationHomepageFlashNews', 'Flash News')
            .assert.containsText('@communicationHomepageSponsorAds', 'Sponsor Ads')
            .assert.containsText('@communicationHomepageRequest', 'Request')
            .assert.containsText('@communicationHomepageMsgOfTheDay', 'Msg of the Day')
            .assert.attributeEquals('@communicationHomepagePolling', 'href', page.url() + '/poll.php')
            .assert.attributeEquals('@communicationHomepageFlashNews', 'href', page.url() + '/flash.php')
            .assert.attributeEquals('@communicationHomepageSponsorAds', 'href', page.url() + '/flashads.php')
            .assert.attributeEquals('@communicationHomepageRequest', 'href', page.url() + '/request.php')
            .assert.attributeEquals('@communicationHomepageMsgOfTheDay', 'href', page.url() + '/motdadmin.php')
            .click('@communicationHomepage')
            .assert.hidden('@communicationHomepagePolling')
            .assert.hidden('@communicationHomepageFlashNews')
            .assert.hidden('@communicationHomepageSponsorAds')
            .assert.hidden('@communicationHomepageRequest')
            .assert.hidden('@communicationHomepageMsgOfTheDay')

            .click('@communicationBatchEmail')
            .assert.visible('@communicationBatchEmailCompose')
            .assert.visible('@communicationBatchEmailDrafts')
            .assert.visible('@communicationBatchEmailScheduled')
            .assert.visible('@communicationBatchEmailSent')
            .assert.containsText('@communicationBatchEmailCompose', 'Compose')
            .assert.containsText('@communicationBatchEmailDrafts', 'Drafts')
            .assert.containsText('@communicationBatchEmailScheduled', 'Scheduled')
            .assert.containsText('@communicationBatchEmailSent', 'Sent')
            .assert.attributeEquals('@communicationBatchEmailCompose', 'href', page.url() + '/batchemail3.php?task=compose&classid=')
            .assert.attributeEquals('@communicationBatchEmailDrafts', 'href', page.url() + '/batchemail3.php?type=1')
            .assert.attributeEquals('@communicationBatchEmailScheduled', 'href', page.url() + '/batchemail3.php?type=3')
            .assert.attributeEquals('@communicationBatchEmailSent', 'href', page.url() + '/batchemail3.php?type=2')
            .click('@communicationBatchEmail')
            .assert.hidden('@communicationBatchEmailCompose')
            .assert.hidden('@communicationBatchEmailDrafts')
            .assert.hidden('@communicationBatchEmailScheduled')
            .assert.hidden('@communicationBatchEmailSent')

            .click('@communicationTextMessaging')
            .assert.visible('@communicationTextMessagingBatchTextMessage')
            .assert.visible('@communicationTextMessagingMessageLogs')
            .assert.visible('@communicationTextMessagingBatchTextMessage', 'Batch Text Msg')
            .assert.visible('@communicationTextMessagingMessageLogs', 'Message Logs')
            .assert.attributeEquals('@communicationTextMessagingBatchTextMessage', 'href', page.url() + '/batchsms.php')
            .assert.attributeEquals('@communicationTextMessagingMessageLogs', 'href', page.url() + '/commtxtmsgs.php')
            .click('@communicationTextMessaging')
            .assert.hidden('@communicationTextMessagingBatchTextMessage')
            .assert.hidden('@communicationTextMessagingMessageLogs')

            .click('@communication')

            .assert.visible('@communication')

            .assert.hidden('@communicationHomepage')
            .assert.hidden('@communicationHomepagePolling')
            .assert.hidden('@communicationHomepageFlashNews')
            .assert.hidden('@communicationHomepageSponsorAds')
            .assert.hidden('@communicationHomepageRequest')
            .assert.hidden('@communicationHomepageMsgOfTheDay')

            .assert.hidden('@communicationBatchEmail')
            .assert.hidden('@communicationBatchEmailCompose')
            .assert.hidden('@communicationBatchEmailDrafts')
            .assert.hidden('@communicationBatchEmailScheduled')
            .assert.hidden('@communicationBatchEmailSent')

            .assert.hidden('@communicationTextMessaging')
            .assert.hidden('@communicationTextMessagingBatchTextMessage')
            .assert.hidden('@communicationTextMessagingMessageLogs')

            .assert.hidden('@communicationTemplates')
            .assert.hidden('@communicationSafetyAlerts')
            .assert.hidden('@communicationMemoMaker')
            .assert.hidden('@communicationEVerification')
            .assert.hidden('@communicationChecklist')
            .assert.hidden('@communicationNotificationLists')
            .assert.hidden('@communicationConfiguration')
            .assert.hidden('@communicationReports')

        client.frame(null);

        client.end();
    }
};
