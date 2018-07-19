module.exports = {
    tags: ['academicTests', 'academicClassroomMgrTests', 
        'academicClassroomMgrReportsTests',
        'classroomMgrReportsTemplatesTabTest'],

    'Academic Classroom Mgr Reports Templates Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .click('@academic')
            .assert.visible('@classroomMgr')
            .click('@classroomMgr')
            .assert.visible('@classroomMgrReports')
            .click('@classroomMgrReports');
        client.frame(null);

        client.frame(2);
        client.pause(client.globals.FRAME_PAUSE);
        client.page.academic.classroomMgr.reports()
            .waitForElementVisible('@templatesTab', 5000)
            .click('@templatesTab')

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Report Mgr +/ Templates')

            .activeTab('Template')

            .assert.visible('@commonTab')
            .assert.containsText('@commonTab', 'Common')

            .assert.visible('@customTab')
            .assert.containsText('@customTab', 'Custom')

            .assert.visible('@generateBtn')
            .assert.attributeEquals('@generateBtn', 'value', 'Generate')
            .assert.attributeEquals('@generateBtn', 'onclick', 'dosubmit()')

            .assert.visible('@typeLabel')
            .assert.containsText('@typeLabel', 'Select Class Type')

            .assert.visible('@typeSelect')
            .assert.containsText('@typeSelect', 'Choose Type')
            .assert.attributeEquals('@typeSelect', 'onchange', 'doRefresh();')

            .assert.visible('@reportLabel')
            .assert.containsText('@reportLabel', 'Select Report Template')

            .assert.visible('@reportSelect')
            .assert.containsText('@reportSelect', 'Choose Report')

            .assert.visible('@checkboxHeader')
            .assert.attributeEquals('@checkboxHeader', 'onclick', 
                `setChecked('.setCheckedBox','')`)

            .assert.visible('@classNameHeader')
            .assert.containsText('@classNameHeader', 'Class Name')

            .assert.visible('@classSectionHeader')
            .assert.containsText('@classSectionHeader', 'Class Section');

        client.frame(null);

        client.end();
    }
};
