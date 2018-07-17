module.exports = {
    tags: ['myAccountingTest', 'menuTests'],

    'My Accounting Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@myAccounting')
            .assert.containsText('@myAccounting', '\273 My Accounting')
            .assert.attributeEquals('@myAccounting', 'href', page.url() + 
                '/schoolmenu.php#')

            .assert.hidden('@myAccountingCafetieria')
            .assert.hidden('@myAccountingExpenseReports')

            .click('@myAccounting')
            .assert.visible('@myAccountingCafetieria')
            .assert.containsText('@myAccountingCafetieria', 'Cafeteria')
            .assert.attributeEquals('@myAccountingCafetieria', 'href', 
                page.url() + '/employeelunchaccount.php')
            
            .assert.visible('@myAccountingExpenseReports')
            .assert.containsText('@myAccountingExpenseReports', 
                'Expense Reports')
            .assert.attributeEquals('@myAccountingExpenseReports', 'href', 
                page.url() + '/expense.php')

            .click('@myAccounting')
            .assert.hidden('@myAccountingCafetieria')
            .assert.hidden('@myAccountingExpenseReports');

        client.frame(null);

        client.end();
    }
};
