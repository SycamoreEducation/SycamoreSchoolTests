module.exports = {
    tags: ['academicTests', 'academicGradeMgrTests', 
        'academicGradeMgrAdditionalFieldsTest'],

    'Academic Grade Mgr Additional Fields Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@gradeMgr')
            .click('@gradeMgr')
            .assert.visible('@gradeMgrAdditionalFields')
            .click('@gradeMgrAdditionalFields')
        client.frame(null);

        client.frame(2);
        client.pause(100);
        client.page.academic.gradeMgr.additionalFields()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Class Grade Fields')

            .activeTab('Fields')

            .assert.visible('@newFieldBtn')
            .assert.containsText('@newFieldBtn', 'New Field')
            .assert.attributeEquals('@newFieldBtn', 'onclick', 'addField()')

            .assert.visible('@groupsBtn')
            .assert.containsText('@groupsBtn', 'Groups')
            .assert.attributeEquals('@groupsBtn', 'onclick', 'viewGroups()')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@fieldsHeader')
            .assert.containsText('@fieldsHeader', 'Fields')

            .assert.visible('@typeHeader')
            .assert.containsText('@typeHeader', 'Type')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@DBIDHeader')
            .assert.containsText('@DBIDHeader', 'DB ID')

        client.frame(null)

        client.end();
    }
};
