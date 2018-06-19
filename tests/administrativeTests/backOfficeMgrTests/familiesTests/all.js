module.exports = {
    tags: ['administrativeTests', 'backOfficeMgrTests', 'backOfficeFamiliesTests',
        'backOfficeFamiliesAllTabTest'],

    'Back Office Families All Test': (client) => {

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
            .assert.visible('@backOfficeMgrFamiliesAll')
            .click('@backOfficeMgrFamiliesAll')
        client.frame(null);

        client.frame(2);
        client.page.administrative.backOfficeMgr.families.allTab()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Back Office/ Families')

            .assert.visible('@currentTab')
            .assert.containsText('@currentTab', 'Current')

            .assert.visible('@allTab')
            .assert.containsText('@allTab', 'All')

            .assert.visible('@newTab')
            .assert.containsText('@newTab', 'New')

            .assert.visible('@searchInput')
            .assert.attributeEquals('@searchInput', 'type', 'text')

            .assert.visible('@searchBtn')
            .assert.attributeEquals('@searchBtn', 'value', 'Search')
            .assert.attributeEquals('@searchBtn', 'type', 'submit')

            .assert.visible('@listAll')
            .assert.containsText('@listAll', 'List All')

            .assert.visible('@a')
            .assert.containsText('@a', 'A')

            .assert.visible('@b')
            .assert.containsText('@b', 'B')

            .assert.visible('@c')
            .assert.containsText('@c', 'C')

            .assert.visible('@d')
            .assert.containsText('@d', 'D')

            .assert.visible('@e')
            .assert.containsText('@e', 'E')

            .assert.visible('@f')
            .assert.containsText('@f', 'F')

            .assert.visible('@g')
            .assert.containsText('@g', 'G')

            .assert.visible('@h')
            .assert.containsText('@h', 'H')

            .assert.visible('@i')
            .assert.containsText('@i', 'I')

            .assert.visible('@j')
            .assert.containsText('@j', 'J')

            .assert.visible('@k')
            .assert.containsText('@k', 'K')

            .assert.visible('@l')
            .assert.containsText('@l', 'L')

            .assert.visible('@m')
            .assert.containsText('@m', 'M')

            .assert.visible('@n')
            .assert.containsText('@n', 'N')

            .assert.visible('@o')
            .assert.containsText('@o', 'O')

            .assert.visible('@p')
            .assert.containsText('@p', 'P')

            .assert.visible('@q')
            .assert.containsText('@q', 'Q')

            .assert.visible('@r')
            .assert.containsText('@r', 'R')

            .assert.visible('@s')
            .assert.containsText('@s', 'S')

            .assert.visible('@t')
            .assert.containsText('@t', 'T')

            .assert.visible('@u')
            .assert.containsText('@u', 'U')

            .assert.visible('@v')
            .assert.containsText('@v', 'V')

            .assert.visible('@w')
            .assert.containsText('@w', 'W')

            .assert.visible('@x')
            .assert.containsText('@x', 'X')

            .assert.visible('@y')
            .assert.containsText('@y', 'Y')

            .assert.visible('@z')
            .assert.containsText('@z', 'Z')

            .assert.visible('@familyCount')
            .assert.containsText('@familyCount', 'Count: 2')

            .assert.visible('@checkbox')
            .assert.attributeEquals('@checkbox', 'onclick', `setChecked('.setCheckedBox','')`)

            .assert.visible('@familyCodeHeader')
            .assert.containsText('@familyCodeHeader', 'Family Code')

            .assert.visible('@familyNameHeader')
            .assert.containsText('@familyNameHeader', 'Family Name')

            .assert.visible('@addressHeader')
            .assert.containsText('@addressHeader', 'Address')

            .assert.visible('@familyPhoneHeader')
            .assert.containsText('@familyPhoneHeader', 'Family Phone')

            .click('@listAll')

            .assert.visible('@testCheckbox')
            .assert.attributeEquals('@testCheckbox', 'type', 'checkbox')

            .assert.visible('@testFamilyCode')
            .assert.containsText('@testFamilyCode', 'CUR1000')
            .assert.attributeEquals('@testFamilyCode', 'onclick', 
                'doFamily(1);')

            .assert.visible('@testFamilyName')
            .assert.containsText('@testFamilyName', 'Current, John and Jane')

            .assert.visible('@testFamilyAddress')
            .assert.containsText('@testFamilyAddress', '321 First St, Someplace, 54321')

        client.frame(null)

        client.end();
    }
};
