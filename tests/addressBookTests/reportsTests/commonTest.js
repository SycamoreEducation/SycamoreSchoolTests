module.exports = {
    tags: ['addressBookTests', 'addressBookReportsTests', 
        'reportsCommonTabTest'],

    'Address Book Reports Common Tab Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@addressBook')
            .click('@addressBook')
            .assert.visible('@addressBookReports')
            .click('@addressBookReports')
        client.frame(null);

        client.frame(2);
        client.page.addressBook.reports.reports()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 'Address Book/ Reports')
            
            .assert.visible('@commonTab')
            .assert.containsText('@commonTab', 'Common')

            .assert.visible('@customTab')
            .assert.containsText('@customTab', 'Custom')

            .assert.visible('@nameHeader')
            .assert.containsText('@nameHeader', 'Name')

            .assert.visible('@descriptionHeader')
            .assert.containsText('@descriptionHeader', 'Description')

            .assert.visible('@companyLabels')
            .assert.containsText('@companyLabels', 'Company Labels')
            .assert.attributeEquals('@companyLabels', 'href', page.url() + 
                '/Reports/0/contactcompanylabels.php?rid=41')

            .assert.visible('@companyLabelsDescription')
            .assert.containsText('@companyLabelsDescription', 
                'Generates Company Address Labels in Avery label formats')

            .assert.visible('@contactAdditionalFieldEntry')
            .assert.containsText('@contactAdditionalFieldEntry', 
                'Contact Additional Field Entry')
            .assert.attributeEquals('@contactAdditionalFieldEntry', 'href',
                page.url() + '/Reports/0/contactstatisticentry.php?rid=369')

            .assert.visible('@contactAdditionalFieldEntryDescription')
            .assert.containsText('@contactAdditionalFieldEntryDescription',
                'Edit Contact Additional Field data in batch')

            .assert.visible('@contactCategoryCounter')
            .assert.containsText('@contactCategoryCounter', 
                'Contact Category Counter')
            .assert.attributeEquals('@contactCategoryCounter', 'href', 
                page.url() + '/Reports/0/contactcategorycounter.php?rid=55')
            
            .assert.visible('@contactCategoryCounterDescription')
            .assert.containsText('@contactCategoryCounterDescription', 
                'Counts Categories of Contacts')

            .assert.visible('@contactEnvelopes')
            .assert.containsText('@contactEnvelopes', 'Contact Envelopes')
            .assert.attributeEquals('@contactEnvelopes', 'href', 
                page.url() + '/Reports/0/contactenvelopes.php?rid=59')

            .assert.visible('@contactEnvelopesDescription')
            .assert.containsText('@contactEnvelopesDescription', 
                'Contact Address Book Envelopes (PDF)')

            .assert.visible('@contactLabels')
            .assert.containsText('@contactLabels', 'Contact Labels')
            .assert.attributeEquals('@contactLabels', 'href', 
                page.url() + '/Reports/0/contactlabels.php?rid=40')

            .assert.visible('@contactLabelsDescription')
            .assert.containsText('@contactLabelsDescription', 
                'Contact Address Book Labels')

            .assert.visible('@duplicateRecords')
            .assert.containsText('@duplicateRecords', 'Duplicate Records')
            .assert.attributeEquals('@duplicateRecords', 'href', 
                page.url() + '/Reports/0/contactduplicate.php?rid=37')

            .assert.visible('@duplicateRecordsDescription')
            .assert.containsText('@duplicateRecordsDescription', 
                'Duplicate Contact Records in Address Book')

            .assert.visible('@dynamicCompany')
            .assert.containsText('@dynamicCompany', 'Dynamic Company Report')
            .assert.attributeEquals('@dynamicCompany', 'href', 
                page.url() + '/Reports/0/contactcompanyreport.php?rid=110')

            .assert.visible('@dynamicCompanyDescription')
            .assert.containsText('@dynamicCompanyDescription', 
                'Dynamic Company Report Generator')

            .assert.visible('@dynamicContact')
            .assert.containsText('@dynamicContact', 'Dynamic Contact Report')
            .assert.attributeEquals('@dynamicContact', 'href', 
                page.url() + '/Reports/0/contactreport.php?rid=60')

            .assert.visible('@dynamicContactDescription')
            .assert.containsText('@dynamicContactDescription', 
                'Dynamic Contact Report Generator')

        client.frame(null)

        client.end();
    }
};
