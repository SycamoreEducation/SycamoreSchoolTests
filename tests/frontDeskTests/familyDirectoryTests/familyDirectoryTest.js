module.exports = {
    tags: ['frontDeskTests', 'familyDirectoryTests', 'familyDirectoryTest'],

    'School News Archive Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@frontDesk')
            .click('@frontDesk')
            .assert.visible('@frontDeskFamilyDirectory')
            .click('@frontDeskFamilyDirectory')
        client.frame(null);

        client.frame(2);
        client.page.frontDesk.familyDirectory()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Front Desk/ Family Directory')

            .assert.visible('@byFamiliesTab')
            .assert.containsText('@byFamiliesTab', 'by Families')

            .assert.visible('@inputField')
            .assert.attributeEquals('@inputField', 'type', 'text')

            .assert.visible('@studentSearchBtn')
            .assert.attributeEquals('@studentSearchBtn', 'value', 'Student Search')
            .assert.attributeEquals('@studentSearchBtn', 'type', 'submit')

            .assert.visible('@printBtn')
            .assert.containsText('@printBtn', 'Print')
            .assert.attributeEquals('@printBtn', 'onclick', 'doDirectory()')

            .assert.visible('@a')
            .assert.containsText('@a', 'A')
            .assert.attributeEquals('@a', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=A&tab=0')

            .assert.visible('@b')
            .assert.containsText('@b', 'B')
            .assert.attributeEquals('@b', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=B&tab=0')
            
            .assert.visible('@c')
            .assert.containsText('@c', 'C')
            .assert.attributeEquals('@c', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=C&tab=0')

            .assert.visible('@d')
            .assert.containsText('@d', 'D')
            .assert.attributeEquals('@d', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=D&tab=0')

            .assert.visible('@e')
            .assert.containsText('@e', 'E')
            .assert.attributeEquals('@e', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=E&tab=0')

            .assert.visible('@f')
            .assert.containsText('@f', 'F')
            .assert.attributeEquals('@f', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=F&tab=0')

            .assert.visible('@g')
            .assert.containsText('@g', 'G')
            .assert.attributeEquals('@g', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=G&tab=0')

            .assert.visible('@h')
            .assert.containsText('@h', 'H')
            .assert.attributeEquals('@h', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=H&tab=0')

            .assert.visible('@i')
            .assert.containsText('@i', 'I')
            .assert.attributeEquals('@i', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=I&tab=0')

            .assert.visible('@j')
            .assert.containsText('@j', 'J')
            .assert.attributeEquals('@j', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=J&tab=0')

            .assert.visible('@k')
            .assert.containsText('@k', 'K')
            .assert.attributeEquals('@k', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=K&tab=0')

            .assert.visible('@l')
            .assert.containsText('@l', 'L')
            .assert.attributeEquals('@l', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=L&tab=0')

            .assert.visible('@m')
            .assert.containsText('@m', 'M')
            .assert.attributeEquals('@m', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=M&tab=0')

            .assert.visible('@n')
            .assert.containsText('@n', 'N')
            .assert.attributeEquals('@n', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=N&tab=0')

            .assert.visible('@o')
            .assert.containsText('@o', 'O')
            .assert.attributeEquals('@o', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=O&tab=0')

            .assert.visible('@p')
            .assert.containsText('@p', 'P')
            .assert.attributeEquals('@p', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=P&tab=0')

            .assert.visible('@q')
            .assert.containsText('@q', 'Q')
            .assert.attributeEquals('@q', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=Q&tab=0')

            .assert.visible('@r')
            .assert.containsText('@r', 'R')
            .assert.attributeEquals('@r', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=R&tab=0')

            .assert.visible('@s')
            .assert.containsText('@s', 'S')
            .assert.attributeEquals('@s', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=S&tab=0')

            .assert.visible('@t')
            .assert.containsText('@t', 'T')
            .assert.attributeEquals('@t', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=T&tab=0')

            .assert.visible('@u')
            .assert.containsText('@u', 'U')
            .assert.attributeEquals('@u', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=U&tab=0')

            .assert.visible('@v')
            .assert.containsText('@v', 'V')
            .assert.attributeEquals('@v', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=V&tab=0')

            .assert.visible('@w')
            .assert.containsText('@w', 'W')
            .assert.attributeEquals('@w', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=W&tab=0')

            .assert.visible('@x')
            .assert.containsText('@x', 'X')
            .assert.attributeEquals('@x', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=X&tab=0')

            .assert.visible('@y')
            .assert.containsText('@y', 'Y')
            .assert.attributeEquals('@y', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=Y&tab=0')

            .assert.visible('@z')
            .assert.containsText('@z', 'Z')
            .assert.attributeEquals('@z', 'href', page.url() + '/directory.php?task=view&type=1&grade=-1&select_letter=Z&tab=0')

        client.frame(null)

        client.end();
    }
};
