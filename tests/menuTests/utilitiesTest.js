module.exports = {
    tags: ['utilitiesTest', 'menuTests'],

    'Utilities Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@utilities')
            .assert.containsText('@utilities', '\273 Utilities')
            .assert.attributeEquals('@utilities', 'href', page.url() + '/schoolmenu.php#')

            .assert.hidden('@assetMgr')
            .assert.hidden('@assetMgrInventory')
            .assert.hidden('@assetMgrTypes')
            .assert.hidden('@assetMgrAdditionalFields')
            .assert.hidden('@assetMgrReports')

            .assert.hidden('@eventMgr')
            .assert.hidden('@eventMgrManagedEvents')
            .assert.hidden('@eventMgrRegistration')
            .assert.hidden('@eventMgrParticipants')
            .assert.hidden('@eventMgrReports')

            .assert.hidden('@facilityMgr')
            .assert.hidden('@facilityMgrLocations')
            .assert.hidden('@facilityMgrBuildings')
            .assert.hidden('@facilityMgrRooms')
            .assert.hidden('@facilityMgrPlanner')
            .assert.hidden('@facilityMgrActivities')
            .assert.hidden('@facilityMgrSearch')

            .assert.hidden('@timecardMgr')
            .assert.hidden('@timecardMgrByDay')
            .assert.hidden('@timecardMgrByPeriod')
            .assert.hidden('@timecardMgrByEmployee')
            .assert.hidden('@timecardMgrRequests')
            .assert.hidden('@timecardMgrTasks')
            .assert.hidden('@timecardMgrConfiguration')
            .assert.hidden('@timecardMgrReports')

            .assert.hidden('@workflowMgr')
            .assert.hidden('@workflowMgrByStatus')
            .assert.hidden('@workflowMgrByAuthor')
            .assert.hidden('@workflowMgrByCategory')
            .assert.hidden('@workflowMgrByClassroom')
            .assert.hidden('@workflowMgrCategories')

            .assert.hidden('@databaseMgr')
            .assert.hidden('@databaseMgrPublicTables')
            .assert.hidden('@databaseMgrPrivateTables')

            .assert.hidden('@onlineFormMgr')
            .assert.hidden('@onlineFormMgrActive')
            .assert.hidden('@onlineFormMgrNonActive')

            .assert.hidden('@knowledgeBase')
            .assert.hidden('@knowledgeBasePublished')
            .assert.hidden('@knowledgeBasePending')

            .click('@utilities')
            .assert.visible('@assetMgr')
            .assert.containsText('@assetMgr', '\273 Asset Mgr')
            .assert.attributeEquals('@assetMgr', 'href', page.url() + '/schoolmenu.php#')
            
            .assert.visible('@eventMgr')
            .assert.containsText('@eventMgr', '\273 Event Mgr')
            .assert.attributeEquals('@eventMgr', 'href', page.url() + '/schoolmenu.php#')

            .assert.visible('@facilityMgr')
            .assert.containsText('@facilityMgr', '\273 Facility Mgr')
            .assert.attributeEquals('@facilityMgr', 'href', page.url() + '/schoolmenu.php#')
            
            .assert.visible('@timecardMgr')
            .assert.containsText('@timecardMgr', '\273 Timecard Mgr')
            .assert.attributeEquals('@timecardMgr', 'href', page.url() + '/schoolmenu.php#')
            
            .assert.visible('@workflowMgr')
            .assert.containsText('@workflowMgr', '\273 Workflow Mgr')
            .assert.attributeEquals('@workflowMgr', 'href', page.url() + '/schoolmenu.php#')
            
            .assert.visible('@databaseMgr')
            .assert.containsText('@databaseMgr', '\273 Database Mgr')
            .assert.attributeEquals('@databaseMgr', 'href', page.url() + '/schoolmenu.php#')
            
            .assert.visible('@onlineFormMgr')
            .assert.containsText('@onlineFormMgr', '\273 Online Form Mgr')
            .assert.attributeEquals('@onlineFormMgr', 'href', page.url() + '/schoolmenu.php#')
            
            .assert.visible('@knowledgeBase')
            .assert.containsText('@knowledgeBase', '\273 Knowledge Base')
            .assert.attributeEquals('@knowledgeBase', 'href', page.url() + '/schoolmenu.php#')

            .click('@assetMgr')
            .assert.visible('@assetMgrInventory')
            .assert.containsText('@assetMgrInventory', 'Inventory')
            .assert.attributeEquals('@assetMgrInventory', 'href', page.url() + '/assets.php')
            
            .assert.visible('@assetMgrTypes')
            .assert.containsText('@assetMgrTypes', 'Types')
            .assert.attributeEquals('@assetMgrTypes', 'href', page.url() + '/assettypes.php')
            
            .assert.visible('@assetMgrAdditionalFields')
            .assert.containsText('@assetMgrAdditionalFields', 'Additional Fields')
            .assert.attributeEquals('@assetMgrAdditionalFields', 'href', page.url() + '/assetstatistics.php?task=list')
            
            .assert.visible('@assetMgrReports')
            .assert.containsText('@assetMgrReports', 'Reports')
            .assert.attributeEquals('@assetMgrReports', 'href', page.url() + '/reports.php?type=34')

            .click('@assetMgr')
            .assert.hidden('@assetMgrInventory')
            .assert.hidden('@assetMgrTypes')
            .assert.hidden('@assetMgrAdditionalFields')
            .assert.hidden('@assetMgrReports')

            .click('@eventMgr')
            .assert.visible('@eventMgrManagedEvents')
            .assert.containsText('@eventMgrManagedEvents', 'Managed Events')
            .assert.attributeEquals('@eventMgrManagedEvents', 'href', page.url() + '/eventproperty.php?task=list')
            
            .assert.visible('@eventMgrRegistration')
            .assert.containsText('@eventMgrRegistration', 'Registration')
            .assert.attributeEquals('@eventMgrRegistration', 'href', page.url() + '/eventregistrations.php')
            
            .assert.visible('@eventMgrParticipants')
            .assert.containsText('@eventMgrParticipants', 'Participants')
            .assert.attributeEquals('@eventMgrParticipants', 'href', page.url() + '/eventparticipants.php')
            
            .assert.visible('@eventMgrReports')
            .assert.containsText('@eventMgrReports', 'Reports')
            .assert.attributeEquals('@eventMgrReports', 'href', page.url() + '/reports.php?type=24')

            .click('@eventMgr')
            .assert.hidden('@eventMgrManagedEvents')
            .assert.hidden('@eventMgrRegistration')
            .assert.hidden('@eventMgrParticipants')
            .assert.hidden('@eventMgrReports')

            .click('@facilityMgr')
            .assert.visible('@facilityMgrLocations')
            .assert.containsText('@facilityMgrLocations', 'Locations')
            .assert.attributeEquals('@facilityMgrLocations', 'href', page.url() + '/facilitylocations.php')
            
            .assert.visible('@facilityMgrBuildings')
            .assert.containsText('@facilityMgrBuildings', 'Buildings')
            .assert.attributeEquals('@facilityMgrBuildings', 'href', page.url() + '/facilitybuildings.php')
            
            .assert.visible('@facilityMgrRooms')
            .assert.containsText('@facilityMgrRooms', 'Rooms')
            .assert.attributeEquals('@facilityMgrRooms', 'href', page.url() + '/facilityrooms.php')
            
            .assert.visible('@facilityMgrPlanner')
            .assert.containsText('@facilityMgrPlanner', 'Planner')
            .assert.attributeEquals('@facilityMgrPlanner', 'href', page.url() + '/facilityplanner.php')
            
            .assert.visible('@facilityMgrActivities')
            .assert.containsText('@facilityMgrActivities', 'Activities')
            .assert.attributeEquals('@facilityMgrActivities', 'href', page.url() + '/facilityactivities.php')
            
            .assert.visible('@facilityMgrSearch')
            .assert.containsText('@facilityMgrSearch', 'Search')
            .assert.attributeEquals('@facilityMgrSearch', 'href', page.url() + '/facilitysearch.php')

            .click('@facilityMgr')
            .assert.hidden('@facilityMgrLocations')
            .assert.hidden('@facilityMgrBuildings')
            .assert.hidden('@facilityMgrRooms')
            .assert.hidden('@facilityMgrPlanner')
            .assert.hidden('@facilityMgrActivities')
            .assert.hidden('@facilityMgrSearch')

            .click('@timecardMgr')
            .assert.visible('@timecardMgrByDay')
            .assert.containsText('@timecardMgrByDay', 'by Day')
            .assert.attributeEquals('@timecardMgrByDay', 'href', page.url() + '/timecard.php?task=day')
            
            .assert.visible('@timecardMgrByPeriod')
            .assert.containsText('@timecardMgrByPeriod', 'by Period')
            .assert.attributeEquals('@timecardMgrByPeriod', 'href', page.url() + '/timecard.php?task=period')
            
            .assert.visible('@timecardMgrByEmployee')
            .assert.containsText('@timecardMgrByEmployee', 'by Employee')
            .assert.attributeEquals('@timecardMgrByEmployee', 'href', page.url() + '/timecard.php?task=users')
            
            .assert.visible('@timecardMgrRequests')
            .assert.containsText('@timecardMgrRequests', 'Requests')
            .assert.attributeEquals('@timecardMgrRequests', 'href', page.url() + '/timeoff.php')
            
            .assert.visible('@timecardMgrTasks')
            .assert.containsText('@timecardMgrTasks', 'Tasks')
            .assert.attributeEquals('@timecardMgrTasks', 'href', page.url() + '/timetasks.php')
            
            .assert.visible('@timecardMgrConfiguration')
            .assert.containsText('@timecardMgrConfiguration', 'Configuration')
            .assert.attributeEquals('@timecardMgrConfiguration', 'href', page.url() + '/timeperiods.php')
            
            .assert.visible('@timecardMgrReports')
            .assert.containsText('@timecardMgrReports', 'Reports')
            .assert.attributeEquals('@timecardMgrReports', 'href', page.url() + '/reports.php?type=36')

            .click('@timecardMgr')
            .assert.hidden('@timecardMgrByDay')
            .assert.hidden('@timecardMgrByPeriod')
            .assert.hidden('@timecardMgrByEmployee')
            .assert.hidden('@timecardMgrRequests')
            .assert.hidden('@timecardMgrTasks')
            .assert.hidden('@timecardMgrConfiguration')
            .assert.hidden('@timecardMgrReports')

            .click('@workflowMgr')
            .assert.visible('@workflowMgrByStatus')
            .assert.containsText('@workflowMgrByStatus', 'by Status')
            .assert.attributeEquals('@workflowMgrByStatus', 'href', page.url() + '/ticket.php?task=bystatus')
            
            .assert.visible('@workflowMgrByAuthor')
            .assert.containsText('@workflowMgrByAuthor', 'by Author')
            .assert.attributeEquals('@workflowMgrByAuthor', 'href', page.url() + '/ticket.php?task=byauthor')
            
            .assert.visible('@workflowMgrByCategory')
            .assert.containsText('@workflowMgrByCategory', 'by Category')
            .assert.attributeEquals('@workflowMgrByCategory', 'href', page.url() + '/ticket.php?task=bycatagory')
            
            .assert.visible('@workflowMgrByClassroom')
            .assert.containsText('@workflowMgrByClassroom', 'by Classroom')
            .assert.attributeEquals('@workflowMgrByClassroom', 'href', page.url() + '/ticket.php?task=byproject')
            
            .assert.visible('@workflowMgrCategories')
            .assert.containsText('@workflowMgrCategories', 'Categories')
            .assert.attributeEquals('@workflowMgrCategories', 'href', page.url() + '/ticketcatagories.php')

            .click('@workflowMgr')
            .assert.hidden('@workflowMgrByStatus')
            .assert.hidden('@workflowMgrByAuthor')
            .assert.hidden('@workflowMgrByCategory')
            .assert.hidden('@workflowMgrByClassroom')
            .assert.hidden('@workflowMgrCategories')

            .click('@databaseMgr')
            .assert.visible('@databaseMgrPublicTables')
            .assert.containsText('@databaseMgrPrivateTables', 'Private Tables')
            .assert.attributeEquals('@databaseMgrPublicTables', 'href', page.url() + '/databases.php?task=list&type=1')
            
            .assert.visible('@databaseMgrPrivateTables')
            .assert.containsText('@databaseMgrPrivateTables', 'Private Tables')
            .assert.attributeEquals('@databaseMgrPrivateTables', 'href', page.url() + '/databases.php?task=list&type=2')

            .click('@databaseMgr')
            .assert.hidden('@databaseMgrPublicTables')
            .assert.hidden('@databaseMgrPrivateTables')

            .click('@onlineFormMgr')
            .assert.visible('@onlineFormMgrActive')
            .assert.containsText('@onlineFormMgrActive', 'Active')
            .assert.attributeEquals('@onlineFormMgrActive', 'href', page.url() + '/forms.php?task=list&type=active')
            
            .assert.visible('@onlineFormMgrNonActive')
            .assert.containsText('@onlineFormMgrNonActive', 'Non Active')
            .assert.attributeEquals('@onlineFormMgrNonActive', 'href', page.url() + '/forms.php?task=list&type=nonactive')

            .click('@onlineFormMgr')
            .assert.hidden('@onlineFormMgrActive')
            .assert.hidden('@onlineFormMgrNonActive')

            .click('@knowledgeBase')
            .assert.visible('@knowledgeBasePublished')
            .assert.containsText('@knowledgeBasePublished', 'Published')
            .assert.attributeEquals('@knowledgeBasePublished', 'href', page.url() + '/knowledge.php?task=list')
            
            .assert.visible('@knowledgeBasePending')
            .assert.containsText('@knowledgeBasePending', 'Pending')
            .assert.attributeEquals('@knowledgeBasePending', 'href', page.url() + '/knowledge.php?task=pending')

            .click('@knowledgeBase')
            .assert.hidden('@knowledgeBasePublished')
            .assert.hidden('@knowledgeBasePending')

            .click('@utilities')

            .assert.hidden('@assetMgr')
            .assert.hidden('@assetMgrInventory')
            .assert.hidden('@assetMgrTypes')
            .assert.hidden('@assetMgrAdditionalFields')
            .assert.hidden('@assetMgrReports')

            .assert.hidden('@eventMgr')
            .assert.hidden('@eventMgrManagedEvents')
            .assert.hidden('@eventMgrRegistration')
            .assert.hidden('@eventMgrParticipants')
            .assert.hidden('@eventMgrReports')

            .assert.hidden('@facilityMgr')
            .assert.hidden('@facilityMgrLocations')
            .assert.hidden('@facilityMgrBuildings')
            .assert.hidden('@facilityMgrRooms')
            .assert.hidden('@facilityMgrPlanner')
            .assert.hidden('@facilityMgrActivities')
            .assert.hidden('@facilityMgrSearch')

            .assert.hidden('@timecardMgr')
            .assert.hidden('@timecardMgrByDay')
            .assert.hidden('@timecardMgrByPeriod')
            .assert.hidden('@timecardMgrByEmployee')
            .assert.hidden('@timecardMgrRequests')
            .assert.hidden('@timecardMgrTasks')
            .assert.hidden('@timecardMgrConfiguration')
            .assert.hidden('@timecardMgrReports')

            .assert.hidden('@workflowMgr')
            .assert.hidden('@workflowMgrByStatus')
            .assert.hidden('@workflowMgrByAuthor')
            .assert.hidden('@workflowMgrByCategory')
            .assert.hidden('@workflowMgrByClassroom')
            .assert.hidden('@workflowMgrCategories')

            .assert.hidden('@databaseMgr')
            .assert.hidden('@databaseMgrPublicTables')
            .assert.hidden('@databaseMgrPrivateTables')

            .assert.hidden('@onlineFormMgr')
            .assert.hidden('@onlineFormMgrActive')
            .assert.hidden('@onlineFormMgrNonActive')

            .assert.hidden('@knowledgeBase')
            .assert.hidden('@knowledgeBasePublished')
            .assert.hidden('@knowledgeBasePending')

        client.frame(null);

        client.end();
    }
};
