module.exports = {
    tags: ['communicationTests', 'communicationsConfigurationTest'],

    'Communications Configuration Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@communication')
            .click('@communication')
            .assert.visible('@communicationConfiguration')
            .click('@communicationConfiguration')
        client.frame(null);

        client.frame(2);
        client.page.communication.configuration()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Communication/ Configuration')

            .assert.visible('@optionsTab')
            .assert.containsText('@optionsTab', 'Options')

            .assert.visible('@twilioHeader')
            .assert.containsText('@twilioHeader', 'Twilio')

            .assert.visible('@twilioImage')
            .assert.attributeEquals('@twilioImage', 'src', 
                page.url() + '/images/twilio_logo.png')

            .assert.visible('@twilioDescription')
            .assert.containsText('@twilioDescription', 'Twilio, a leader in ' +
                'SMS and voice messaging, extends the capabilities of ' +
                'Sycamore School. A Twilio account allows the school to ' + 
                'reliably deliver text and voice messages directly to ' +
                'parents. The options on this page require an account with ' +
                'Twilio and may incur fees from Twilio.')

            .assert.visible('@twilioEnabledLabel')
            .assert.containsText('@twilioEnabledLabel', 'Enabled')

            .assert.visible('@twilioEnabledCheckbox')
            .assert.attributeEquals('@twilioEnabledCheckbox', 'type', 
                'checkbox')

            .assert.visible('@accountSIDLabel')
            .assert.containsText('@accountSIDLabel', 'Account SID #')

            .assert.visible('@accountSIDInput')
            .assert.attributeEquals('@accountSIDInput', 'type', 'text')

            .assert.visible('@authTokenLabel')
            .assert.containsText('@authTokenLabel', 'Auth Token')

            .assert.visible('@authTokenInput')
            .assert.attributeEquals('@authTokenInput', 'type', 'text')

            .assert.visible('@phoneNumberLabel')
            .assert.containsText('@phoneNumberLabel', 'Phone Number')

            .assert.visible('@phoneNumberInput')
            .assert.attributeEquals('@phoneNumberInput', 'type', 'text')

            .assert.visible('@defaultLabel')
            .assert.containsText('@defaultLabel', '(Default)')

            .assert.visible('@smsMessagingLabel')
            .assert.containsText('@smsMessagingLabel', 'SMS Messaging')

            .assert.visible('@PANCheckbox')
            .assert.attributeEquals('@PANCheckbox', 'type', 'checkbox')
            
            .assert.visible('@PANLabel')
            .assert.containsText('@PANLabel', 'Pass-A-Note Bridge')

            .assert.visible('@BTMCheckbox')
            .assert.attributeEquals('@BTMCheckbox', 'type', 'checkbox')

            .assert.visible('@BTMLabel')
            .assert.containsText('@BTMLabel', 'Batch Text Messaging')

            .assert.visible('@voiceMessagingLabel')
            .assert.containsText('@voiceMessagingLabel', 'Voice Messaging')

            .assert.visible('@voiceMessagingCheckbox')
            .assert.attributeEquals('@voiceMessagingCheckbox', 'type', 
                'checkbox')

            .assert.visible('@schoolLabel')
            .assert.containsText('@schoolLabel', 'School')

            .assert.visible('@contactLabel')
            .assert.containsText('@contactLabel', 'Contact')

            .assert.visible('@contactURL')
            .assert.containsText('@contactURL', 'www.twilio.com')
            .assert.attributeEquals('@contactURL', 'href', 
                'http://www.twilio.com/')

            .assert.visible('@twilioUpdateBtn')
            .assert.attributeEquals('@twilioUpdateBtn', 'value', 'Update')
            .assert.attributeEquals('@twilioUpdateBtn', 'onclick', 
                'dotwupdate()')

            .assert.visible('@mailChimpImage')
            .assert.attributeEquals('@mailChimpImage', 'src', 
                page.url() + '/images/Mailchimp-Logo.jpg')

            .assert.visible('@mailChimpUpdateBtn')
            .assert.attributeEquals('@mailChimpUpdateBtn', 'value', ' Update ')
            .assert.attributeEquals('@mailChimpUpdateBtn', 'type', 'submit')

            .assert.visible('@mailChimpEnabledLabel')
            .assert.containsText('@mailChimpEnabledLabel', 'Enabled')

            .assert.visible('@mailChimpEnabledCheckbox')
            .assert.attributeEquals('@mailChimpEnabledCheckbox', 'type', 
                'checkbox')

            .assert.visible('@apiKeyLabel')
            .assert.containsText('@apiKeyLabel', 'API Key')

            .assert.visible('@apiKeyInput')
            .assert.attributeEquals('@apiKeyInput', 'type', 'text')

            .assert.visible('@defaultEmailLabel')
            .assert.containsText('@defaultEmailLabel', 'Default Email')

            .assert.visible('@defaultEmailInput')
            .assert.attributeEquals('@defaultEmailInput', 'type', 'text')

        client.frame(null)

        client.end();
    }
};
