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
            .assert.attributeEquals('@myAccounting', 'href', 'http://web/schoolmenu.php#')

            .assert.hidden('@myAccountingCafetieria')
            .assert.hidden('@myAccountingExpenseReports')

            .click('@myAccounting')
            .assert.visible('@myAccountingCafetieria')
            .assert.visible('@myAccountingExpenseReports')
            .assert.containsText('@myAccountingCafetieria', 'Cafeteria')
            .assert.containsText('@myAccountingExpenseReports', 'Expense Reports')
            .assert.attributeEquals('@myAccountingCafetieria', 'href', 'http://web/employeelunchaccount.php')
            .assert.attributeEquals('@myAccountingExpenseReports', 'href', 'http://web/expense.php')

            .click('@myAccounting')
            .assert.hidden('@myAccountingCafetieria')
            .assert.hidden('@myAccountingExpenseReports')

        client.frame(null);

        client.end();
    }
};
