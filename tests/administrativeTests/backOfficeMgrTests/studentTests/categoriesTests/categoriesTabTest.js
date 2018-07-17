module.exports = {
    tags: ['administrativeTests', 'backOfficeMgrTests', 
        'backOfficeStudentTests', 'backOfficeStudentCategoriesTabTest'],

    'Back Office Student Categories Tab Test': (client) => {

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
            .assert.visible('@backOfficeMgrStudentsCategories')
            .click('@backOfficeMgrStudentsCategories');
        client.frame(null);

        client.frame(2);
        client.page.administrative.backOfficeMgr.students.categories
            .categoriesTab()
            
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Back Office/Students/ Categories')

            .activeTab('Categories')

            .assert.visible('@groupsBtn')
            .assert.attributeEquals('@groupsBtn', 'value', 'Groups')
            .assert.attributeEquals('@groupsBtn', 'onclick', 'groups()')

            .assert.visible('@newCategoryBtn')
            .assert.attributeEquals('@newCategoryBtn', 'value', 'New Category')
            .assert.attributeEquals('@newCategoryBtn', 'onclick', 
                'addcategory()')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@countHeader')
            .assert.containsText('@countHeader', 'Count');

        client.frame(null);

        client.end();
    }
};
