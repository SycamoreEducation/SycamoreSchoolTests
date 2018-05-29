module.exports = {
    tags: ['passANoteTest', 'menuTests'],

    'Pass A Note Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@passANote')
            .assert.containsText('@passANote', '\273 Pass-A-Note')
            .assert.attributeEquals('@passANote', 'href', page.url() + '/schoolmenu.php#')

            .assert.hidden('@passANoteInbox')
            .assert.hidden('@passANoteOutbox')
            .assert.hidden('@passANoteEmployees')
            .assert.hidden('@passANoteAssociates')
            .assert.hidden('@passANoteFamilies')
            .assert.hidden('@passANoteStudents')
            .assert.hidden('@passANoteOptions')

            .click('@passANote')
            .assert.visible('@passANoteInbox')
            .assert.containsText('@passANoteInbox', 'Inbox')
            .assert.attributeEquals('@passANoteInbox', 'href', page.url() + '/pan.php?task=inbox')
            
            .assert.visible('@passANoteOutbox')
            .assert.containsText('@passANoteOutbox', 'Outbox')
            .assert.attributeEquals('@passANoteOutbox', 'href', page.url() + '/pan.php?task=outbox')
            
            .assert.visible('@passANoteEmployees')
            .assert.containsText('@passANoteEmployees', 'Employees')
            .assert.attributeEquals('@passANoteEmployees', 'href', page.url() + '/pan.php?task=sendstaff')
            
            .assert.visible('@passANoteAssociates')
            .assert.containsText('@passANoteAssociates', 'Associates')
            .assert.attributeEquals('@passANoteAssociates', 'href', page.url() + '/pan.php?task=sendassociates')
            
            .assert.visible('@passANoteFamilies')
            .assert.containsText('@passANoteFamilies', 'Families')
            .assert.attributeEquals('@passANoteFamilies', 'href', page.url() + '/pan.php?task=sendfamilies')
            
            .assert.visible('@passANoteStudents')
            .assert.containsText('@passANoteStudents', 'Students')
            .assert.attributeEquals('@passANoteStudents', 'href', page.url() + '/pan.php?task=sendstudents')
            
            .assert.visible('@passANoteOptions')
            .assert.containsText('@passANoteOptions', 'Options')
            .assert.attributeEquals('@passANoteOptions', 'href', page.url() + '/usercfg.php?task=pan&tab=2')

            .click('@passANote')
            .assert.hidden('@passANoteInbox')
            .assert.hidden('@passANoteOutbox')
            .assert.hidden('@passANoteEmployees')
            .assert.hidden('@passANoteAssociates')
            .assert.hidden('@passANoteFamilies')
            .assert.hidden('@passANoteStudents')
            .assert.hidden('@passANoteOptions')

        client.frame(null);

        client.end();
    }
};
