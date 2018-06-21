module.exports = {
    tags: ['infoCenterTests', 'infoCenterOnlineFormsTests', 
        'onlineFormsAvailableTest'],

    'Info Center Online Forms Available Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@infoCenter')
            .click('@infoCenter')
            .assert.visible('@infoCenterOnlineForms')
            .click('@infoCenterOnlineForms')
        client.frame(null);

        client.frame(2);
        client.page.infoCenter.onlineForms()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Info Center/ Online Forms')

            .activeTab('Available')

            .assert.visible('@submittedTab')
            .assert.containsText('@submittedTab', 'Submitted')

            .assert.visible('@availableNameHeader')
            .assert.containsText('@availableNameHeader', 'Name')

            .assert.visible('@availableDescriptionHeader')
            .assert.containsText('@availableDescriptionHeader', 'Description')

        client.frame(null)

        client.end();
    }
};
