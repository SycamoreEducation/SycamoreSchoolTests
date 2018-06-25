module.exports = {
    tags: ['administrativeTests', 'backOfficeMgrTests', 'backOfficeFamliliesTests',
        'backOfficeFamiliesAdditionalFieldsTest'],

    'Back Office Families Additional Fields Student Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@backOfficeMgr')
            .click('@backOfficeMgr')
            .assert.visible('@backOfficeMgrFamilies')
            .click('@backOfficeMgrFamilies')
            .assert.visible('@backOfficeMgrFamiliesAdditionalFields')
            .click('@backOfficeMgrFamiliesAdditionalFields')
        client.frame(null);

        client.frame(2);
        client.page.administrative.backOfficeMgr.families.additionalFields
            .familyTab()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Back Office/Families/ Additional Fields')

            .activeTab('Family')

            .assert.visible('@newFieldBtn')
            .assert.containsText('@newFieldBtn', 'New Field')
            .assert.attributeEquals('@newFieldBtn', 'onclick', 'addField()')

            .assert.visible('@groupsBtn')
            .assert.containsText('@groupsBtn', 'Groups')
            .assert.attributeEquals('@groupsBtn', 'onclick', 'viewGroups()')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@attributesHeader')
            .assert.containsText('@attributesHeader', 'Attributes')

            .assert.visible('@typeHeader')
            .assert.containsText('@typeHeader', 'Type')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@profileHeader')
            .assert.containsText('@profileHeader', 'Profile')

            .assert.visible('@admissionsHeader')
            .assert.containsText('@admissionsHeader', 'Admissions')

            .assert.visible('@inquiriesHeader')
            .assert.containsText('@inquiriesHeader', 'Inquiries')
            

        client.frame(null)

        client.end();
    }
};
