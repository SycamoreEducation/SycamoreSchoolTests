module.exports = {
    tags: ['administrativeTests', 'backOfficeMgrTests', 'backOfficeFamiliesTests',
        'backOfficeFamiliesNewFamilyTest'],

    'Back Office Families New Family Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@backOfficeMgr')
            .click('@backOfficeMgr')
            .assert.visible('@backOfficeMgrFamilies')
            .click('@backOfficeMgrFamilies')
            .assert.visible('@backOfficeMgrFamiliesNewFamily')
            .click('@backOfficeMgrFamiliesNewFamily')
        client.frame(null);

        client.frame(2);
        client.page.administrative.backOfficeMgr.families.newFamily.newTab()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Back Office/Families/ New')

            .activeTab('New')

            .assert.visible('@currentTab')
            .assert.containsText('@currentTab', 'Current')

            .assert.visible('@allTab')
            .assert.containsText('@allTab', 'All')

            .assert.visible('@submitBtn')
            .assert.attributeEquals('@submitBtn', 'value', 'Submit')
            .assert.attributeEquals('@submitBtn', 'onclick', 'validateForm()')

            .assert.visible('@currentCheckbox')

            .assert.visible('@currentLabel')
            .assert.containsText('@currentLabel', 'Current for')

            .assert.visible('@parentsLabel')
            .assert.containsText('@parentsLabel', 'Parents')

            .assert.visible('@title1Label')
            .assert.containsText('@title1Label', 'Title')

            .assert.visible('@title1Select')
            
            .assert.visible('@firstName1Label')
            .assert.containsText('@firstName1Label', 'First Name')

            .assert.visible('@firstName1Input')
            .assert.attributeEquals('@firstName1Input', 'type', 'text')

            .assert.visible('@lastName1Label')
            .assert.containsText('@lastName1Label', 'Last Name')

            .assert.visible('@lastName1Input')
            .assert.attributeEquals('@lastName1Input', 'type', 'text')

            .assert.visible('@address1Label')
            .assert.containsText('@address1Label', 'Address')

            .assert.visible('@address1Input')
            .assert.attributeEquals('@address1Input', 'type', 'text')

            .assert.visible('@addressSecondary1Label')
            .assert.containsText('@addressSecondary1Label', 'Address 2')

            .assert.visible('@addressSecondary1Input')
            .assert.attributeEquals('@addressSecondary1Input', 'type', 'text')

            .assert.visible('@city1Label')
            .assert.containsText('@city1Label', 'City')

            .assert.visible('@city1Input')
            .assert.attributeEquals('@city1Input', 'type', 'text')

            .assert.visible('@state1Label')
            .assert.containsText('@state1Label', 'State/Region')

            .assert.visible('@state1Input')
            .assert.attributeEquals('@state1Input', 'type', 'text')

            .assert.visible('@zip1Label')
            .assert.containsText('@zip1Label', 'Zip/Postal Code')

            .assert.visible('@zip1Input')
            .assert.attributeEquals('@zip1Input', 'type', 'text')

            .assert.visible('@country1Label')
            .assert.containsText('@country1Label', 'Country')

            .assert.visible('@country1Input')
            .assert.attributeEquals('@country1Input', 'type', 'text')

            .assert.visible('@home1Label')
            .assert.containsText('@home1Label', 'Home Phone')

            .assert.visible('@home1Input')
            .assert.attributeEquals('@home1Input', 'type', 'text')

            .assert.visible('@work1Label')
            .assert.containsText('@work1Label', 'Work Phone')

            .assert.visible('@work1Input')
            .assert.attributeEquals('@work1Input', 'type', 'text')

            .assert.visible('@cell1Label')
            .assert.containsText('@cell1Label', 'Cell Phone')

            .assert.visible('@cell1Input')
            .assert.attributeEquals('@cell1Input', 'type', 'text')

            .assert.visible('@email1Label')
            .assert.containsText('@email1Label', 'Email')

            .assert.visible('@email1Input')
            .assert.attributeEquals('@email1Input', 'type', 'text')

            .assert.visible('@relationship1Label')
            .assert.containsText('@relationship1Label', 'Relationship')

            .assert.visible('@relationship1Select')

            .assert.visible('@company1Label')
            .assert.containsText('@company1Label', 'Company')

            .assert.visible('@company1Input')
            .assert.attributeEquals('@company1Input', 'type', 'text')

            .assert.visible('@companyTitle1Label')
            .assert.containsText('@companyTitle1Label', 'Title')
            
            .assert.visible('@companyTitle1Input')
            .assert.attributeEquals('@companyTitle1Input', 'type', 'text')

            .assert.visible('@title2Label')
            .assert.containsText('@title2Label', 'Title')

            .assert.visible('@title2Select')
            
            .assert.visible('@firstName2Label')
            .assert.containsText('@firstName2Label', 'First Name')

            .assert.visible('@firstName2Input')
            .assert.attributeEquals('@firstName2Input', 'type', 'text')

            .assert.visible('@lastName2Label')
            .assert.containsText('@lastName2Label', 'Last Name')

            .assert.visible('@lastName2Input')
            .assert.attributeEquals('@lastName2Input', 'type', 'text')

            .assert.visible('@address2Label')
            .assert.containsText('@address2Label', 'Address')

            .assert.visible('@address2Input')
            .assert.attributeEquals('@address2Input', 'type', 'text')

            .assert.visible('@addressSecondary2Label')
            .assert.containsText('@addressSecondary2Label', 'Address 2')

            .assert.visible('@addressSecondary2Input')
            .assert.attributeEquals('@addressSecondary2Input', 'type', 'text')

            .assert.visible('@city2Label')
            .assert.containsText('@city2Label', 'City')

            .assert.visible('@city2Input')
            .assert.attributeEquals('@city2Input', 'type', 'text')

            .assert.visible('@state2Label')
            .assert.containsText('@state2Label', 'State/Region')

            .assert.visible('@state2Input')
            .assert.attributeEquals('@state2Input', 'type', 'text')

            .assert.visible('@zip2Label')
            .assert.containsText('@zip2Label', 'Zip/Postal Code')

            .assert.visible('@zip2Input')
            .assert.attributeEquals('@zip2Input', 'type', 'text')

            .assert.visible('@country2Label')
            .assert.containsText('@country2Label', 'Country')

            .assert.visible('@country2Input')
            .assert.attributeEquals('@country2Input', 'type', 'text')

            .assert.visible('@home2Label')
            .assert.containsText('@home2Label', 'Home Phone')

            .assert.visible('@home2Input')
            .assert.attributeEquals('@home2Input', 'type', 'text')

            .assert.visible('@work2Label')
            .assert.containsText('@work2Label', 'Work Phone')

            .assert.visible('@work2Input')
            .assert.attributeEquals('@work2Input', 'type', 'text')

            .assert.visible('@cell2Label')
            .assert.containsText('@cell2Label', 'Cell Phone')

            .assert.visible('@cell2Input')
            .assert.attributeEquals('@cell2Input', 'type', 'text')

            .assert.visible('@email2Label')
            .assert.containsText('@email2Label', 'Email')

            .assert.visible('@email2Input')
            .assert.attributeEquals('@email2Input', 'type', 'text')

            .assert.visible('@relationship2Label')
            .assert.containsText('@relationship2Label', 'Relationship')

            .assert.visible('@relationship2Select')

            .assert.visible('@company2Label')
            .assert.containsText('@company2Label', 'Company')

            .assert.visible('@company2Input')
            .assert.attributeEquals('@company2Input', 'type', 'text')

            .assert.visible('@companyTitle2Label')
            .assert.containsText('@companyTitle2Label', 'Title')
            
            .assert.visible('@companyTitle2Input')
            .assert.attributeEquals('@companyTitle2Input', 'type', 'text')

            .assert.visible('@studentsLabel')
            .assert.containsText('@studentsLabel', 'Students')

            .assert.visible('@firstNameHeader')
            .assert.containsText('@firstNameHeader', 'First')

            .assert.visible('@middleNameHeader')
            .assert.containsText('@middleNameHeader', 'Middle')

            .assert.visible('@lastNameHeader')
            .assert.containsText('@lastNameHeader', 'Last')

            .assert.visible('@dobHeader')
            .assert.containsText('@dobHeader', 'DOB')

            .assert.visible('@gradeHeader')
            .assert.containsText('@gradeHeader', 'Grade')

            .assert.visible('@genderHeader')
            .assert.containsText('@genderHeader', 'Gender')

            .assert.visible('@firstNameInput')
            .assert.attributeEquals('@firstNameInput', 'type', 'text')

            .assert.visible('@middleNameInput')
            .assert.attributeEquals('@middleNameInput', 'type', 'text')

            .assert.visible('@lastNameInput')
            .assert.attributeEquals('@lastNameInput', 'type', 'text')

            .assert.visible('@monthSelect')

            .assert.visible('@daySelect')

            .assert.visible('@yearSelect')

            .assert.visible('@gradeSelect')
            .assert.containsText('@gradeSelect', 'Select Grade')

            .assert.visible('@genderSelect')

            .assert.visible('@ethnicitySelect')
            .assert.containsText('@ethnicitySelect', 'Choose Ethnicity')

            .assert.visible('@chooseRaceBtn')
            .assert.attributeEquals('@chooseRaceBtn', 'value', ' Choose Race ')
            .assert.attributeEquals('@chooseRaceBtn', 'onclick', 'dorace(0)')

        client.frame(null)

        client.end();
    }
};
