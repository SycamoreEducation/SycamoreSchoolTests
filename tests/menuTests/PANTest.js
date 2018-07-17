module.exports = {
    tags: ['PANTest', 'menuTests'],

    'Pass A Note Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@PAN')
            .assert.containsText('@PAN', '\273 Pass-A-Note')
            .assert.attributeEquals('@PAN', 'href', page.url() + 
                '/schoolmenu.php#')

            .assert.hidden('@PANInbox')
            .assert.hidden('@PANOutbox')
            .assert.hidden('@PANEmployees')
            .assert.hidden('@PANAssociates')
            .assert.hidden('@PANFamilies')
            .assert.hidden('@PANStudents')
            .assert.hidden('@PANOptions')

            .click('@PAN')
            .assert.visible('@PANInbox')
            .assert.containsText('@PANInbox', 'Inbox')
            .assert.attributeEquals('@PANInbox', 'href', page.url() + 
                '/pan.php?task=inbox')
            
            .assert.visible('@PANOutbox')
            .assert.containsText('@PANOutbox', 'Outbox')
            .assert.attributeEquals('@PANOutbox', 'href', page.url() + 
                '/pan.php?task=outbox')
            
            .assert.visible('@PANEmployees')
            .assert.containsText('@PANEmployees', 'Employees')
            .assert.attributeEquals('@PANEmployees', 'href', page.url() + 
                '/pan.php?task=sendstaff')
            
            .assert.visible('@PANAssociates')
            .assert.containsText('@PANAssociates', 'Associates')
            .assert.attributeEquals('@PANAssociates', 'href', page.url() + 
                '/pan.php?task=sendassociates')
            
            .assert.visible('@PANFamilies')
            .assert.containsText('@PANFamilies', 'Families')
            .assert.attributeEquals('@PANFamilies', 'href', page.url() + 
                '/pan.php?task=sendfamilies')
            
            .assert.visible('@PANStudents')
            .assert.containsText('@PANStudents', 'Students')
            .assert.attributeEquals('@PANStudents', 'href', page.url() + 
                '/pan.php?task=sendstudents')
            
            .assert.visible('@PANOptions')
            .assert.containsText('@PANOptions', 'Options')
            .assert.attributeEquals('@PANOptions', 'href', page.url() + 
                '/usercfg.php?task=pan&tab=2')

            .click('@PAN')
            .assert.hidden('@PANInbox')
            .assert.hidden('@PANOutbox')
            .assert.hidden('@PANEmployees')
            .assert.hidden('@PANAssociates')
            .assert.hidden('@PANFamilies')
            .assert.hidden('@PANStudents')
            .assert.hidden('@PANOptions');

        client.frame(null);

        client.end();
    }
};
