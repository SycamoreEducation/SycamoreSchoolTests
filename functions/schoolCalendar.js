var moment = require('moment')
exports.command = function(month) {
    this.page.calendar()
        .assert.visible('@calendarBody')

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

        .assert.visible('@birthdayBtn')
        .assert.attributeEquals('@birthdayBtn', 'onclick', `birthdays(${month}); return false`)

        .assert.visible('@listingBtn')
        .assert.attributeEquals('@listingBtn', 'onclick', `listing(${month}, ${moment().format('YYYY')},0);return false;`) 
    return this;
};
