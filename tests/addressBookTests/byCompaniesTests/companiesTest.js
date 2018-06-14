module.exports = {
    tags: ['addressBookTests', 'addressBookByCompaniesTests'],

    'By Companies Companies Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@addressBook')
            .click('@addressBook')
            .assert.visible('@addressBookByCompany')
            .click('@addressBookByCompany')
        client.frame(null);

        client.frame(2);
        client.page.addressBook.byCompany.companiesTab()

            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Address Book/ By Company')

            .assert.visible('@companiesTab')
            .assert.containsText('@companiesTab', 'Companies')

            .assert.visible('@categoriesTab')
            .assert.containsText('@categoriesTab', 'Categories')

            .assert.visible('@searchTab')
            .assert.containsText('@searchTab', 'Search')

            .assert.visible('@searchInput')
            .assert.attributeEquals('@searchInput', 'type', 'text')

            .assert.visible('@searchBtn')
            .assert.attributeEquals('@searchBtn', 'value', 'Search')
            .assert.attributeEquals('@searchBtn', 'type', 'submit')

            .assert.visible('@newCompanyBtn')
            .assert.attributeEquals('@newCompanyBtn', 'value', 'New Company')
            .assert.attributeEquals('@newCompanyBtn', 'onclick', 
                'addcontactcompany()')

            .assert.visible('@newContactBtn')
            .assert.attributeEquals('@newContactBtn', 'value', 'New C&C')
            .assert.attributeEquals('@newContactBtn', 'onclick', 
                'addcontactcompanycontact()')

            .assert.visible('@companyNameHeader')
            .assert.containsText('@companyNameHeader', 'Company Name')

            .assert.visible('@numeric')
            .assert.containsText('@numeric', '#')
            .assert.attributeEquals('@numeric', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=num')

            .assert.visible('@a')
            .assert.containsText('@a', 'A')
            .assert.attributeEquals('@a', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=A')

            .assert.visible('@b')
            .assert.containsText('@b', 'B')
            .assert.attributeEquals('@b', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=B')

                .assert.visible('@c')
            .assert.containsText('@c', 'C')
            .assert.attributeEquals('@c', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=C')

                .assert.visible('@d')
            .assert.containsText('@d', 'D')
            .assert.attributeEquals('@d', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=D')

                .assert.visible('@e')
            .assert.containsText('@e', 'E')
            .assert.attributeEquals('@e', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=E')

                .assert.visible('@f')
            .assert.containsText('@f', 'F')
            .assert.attributeEquals('@f', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=F')

                .assert.visible('@g')
            .assert.containsText('@g', 'G')
            .assert.attributeEquals('@g', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=G')

                .assert.visible('@h')
            .assert.containsText('@h', 'H')
            .assert.attributeEquals('@h', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=H')

                .assert.visible('@i')
            .assert.containsText('@i', 'I')
            .assert.attributeEquals('@i', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=I')

                .assert.visible('@j')
            .assert.containsText('@j', 'J')
            .assert.attributeEquals('@j', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=J')

                .assert.visible('@k')
            .assert.containsText('@k', 'K')
            .assert.attributeEquals('@k', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=K')

                .assert.visible('@l')
            .assert.containsText('@l', 'L')
            .assert.attributeEquals('@l', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=L')

                .assert.visible('@m')
            .assert.containsText('@m', 'M')
            .assert.attributeEquals('@m', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=M')

                .assert.visible('@n')
            .assert.containsText('@n', 'N')
            .assert.attributeEquals('@n', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=N')

                .assert.visible('@o')
            .assert.containsText('@o', 'O')
            .assert.attributeEquals('@o', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=O')

                .assert.visible('@p')
            .assert.containsText('@p', 'P')
            .assert.attributeEquals('@p', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=P')

                .assert.visible('@q')
            .assert.containsText('@q', 'Q')
            .assert.attributeEquals('@q', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=Q')

                .assert.visible('@r')
            .assert.containsText('@r', 'R')
            .assert.attributeEquals('@r', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=R')

                .assert.visible('@s')
            .assert.containsText('@s', 'S')
            .assert.attributeEquals('@s', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=S')

                .assert.visible('@t')
            .assert.containsText('@t', 'T')
            .assert.attributeEquals('@t', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=T')

                .assert.visible('@u')
            .assert.containsText('@u', 'U')
            .assert.attributeEquals('@u', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=U')

                .assert.visible('@v')
            .assert.containsText('@v', 'V')
            .assert.attributeEquals('@v', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=V')

                .assert.visible('@w')
            .assert.containsText('@w', 'W')
            .assert.attributeEquals('@w', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=W')

                .assert.visible('@x')
            .assert.containsText('@x', 'X')
            .assert.attributeEquals('@x', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=X')

                .assert.visible('@y')
            .assert.containsText('@y', 'Y')
            .assert.attributeEquals('@y', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=Y')

                .assert.visible('@z')
            .assert.containsText('@z', 'Z')
            .assert.attributeEquals('@z', 'href', page.url() + 
                '/contactcompanies.php?tab=0&task=bycompany&select_letter=Z')

        client.frame(null)

        client.end();
    }
};
