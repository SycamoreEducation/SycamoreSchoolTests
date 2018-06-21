module.exports = {
    tags: ['communicationTests', 'memoMakerTest'],

    'Memo Maker Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@communication')
            .click('@communication')
            .assert.visible('@communicationMemoMaker')
            .click('@communicationMemoMaker')
        client.frame(null);

        client.frame(2);
        client.page.communication.memoMaker()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Communication/ Memo Maker')

            .assert.visible('@startDateLabel')
            .assert.containsText('@startDateLabel', 'Start Date')

            .assert.visible('@startDateInput')
            .assert.attributeEquals('@startDateInput', 'type', 'text')

            .assert.visible('@endDateLabel')
            .assert.containsText('@endDateLabel', 'End Date')

            .assert.visible('@endDateInput')
            .assert.attributeEquals('@endDateInput', 'type', 'text')

            .assert.visible('@eventsNewsCheckbox')
            .assert.attributeEquals('@eventsNewsCheckbox', 'type', 'checkbox')
            
            .assert.visible('@eventsNewsLabel')
            .assert.containsText('@eventsNewsLabel', 
                'Include Internal Events/News')

            .assert.visible('@submitBtn')
            .assert.attributeEquals('@submitBtn', 'value', 'Submit')
            .assert.attributeEquals('@submitBtn', 'type', 'submit')
            .click('@submitBtn')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Communication/ Memo Maker')

            .activeTab('Current')

            .assert.visible('@saveBtn')
            .assert.attributeEquals('@saveBtn', 'value', 'Save')
            .assert.attributeEquals('@saveBtn', 'onclick', 'SubmitIT(2)')

            .assert.visible('@viewBtn')
            .assert.attributeEquals('@viewBtn', 'value', 'View')
            .assert.attributeEquals('@viewBtn', 'onclick', 'SubmitIT(1)')

            .assert.visible('@titleLabel')
            .assert.containsText('@titleLabel', 'Title')

            .assert.visible('@titleInput')
            .assert.attributeEquals('@titleInput', 'type', 'text')

            .assert.visible('@titleAlignmentLabel')
            .assert.containsText('@titleAlignmentLabel', 'Alignment')

            .assert.visible('@titleAlignmentSelect')
            .assert.containsText('@titleAlignmentSelect', 'Left')

            .assert.visible('@titleFontSizeLabel')
            .assert.containsText('@titleFontSizeLabel', 'Font Size')
            
            .assert.visible('@titleFontSizeSelect')
            .assert.containsText('@titleFontSizeSelect', '4')

            .assert.visible('@trailerLabel')
            .assert.containsText('@trailerLabel', 'Trailer')

            .assert.visible('@trailerInput')
            .assert.attributeEquals('@trailerInput', 'type', 'text')

            .assert.visible('@trailerAlignmentLabel')
            .assert.containsText('@trailerAlignmentLabel', 'Alignment')

            .assert.visible('@trailerAlignmentSelect')
            .assert.containsText('@trailerAlignmentSelect', 'Center')

            .assert.visible('@trailerFontSizeLabel')
            .assert.containsText('@trailerFontSizeLabel', 'Font Size')

            .assert.visible('@trailerFontSizeSelect')
            .assert.containsText('@trailerFontSizeSelect', '1')

            .assert.visible('@schoolNameCheckbox')
            .assert.attributeEquals('@schoolNameCheckbox', 'type', 'checkbox')

            .assert.visible('@schoolMottoCheckbox')
            .assert.attributeEquals('@schoolMottoCheckbox', 'type', 'checkbox')

            .assert.visible('@schoolAddressCheckbox')
            .assert.attributeEquals('@schoolAddressCheckbox', 'type', 
                'checkbox')

            .assert.visible('@schoolPhoneCheckbox')
            .assert.attributeEquals('@schoolPhoneCheckbox', 'type', 'checkbox')

            .assert.visible('@eventsHeader')
            .assert.containsText('@eventsHeader', 'Events')

            .assert.visible('@eventsBoxCheckbox')
            .assert.attributeEquals('@eventsBoxCheckbox', 'type', 'checkbox')

            .assert.visible('@eventsFontSizeSelect')
            .assert.containsText('@eventsFontSizeSelect', '1')

            .assert.visible('@eventsDateHeader')
            .assert.containsText('@eventsDateHeader', 'Date')

            .assert.visible('@eventsClassHeader')
            .assert.containsText('@eventsClassHeader', 'Class')

            .assert.visible('@eventsEventsHeader')
            .assert.containsText('@eventsEventsHeader', 'Events')

            .assert.visible('@newsHeader')
            .assert.containsText('@newsHeader', 'News')

            .assert.visible('@newsBoxCheckbox')
            .assert.attributeEquals('@newsBoxCheckbox', 'type', 'checkbox')

            .assert.visible('@newsFontSizeSelect')
            .assert.containsText('@newsFontSizeSelect', '1')

            .assert.visible('@newsDateHeader')
            .assert.containsText('@newsDateHeader', 'Date')

            .assert.visible('@newsPHeader')
            .assert.containsText('@newsPHeader', 'P')

            .assert.visible('@newsClassHeader')
            .assert.containsText('@newsClassHeader', 'Class')

            .assert.visible('@newsSubjectHeader')
            .assert.containsText('@newsSubjectHeader', 'Subject')

        client.frame(null)

        client.end();
    }
};
