module.exports = {
    tags: ['administrativeTests', 'humanResourcesTests', 
        'humanResourcesDepartmentsTest',],

    'Human Resources Departments Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@humanReources')
            .click('@humanReources')
            .assert.visible('@humanResourcesDepartments')
            .click('@humanResourcesDepartments')
        client.frame(null);

        client.frame(2);
        client.page.administrative.humanResources.departments()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Human Resources/ Departments')

            .activeTab('Current')

            .assert.visible('@newDepartmentBtn')
            .assert.attributeEquals('@newDepartmentBtn', 'value', 
                'New Department')
            .assert.attributeEquals('@newDepartmentBtn', 'onclick', 'adddept()')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@codeHeader')
            .assert.containsText('@codeHeader', 'Code')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@managerHeader')
            .assert.containsText('@managerHeader', 'Manager')

            .assert.visible('@BANHeader')
            .assert.containsText('@BANHeader', 'BAN')

        client.frame(null)

        client.end();
    }
};
