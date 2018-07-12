var moment = require('moment');

module.exports = {
    tags: ['infoCenterTests', 'infoCenterCafeteriaTests', 'cafeteriaMealsTest'],

    'Info Center Cafeteria Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@infoCenter')
            .click('@infoCenter')
            .assert.visible('@infoCenterCafeteria')
            .click('@infoCenterCafeteria')
        client.frame(null);

        client.frame(2);
        client.page.infoCenter.cafeteria()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Info Center/ Cafeteria')

            .activeTab('Meals')

            .assert.visible('@printBtn')
            .assert.attributeEquals('@printBtn', 'value', ' Print ')
            .assert.attributeEquals('@printBtn', 'onclick', 'doPrint()')

            .assert.visible('@backMonthBtn')
            .assert.containsText('@backMonthBtn', 
                moment().subtract(1, 'months').format('MMM YYYY'))
            .assert.attributeEquals('@backMonthBtn', 'href', 
                `${page.url()}/lunch.php?viewyear=${moment()
                .subtract(1, 'months').format('YYYY')}&viewmonth=${moment()
                .subtract(1, 'months').format('MM')}`)
            
            .assert.visible('@forwardMonthBtn')
            .assert.containsText('@forwardMonthBtn', 
            moment().add(1, 'months').format('MMM YYYY'))
            .assert.attributeEquals('@forwardMonthBtn', 'href', 
                `${page.url()}/lunch.php?viewyear=${moment().add(1, 'months')
                .format('YYYY')}&viewmonth=${moment().add(1, 'months')
                .format('MM')}`)

            .assert.visible('@monthHeader')
            .assert.containsText('@monthHeader', moment().format('MMMM YYYY'))

            .assert.visible('@sun')
            .assert.containsText('@sun', 'Sun')

            .assert.visible('@mon')
            .assert.containsText('@mon', 'Mon')

            .assert.visible('@tue')
            .assert.containsText('@tue', 'Tue')
            
            .assert.visible('@wed')
            .assert.containsText('@wed', 'Wed')

            .assert.visible('@thu')
            .assert.containsText('@thu', 'Thu')

            .assert.visible('@fri')
            .assert.containsText('@fri', 'Fri')

            .assert.visible('@sat')
            .assert.containsText('@sat', 'Sat')

        client.frame(null)

        client.end();
    }
};
