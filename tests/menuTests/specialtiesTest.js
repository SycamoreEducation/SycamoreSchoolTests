module.exports = {
    tags: ['specialtiesTest', 'menuTests'],

    'Specialties Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@specialties')
            .assert.containsText('@specialties', '\273 Specialties')
            .assert.attributeEquals('@specialties', 'href', page.menu() + '/schoolmenu.php#')

            .assert.hidden('@athleticDirector')
            .assert.hidden('@athleticDirectorSports')
            .assert.hidden('@athleticDirectorTeams')
            .assert.hidden('@athleticDirectorScoreboard')
            .assert.hidden('@athleticDirectorEquipment')

            .assert.hidden('@nursesOffice')
            .assert.hidden('@nursesOfficeDailyLogs')
            .assert.hidden('@nursesOfficeStudents')
            .assert.hidden('@nursesOfficeConfiguration')
            .assert.hidden('@nursesOfficeConfigurationComplaints')
            .assert.hidden('@nursesOfficeConfigurationMedications')
            .assert.hidden('@nursesOfficeConfigurationImmunizations')
            .assert.hidden('@nursesOfficeReports')

            .assert.hidden('@ptConferences')
            .assert.hidden('@ptConferencesTeachers')
            .assert.hidden('@ptConferencesByDate')
            .assert.hidden('@ptConferencesByTeacher')
            .assert.hidden('@ptConferencesConfiguration')

            .assert.hidden('@discipline')
            .assert.hidden('@disciplineStudents')
            .assert.hidden('@disciplineDailyLogs')
            .assert.hidden('@disciplineDetentions')
            .assert.hidden('@disciplineConfiguration')
            .assert.hidden('@disciplineReports')

            .assert.hidden('@serviceMgr')
            .assert.hidden('@serviceMgrStudents')
            .assert.hidden('@serviceMgrFamilies')
            .assert.hidden('@serviceMgrDailyLogs')
            .assert.hidden('@serviceMgrOpportunites')
            .assert.hidden('@serviceMgrReports')

            .assert.hidden('@connectionMgr')
            .assert.hidden('@connectionMgrStudents')
            .assert.hidden('@connectionMgrDailyLogs')
            .assert.hidden('@connectionMgrInitiator')
            .assert.hidden('@connectionMgrReports')

            .assert.hidden('@tranportationMgr')
            .assert.hidden('@tranportationMgrBusRoutes')
            .assert.hidden('@tranportationMgrFieldTrips')
            .assert.hidden('@tranportationMgrCarpoolMgr')
            .assert.hidden('@tranportationMgrParkingPasses')
            .assert.hidden('@tranportationMgrReports')

            .assert.hidden('@volunteerMgr')
            .assert.hidden('@volunteerMgrEvents')

            .assert.hidden('@libraryMgr')
            .assert.hidden('@libraryMgrBook')
            .assert.hidden('@libraryMgrStudents')
            .assert.hidden('@libraryMgrStudents')
            .assert.hidden('@libraryMgrCheckIn')
            .assert.hidden('@libraryMgrCheckOut')
            .assert.hidden('@libraryMgrWhatsOut')

            .assert.hidden('@libraryMgrBooks')
            .assert.hidden('@libraryMgrBooksLibrary')
            .assert.hidden('@libraryMgrBooksTextBooks')
            .assert.hidden('@libraryMgrBooksInventoryLibrary')

            .assert.hidden('@libraryMgrSearch')
            .assert.hidden('@libraryMgrSearchLocal')
            .assert.hidden('@libraryMgrSearchGoogle')

            .assert.hidden('@libraryMgrConfiguration')
            .assert.hidden('@libraryMgrConfigurationLocations')
            .assert.hidden('@libraryMgrConfigurationImport')
            .assert.hidden('@libraryMgrConfigurationSetup')

            .assert.hidden('@libraryMgrReports')

            .assert.hidden('@auctionMgr')
            .assert.hidden('@auctionMgrStaff')
            .assert.hidden('@auctionMgrAuctions')
            .assert.hidden('@auctionMgrAuctionItems')
            .assert.hidden('@auctionMgrDonorCompanies')
            .assert.hidden('@auctionMgrReports')

            .click('@specialties')
            .assert.visible('@athleticDirector')
            .assert.containsText('@athleticDirector', '\273 Athletic Director')
            .assert.attributeEquals('@athleticDirector', 'href', page.menu() + '/schoolmenu.php#')
            
            .assert.visible('@nursesOffice')
            .assert.containsText('@nursesOffice', '\273 Nurse\'s Office')
            .assert.attributeEquals('@nursesOffice', 'href', page.menu() + '/schoolmenu.php#')
            
            .assert.visible('@ptConferences')
            .assert.containsText('@ptConferences', '\273 P/T Conference')
            .assert.attributeEquals('@ptConferences', 'href', page.menu() + '/schoolmenu.php#')            
            
            .assert.visible('@discipline')
            .assert.containsText('@discipline', '\273 Discipline Mgr')
            .assert.attributeEquals('@discipline', 'href', page.menu() + '/schoolmenu.php#')            
            
            .assert.visible('@serviceMgr')
            .assert.containsText('@serviceMgr', '\273 Service Mgr')
            .assert.attributeEquals('@serviceMgr', 'href', page.menu() + '/schoolmenu.php#')
            
            .assert.visible('@connectionMgr')
            .assert.containsText('@connectionMgr', '\273 Connection Mgr')
            .assert.attributeEquals('@connectionMgr', 'href', page.menu() + '/schoolmenu.php#')
            
            .assert.visible('@tranportationMgr')
            .assert.containsText('@tranportationMgr', '\273 Transportation Mgr')
            .assert.attributeEquals('@tranportationMgr', 'href', page.menu() + '/schoolmenu.php#') 
            
            .assert.visible('@volunteerMgr')
            .assert.containsText('@volunteerMgr', '\273 Volunteer Mgr')
            .assert.attributeEquals('@volunteerMgr', 'href', page.menu() + '/schoolmenu.php#')
            
            .assert.visible('@libraryMgr')
            .assert.containsText('@libraryMgr', '\273 Library Mgr')
            .assert.attributeEquals('@libraryMgr', 'href', page.menu() + '/schoolmenu.php#')
            
            .assert.visible('@auctionMgr')
            .assert.containsText('@auctionMgr', '\273 Auction Mgr')
            .assert.attributeEquals('@auctionMgr', 'href', page.menu() + '/schoolmenu.php#')

            .click('@athleticDirector')
            .assert.visible('@athleticDirectorSports')
            .assert.containsText('@athleticDirectorSports', 'Sports')
            .assert.attributeEquals('@athleticDirectorSports', 'href', page.menu() + '/adsports.php')
            
            .assert.visible('@athleticDirectorTeams')
            .assert.containsText('@athleticDirectorTeams', 'Teams')
            .assert.attributeEquals('@athleticDirectorTeams', 'href', page.menu() + '/adteams.php')
            
            .assert.visible('@athleticDirectorScoreboard')
            .assert.containsText('@athleticDirectorScoreboard', 'Scoreboard')
            .assert.attributeEquals('@athleticDirectorScoreboard', 'href', page.menu() + '/adscoreboard.php')
            
            .assert.visible('@athleticDirectorEquipment')
            .assert.containsText('@athleticDirectorEquipment', 'Equipment')
            .assert.attributeEquals('@athleticDirectorEquipment', 'href', page.menu() + '/eqinventory.php')

            .click('@athleticDirector')
            .assert.hidden('@athleticDirectorSports')
            .assert.hidden('@athleticDirectorTeams')
            .assert.hidden('@athleticDirectorScoreboard')
            .assert.hidden('@athleticDirectorEquipment')

            .click('@nursesOffice')
            .assert.visible('@nursesOfficeDailyLogs')
            .assert.containsText('@nursesOfficeDailyLogs', 'Daily Logs')
            .assert.attributeEquals('@nursesOfficeDailyLogs', 'href', page.menu() + '/medicallogs.php')
            
            .assert.visible('@nursesOfficeStudents')
            .assert.containsText('@nursesOfficeStudents', 'Students')
            .assert.attributeEquals('@nursesOfficeStudents', 'href', page.menu() + '/medicalstudents.php')
            
            .assert.visible('@nursesOfficeConfiguration')
            .assert.containsText('@nursesOfficeConfiguration', '\273 Configuration')
            
            .assert.visible('@nursesOfficeReports')
            .assert.containsText('@nursesOfficeReports', 'Reports')
            .assert.attributeEquals('@nursesOfficeReports', 'href', page.menu() + '/reports.php?type=19')

            .click('@nursesOfficeConfiguration')
            .assert.visible('@nursesOfficeConfigurationComplaints')
            .assert.containsText('@nursesOfficeConfigurationComplaints', 'Complaints')
            .assert.attributeEquals('@nursesOfficeConfigurationComplaints', 'href', page.menu() + '/medicalcomplaints.php')
            
            .assert.visible('@nursesOfficeConfigurationMedications')
            .assert.containsText('@nursesOfficeConfigurationMedications', 'Medications')
            .assert.attributeEquals('@nursesOfficeConfigurationMedications', 'href', page.menu() + '/medicalmedications.php')
            
            .assert.visible('@nursesOfficeConfigurationImmunizations')
            .assert.containsText('@nursesOfficeConfigurationImmunizations', 'Immunizations')
            .assert.attributeEquals('@nursesOfficeConfigurationImmunizations', 'href', page.menu() + '/medicalshots.php')

            .click('@nursesOfficeConfiguration')
            .assert.hidden('@nursesOfficeConfigurationComplaints')
            .assert.hidden('@nursesOfficeConfigurationMedications')
            .assert.hidden('@nursesOfficeConfigurationImmunizations')

            .click('@nursesOffice')
            .assert.hidden('@nursesOfficeDailyLogs')
            .assert.hidden('@nursesOfficeStudents')
            .assert.hidden('@nursesOfficeConfiguration')
            .assert.hidden('@nursesOfficeReports')

            .click('@ptConferences')
            .assert.visible('@ptConferencesTeachers')
            .assert.containsText('@ptConferencesTeachers', 'Teachers')
            .assert.attributeEquals('@ptConferencesTeachers', 'href', page.menu() + '/ptconf_teachers.php')
            
            .assert.visible('@ptConferencesByDate')
            .assert.containsText('@ptConferencesByDate', 'by Date')
            .assert.attributeEquals('@ptConferencesByDate', 'href', page.menu() + '/ptconf_admin.php?view=date')
            
            .assert.visible('@ptConferencesByTeacher')
            .assert.containsText('@ptConferencesByTeacher', 'by Teacher')
            .assert.attributeEquals('@ptConferencesByTeacher', 'href', page.menu() + '/ptconf_admin.php?view=staff')
            
            .assert.visible('@ptConferencesConfiguration')
            .assert.containsText('@ptConferencesConfiguration', 'Configuration')
            .assert.attributeEquals('@ptConferencesConfiguration', 'href', page.menu() + '/ptconf_admin.php?view=config')

            .click('@ptConferences')
            .assert.hidden('@ptConferencesTeachers')
            .assert.hidden('@ptConferencesByDate')
            .assert.hidden('@ptConferencesByTeacher')
            .assert.hidden('@ptConferencesConfiguration')

            .click('@discipline')
            .assert.visible('@disciplineStudents')
            .assert.containsText('@disciplineStudents', 'Students')
            .assert.attributeEquals('@disciplineStudents', 'href', page.menu() + '/discipline.php')
            
            .assert.visible('@disciplineDailyLogs')
            .assert.containsText('@disciplineDailyLogs', 'Daily Logs')
            .assert.attributeEquals('@disciplineDailyLogs', 'href', page.menu() + '/disciplinelogs.php')
            
            .assert.visible('@disciplineDetentions')
            .assert.containsText('@disciplineDetentions', 'Detentions')
            .assert.attributeEquals('@disciplineDetentions', 'href', page.menu() + '/disciplinedetentions.php')
            
            .assert.visible('@disciplineConfiguration')
            .assert.containsText('@disciplineConfiguration', 'Configuration')
            .assert.attributeEquals('@disciplineConfiguration', 'href', page.menu() + '/disciplineviolations.php')
            
            .assert.visible('@disciplineReports')
            .assert.containsText('@disciplineReports', 'Reports')
            .assert.attributeEquals('@disciplineReports', 'href', page.menu() + '/reports.php?type=20')

            .click('@discipline')
            .assert.hidden('@disciplineStudents')
            .assert.hidden('@disciplineDailyLogs')
            .assert.hidden('@disciplineDetentions')
            .assert.hidden('@disciplineConfiguration')
            .assert.hidden('@disciplineReports')

            .click('@serviceMgr')
            .assert.visible('@serviceMgrStudents')
            .assert.containsText('@serviceMgrStudents', 'Students')
            .assert.attributeEquals('@serviceMgrStudents', 'href', page.menu() + '/service.php?task=liststudents')
            
            .assert.visible('@serviceMgrFamilies')
            .assert.containsText('@serviceMgrFamilies', 'Families')
            .assert.attributeEquals('@serviceMgrFamilies', 'href', page.menu() + '/service.php?task=listfamilies')
            
            .assert.visible('@serviceMgrDailyLogs')
            .assert.containsText('@serviceMgrDailyLogs', 'Daily Logs')
            .assert.attributeEquals('@serviceMgrDailyLogs', 'href', page.menu() + '/servicelogs.php')
            
            .assert.visible('@serviceMgrOpportunites')
            .assert.containsText('@serviceMgrOpportunites', 'Opportunities')
            .assert.attributeEquals('@serviceMgrOpportunites', 'href', page.menu() + '/serviceops.php')
            
            .assert.visible('@serviceMgrReports')
            .assert.containsText('@serviceMgrReports', 'Reports')
            .assert.attributeEquals('@serviceMgrReports', 'href', page.menu() + '/reports.php?type=23')

            .click('@serviceMgr')
            .assert.hidden('@serviceMgrStudents')
            .assert.hidden('@serviceMgrFamilies')
            .assert.hidden('@serviceMgrDailyLogs')
            .assert.hidden('@serviceMgrOpportunites')
            .assert.hidden('@serviceMgrReports')

            .click('@connectionMgr')
            .assert.visible('@connectionMgrStudents')
            .assert.containsText('@connectionMgrStudents', 'Students')
            .assert.attributeEquals('@connectionMgrStudents', 'href', page.menu() + '/connect.php?task=liststudents')
            
            .assert.visible('@connectionMgrDailyLogs')
            .assert.containsText('@connectionMgrDailyLogs', 'Daily Logs')
            .assert.attributeEquals('@connectionMgrDailyLogs', 'href', page.menu() + '/connectlogs.php')
            
            .assert.visible('@connectionMgrInitiator')
            .assert.containsText('@connectionMgrInitiator', 'Initiator')
            .assert.attributeEquals('@connectionMgrInitiator', 'href', page.menu() + '/connectroles.php')
            
            .assert.visible('@connectionMgrReports')
            .assert.containsText('@connectionMgrReports', 'Reports')
            .assert.attributeEquals('@connectionMgrReports', 'href', page.menu() + '/reports.php?type=28')

            .click('@connectionMgr')
            .assert.hidden('@connectionMgrStudents')
            .assert.hidden('@connectionMgrDailyLogs')
            .assert.hidden('@connectionMgrInitiator')
            .assert.hidden('@connectionMgrReports')

            .click('@tranportationMgr')
            .assert.visible('@tranportationMgrBusRoutes')
            .assert.containsText('@tranportationMgrBusRoutes', 'Bus Routes')
            .assert.attributeEquals('@tranportationMgrBusRoutes', 'href', page.menu() + '/tm_busroute.php')
            
            .assert.visible('@tranportationMgrFieldTrips')
            .assert.containsText('@tranportationMgrFieldTrips', 'Field Trips')
            .assert.attributeEquals('@tranportationMgrFieldTrips', 'href', page.menu() + '/tm_fieldtrip.php')
            
            .assert.visible('@tranportationMgrCarpoolMgr')
            .assert.containsText('@tranportationMgrCarpoolMgr', 'Carpool Mgr')
            .assert.attributeEquals('@tranportationMgrCarpoolMgr', 'href', page.menu() + '/tm_carpool.php')
            
            .assert.visible('@tranportationMgrParkingPasses')
            .assert.containsText('@tranportationMgrParkingPasses', 'Parking Passes')
            .assert.attributeEquals('@tranportationMgrParkingPasses', 'href', page.menu() + '/tm_parkingpass.php')
            
            .assert.visible('@tranportationMgrReports')
            .assert.containsText('@tranportationMgrReports', 'Reports')
            .assert.attributeEquals('@tranportationMgrReports', 'href', page.menu() + '/reports.php?type=33')

            .click('@tranportationMgr')
            .assert.hidden('@tranportationMgrBusRoutes')
            .assert.hidden('@tranportationMgrFieldTrips')
            .assert.hidden('@tranportationMgrCarpoolMgr')
            .assert.hidden('@tranportationMgrParkingPasses')
            .assert.hidden('@tranportationMgrReports')

            .click('@volunteerMgr')
            .assert.visible('@volunteerMgrEvents')
            .assert.containsText('@volunteerMgrEvents', 'Events')
            .assert.attributeEquals('@volunteerMgrEvents', 'href', page.menu() + '/volunteer.php?view=1')

            .click('@libraryMgr')
            .assert.visible('@libraryMgrBook')
            .assert.containsText('@libraryMgrBook', 'Book')            
            .assert.attributeEquals('@libraryMgrBook', 'href', page.menu() + '/library.php?task=book')
            
            .assert.visible('@libraryMgrStudents')
            .assert.containsText('@libraryMgrStudents', 'Students')
            .assert.attributeEquals('@libraryMgrStudents', 'href', page.menu() + '/librarystudents.php')
            
            .assert.visible('@libraryMgrCheckIn')
            .assert.containsText('@libraryMgrCheckIn', 'Check In')
            .assert.attributeEquals('@libraryMgrCheckIn', 'href', page.menu() + '/librarydesk.php?task=checkin')
            
            .assert.visible('@libraryMgrCheckOut')
            .assert.containsText('@libraryMgrCheckOut', 'Check Out')
            .assert.attributeEquals('@libraryMgrCheckOut', 'href', page.menu() + '/librarydesk.php?task=checkout')
            
            .assert.visible('@libraryMgrWhatsOut')
            .assert.containsText('@libraryMgrWhatsOut', 'What\'s Out')
            .assert.attributeEquals('@libraryMgrWhatsOut', 'href', page.menu() + '/librarydesk.php?task=whatsout&grade=99')
            
            .assert.visible('@libraryMgrBooks')
            .assert.containsText('@libraryMgrBooks', '\273 Books')
            .assert.attributeEquals('@libraryMgrBooks', 'href', page.menu() + '/schoolmenu.php#')
            
            .assert.visible('@libraryMgrSearch')
            .assert.containsText('@libraryMgrSearch', '\273 Search')
            .assert.attributeEquals('@libraryMgrSearch', 'href', page.menu() + '/schoolmenu.php#')
            
            .assert.visible('@libraryMgrConfiguration')
            .assert.containsText('@libraryMgrConfiguration', '\273 Configuration')
            .assert.attributeEquals('@libraryMgrConfiguration', 'href', page.menu() + '/schoolmenu.php#')
            
            .assert.visible('@libraryMgrReports')
            .assert.containsText('@libraryMgrReports', 'Reports')
            .assert.attributeEquals('@libraryMgrReports', 'href', page.menu() + '/reports.php?type=30')

            .click('@libraryMgrBooks')
            .assert.visible('@libraryMgrBooksLibrary')
            .assert.containsText('@libraryMgrBooksLibrary', 'Library')
            .assert.attributeEquals('@libraryMgrBooksLibrary', 'href', page.menu() + '/librarybooks.php')
            
            .assert.visible('@libraryMgrBooksTextBooks')
            .assert.containsText('@libraryMgrBooksTextBooks', 'Textbooks')
            .assert.attributeEquals('@libraryMgrBooksTextBooks', 'href', page.menu() + '/libraryclassbooks.php')
            
            .assert.visible('@libraryMgrBooksInventoryLibrary')
            .assert.containsText('@libraryMgrBooksInventoryLibrary', 'Inventory Library')
            .assert.attributeEquals('@libraryMgrBooksInventoryLibrary', 'href', page.menu() + '/libraryinventory.php')

            .click('@libraryMgrBooks')
            .assert.hidden('@libraryMgrBooksLibrary')
            .assert.hidden('@libraryMgrBooksTextBooks')
            .assert.hidden('@libraryMgrBooksInventoryLibrary')

            .click('@libraryMgrSearch')
            .assert.visible('@libraryMgrSearchLocal')
            .assert.containsText('@libraryMgrSearchLocal', 'Local')
            .assert.attributeEquals('@libraryMgrSearchLocal', 'href', page.menu() + '/library.php?action=search')
            
            .assert.visible('@libraryMgrSearchGoogle')
            .assert.containsText('@libraryMgrSearchGoogle', 'Google')
            .assert.attributeEquals('@libraryMgrSearchGoogle', 'href', page.menu() + '/librarysearch.php')

            .click('@libraryMgrSearch')
            .assert.hidden('@libraryMgrSearchLocal')
            .assert.hidden('@libraryMgrSearchGoogle')

            .click('@libraryMgrConfiguration')
            .assert.visible('@libraryMgrConfigurationLocations')
            .assert.containsText('@libraryMgrConfigurationLocations', 'Locations')
            .assert.attributeEquals('@libraryMgrConfigurationLocations', 'href', page.menu() + '/librarylocations.php')
            
            .assert.visible('@libraryMgrConfigurationImport')
            .assert.containsText('@libraryMgrConfigurationImport', 'Import')
            .assert.attributeEquals('@libraryMgrConfigurationImport', 'href', page.menu() + '/librarybookimport.php')
            
            .assert.visible('@libraryMgrConfigurationSetup')
            .assert.containsText('@libraryMgrConfigurationSetup', 'Setup')
            .assert.attributeEquals('@libraryMgrConfigurationSetup', 'href', page.menu() + '/libraryconfig.php')

            .click('@libraryMgrConfiguration')
            .assert.hidden('@libraryMgrConfigurationLocations')
            .assert.hidden('@libraryMgrConfigurationImport')
            .assert.hidden('@libraryMgrConfigurationSetup')

            .click('@libraryMgr')
            .assert.hidden('@libraryMgrBook')
            .assert.hidden('@libraryMgrStudents')
            .assert.hidden('@libraryMgrCheckIn')
            .assert.hidden('@libraryMgrCheckOut')
            .assert.hidden('@libraryMgrWhatsOut')
            .assert.hidden('@libraryMgrBooks')
            .assert.hidden('@libraryMgrSearch')
            .assert.hidden('@libraryMgrConfiguration')
            .assert.hidden('@libraryMgrReports')

            .click('@auctionMgr')
            .assert.visible('@auctionMgrStaff')
            .assert.containsText('@auctionMgrStaff', 'Staff')
            .assert.attributeEquals('@auctionMgrStaff', 'href', page.menu() + '/auction_staff.php')
            
            .assert.visible('@auctionMgrAuctions')
            .assert.containsText('@auctionMgrAuctions', 'Auctions')
            .assert.attributeEquals('@auctionMgrAuctions', 'href', page.menu() + '/auctions.php')
            
            .assert.visible('@auctionMgrAuctionItems')
            .assert.containsText('@auctionMgrAuctionItems', 'Items')
            .assert.attributeEquals('@auctionMgrAuctionItems', 'href', page.menu() + '/auctionitems.php')
            
            .assert.visible('@auctionMgrDonorCompanies')
            .assert.containsText('@auctionMgrDonorCompanies', 'Donor Companies')
            .assert.attributeEquals('@auctionMgrDonorCompanies', 'href', page.menu() + '/auctiondonors.php')
            
            .assert.visible('@auctionMgrReports')
            .assert.containsText('@auctionMgrReports', 'Reports')
            .assert.attributeEquals('@auctionMgrReports', 'href', page.menu() + '/reports.php?type=21')

            .click('@specialties')

            .assert.hidden('@athleticDirector')
            .assert.hidden('@athleticDirectorSports')
            .assert.hidden('@athleticDirectorTeams')
            .assert.hidden('@athleticDirectorScoreboard')
            .assert.hidden('@athleticDirectorEquipment')

            .assert.hidden('@nursesOffice')
            .assert.hidden('@nursesOfficeDailyLogs')
            .assert.hidden('@nursesOfficeStudents')
            .assert.hidden('@nursesOfficeConfiguration')
            .assert.hidden('@nursesOfficeConfigurationComplaints')
            .assert.hidden('@nursesOfficeConfigurationMedications')
            .assert.hidden('@nursesOfficeConfigurationImmunizations')
            .assert.hidden('@nursesOfficeReports')

            .assert.hidden('@ptConferences')
            .assert.hidden('@ptConferencesTeachers')
            .assert.hidden('@ptConferencesByDate')
            .assert.hidden('@ptConferencesByTeacher')
            .assert.hidden('@ptConferencesConfiguration')

            .assert.hidden('@discipline')
            .assert.hidden('@disciplineStudents')
            .assert.hidden('@disciplineDailyLogs')
            .assert.hidden('@disciplineDetentions')
            .assert.hidden('@disciplineConfiguration')
            .assert.hidden('@disciplineReports')

            .assert.hidden('@serviceMgr')
            .assert.hidden('@serviceMgrStudents')
            .assert.hidden('@serviceMgrFamilies')
            .assert.hidden('@serviceMgrDailyLogs')
            .assert.hidden('@serviceMgrOpportunites')
            .assert.hidden('@serviceMgrReports')

            .assert.hidden('@connectionMgr')
            .assert.hidden('@connectionMgrStudents')
            .assert.hidden('@connectionMgrDailyLogs')
            .assert.hidden('@connectionMgrInitiator')
            .assert.hidden('@connectionMgrReports')

            .assert.hidden('@tranportationMgr')
            .assert.hidden('@tranportationMgrBusRoutes')
            .assert.hidden('@tranportationMgrFieldTrips')
            .assert.hidden('@tranportationMgrCarpoolMgr')
            .assert.hidden('@tranportationMgrParkingPasses')
            .assert.hidden('@tranportationMgrReports')

            .assert.hidden('@volunteerMgr')
            .assert.hidden('@volunteerMgrEvents')

            .assert.hidden('@libraryMgr')
            .assert.hidden('@libraryMgrBook')
            .assert.hidden('@libraryMgrStudents')
            .assert.hidden('@libraryMgrStudents')
            .assert.hidden('@libraryMgrCheckIn')
            .assert.hidden('@libraryMgrCheckOut')
            .assert.hidden('@libraryMgrWhatsOut')

            .assert.hidden('@libraryMgrBooks')
            .assert.hidden('@libraryMgrBooksLibrary')
            .assert.hidden('@libraryMgrBooksTextBooks')
            .assert.hidden('@libraryMgrBooksInventoryLibrary')

            .assert.hidden('@libraryMgrSearch')
            .assert.hidden('@libraryMgrSearchLocal')
            .assert.hidden('@libraryMgrSearchGoogle')

            .assert.hidden('@libraryMgrConfiguration')
            .assert.hidden('@libraryMgrConfigurationLocations')
            .assert.hidden('@libraryMgrConfigurationImport')
            .assert.hidden('@libraryMgrConfigurationSetup')

            .assert.hidden('@libraryMgrReports')

            .assert.hidden('@auctionMgr')
            .assert.hidden('@auctionMgrStaff')
            .assert.hidden('@auctionMgrAuctions')
            .assert.hidden('@auctionMgrAuctionItems')
            .assert.hidden('@auctionMgrDonorCompanies')
            .assert.hidden('@auctionMgrReports')

        client.frame(null);

        client.end();
    }
};
