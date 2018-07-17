module.exports = {
    tags: ['infoCenterTests', 'infoCenterLibraryTests', 
        'libraryGoogleSearchTest'],

    'Info Center Library Google Search Test': (client) => {

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

            .click('@googleSearchTab')

            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Library Manager/Book/ Google Search')

            .activeTab('Google Search')

            .assert.visible('@localSearchTab')
            .assert.containsText('@localSearchTab', 'Local Search')

            .assert.visible('@googleBooksHeader')
            .assert.containsText('@googleBooksHeader', 
                'Powered by Google Books')

            .assert.visible('@searchHeader')
            .assert.containsText('@searchHeader', 
                'Search by Title, Author, Subject or any Identifier, i.e. ISBN')

            .assert.visible('@googleInputField')

            .assert.visible('@googleSearchBooksBtn')
            .assert.attributeEquals('@googleSearchBooksBtn', 'value', 
                ' Search Books ')
            .assert.attributeEquals('@googleSearchBooksBtn', 'onclick', 
                'dosearch()')

            .assert.visible('@searchSubHeading')
            .assert.containsText('@searchSubHeading', 
                'Approximately 12 million Books in collection')

            .assert.visible('@cover')
            .assert.containsText('@cover', 'Cover')
            
            .assert.visible('@title')
            .assert.containsText('@title', 'Title')

            .assert.visible('@author')
            .assert.containsText('@author', 'Author')

            .assert.visible('@localNum')
            .assert.containsText('@localNum', 'Local #')

            .assert.visible('@identifiers')
            .assert.containsText('@identifiers', 'Identifiers');

        client.frame(null);

        client.end();
    }
};
