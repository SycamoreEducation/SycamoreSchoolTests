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
            .assert.attributeEquals('@communication', 'href', 
                page.url() + '/schoolmenu.php#')

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
            .assert.containsText('@communicationHomepage', 'Homepage')

            .assert.visible('@communicationBatchEmail')
            .assert.containsText('@communicationBatchEmail', 'Batch Email')
            
            .assert.visible('@communicationTextMessaging')
            .assert.containsText('@communicationTextMessaging', 
                'Text Messaging')

            .assert.visible('@communicationTemplates')
            .assert.containsText('@communicationTemplates', 'Templates')
            .assert.attributeEquals('@communicationTemplates', 'href', 
                page.url() + '/templates.php')

            .assert.visible('@communicationSafetyAlerts')
            .assert.containsText('@communicationSafetyAlerts', 'Safety Alert')
            .assert.attributeEquals('@communicationSafetyAlerts', 'href', 
                page.url() + '/safetyalert.php?task=list')

            .assert.visible('@communicationMemoMaker')
            .assert.containsText('@communicationMemoMaker', 'Memo Maker')
            .assert.attributeEquals('@communicationMemoMaker', 'href', 
                page.url() + '/memomaker.php')

            .assert.visible('@communicationEVerification')
            .assert.containsText('@communicationEVerification', 
                'E-Verification')
            .assert.attributeEquals('@communicationEVerification', 'href', 
                page.url() + '/e-verify.php')

            .assert.visible('@communicationChecklist')
            .assert.containsText('@communicationChecklist', 'Checklist')
            .assert.attributeEquals('@communicationChecklist', 'href', 
                page.url() + '/checklist.php')

            .assert.visible('@communicationNotificationLists')
            .assert.containsText('@communicationNotificationLists', 
                'Notification List')
            .assert.attributeEquals('@communicationNotificationLists', 'href', 
                page.url() + '/commnotifylist.php')

            .assert.visible('@communicationConfiguration')
            .assert.containsText('@communicationConfiguration', 'Configuration')
            .assert.attributeEquals('@communicationConfiguration', 'href', 
                page.url() + '/commconfig.php')

            .assert.visible('@communicationReports')
            .assert.containsText('@communicationReports', 'Reports')
            .assert.attributeEquals('@communicationReports', 'href', 
                page.url() + '/reports.php?type=32')

            .click('@communicationHomepage')

            .assert.visible('@communicationHomepagePolling')
            .assert.containsText('@communicationHomepagePolling', 'Polling')
            .assert.attributeEquals('@communicationHomepagePolling', 'href', 
                page.url() + '/poll.php')

            .assert.visible('@communicationHomepageFlashNews')
            .assert.containsText('@communicationHomepageFlashNews', 
                'Flash News')
            .assert.attributeEquals('@communicationHomepageFlashNews', 'href', 
                page.url() + '/flash.php')

            .assert.visible('@communicationHomepageSponsorAds')
            .assert.containsText('@communicationHomepageSponsorAds', 
                'Sponsor Ads')
            .assert.attributeEquals('@communicationHomepageSponsorAds', 'href', 
                page.url() + '/flashads.php')

            .assert.visible('@communicationHomepageRequest')
            .assert.containsText('@communicationHomepageRequest', 'Request')
            .assert.attributeEquals('@communicationHomepageRequest', 'href', 
                page.url() + '/request.php')

            .assert.visible('@communicationHomepageMsgOfTheDay')
            .assert.containsText('@communicationHomepageMsgOfTheDay', 
                'Msg of the Day')
            .assert.attributeEquals('@communicationHomepageMsgOfTheDay', 'href',
                page.url() + '/motdadmin.php')

            .click('@communicationHomepage')

            .assert.hidden('@communicationHomepagePolling')
            .assert.hidden('@communicationHomepageFlashNews')
            .assert.hidden('@communicationHomepageSponsorAds')
            .assert.hidden('@communicationHomepageRequest')
            .assert.hidden('@communicationHomepageMsgOfTheDay')

            .click('@communicationBatchEmail')

            .assert.visible('@communicationBatchEmailCompose')
            .assert.containsText('@communicationBatchEmailCompose', 'Compose')
            .assert.attributeEquals('@communicationBatchEmailCompose', 'href', 
                page.url() + '/batchemail3.php?task=compose&classid=')

            .assert.visible('@communicationBatchEmailDrafts')
            .assert.containsText('@communicationBatchEmailDrafts', 'Drafts')
            .assert.attributeEquals('@communicationBatchEmailDrafts', 'href', 
                page.url() + '/batchemail3.php?type=1')

            .assert.visible('@communicationBatchEmailScheduled')
            .assert.containsText('@communicationBatchEmailScheduled', 
                'Scheduled')
            .assert.attributeEquals('@communicationBatchEmailScheduled', 'href',
                page.url() + '/batchemail3.php?type=3')

            .assert.visible('@communicationBatchEmailSent')
            .assert.containsText('@communicationBatchEmailSent', 'Sent')
            .assert.attributeEquals('@communicationBatchEmailSent', 'href', 
                page.url() + '/batchemail3.php?type=2')

            .click('@communicationBatchEmail')

            .assert.hidden('@communicationBatchEmailCompose')
            .assert.hidden('@communicationBatchEmailDrafts')
            .assert.hidden('@communicationBatchEmailScheduled')
            .assert.hidden('@communicationBatchEmailSent')

            .click('@communicationTextMessaging')

            .assert.visible('@communicationTextMessagingBatchTextMessage')
            .assert.containsText('@communicationTextMessagingBatchTextMessage',
                'Batch Text Msg')
            .assert.attributeEquals('@communicationTextMessagingBatchTextMessage', 
                'href', page.url() + '/batchsms.php')

            .assert.visible('@communicationTextMessagingMessageLogs')
            .assert.containsText('@communicationTextMessagingMessageLogs', 
                'Message Logs')
            .assert.attributeEquals('@communicationTextMessagingMessageLogs', 
                'href', page.url() + '/commtxtmsgs.php')

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
            .assert.hidden('@communicationReports');

        client.frame(null);

        client.end();
    }
};
