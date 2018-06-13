module.exports = {
    tags: ['schoolTests', 'favoritesTests', 'favoritesLinkTest'],

    'School Favorites Link Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@school')
            .click('@school')
            .assert.visible('@schoolFavorites')
            .click('@schoolFavorites')
        client.frame(null);

        client.frame(2);
        client.page.school.favorites()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'School/ Favorites')

            .assert.visible('@linksTab')
            .assert.containsText('@linksTab', 'Links')

            .assert.visible('@newLinkBtn')
            .assert.attributeEquals('@newLinkBtn', 'value', 'New Link')
            .assert.attributeEquals('@newLinkBtn', 'onclick', 'addlink()')

            .assert.visible('@folderLabel')
            .assert.containsText('@folderLabel', 'Folder')

            .assert.visible('@folderSelect')
            .assert.containsText('@folderSelect', 'Choose Folder')
            .assert.attributeEquals('@folderSelect', 'onchange', 'doRefresh()')

            .assert.visible('@folderIcon')
            .assert.attributeEquals('@folderIcon', 'src', page.url() + '/images/newfolder.gif')
            .assert.attributeEquals('@folderIcon', 'onclick', 'addcatagory()')

            .assert.visible('@linkTable')

        client.frame(null)

        client.end();
    }
};
