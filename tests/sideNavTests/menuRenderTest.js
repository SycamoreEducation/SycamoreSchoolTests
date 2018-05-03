module.exports = {
    tags: ['menuRenderTest', 'menuTests'],

    'Menu Render Test': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .schoolLogin(username, password, schoolID);

        client.frame(1);
        client.page.menu()
            .assert.visible('@home')
            .assert.visible('@school')
            .assert.visible('@frontDesk')
            .assert.visible('@commCenter')
            .assert.visible('@communication')
            .assert.visible('@administrative')
            .assert.visible('@academic')
            .assert.visible('@specialties')
            .assert.visible('@utilities')
            .assert.visible('@systemHelp')
            .assert.visible('@systemSupport')
            .assert.visible('@siteAdmin')
            .assert.visible('@mySchool')
            .assert.visible('@myOrganizer')
            .assert.visible('@myAccounting')
            .assert.visible('@myResources')
            .assert.visible('@myCommunication')
            .assert.visible('@passANote')
            .assert.visible('@logout')
            .assert.visible('@spiritStore')

            .assert.containsText('@home', 'School Home')
            .assert.containsText('@school', 'School')
            .assert.containsText('@frontDesk', 'Front Desk')
            .assert.containsText('@commCenter', 'Comm Center')
            .assert.containsText('@communication', 'Communication')
            .assert.containsText('@administrative', 'Administrative')
            .assert.containsText('@academic', 'Academic')
            .assert.containsText('@specialties', 'Specialties')
            .assert.containsText('@utilities', 'Utilities')
            .assert.containsText('@systemHelp', 'System Help')
            .assert.containsText('@systemSupport', 'System Support')
            .assert.containsText('@siteAdmin', 'Site Admin')
            .assert.containsText('@mySchool', 'My School')
            .assert.containsText('@myOrganizer', 'My Organizer')
            .assert.containsText('@myAccounting', 'My Accounting')
            .assert.containsText('@myResources', 'My Resources')
            .assert.containsText('@myCommunication', 'My Communication')
            .assert.containsText('@passANote', 'Pass-A-Note')
            .assert.containsText('@logout', 'Logout')
            .assert.containsText('@spiritStore', 'Spirit Store')

        client.frame(null);

        client.end();
    }
};
