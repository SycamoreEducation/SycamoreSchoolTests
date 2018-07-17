module.exports = {
    tags: ['administrativeTests', 'backOfficeMgrTests', 
        'backOfficeStudentTests', 'backOfficeStudentChecklistTests', 
        'backOfficeStudentChecklistItemsTabTest'],

    'Back Office Student Checklist Items Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@backOfficeMgr')
            .click('@backOfficeMgr')
            .assert.visible('@backOfficeMgrStudents')
            .click('@backOfficeMgrStudents')
            .assert.visible('@backOfficeMgrStudentsChecklists')
            .click('@backOfficeMgrStudentsChecklists');
        client.frame(null);

        client.frame(2);
        client.page.administrative.backOfficeMgr.students.checklist.itemsTab()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Back Office/Students/ Checklists')

            .activeTab('Items')

            .assert.visible('@newItemBtn')
            .assert.attributeEquals('@newItemBtn', 'value', 'New Item')
            .assert.attributeEquals('@newItemBtn', 'onclick', 'additem()')

            .assert.visible('@clearAllChecksBtn')
            .assert.attributeEquals('@clearAllChecksBtn', 'value', 
                'Clear All Checks')
            .assert.attributeEquals('@clearAllChecksBtn', 'onclick', 
                'clearall()')

            .assert.visible('@itemHeader')
            .assert.containsText('@itemHeader', 'Item')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description');

        client.frame(null);

        client.end();
    }
};
