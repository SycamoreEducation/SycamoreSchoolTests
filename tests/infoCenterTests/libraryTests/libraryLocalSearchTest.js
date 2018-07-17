module.exports = {
    tags: ['infoCenterTests', 'infoCenterLibraryTests', 
        'libraryLocalSearchTest'],

    'Info Center Library Local Search Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@infoCenter')
            .click('@infoCenter')
            .assert.visible('@infoCenterLibrary')
            .click('@infoCenterLibrary');
        client.frame(null);

        client.frame(2);
        client.page.infoCenter.library()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Specialties/Library/ Library Search')

            .activeTab('Local Search')

            .assert.visible('@googleSearchTab')
            .assert.containsText('@googleSearchTab', 'Google Search')

            .assert.visible('@byTitle')
            .assert.attributeEquals('@byTitle', 'onclick', 'dofocus()')

            .assert.visible('@byAuthor')
            .assert.attributeEquals('@byAuthor', 'onclick', 'dofocus()')

            .assert.visible('@byKeyWord')
            .assert.attributeEquals('@byKeyWord', 'onclick', 'dofocus()')

            .assert.visible('@inputField')
            
            .assert.visible('@searchBooksBtn')
            .assert.attributeEquals('@searchBooksBtn', 'value', 
                ' Search Books ')
            .assert.attributeEquals('@searchBooksBtn', 'type', 'submit')

            .assert.visible('@librariesSelect')
            .assert.containsText('@librariesSelect', 'All Libraries')
            .assert.attributeEquals('@librariesSelect', 'onchange', 
                'newlibrary()')

            .assert.visible('@libraryBreadcrumb')
            .assert.containsText('@libraryBreadcrumb', 
                'Library Search/ Recently Added Books');

        client.frame(null);

        client.end();
    }
};
