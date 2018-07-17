module.exports = {
    tags: ['infoCenterTests', 'infoCenterOnlineFormsTests', 
        'onlineFormsSubmittedTest'],

    'Info Center Online Forms Submitted Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@infoCenter')
            .click('@infoCenter')
            .assert.visible('@infoCenterOnlineForms')
            .click('@infoCenterOnlineForms');
        client.frame(null);

        client.frame(2);
        client.page.infoCenter.onlineForms()
            .waitForElementVisible('@submittedTab', 5000)
            .click('@submittedTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Info Center/ Online Forms')

            .activeTab('Submitted')

            .assert.visible('@availableTab')
            .assert.containsText('@availableTab', 'Available')

            .assert.visible('@submittedHeader')
            .assert.containsText('@submittedHeader', 'Submitted')

            .assert.visible('@submittedNameHeader')
            .assert.containsText('@submittedNameHeader', 'Name')

            .assert.visible('@submittedDescriptionHeader')
            .assert.containsText('@submittedDescriptionHeader', 'Description');

        client.frame(null);

        client.end();
    }
};
