module.exports = {
    tags: ['academicTest', 'menuTests'],

    'Academic Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@academic')
            .assert.containsText('@academic', '\273 Academic')
            .assert.attributeEquals('@academic', 'href', 
                page.url() + '/schoolmenu.php#')

            .assert.hidden('@gradeMgr')
            .assert.hidden('@gradeMgrReportCards')
            .assert.hidden('@gradeMgrGradingScales')
            .assert.hidden('@gradeMgrAttributesGrades')
            .assert.hidden('@gradeMgrGradeComments')
            .assert.hidden('@gradeMgrAdditionalFields')
            .assert.hidden('@gradeMgrGpaScales')
            .assert.hidden('@gradeMgrRequirements')
            .assert.hidden('@gradeMgrConfiguration')
            .assert.hidden('@gradeMgrReports')

            .assert.hidden('@classroomMgr')
            .assert.hidden('@classroomMgrDayLong')
            .assert.hidden('@classroomMgrPeriodLong')
            .assert.hidden('@classroomMgrGeneral')
            .assert.hidden('@classroomMgrAdditionalFields')
            .assert.hidden('@classroomMgrConfiguration')
            .assert.hidden('@classroomMgrReports')

            .assert.hidden('@resourceMgr')
            .assert.hidden('@resourceMgrNews')
            .assert.hidden('@resourceMgrPhotos')
            .assert.hidden('@resourceMgrDocuments')
            .assert.hidden('@resourceMgrOnlineTests')
            .assert.hidden('@resourceMgrBlogs')

            .assert.hidden('@transcriptMgr')
            .assert.hidden('@transcriptMgrStudents')
            .assert.hidden('@transcriptMgrTemplates')
            .assert.hidden('@transcriptMgrConfiguration')

            .assert.hidden('@curriculumMgr')
            .assert.hidden('@curriculumMgrByGrade')
            .assert.hidden('@curriculumMgrBySubject')

            .assert.hidden('@assessmentMgr')
            .assert.hidden('@assessmentMgrSkillSets')
            .assert.hidden('@assessmentMgrStandards')
            .assert.hidden('@assessmentMgrAssessments')
            .assert.hidden('@assessmentMgrStandardizedTests')
            .assert.hidden('@assessmentMgrLessonPlans')
            .assert.hidden('@assessmentMgrLessonPlansByDay')
            .assert.hidden('@assessmentMgrLessonPlansByClass')
            .assert.hidden('@assessmentMgrLessonPlansConfiguration')
            .assert.hidden('@assessmentMgrReports')

            .assert.hidden('@iepMgr')
            .assert.hidden('@iepMgrStudents')
            .assert.hidden('@iepMgrCoordinators')
            .assert.hidden('@iepMgrConfiguration')
            .assert.hidden('@iepMgrReports')

            .assert.hidden('@collegeCreditMgr')
            .assert.hidden('@collegeCreditMgrStudents')
            .assert.hidden('@collegeCreditMgrColleges')

            .click('@academic')
            .assert.visible('@academic')

            .assert.visible('@gradeMgr')
            .assert.containsText('@gradeMgr', 'Grade Mgr')
            .assert.attributeEquals('@gradeMgr', 'href', 
                page.url() + '/schoolmenu.php#')

            .assert.visible('@classroomMgr')
            .assert.containsText('@classroomMgr', 'Classroom Mgr')
            .assert.attributeEquals('@classroomMgr', 'href', 
                page.url() + '/schoolmenu.php#')

            .assert.visible('@resourceMgr')
            .assert.containsText('@resourceMgr', 'Resource Mgr')
            .assert.attributeEquals('@resourceMgr', 'href', 
                page.url() + '/schoolmenu.php#')

            .assert.visible('@transcriptMgr')
            .assert.containsText('@transcriptMgr', 'Transcript Mgr')
            .assert.attributeEquals('@transcriptMgr', 'href', 
                page.url() + '/schoolmenu.php#')

            .assert.visible('@curriculumMgr')
            .assert.containsText('@curriculumMgr', 'Curriculum Mgr')
            .assert.attributeEquals('@curriculumMgr', 'href', 
                page.url() + '/schoolmenu.php#')

            .assert.visible('@assessmentMgr')
            .assert.containsText('@assessmentMgr', 'Assessment Mgr')
            .assert.attributeEquals('@assessmentMgr', 'href', 
                page.url() + '/schoolmenu.php#')

            .assert.visible('@iepMgr')
            .assert.containsText('@iepMgr', 'IEP Mgr')
            .assert.attributeEquals('@iepMgr', 'href', 
                page.url() + '/schoolmenu.php#')

            .assert.visible('@collegeCreditMgr')
            .assert.containsText('@collegeCreditMgr', 'College Credit Mgr')
            .assert.attributeEquals('@collegeCreditMgr', 'href', 
                page.url() + '/schoolmenu.php#')

            .click('@gradeMgr')

            .assert.visible('@gradeMgrReportCards')
            .assert.containsText('@gradeMgrReportCards', 'Report Cards')
            .assert.attributeEquals('@gradeMgrReportCards', 'href', 
                page.url() + '/gradecards.php?grade=99')

            .assert.visible('@gradeMgrGradingScales')
            .assert.containsText('@gradeMgrGradingScales', 'Grading Scales')
            .assert.attributeEquals('@gradeMgrGradingScales', 'href', 
                page.url() + '/schoolscale.php')

            .assert.visible('@gradeMgrAttributesGrades')
            .assert.containsText('@gradeMgrAttributesGrades', 'Attributes Grades')
            .assert.attributeEquals('@gradeMgrAttributesGrades', 'href', 
                page.url() + '/studenthabits.php')

            .assert.visible('@gradeMgrGradeComments')
            .assert.containsText('@gradeMgrGradeComments', 'Grade Comments')
            .assert.attributeEquals('@gradeMgrGradeComments', 'href', 
                page.url() + '/classcomments.php')

            .assert.visible('@gradeMgrAdditionalFields')
            .assert.containsText('@gradeMgrAdditionalFields', 'Additional Fields')
            .assert.attributeEquals('@gradeMgrAdditionalFields', 'href', 
                page.url() + '/classgradestatistics.php?task=list')

            .assert.visible('@gradeMgrGpaScales')
            .assert.containsText('@gradeMgrGpaScales', 'GPA Scales')
            .assert.attributeEquals('@gradeMgrGpaScales', 'href', 
                page.url() + '/gpascale.php')

            .assert.visible('@gradeMgrRequirements')
            .assert.containsText('@gradeMgrRequirements', 'Requirements')
            .assert.attributeEquals('@gradeMgrRequirements', 'href', 
                page.url() + '/classrequirements.php')

            .assert.visible('@gradeMgrConfiguration')
            .assert.containsText('@gradeMgrConfiguration', 'Configuration')
            .assert.attributeEquals('@gradeMgrConfiguration', 'href', 
                page.url() + '/gradecfg.php')

            .assert.visible('@gradeMgrReports')
            .assert.containsText('@gradeMgrReports', 'Reports')
            .assert.attributeEquals('@gradeMgrReports', 'href', 
                page.url() + '/reports.php?type=10')

            .click('@gradeMgr')
            .assert.hidden('@gradeMgrReportCards')
            .assert.hidden('@gradeMgrGradingScales')
            .assert.hidden('@gradeMgrAttributesGrades')
            .assert.hidden('@gradeMgrGradeComments')
            .assert.hidden('@gradeMgrAdditionalFields')
            .assert.hidden('@gradeMgrGpaScales')
            .assert.hidden('@gradeMgrRequirements')
            .assert.hidden('@gradeMgrConfiguration')
            .assert.hidden('@gradeMgrReports')

            .click('@classroomMgr')
            .assert.visible('@classroomMgrDayLong')
            .assert.containsText('@classroomMgrDayLong', 'Day Long')
            .assert.attributeEquals('@classroomMgrDayLong', 'href', 
                page.url() + '/classes.php?task=listelementary')

            .assert.visible('@classroomMgrPeriodLong')
            .assert.containsText('@classroomMgrPeriodLong', 'Period Long')
            .assert.attributeEquals('@classroomMgrPeriodLong', 'href', 
                page.url() + '/classes.php?task=listsecondary')

            .assert.visible('@classroomMgrGeneral')
            .assert.containsText('@classroomMgrGeneral', 'General')
            .assert.attributeEquals('@classroomMgrGeneral', 'href', 
                page.url() + '/classes.php?task=listgeneral')

            .assert.visible('@classroomMgrAdditionalFields')
            .assert.containsText('@classroomMgrAdditionalFields', 
                'Additional Fields')
            .assert.attributeEquals('@classroomMgrAdditionalFields', 'href', 
                page.url() + '/classstatistics.php?task=list')

            .assert.visible('@classroomMgrConfiguration')
            .assert.containsText('@classroomMgrConfiguration', 'Configuration')
            .assert.attributeEquals('@classroomMgrConfiguration', 'href', 
                page.url() + '/classcfg.php')

            .assert.visible('@classroomMgrReports')
            .assert.containsText('@classroomMgrReports', 'Reports')
            .assert.attributeEquals('@classroomMgrReports', 'href', 
                page.url() + '/reports.php?type=7')

            .click('@classroomMgr')
            .assert.hidden('@classroomMgrDayLong')
            .assert.hidden('@classroomMgrPeriodLong')
            .assert.hidden('@classroomMgrGeneral')
            .assert.hidden('@classroomMgrAdditionalFields')
            .assert.hidden('@classroomMgrConfiguration')
            .assert.hidden('@classroomMgrReports')

            .click('@resourceMgr')
            .assert.visible('@resourceMgrNews')
            .assert.containsText('@resourceMgrNews', 'News')
            .assert.attributeEquals('@resourceMgrNews', 'href', 
                page.url() + '/onlinenews.php')

            .assert.visible('@resourceMgrPhotos')
            .assert.containsText('@resourceMgrPhotos', 'Photos')
            .assert.attributeEquals('@resourceMgrPhotos', 'href', 
                page.url() + '/onlinephotos.php')

            .assert.visible('@resourceMgrDocuments')
            .assert.containsText('@resourceMgrDocuments', 'Documents')
            .assert.attributeEquals('@resourceMgrDocuments', 'href', 
                page.url() + '/onlinedocuments.php')

            .assert.visible('@resourceMgrOnlineTests')
            .assert.containsText('@resourceMgrOnlineTests', 'Online Tests')
            .assert.attributeEquals('@resourceMgrOnlineTests', 'href', 
                page.url() + '/onlinetests.php')

            .assert.visible('@resourceMgrBlogs')
            .assert.containsText('@resourceMgrBlogs', 'Blogs')
            .assert.attributeEquals('@resourceMgrBlogs', 'href', 
                page.url() + '/onlineblogs.php')

            .click('@resourceMgr')
            .assert.hidden('@resourceMgrNews')
            .assert.hidden('@resourceMgrPhotos')
            .assert.hidden('@resourceMgrDocuments')
            .assert.hidden('@resourceMgrOnlineTests')
            .assert.hidden('@resourceMgrBlogs')

            .click('@transcriptMgr')
            .assert.visible('@transcriptMgrStudents')
            .assert.containsText('@transcriptMgrStudents', 'Students')
            .assert.attributeEquals('@transcriptMgrStudents', 'href', 
                page.url() + '/transcripts.php')

            .assert.visible('@transcriptMgrTemplates')
            .assert.containsText('@transcriptMgrTemplates', 'Templates')
            .assert.attributeEquals('@transcriptMgrTemplates', 'href', 
                page.url() + '/transcript_editor.php')

            .assert.visible('@transcriptMgrConfiguration')
            .assert.containsText('@transcriptMgrConfiguration', 'Configuration')
            .assert.attributeEquals('@transcriptMgrConfiguration', 'href', 
                page.url() + '/transcriptcfg.php')

            .click('@transcriptMgr')

            .assert.hidden('@transcriptMgrStudents')
            .assert.hidden('@transcriptMgrTemplates')
            .assert.hidden('@transcriptMgrConfiguration')

            .click('@curriculumMgr')

            .assert.visible('@curriculumMgrByGrade')
            .assert.containsText('@curriculumMgrByGrade', 'by Grade')
            .assert.attributeEquals('@curriculumMgrByGrade', 'href', 
                page.url() + '/curriculumcourses.php?type=bygrade')

            .assert.visible('@curriculumMgrBySubject')
            .assert.containsText('@curriculumMgrBySubject', 'by Subject')
            .assert.attributeEquals('@curriculumMgrBySubject', 'href', 
                page.url() + '/curriculumcourses.php?type=bysubject')

            .click('@curriculumMgr')

            .assert.hidden('@curriculumMgrByGrade')
            .assert.hidden('@curriculumMgrBySubject')

            .click('@assessmentMgr')

            .assert.visible('@assessmentMgrSkillSets')
            .assert.containsText('@assessmentMgrSkillSets', 'Skill Sets')
            .assert.attributeEquals('@assessmentMgrSkillSets', 'href', 
                page.url() + '/gradeskills.php')


            .assert.visible('@assessmentMgrStandards')
            .assert.containsText('@assessmentMgrStandards', 'Standards')
            .assert.attributeEquals('@assessmentMgrStandards', 'href', 
                page.url() + '/gradestandards.php?grade=99')

            .assert.visible('@assessmentMgrAssessments')
            .assert.containsText('@assessmentMgrAssessments', 'Assessments')
            .assert.attributeEquals('@assessmentMgrAssessments', 'href', 
                page.url() + '/studentassessments.php?grade=99')

            .assert.visible('@assessmentMgrAchievements')
            .assert.containsText('@assessmentMgrAchievements', 'Achievements')
            .assert.attributeEquals('@assessmentMgrAchievements', 'href', 
                page.url() + '/achievement.php')

            .assert.visible('@assessmentMgrStandardizedTests')
            .assert.containsText('@assessmentMgrStandardizedTests', 
                'Standardized Tests')
            .assert.attributeEquals('@assessmentMgrStandardizedTests', 'href', 
                page.url() + '/standardizedtests.php')

            .assert.visible('@assessmentMgrLessonPlans')
            .assert.containsText('@assessmentMgrLessonPlans', 'Lesson Plans')
            .assert.attributeEquals('@assessmentMgrLessonPlans', 'href', 
                page.url() + '/schoolmenu.php#')

            .assert.visible('@assessmentMgrReports')
            .assert.containsText('@assessmentMgrReports', 'Reports')
            .assert.attributeEquals('@assessmentMgrReports', 'href', 
                page.url() + '/reports.php?type=27')

            .click('@assessmentMgrLessonPlans')

            .assert.visible('@assessmentMgrLessonPlansByDay')
            .assert.containsText('@assessmentMgrLessonPlansByDay', 'by Day')
            .assert.attributeEquals('@assessmentMgrLessonPlansByDay', 'href', 
                page.url() + '/schoollesson.php?view=byday')

            .assert.visible('@assessmentMgrLessonPlansByClass')
            .assert.containsText('@assessmentMgrLessonPlansByClass', 'by Class')
            .assert.attributeEquals('@assessmentMgrLessonPlansByClass', 'href', 
                page.url() + '/schoollesson.php?view=byclass')

            .assert.visible('@assessmentMgrLessonPlansConfiguration')
            .assert.containsText('@assessmentMgrLessonPlansConfiguration', 'Configuration')
            .assert.attributeEquals('@assessmentMgrLessonPlansConfiguration', 
                'href', page.url() + '/schoollessoncfg.php')

            .click('@assessmentMgrLessonPlans')

            .assert.hidden('@assessmentMgrLessonPlansByDay')
            .assert.hidden('@assessmentMgrLessonPlansByClass')
            .assert.hidden('@assessmentMgrLessonPlansConfiguration')

            .click('@assessmentMgr')

            .assert.hidden('@assessmentMgrSkillSets')
            .assert.hidden('@assessmentMgrStandards')
            .assert.hidden('@assessmentMgrAssessments')
            .assert.hidden('@assessmentMgrAchievements')
            .assert.hidden('@assessmentMgrStandardizedTests')
            .assert.hidden('@assessmentMgrLessonPlans')
            .assert.hidden('@assessmentMgrReports')

            .click('@iepMgr')

            .assert.visible('@iepMgrStudents')
            .assert.containsText('@iepMgrStudents', 'Students')
            .assert.attributeEquals('@iepMgrStudents', 'href', 
                page.url() + '/studentiep.php?grade=99')

            .assert.visible('@iepMgrCoordinators')
            .assert.containsText('@iepMgrCoordinators', 'Coordinators')
            .assert.attributeEquals('@iepMgrCoordinators', 'href', 
                page.url() + '/studentiepteam.php')

            .assert.visible('@iepMgrConfiguration')
            .assert.containsText('@iepMgrConfiguration', 'Configuration')
            .assert.attributeEquals('@iepMgrConfiguration', 'href', 
                page.url() + '/studentiepcfg.php')

            .assert.visible('@iepMgrReports')
            .assert.containsText('@iepMgrReports', 'Reports')
            .assert.attributeEquals('@iepMgrReports', 'href', 
                page.url() + '/reports.php?type=29')

            .click('@iepMgr')

            .assert.hidden('@iepMgrStudents')
            .assert.hidden('@iepMgrCoordinators')
            .assert.hidden('@iepMgrConfiguration')
            .assert.hidden('@iepMgrReports')

            .click('@collegeCreditMgr')

            .assert.visible('@collegeCreditMgrStudents')
            .assert.containsText('@collegeCreditMgrStudents', 'Students')
            .assert.attributeEquals('@collegeCreditMgrStudents', 'href', 
                page.url() + '/collegecredits.php?task=students')

            .assert.visible('@collegeCreditMgrColleges')
            .assert.containsText('@collegeCreditMgrColleges', 'Colleges')
            .assert.attributeEquals('@collegeCreditMgrColleges', 'href', 
                page.url() + '/collegecredits.php?task=colleges')

            .click('@academic')

            .assert.visible('@academic')

            .assert.hidden('@gradeMgr')
            .assert.hidden('@gradeMgrReportCards')
            .assert.hidden('@gradeMgrGradingScales')
            .assert.hidden('@gradeMgrAttributesGrades')
            .assert.hidden('@gradeMgrGradeComments')
            .assert.hidden('@gradeMgrAdditionalFields')
            .assert.hidden('@gradeMgrGpaScales')
            .assert.hidden('@gradeMgrRequirements')
            .assert.hidden('@gradeMgrConfiguration')
            .assert.hidden('@gradeMgrReports')

            .assert.hidden('@classroomMgr')
            .assert.hidden('@classroomMgrDayLong')
            .assert.hidden('@classroomMgrPeriodLong')
            .assert.hidden('@classroomMgrGeneral')
            .assert.hidden('@classroomMgrAdditionalFields')
            .assert.hidden('@classroomMgrConfiguration')
            .assert.hidden('@classroomMgrReports')

            .assert.hidden('@resourceMgr')
            .assert.hidden('@resourceMgrNews')
            .assert.hidden('@resourceMgrPhotos')
            .assert.hidden('@resourceMgrDocuments')
            .assert.hidden('@resourceMgrOnlineTests')
            .assert.hidden('@resourceMgrBlogs')

            .assert.hidden('@transcriptMgr')
            .assert.hidden('@transcriptMgrStudents')
            .assert.hidden('@transcriptMgrTemplates')
            .assert.hidden('@transcriptMgrConfiguration')

            .assert.hidden('@curriculumMgr')
            .assert.hidden('@curriculumMgrByGrade')
            .assert.hidden('@curriculumMgrBySubject')

            .assert.hidden('@assessmentMgr')
            .assert.hidden('@assessmentMgrSkillSets')
            .assert.hidden('@assessmentMgrStandards')
            .assert.hidden('@assessmentMgrAssessments')
            .assert.hidden('@assessmentMgrStandardizedTests')
            .assert.hidden('@assessmentMgrLessonPlans')
            .assert.hidden('@assessmentMgrLessonPlansByDay')
            .assert.hidden('@assessmentMgrLessonPlansByClass')
            .assert.hidden('@assessmentMgrLessonPlansConfiguration')
            .assert.hidden('@assessmentMgrReports')

            .assert.hidden('@iepMgr')
            .assert.hidden('@iepMgrStudents')
            .assert.hidden('@iepMgrCoordinators')
            .assert.hidden('@iepMgrConfiguration')
            .assert.hidden('@iepMgrReports')

            .assert.hidden('@collegeCreditMgr')
            .assert.hidden('@collegeCreditMgrStudents')
            .assert.hidden('@collegeCreditMgrColleges')

        client.frame(null);

        client.end();
    }
};
