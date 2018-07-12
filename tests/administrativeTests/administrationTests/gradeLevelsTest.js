module.exports = {
    tags: ['administrativeTests', 'administrationTests', 'gradeLevelsTest'],

    'Administration Grade Levels Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@administration')
            .click('@administration')
            .assert.visible('@administrationGradeLevels')
            .click('@administrationGradeLevels')
        client.frame(null);

        client.frame(2);
        client.page.administrative.administration.gradeLevels()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Administration/ Grade Levels')

            .activeTab('Levels')

            .assert.visible('@updateBtn')
            .assert.attributeEquals('@updateBtn', 'value', 'Update')
            
            .assert.visible('@gradesTitle')
            .assert.containsText('@gradesTitle', 'Grades')

            .assert.visible('@lowestGradeLabel')
            .assert.containsText('@lowestGradeLabel', 'Lowest Grade Level')

            .assert.visible('@lowestGradeSelect')
            .assert.containsText('@lowestGradeSelect', '(0) Kindergarten')

            .assert.visible('@highestGradeLabel')
            .assert.containsText('@highestGradeLabel', 'Highest Grade Level')

            .assert.visible('@highestGradeSelect')
            .assert.containsText('@highestGradeSelect', '(12) Senior')

            .assert.visible('@namesTab')
            .assert.containsText('@namesTab', 'Names')

            .assert.visible('@gradeHeader')
            .assert.containsText('@gradeHeader', 'Grade')

            .assert.visible('@labelHeader')
            .assert.containsText('@labelHeader', 'Label')

            .assert.visible('@externalHeader')
            .assert.containsText('@externalHeader', 'External')

        client.frame(null)

        client.end();
    }
};
