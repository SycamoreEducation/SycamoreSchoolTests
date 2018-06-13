module.exports = {
    tags: ['myOrganizerTest', 'menuTests'],

    'My Organizer Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@myOrganizer')
            .assert.containsText('@myOrganizer', '\273 My Organizer')
            .assert.attributeEquals('@myOrganizer', 'href', page.url() + '/schoolmenu.php#')

            .assert.hidden('@myDesktop')
            .assert.hidden('@myTasks')
            .assert.hidden('@myCalendar')
            .assert.hidden('@myDocuments')
            .assert.hidden('@myAddressBook')
            .assert.hidden('@myPhotoAlbums')
            .assert.hidden('@myMemos')
            .assert.hidden('@myFavoriteLinks')
            .assert.hidden('@myDailyJournal')
            .assert.hidden('@myUtilities')
            .assert.hidden('@myUtilitiesOptions')
            .assert.hidden('@myUtilitiesCategories')
            .assert.hidden('@myUtilitiesImport')
            .assert.hidden('@myUtilitiesApplications')
            .assert.hidden('@myUtilitiesWebHooks')
            .assert.hidden('@myPassword')

            .click('@myOrganizer')
            .assert.visible('@myDesktop')
            .assert.containsText('@myDesktop', 'My Desktop')
            .assert.attributeEquals('@myDesktop', 'href', page.url() + '/mydesktop.php?task=newtoday')
            
            .assert.visible('@myTasks')
            .assert.containsText('@myTasks', 'My Tasks')
            .assert.attributeEquals('@myTasks', 'href', page.url() + '/mytasks.php')
            
            .assert.visible('@myCalendar')
            .assert.containsText('@myCalendar', 'My Calendar')
            .assert.attributeEquals('@myCalendar', 'href', page.url() + '/mycalendar.php?overlayid=-1&uid=1')
            
            .assert.visible('@myDocuments')
            .assert.containsText('@myDocuments', 'My Documents')
            .assert.attributeEquals('@myDocuments', 'href', page.url() + '/myexplorer.php?myfolderid=-1')
            
            .assert.visible('@myAddressBook')
            .assert.containsText('@myAddressBook', 'My Address Book')
            .assert.attributeEquals('@myAddressBook', 'href', page.url() + '/mycontacts.php?mine=1')
            
            .assert.visible('@myPhotoAlbums')
            .assert.containsText('@myPhotoAlbums', 'My Photo Albums')
            .assert.attributeEquals('@myPhotoAlbums', 'href', page.url() + '/myphotos.php')
            
            .assert.visible('@myMemos')
            .assert.containsText('@myMemos', 'My Memos')
            .assert.attributeEquals('@myMemos', 'href', page.url() + '/notepad.php')
            
            .assert.visible('@myFavoriteLinks')
            .assert.containsText('@myFavoriteLinks', 'My Favorite Links')
            .assert.attributeEquals('@myFavoriteLinks', 'href', page.url() + '/myfavorites.php')
            
            .assert.visible('@myDailyJournal')
            .assert.containsText('@myDailyJournal', 'My Daily Journal')
            .assert.attributeEquals('@myDailyJournal', 'href', page.url() + '/myjournal.php')
            
            .assert.visible('@myUtilities')
            .assert.containsText('@myUtilities', 'Utilities')
            .assert.attributeEquals('@myUtilities', 'href', page.url() + '/schoolmenu.php#')
            
            .assert.visible('@myPassword')
            .assert.containsText('@myPassword', 'Password')
            .assert.attributeEquals('@myPassword', 'href', page.url() + '/password.php')

            .click('@myUtilities')
            .assert.visible('@myUtilitiesOptions')
            .assert.containsText('@myUtilitiesOptions', 'Options')
            .assert.attributeEquals('@myUtilitiesOptions', 'href', page.url() + '/usercfg.php')
            
            .assert.visible('@myUtilitiesCategories')
            .assert.containsText('@myUtilitiesCategories', 'Categories')
            .assert.attributeEquals('@myUtilitiesCategories', 'href', page.url() + '/mycategories.php')
            
            .assert.visible('@myUtilitiesImport')
            .assert.containsText('@myUtilitiesImport', 'Import')
            .assert.attributeEquals('@myUtilitiesImport', 'href', page.url() + '/import.php?task=in&tab=0')
            
            .assert.visible('@myUtilitiesApplications')
            .assert.containsText('@myUtilitiesApplications', 'Applications')
            .assert.attributeEquals('@myUtilitiesApplications', 'href', page.url() + '/useroauth.php')
            
            // TODO: Nightwatch unable to assert if visible or text string.
            // .assert.visible('@myUtilitiesWebHooks')
            // .assert.containsText('@myUtilitiesWebHooks', 'Webhooks')
            // .assert.attributeEquals('@myUtilitiesWebHooks', 'href', page.url() + '/webhooks.php?uid=1')

            .click('@myUtilities')
            .assert.hidden('@myUtilitiesOptions')
            .assert.hidden('@myUtilitiesCategories')
            .assert.hidden('@myUtilitiesImport')
            .assert.hidden('@myUtilitiesApplications')
            .assert.hidden('@myUtilitiesWebHooks')

            .click('@myOrganizer')
            .assert.hidden('@myDesktop')
            .assert.hidden('@myTasks')
            .assert.hidden('@myCalendar')
            .assert.hidden('@myDocuments')
            .assert.hidden('@myAddressBook')
            .assert.hidden('@myPhotoAlbums')
            .assert.hidden('@myMemos')
            .assert.hidden('@myFavoriteLinks')
            .assert.hidden('@myDailyJournal')
            .assert.hidden('@myUtilities')
            .assert.hidden('@myUtilitiesOptions')
            .assert.hidden('@myUtilitiesCategories')
            .assert.hidden('@myUtilitiesImport')
            .assert.hidden('@myUtilitiesApplications')
            .assert.hidden('@myUtilitiesWebHooks')
            .assert.hidden('@myPassword')

        client.frame(null);

        client.end();
    }
};
