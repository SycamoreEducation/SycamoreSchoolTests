module.exports = {
    tags: ['admissionsTest', 'menuTests'],

    'Admissions Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@admissions')
            .assert.containsText('@admissions', '\273 Admissions')
            .assert.attributeEquals('@admissions', 'href', page.url() + '/schoolmenu.php#')

            .assert.hidden('@inquiries')
            .assert.hidden('@inquiresStudents')
            .assert.hidden('@inquiriesFamilies')

            .assert.hidden('@enrollment')
            .assert.hidden('@enrollmentStudent')
            .assert.hidden('@enrollmentFamilies')

            .assert.hidden('@classMgr')
            .assert.hidden('@classMgrClasses')

            .assert.hidden('@courseMgr')
            .assert.hidden('@courseMgrCourses')
            .assert.hidden('@courseMgrTeachers')
            .assert.hidden('@courseMgrStudents')
            .assert.hidden('@courseMgrFacility')
            .assert.hidden('@courseMgrScheduler')
            .assert.hidden('@courseMgrConfiguration')
            .assert.hidden('@courseMgrReports')

            .assert.hidden('@admissionsCommunication')
            .assert.hidden('@admissionsCommunicationBatchEmail')

            .assert.hidden('@portalMgr')
            .assert.hidden('@portalMgrStudents')
            .assert.hidden('@portalMgrFamilies')
            .assert.hidden('@portalMgrApplications')
            .assert.hidden('@portalMgrEssayQuestions')
            .assert.hidden('@portalMgrRequestedDocs')

            .assert.hidden('@admissionsConfiguration')
            .assert.hidden('@admissionsConfigurationChecklist')
            .assert.hidden('@admissionsConfigurationDocuments')
            .assert.hidden('@admissionsConfigurationAgreements')
            .assert.hidden('@admissionsConfigurationTuitionPlans')
            .assert.hidden('@admissionsConfigurationEnrollStatus')
            .assert.hidden('@admissionsConfigurationSetup')

            .assert.hidden('@admissionsReports')

            .click('@admissions')
            .assert.visible('@inquiries')
            .assert.containsText('@inquiries', '\273 Inquiries')
            .assert.attributeEquals('@inquiries', 'href', page.url() + '/schoolmenu.php#')
            
            .assert.visible('@enrollment')
            .assert.containsText('@enrollment', '\273 Enrollment')
            .assert.attributeEquals('@enrollment', 'href', page.url() + '/schoolmenu.php#')
            
            .assert.visible('@classMgr')
            .assert.containsText('@classMgr', '\273 Class Mgr')
            .assert.attributeEquals('@classMgr', 'href', page.url() + '/schoolmenu.php#')
            
            .assert.visible('@courseMgr')
            .assert.containsText('@courseMgr', '\273 Course Mgr')
            .assert.attributeEquals('@courseMgr', 'href', page.url() + '/schoolmenu.php#')

            .assert.visible('@admissionsCommunication')
            .assert.containsText('@admissionsCommunication', '\273 Communication')
            .assert.attributeEquals('@admissionsCommunication', 'href', page.url() + '/schoolmenu.php#')
            
            .assert.visible('@portalMgr')
            .assert.containsText('@portalMgr', '\273 Portal Mgr')
            .assert.attributeEquals('@portalMgr', 'href', page.url() + '/schoolmenu.php#')
            
            .assert.visible('@admissionsConfiguration')
            .assert.containsText('@admissionsConfiguration', '\273 Configuration')
            .assert.attributeEquals('@admissionsConfiguration', 'href', page.url() + '/schoolmenu.php#')
            
            .assert.visible('@admissionsReports')
            .assert.containsText('@admissionsReports', 'Reports')
            .assert.attributeEquals('@admissionsReports', 'href', page.url() + '/reports.php?type=18')

            .click('@inquiries')
            .assert.visible('@inquiresStudents')
            .assert.containsText('@inquiresStudents', 'Students')
            .assert.attributeEquals('@inquiresStudents', 'href', page.url() + '/enrollstudentprospects.php')
            
            .assert.visible('@inquiriesFamilies')
            .assert.containsText('@inquiriesFamilies', 'Families')
            .assert.attributeEquals('@inquiriesFamilies', 'href', page.url() + '/enrollfamilyprospects.php')

            .click('@inquiries')
            .assert.hidden('@inquiresStudents')
            .assert.hidden('@inquiriesFamilies')

            .click('@enrollment')
            .assert.visible('@enrollmentStudent')
            .assert.containsText('@enrollmentStudent', 'Student')
            .assert.attributeEquals('@enrollmentStudent', 'href', page.url() + '/enrollstudents.php')
            
            .assert.visible('@enrollmentFamilies')
            .assert.containsText('@enrollmentFamilies', 'Families')
            .assert.attributeEquals('@enrollmentFamilies', 'href', page.url() + '/enrollfamilies.php')

            .click('@enrollment')
            .assert.hidden('@enrollmentStudent')
            .assert.hidden('@enrollmentFamilies')

            .click('@classMgr')
            .assert.visible('@classMgrClasses')
            .assert.containsText('@classMgrClasses', 'Classes')
            .assert.attributeEquals('@classMgrClasses', 'href', page.url() + '/enrollclasses.php')

            .click('@classMgr')
            .assert.hidden('@classMgrClasses')

            .click('@courseMgr')
            .assert.visible('@courseMgrCourses')
            .assert.containsText('@courseMgrCourses', 'Courses')
            .assert.attributeEquals('@courseMgrCourses', 'href', page.url() + '/courses.php')
            
            .assert.visible('@courseMgrTeachers')
            .assert.containsText('@courseMgrTeachers', 'Teachers')
            .assert.attributeEquals('@courseMgrTeachers', 'href', page.url() + '/courseloadteachers.php')
            
            .assert.visible('@courseMgrStudents')
            .assert.containsText('@courseMgrStudents', 'Students')
            .assert.attributeEquals('@courseMgrStudents', 'href', page.url() + '/courseloadstudents.php?grade=99')
            
            .assert.visible('@courseMgrFacility')
            .assert.containsText('@courseMgrFacility', 'Facility')
            .assert.attributeEquals('@courseMgrFacility', 'href', page.url() + '/courseloadfacility.php')
            
            .assert.visible('@courseMgrScheduler')
            .assert.containsText('@courseMgrScheduler', 'Scheduler')
            .assert.attributeEquals('@courseMgrScheduler', 'href', page.url() + '/coursescheduler.php')
            
            .assert.visible('@courseMgrConfiguration')
            .assert.containsText('@courseMgrConfiguration', 'Configuration')
            .assert.attributeEquals('@courseMgrConfiguration', 'href', page.url() + '/coursecfg.php')
            
            .assert.visible('@courseMgrReports')
            .assert.containsText('@courseMgrReports', 'Reports')
            .assert.attributeEquals('@courseMgrReports', 'href', page.url() + '/reports.php?type=25')

            .click('@courseMgr')
            .assert.hidden('@courseMgrCourses')
            .assert.hidden('@courseMgrTeachers')
            .assert.hidden('@courseMgrStudents')
            .assert.hidden('@courseMgrFacility')
            .assert.hidden('@courseMgrScheduler')
            .assert.hidden('@courseMgrConfiguration')
            .assert.hidden('@courseMgrReports')

            .click('@admissionsCommunication')
            .assert.visible('@admissionsCommunicationBatchEmail')
            .assert.containsText('@admissionsCommunicationBatchEmail', 'Batch Email')
            .assert.attributeEquals('@admissionsCommunicationBatchEmail', 'href', page.url() + '/batchemail3.php?classid=-2')

            .click('@portalMgr')
            .assert.visible('@portalMgrStudents')
            .assert.containsText('@portalMgrStudents', 'Students')
            .assert.attributeEquals('@portalMgrStudents', 'href', page.url() + '/enrollstudents2.php')
            
            .assert.visible('@portalMgrFamilies')
            .assert.containsText('@portalMgrFamilies', 'Families')
            .assert.attributeEquals('@portalMgrFamilies', 'href', page.url() + '/enrollfamilies2.php')
            
            .assert.visible('@portalMgrApplications')
            .assert.containsText('@portalMgrApplications', 'Applications')
            .assert.attributeEquals('@portalMgrApplications', 'href', page.url() + '/enrollapplications.php')
            
            .assert.visible('@portalMgrEssayQuestions')
            .assert.containsText('@portalMgrEssayQuestions', 'Essay Questions')
            .assert.attributeEquals('@portalMgrEssayQuestions', 'href', page.url() + '/enrollessays.php')
            
            .assert.visible('@portalMgrRequestedDocs')
            .assert.containsText('@portalMgrRequestedDocs', 'Requested Docs')
            .assert.attributeEquals('@portalMgrRequestedDocs', 'href', page.url() + '/essentialdocuments.php')

            .click('@portalMgr')
            .assert.hidden('@portalMgrStudents')
            .assert.hidden('@portalMgrFamilies')
            .assert.hidden('@portalMgrApplications')
            .assert.hidden('@portalMgrEssayQuestions')
            .assert.hidden('@portalMgrRequestedDocs')

            .click('@admissionsConfiguration')
            .assert.visible('@admissionsConfigurationChecklist')
            .assert.containsText('@admissionsConfigurationChecklist', 'Checklist')
            .assert.attributeEquals('@admissionsConfigurationChecklist', 'href', page.url() + '/enrollcheck.php')
            
            .assert.visible('@admissionsConfigurationDocuments')
            .assert.containsText('@admissionsConfigurationDocuments', 'Documents')
            .assert.attributeEquals('@admissionsConfigurationDocuments', 'href', page.url() + '/enrolldocs.php')
            
            .assert.visible('@admissionsConfigurationAgreements')
            .assert.containsText('@admissionsConfigurationAgreements', 'Agreements')
            .assert.attributeEquals('@admissionsConfigurationAgreements', 'href', page.url() + '/enrollagreements.php')
            
            .assert.visible('@admissionsConfigurationTuitionPlans')
            .assert.containsText('@admissionsConfigurationTuitionPlans', 'Tuition Plans')
            .assert.attributeEquals('@admissionsConfigurationTuitionPlans', 'href', page.url() + '/tuition.php')
            
            .assert.visible('@admissionsConfigurationEnrollStatus')
            .assert.containsText('@admissionsConfigurationEnrollStatus', 'Enroll Status')
            .assert.attributeEquals('@admissionsConfigurationEnrollStatus', 'href', page.url() + '/enrollstatus.php')
            
            .assert.visible('@admissionsConfigurationSetup')
            .assert.containsText('@admissionsConfigurationSetup', 'Setup')
            .assert.attributeEquals('@admissionsConfigurationSetup', 'href', page.url() + '/enrollconfig.php')

            .click('@admissionsConfiguration')
            .assert.hidden('@admissionsConfigurationChecklist')
            .assert.hidden('@admissionsConfigurationDocuments')
            .assert.hidden('@admissionsConfigurationAgreements')
            .assert.hidden('@admissionsConfigurationTuitionPlans')
            .assert.hidden('@admissionsConfigurationEnrollStatus')
            .assert.hidden('@admissionsConfigurationSetup')

            .click('@admissions')

            .assert.hidden('@inquiries')
            .assert.hidden('@inquiresStudents')
            .assert.hidden('@inquiriesFamilies')

            .assert.hidden('@enrollment')
            .assert.hidden('@enrollmentStudent')
            .assert.hidden('@enrollmentFamilies')

            .assert.hidden('@classMgr')
            .assert.hidden('@classMgrClasses')

            .assert.hidden('@courseMgr')
            .assert.hidden('@courseMgrCourses')
            .assert.hidden('@courseMgrTeachers')
            .assert.hidden('@courseMgrStudents')
            .assert.hidden('@courseMgrFacility')
            .assert.hidden('@courseMgrScheduler')
            .assert.hidden('@courseMgrConfiguration')
            .assert.hidden('@courseMgrReports')

            .assert.hidden('@admissionsCommunication')
            .assert.hidden('@admissionsCommunicationBatchEmail')

            .assert.hidden('@portalMgr')
            .assert.hidden('@portalMgrStudents')
            .assert.hidden('@portalMgrFamilies')
            .assert.hidden('@portalMgrApplications')
            .assert.hidden('@portalMgrEssayQuestions')
            .assert.hidden('@portalMgrRequestedDocs')

            .assert.hidden('@admissionsConfiguration')
            .assert.hidden('@admissionsConfigurationChecklist')
            .assert.hidden('@admissionsConfigurationDocuments')
            .assert.hidden('@admissionsConfigurationAgreements')
            .assert.hidden('@admissionsConfigurationTuitionPlans')
            .assert.hidden('@admissionsConfigurationEnrollStatus')
            .assert.hidden('@admissionsConfigurationSetup')

            .assert.hidden('@admissionsReports')

        client.frame(null);

        client.end();
    }
};
