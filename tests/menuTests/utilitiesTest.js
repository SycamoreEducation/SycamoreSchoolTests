module.exports = {
    tags: ['utilitiesTest', 'menuTests'],

    'Utilities Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@utilities')
            .assert.containsText('@utilities', '\273 Utilities')
            .assert.attributeEquals('@utilities', 'href', 'http://web/schoolmenu.php#')

            .assert.hidden('@onlineFormMgr')
            .assert.hidden('@onlineFormMgrActive')
            .assert.hidden('@onlineFormMgrNonActive')

            .click('@utilities')

            .assert.visible('@onlineFormMgr')
            .assert.containsText('@onlineFormMgr', 'Online Form Mgr')
            .assert.attributeEquals('@athleticDirector', 'href', 'http://web/schoolmenu.php#')

            .click('@onlineFormMgr')
            .assert.visible('@onlineFormMgrActive')
            .assert.visible('@onlineFormMgrNonActive')
            .assert.containsText('@onlineFormMgrActive', 'Active')
            .assert.containsText('@onlineFormMgrNonActive', 'Non Active')
            .assert.attributeEquals('@onlineFormMgrActive', 'href', 'http://web/forms.php?task=list&type=active')
            .assert.attributeEquals('@onlineFormMgrNonActive', 'href', 'http://web/forms.php?task=list&type=nonactive')

            .click('@onlineFormMgr')
            .assert.hidden('@onlineFormMgrActive')
            .assert.hidden('@onlineFormMgrNonActive')

            .click('@utilities')
            .assert.hidden('@onlineFormMgr')
            .assert.hidden('@onlineFormMgrActive')
            .assert.hidden('@onlineFormMgrNonActive')

        client.frame(null);

        client.end();
    }
};
