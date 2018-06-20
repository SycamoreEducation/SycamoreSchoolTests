module.exports = {
    elements: {
        breadcrumb: 'body > ul.breadcrumb',
        optionsTab: 'body > ul.nav.nav-tabs > li > a',
        twilioHeader: 'body > div.tab-content > div:nth-child(1) > form > font',
        twilioImage: 'body > div.tab-content > div:nth-child(1) > form > table > tbody > tr:nth-child(1) > td:nth-child(1) > img',
        twilioDescription: 'body > div.tab-content > div:nth-child(1) > form > table > tbody > tr:nth-child(1) > td:nth-child(2)',
        twilioEnabledLabel: 'body > div.tab-content > div:nth-child(1) > form > table > tbody > tr:nth-child(2) > td:nth-child(1)',
        twilioEnabledCheckbox: '#twenabled',
        accountSIDLabel: 'body > div.tab-content > div:nth-child(1) > form > table > tbody > tr:nth-child(3) > td:nth-child(1)',
        accountSIDInput: '#twaccountsid',
        authTokenLabel: 'body > div.tab-content > div:nth-child(1) > form > table > tbody > tr:nth-child(4) > td:nth-child(1)',
        authTokenInput: '#twauthtoken',
        phoneNumberLabel: 'body > div.tab-content > div:nth-child(1) > form > table > tbody > tr:nth-child(5) > td:nth-child(1)',
        phoneNumberInput: '#twphonenumber',
        defaultLabel: 'body > div.tab-content > div:nth-child(1) > form > table > tbody > tr:nth-child(5) > td:nth-child(2) > font',
        smsMessagingLabel: 'body > div.tab-content > div:nth-child(1) > form > table > tbody > tr:nth-child(6) > td:nth-child(1)',
        PANCheckbox: '#tw_pan',
        PANLabel: 'body > div.tab-content > div:nth-child(1) > form > table > tbody > tr:nth-child(6) > td:nth-child(2) > font:nth-child(2)',
        //Batch Text Messaging
        batchTextCheckbox: '#tw_batch_sms',
        batchTextLabel: 'body > div.tab-content > div:nth-child(1) > form > table > tbody > tr:nth-child(6) > td:nth-child(2) > font:nth-child(4)',
        voiceMessagingLabel: 'body > div.tab-content > div:nth-child(1) > form > table > tbody > tr:nth-child(7) > td:nth-child(1)',
        voiceMessagingCheckbox: '#tw_batch_voice',
        schoolLabel: 'body > div.tab-content > div:nth-child(1) > form > table > tbody > tr:nth-child(7) > td:nth-child(2) > font',
        contactLabel: 'body > div.tab-content > div:nth-child(1) > form > table > tbody > tr:nth-child(8) > td:nth-child(1)',
        contactURL: 'body > div.tab-content > div:nth-child(1) > form > table > tbody > tr:nth-child(8) > td:nth-child(2) > a',
        twilioUpdateBtn: 'body > div.tab-content > div:nth-child(1) > form > table > tbody > tr:nth-child(9) > td:nth-child(2) > input',
        //Mailchimp section
        mailChimpImage: '#mailchimpform > table > tbody > tr > td:nth-child(1) > img',
        mailChimpUpdateBtn: '#mailchimpform > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > input.btn.btn-mini.btn-primary.pull-right',
        mailChimpEnabledLabel: '#mailchimpform > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td.se-right',
        mailChimpEnabledCheckbox: '#mailchimp_enabled',
        apiKeyLabel: '#mailchimpform > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td.se-right',
        apiKeyInput: '#mailchimp_password',
        defaultEmailLabel: '#mailchimpform > table > tbody > tr > td:nth-child(2) > table > tbody > tr > td > table > tbody > tr:nth-child(3) > td.se-right.se-nowrap',
        defaultEmailInput: '#mailchimp_email'
    }
};
