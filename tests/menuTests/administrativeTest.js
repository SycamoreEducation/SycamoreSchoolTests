module.exports = {
    tags: ['administrativeTest', 'menuTests'],

    'Administrative Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .assert.containsText('@administrative', '\273 Administrative')
            .assert.attributeEquals('@administrative', 'href', 
                page.url() + '/schoolmenu.php#')

            .assert.hidden('@backOfficeMgr')
            .assert.hidden('@backOfficeMgrStudents')
            .assert.hidden('@backOfficeMgrStudentsAll')
            .assert.hidden('@backOfficeMgrStudentsCurrent')
            .assert.hidden('@backOfficeMgrStudentsTypes')
            .assert.hidden('@backOfficeMgrStudentsAdditionalFields')
            .assert.hidden('@backOfficeMgrStudentsCategories')
            .assert.hidden('@backOfficeMgrStudentsActivites')
            .assert.hidden('@backOfficeMgrStudentsChecklists')

            .assert.hidden('@backOfficeMgrFamilies')
            .assert.hidden('@backOfficeMgrFamiliesAll')
            .assert.hidden('@backOfficeMgrFamiliesCurrent')
            .assert.hidden('@backOfficeMgrFamiliesAdditionalFields')
            .assert.hidden('@backOfficeMgrFamiliesNewFamily')

            .assert.hidden('@backOfficeReports')

            .assert.hidden('@attendance')
            .assert.hidden('@attendanceHomeroom')
            .assert.hidden('@attendanceByPeriods')
            .assert.hidden('@attendanceByStudent')
            .assert.hidden('@attendanceByClassroom')
            .assert.hidden('@attendanceByEmployee')
            .assert.hidden('@attendanceDailyAbsences')
            .assert.hidden('@attendanceCheckInOut')
            .assert.hidden('@attendanceRecordTypes')
            .assert.hidden('@attendanceScale')
            .assert.hidden('@attendanceReports')

            .assert.hidden('@administration')
            .assert.hidden('@administrationSchoolYears')
            .assert.hidden('@administrationSchoolPeriods')
            .assert.hidden('@administrationGradeLevels')
            .assert.hidden('@administrationCalendarOptions')
            .assert.hidden('@administrationReportTemplate')
            .assert.hidden('@administrationReportArchives')

            .assert.hidden('@humanReources')
            .assert.hidden('@humanResourcesEmployees')
            .assert.hidden('@humanResourcesSubstitutes')
            .assert.hidden('@humanResourcesDepartments')
            .assert.hidden('@humanResourcesPositions')
            .assert.hidden('@humanResourcesTypes')
            .assert.hidden('@humanResourcesCategories')
            .assert.hidden('@humanResourcesAdditionalFields')
            .assert.hidden('@humanResourcesReports')

            .click('@administrative')

            .assert.visible('@backOfficeMgr')
            .assert.containsText('@backOfficeMgr', 'Back Office Mgr')

            .assert.visible('@attendance')
            .assert.containsText('@attendance', 'Attendance')

            .assert.visible('@administration')
            .assert.containsText('@administration', 'Administration')

            .assert.visible('@humanReources')
            .assert.containsText('@humanReources', 'Human Resources')

            .click('@backOfficeMgr')

            .assert.visible('@backOfficeMgrStudents')
            .assert.containsText('@backOfficeMgrStudents', 'Students')

            .assert.visible('@backOfficeMgrFamilies')
            .assert.containsText('@backOfficeMgrFamilies', 'Families')

            .assert.visible('@backOfficeReports')
            .assert.containsText('@backOfficeReports', 'Reports')
            .assert.attributeEquals('@backOfficeReports', 'href', 
                page.url() + '/reports.php?type=2')

            .click('@backOfficeMgrStudents')

            .assert.visible('@backOfficeMgrStudentsAll')
            .assert.containsText('@backOfficeMgrStudentsAll', 'All')
            .assert.attributeEquals('@backOfficeMgrStudentsAll', 'href', 
                page.url() + '/students.php?task=list&all=1&grade=99')

            .assert.visible('@backOfficeMgrStudentsCurrent')
            .assert.containsText('@backOfficeMgrStudentsCurrent', 'Current')
            .assert.attributeEquals('@backOfficeMgrStudentsCurrent', 'href', 
                page.url() + '/students.php?task=list&cur=1&grade=99')

            .assert.visible('@backOfficeMgrStudentsTypes')
            .assert.containsText('@backOfficeMgrStudentsTypes', 'Types')
            .assert.attributeEquals('@backOfficeMgrStudentsTypes', 'href', 
                page.url() + '/studenttypes.php')

            .assert.visible('@backOfficeMgrStudentsAdditionalFields')
            .assert.containsText('@backOfficeMgrStudentsAdditionalFields', 
                'Additional Fields')
            .assert.attributeEquals('@backOfficeMgrStudentsAdditionalFields', 
                'href', page.url() + '/studentstatistics.php?task=list')

            .assert.visible('@backOfficeMgrStudentsCategories')
            .assert.containsText('@backOfficeMgrStudentsCategories', 
                'Categories')
            .assert.attributeEquals('@backOfficeMgrStudentsCategories', 'href', 
                page.url() + '/studentcategories.php')

            .assert.visible('@backOfficeMgrStudentsActivites')
            .assert.containsText('@backOfficeMgrStudentsActivites', 
                'Activities')
            .assert.attributeEquals('@backOfficeMgrStudentsActivites', 'href', 
                page.url() + '/studentactivities.php')

            .assert.visible('@backOfficeMgrStudentsChecklists')
            .assert.containsText('@backOfficeMgrStudentsChecklists', 
                'Checklists')
            .assert.attributeEquals('@backOfficeMgrStudentsChecklists', 'href', 
                page.url() + '/studentchecklist.php?task=list')

            .click('@backOfficeMgrStudents')

            .assert.hidden('@backOfficeMgrStudentsAll')
            .assert.hidden('@backOfficeMgrStudentsCurrent')
            .assert.hidden('@backOfficeMgrStudentsTypes')
            .assert.hidden('@backOfficeMgrStudentsAdditionalFields')
            .assert.hidden('@backOfficeMgrStudentsCategories')
            .assert.hidden('@backOfficeMgrStudentsActivites')
            .assert.hidden('@backOfficeMgrStudentsChecklists')

            .click('@backOfficeMgrFamilies')

            .assert.visible('@backOfficeMgrFamiliesAll')
            .assert.containsText('@backOfficeMgrFamiliesAll', 'All')
            .assert.attributeEquals('@backOfficeMgrFamiliesAll', 'href', 
                page.url() + '/families.php?task=list&all=1')

            .assert.visible('@backOfficeMgrFamiliesCurrent')
            .assert.containsText('@backOfficeMgrFamiliesCurrent', 'Current')
            .assert.attributeEquals('@backOfficeMgrFamiliesCurrent', 'href', 
                page.url() + '/families.php?task=list&cur=1')

            .assert.visible('@backOfficeMgrFamiliesAdditionalFields')
            .assert.containsText('@backOfficeMgrFamiliesAdditionalFields', 
                'Additional Fields')
            .assert.attributeEquals('@backOfficeMgrFamiliesAdditionalFields', 
                'href', page.url() + '/familystatistics.php?task=list')

            .assert.visible('@backOfficeMgrFamiliesNewFamily')
            .assert.containsText('@backOfficeMgrFamiliesNewFamily', 
                'New Family')
            .assert.attributeEquals('@backOfficeMgrFamiliesNewFamily', 
                'href', page.url() + '/families.php?task=new')

            .click('@backOfficeMgrFamilies')

            .assert.hidden('@backOfficeMgrFamiliesAll')
            .assert.hidden('@backOfficeMgrFamiliesCurrent')
            .assert.hidden('@backOfficeMgrFamiliesAdditionalFields')
            .assert.hidden('@backOfficeMgrFamiliesNewFamily')

            .click('@backOfficeMgr')

            .assert.hidden('@backOfficeMgrStudents')
            .assert.hidden('@backOfficeMgrFamilies')
            .assert.hidden('@backOfficeReports')

            .click('@attendance')

            .assert.visible('@attendanceHomeroom')
            .assert.containsText('@attendanceHomeroom', 'Homeroom')
            .assert.attributeEquals('@attendanceHomeroom', 'href', 
                page.url() + '/homeroom.php')

            .assert.visible('@attendanceByPeriods')
            .assert.containsText('@attendanceByPeriods', 'by Periods')
            .assert.attributeEquals('@attendanceByPeriods', 'href', 
                page.url() + '/attendperiods.php')

            .assert.visible('@attendanceByStudent')
            .assert.containsText('@attendanceByStudent', 'by Student')
            .assert.attributeEquals('@attendanceByStudent', 'href', 
                page.url() + '/attendstudents.php')

            .assert.visible('@attendanceByClassroom')
            .assert.containsText('@attendanceByClassroom', 'by Classroom')
            .assert.attributeEquals('@attendanceByClassroom', 'href', 
                page.url() + '/attendclasses.php')

            .assert.visible('@attendanceByEmployee')
            .assert.containsText('@attendanceByEmployee', 'by Employee')
            .assert.attributeEquals('@attendanceByEmployee', 'href', 
                page.url() + '/attendusers.php')

            .assert.visible('@attendanceDailyAbsences')
            .assert.containsText('@attendanceDailyAbsences', 'Daily Absences')
            .assert.attributeEquals('@attendanceDailyAbsences', 'href', 
                page.url() + '/attendabsents.php')

            .assert.visible('@attendanceCheckInOut')
            .assert.containsText('@attendanceCheckInOut', 'Check In-Out')
            .assert.attributeEquals('@attendanceCheckInOut', 'href', 
                page.url() + '/attendcheck.php')

            .assert.visible('@attendanceRecordTypes')
            .assert.containsText('@attendanceRecordTypes', 'Record Types')
            .assert.attributeEquals('@attendanceRecordTypes', 'href', 
                page.url() + '/attendancetypes.php')

            .assert.visible('@attendanceScale')
            .assert.containsText('@attendanceScale', 'Attendance Scale')
            .assert.attributeEquals('@attendanceScale', 'href', 
                page.url() + '/attendancescale.php')

            .assert.visible('@attendanceReports')
            .assert.containsText('@attendanceReports', 'Reports')
            .assert.attributeEquals('@attendanceReports', 'href', 
                page.url() + '/reports.php?type=12')

            .click('@attendance')

            .assert.hidden('@attendanceHomeroom')
            .assert.hidden('@attendanceByPeriods')
            .assert.hidden('@attendanceByStudent')
            .assert.hidden('@attendanceByClassroom')
            .assert.hidden('@attendanceByEmployee')
            .assert.hidden('@attendanceDailyAbsences')
            .assert.hidden('@attendanceCheckInOut')
            .assert.hidden('@attendanceRecordTypes')
            .assert.hidden('@attendanceScale')
            .assert.hidden('@attendanceReports')

            .click('@administration')

            .assert.visible('@administrationSchoolYears')
            .assert.containsText('@administrationSchoolYears', 'School Years')
            .assert.attributeEquals('@administrationSchoolYears', 'href', 
                page.url() + '/schoolyear.php')

            .assert.visible('@administrationSchoolPeriods')
            .assert.containsText('@administrationSchoolPeriods', 
                'School Periods')
            .assert.attributeEquals('@administrationSchoolPeriods', 'href', 
                page.url() + '/schoolperiods.php')

            .assert.visible('@administrationGradeLevels')
            .assert.containsText('@administrationGradeLevels', 'Grade Levels')
            .assert.attributeEquals('@administrationGradeLevels', 'href', 
                page.url() + '/schoolgrades.php')

            .assert.visible('@administrationCalendarOptions')
            .assert.containsText('@administrationCalendarOptions', 
                'Calendar Options')
            .assert.attributeEquals('@administrationCalendarOptions', 'href', 
                page.url() + '/calendaroptions.php')

            .assert.visible('@administrationReportTemplate')
            .assert.containsText('@administrationReportTemplate', 
                'Report Template +')
            .assert.attributeEquals('@administrationReportTemplate', 'href', 
                page.url() + '/report_mgr.php')

            .assert.visible('@administrationReportArchives')
            .assert.containsText('@administrationReportArchives', 
                'Report Archives')
            .assert.attributeEquals('@administrationReportArchives', 'href', 
                page.url() + '/reportarchives.php?noheader=1')

            .click('@administration')

            .assert.hidden('@administrationSchoolYears')
            .assert.hidden('@administrationSchoolPeriods')
            .assert.hidden('@administrationGradeLevels')
            .assert.hidden('@administrationCalendarOptions')
            .assert.hidden('@administrationReportTemplate')
            .assert.hidden('@administrationReportArchives')

            .click('@humanReources')

            .assert.visible('@humanResourcesEmployees')
            .assert.containsText('@humanResourcesEmployees', 'Employees')
            .assert.attributeEquals('@humanResourcesEmployees', 'href', 
                page.url() + '/users.php?task=list')

            .assert.visible('@humanResourcesSubstitutes')
            .assert.containsText('@humanResourcesSubstitutes', 'Substitutes')
            .assert.attributeEquals('@humanResourcesSubstitutes', 'href', 
                page.url() + '/substitutes.php')

            .assert.visible('@humanResourcesDepartments')
            .assert.containsText('@humanResourcesDepartments', 'Departments')
            .assert.attributeEquals('@humanResourcesDepartments', 'href', 
                page.url() + '/departments.php')

            .assert.visible('@humanResourcesPositions')
            .assert.containsText('@humanResourcesPositions', 'Positions')
            .assert.attributeEquals('@humanResourcesPositions', 'href', 
                page.url() + '/userpositions.php?task=list')

            .assert.visible('@humanResourcesTypes')
            .assert.containsText('@humanResourcesTypes', 'Types')
            .assert.attributeEquals('@humanResourcesTypes', 'href', 
                page.url() + '/usertypes.php')

            .assert.visible('@humanResourcesCategories')
            .assert.containsText('@humanResourcesCategories', 'Categories')
            .assert.attributeEquals('@humanResourcesCategories', 'href', 
                page.url() + '/usercategories.php?task=list')

            .assert.visible('@humanResourcesAdditionalFields')
            .assert.containsText('@humanResourcesAdditionalFields', 
                'Additional Fields')
            .assert.attributeEquals('@humanResourcesAdditionalFields', 'href', 
                page.url() + '/userstatistics.php?task=list')

            .assert.visible('@humanResourcesReports')
            .assert.containsText('@humanResourcesReports', 'Reports')
            .assert.attributeEquals('@humanResourcesReports', 'href', 
                page.url() + '/reports.php?type=5')

            .click('@humanReources')

            .assert.hidden('@humanResourcesEmployees')
            .assert.hidden('@humanResourcesSubstitutes')
            .assert.hidden('@humanResourcesDepartments')
            .assert.hidden('@humanResourcesPositions')
            .assert.hidden('@humanResourcesTypes')
            .assert.hidden('@humanResourcesCategories')
            .assert.hidden('@humanResourcesAdditionalFields')
            .assert.hidden('@humanResourcesReports')

            .click('@administrative')
            
            .assert.hidden('@backOfficeMgr')
            .assert.hidden('@attendance')
            .assert.hidden('@administration')
            .assert.hidden('@humanReources');

        client.frame(null);

        client.end();
    }
};
