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
            .assert.attributeEquals('@passANote', 'href', 'http://web/schoolmenu.php#')

            .assert.hidden('@passANoteInbox')
            .assert.hidden('@passANoteOutbox')
            .assert.hidden('@passANoteEmployees')
            .assert.hidden('@passANoteAssociates')
            .assert.hidden('@passANoteFamilies')
            .assert.hidden('@passANoteStudents')
            .assert.hidden('@passANoteOptions')

            .click('@passANote')
            .assert.visible('@passANoteInbox')
            .assert.visible('@passANoteOutbox')
            .assert.visible('@passANoteEmployees')
            .assert.visible('@passANoteAssociates')
            .assert.visible('@passANoteFamilies')
            .assert.visible('@passANoteStudents')
            .assert.visible('@passANoteOptions')

            .assert.containsText('@passANoteInbox', 'Inbox')
            .assert.containsText('@passANoteOutbox', 'Outbox')
            .assert.containsText('@passANoteEmployees', 'Employees')
            .assert.containsText('@passANoteAssociates', 'Associates')
            .assert.containsText('@passANoteFamilies', 'Families')
            .assert.containsText('@passANoteStudents', 'Students')
            .assert.containsText('@passANoteOptions', 'Options')

            .assert.attributeEquals('@passANoteInbox', 'href', 'http://web/pan.php?task=inbox')
            .assert.attributeEquals('@passANoteOutbox', 'href', 'http://web/pan.php?task=outbox')
            .assert.attributeEquals('@passANoteEmployees', 'href', 'http://web/pan.php?task=sendstaff')
            .assert.attributeEquals('@passANoteAssociates', 'href', 'http://web/pan.php?task=sendassociates')
            .assert.attributeEquals('@passANoteFamilies', 'href', 'http://web/pan.php?task=sendfamilies')
            .assert.attributeEquals('@passANoteStudents', 'href', 'http://web/pan.php?task=sendstudents')
            .assert.attributeEquals('@passANoteOptions', 'href', 'http://web/usercfg.php?task=pan&tab=2')

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
