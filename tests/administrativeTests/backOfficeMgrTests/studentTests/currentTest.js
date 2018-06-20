module.exports = {
    tags: ['administrativeTests', 'backOfficeMgrTests', 'backOfficeStudentTests',
        'backOfficeStudentCurrentTabTest'],

    'Back Office Student Current Test': (client) => {

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
            .assert.visible('@backOfficeMgrStudentsCurrent')
            .click('@backOfficeMgrStudentsCurrent')
        client.frame(null);

        client.frame(2);
        client.page.administrative.backOfficeMgr.students.currentTab()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Back Office/ Students')

            .assert.visible('@currentTab')
            .assert.containsText('@currentTab', 'Current')

            .assert.visible('@allTab')
            .assert.containsText('@allTab', 'All')

            .assert.visible('@barCodeLabel')
            .assert.attributeEquals('@barCodeLabel', 'src', 
                page.url() + '/images/barcode_reader.jpg')

            .assert.visible('@searchInput')
            .assert.attributeEquals('@searchInput', 'type', 'text')

            .assert.visible('@searchBtn')
            .assert.attributeEquals('@searchBtn', 'value', 'Search')
            .assert.attributeEquals('@searchBtn', 'type', 'submit')

            .assert.visible('@yearsSelect')
            .assert.attributeEquals('@yearsSelect', 'onchange', 'donewyear()')

            .assert.visible('@gradesSelect')
            .assert.containsText('@gradesSelect', 'All Grades')
            .assert.attributeEquals('@gradesSelect', 'onchange', 'donewgrade()')

            .assert.visible('@typesSelect')
            .assert.containsText('@typesSelect', 'All Types')
            .assert.attributeEquals('@typesSelect', 'onchange', 'donewtype()')

            .assert.visible('@categorySelect')
            .assert.containsText('@categorySelect', 'Select Student Category')
            .assert.attributeEquals('@categorySelect', 'onchange', 
                'donewcategory()')

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

            .assert.visible('@studentCount')
            .assert.containsText('@studentCount', 'Count: 1')

            .assert.visible('@studentCodeHeader')
            .assert.containsText('@studentCodeHeader', 'Student Code')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@gradeHeader')
            .assert.containsText('@gradeHeader', 'Grade')

            .assert.visible('@locationHeader')
            .assert.containsText('@locationHeader', 'Location')

            .click('@listAll')

            .assert.visible('@testStudentCode')
            .assert.containsText('@testStudentCode', 'CUR1000-1')
            .assert.attributeEquals('@testStudentCode', 'onclick', 
                'DoStudent(1); return false;')

            .assert.visible('@testStudentName')
            .assert.containsText('@testStudentName', 'Current, Stan')

            .assert.visible('@testStudentGrade')
            .assert.containsText('@testStudentGrade', 'N/A')

        client.frame(null)

        client.end();
    }
};
