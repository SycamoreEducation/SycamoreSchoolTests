module.exports = {
    tags: ['myAccountingTest', 'menuTests'],

    'My Accounting Menu Test': (client) => {

        var page = client.page.login();

        var schoolID = '1';
        var username = 'superuser';
        var password = 'guest';

        page.navigate()
            .schoolLogin(username, password, schoolID);

        client.frame(1);
        client.page.menu()
            .assert.visible('@myAccounting')
            .assert.containsText('@myAccounting', '» My Accounting')
            .assert.attributeEquals('@utilities', 'href', 'http://web/schoolmenu.php#')

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
