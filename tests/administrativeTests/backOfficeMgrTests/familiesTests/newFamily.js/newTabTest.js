module.exports = {
    tags: ['administrativeTests', 'backOfficeMgrTests', 
        'backOfficeFamiliesTests', 'backOfficeFamiliesNewFamilyTest'],

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
            .click('@backOfficeMgrFamiliesNewFamily');
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

            .assert.visible('@titleLabel')
            .assert.containsText('@titleLabel', 'Title')

            .assert.visible('@titleSelect')
            
            .assert.visible('@firstNameLabel')
            .assert.containsText('@firstNameLabel', 'First Name')

            .assert.visible('@firstNameInput')
            .assert.attributeEquals('@firstNameInput', 'type', 'text')

            .assert.visible('@lastNameLabel')
            .assert.containsText('@lastNameLabel', 'Last Name')

            .assert.visible('@lastNameInput')
            .assert.attributeEquals('@lastNameInput', 'type', 'text')

            .assert.visible('@addressLabel')
            .assert.containsText('@addressLabel', 'Address')

            .assert.visible('@addressInput')
            .assert.attributeEquals('@addressInput', 'type', 'text')

            .assert.visible('@addressSecondaryLabel')
            .assert.containsText('@addressSecondaryLabel', 'Address 2')

            .assert.visible('@addressSecondaryInput')
            .assert.attributeEquals('@addressSecondaryInput', 'type', 'text')

            .assert.visible('@cityLabel')
            .assert.containsText('@cityLabel', 'City')

            .assert.visible('@cityInput')
            .assert.attributeEquals('@cityInput', 'type', 'text')

            .assert.visible('@stateLabel')
            .assert.containsText('@stateLabel', 'State/Region')

            .assert.visible('@stateInput')
            .assert.attributeEquals('@stateInput', 'type', 'text')

            .assert.visible('@zipLabel')
            .assert.containsText('@zipLabel', 'Zip/Postal Code')

            .assert.visible('@zipInput')
            .assert.attributeEquals('@zipInput', 'type', 'text')

            .assert.visible('@countryLabel')
            .assert.containsText('@countryLabel', 'Country')

            .assert.visible('@countryInput')
            .assert.attributeEquals('@countryInput', 'type', 'text')

            .assert.visible('@homeLabel')
            .assert.containsText('@homeLabel', 'Home Phone')

            .assert.visible('@homeInput')
            .assert.attributeEquals('@homeInput', 'type', 'text')

            .assert.visible('@workLabel')
            .assert.containsText('@workLabel', 'Work Phone')

            .assert.visible('@workInput')
            .assert.attributeEquals('@workInput', 'type', 'text')

            .assert.visible('@cellLabel')
            .assert.containsText('@cellLabel', 'Cell Phone')

            .assert.visible('@cellInput')
            .assert.attributeEquals('@cellInput', 'type', 'text')

            .assert.visible('@emailLabel')
            .assert.containsText('@emailLabel', 'Email')

            .assert.visible('@emailInput')
            .assert.attributeEquals('@emailInput', 'type', 'text')

            .assert.visible('@relationshipLabel')
            .assert.containsText('@relationshipLabel', 'Relationship')

            .assert.visible('@relationshipSelect')

            .assert.visible('@companyLabel')
            .assert.containsText('@companyLabel', 'Company')

            .assert.visible('@companyInput')
            .assert.attributeEquals('@companyInput', 'type', 'text')

            .assert.visible('@companyTitleLabel')
            .assert.containsText('@companyTitleLabel', 'Title')
            
            .assert.visible('@companyTitleInput')
            .assert.attributeEquals('@companyTitleInput', 'type', 'text')

            .assert.visible('@titleLabel2')
            .assert.containsText('@titleLabel2', 'Title')

            .assert.visible('@titleSelect2')
            
            .assert.visible('@firstNameLabel2')
            .assert.containsText('@firstNameLabel2', 'First Name')

            .assert.visible('@firstNameInput2')
            .assert.attributeEquals('@firstNameInput2', 'type', 'text')

            .assert.visible('@lastNameLabel2')
            .assert.containsText('@lastNameLabel2', 'Last Name')

            .assert.visible('@lastNameInput2')
            .assert.attributeEquals('@lastNameInput2', 'type', 'text')

            .assert.visible('@addressLabel2')
            .assert.containsText('@addressLabel2', 'Address')

            .assert.visible('@addressInput2')
            .assert.attributeEquals('@addressInput2', 'type', 'text')

            .assert.visible('@addressSecondaryLabel2')
            .assert.containsText('@addressSecondaryLabel2', 'Address ')

            .assert.visible('@addressSecondaryInput2')
            .assert.attributeEquals('@addressSecondaryInput2', 'type', 'text')

            .assert.visible('@cityLabel2')
            .assert.containsText('@cityLabel2', 'City')

            .assert.visible('@cityInput2')
            .assert.attributeEquals('@cityInput2', 'type', 'text')

            .assert.visible('@stateLabel2')
            .assert.containsText('@stateLabel2', 'State/Region')

            .assert.visible('@stateInput2')
            .assert.attributeEquals('@stateInput2', 'type', 'text')

            .assert.visible('@zipLabel2')
            .assert.containsText('@zipLabel2', 'Zip/Postal Code')

            .assert.visible('@zipInput2')
            .assert.attributeEquals('@zipInput2', 'type', 'text')

            .assert.visible('@countryLabel2')
            .assert.containsText('@countryLabel2', 'Country')

            .assert.visible('@countryInput2')
            .assert.attributeEquals('@countryInput2', 'type', 'text')

            .assert.visible('@homeLabel2')
            .assert.containsText('@homeLabel2', 'Home Phone')

            .assert.visible('@homeInput2')
            .assert.attributeEquals('@homeInput2', 'type', 'text')

            .assert.visible('@workLabel2')
            .assert.containsText('@workLabel2', 'Work Phone')

            .assert.visible('@workInput2')
            .assert.attributeEquals('@workInput2', 'type', 'text')

            .assert.visible('@cellLabel2')
            .assert.containsText('@cellLabel2', 'Cell Phone')

            .assert.visible('@cellInput2')
            .assert.attributeEquals('@cellInput2', 'type', 'text')

            .assert.visible('@emailLabel2')
            .assert.containsText('@emailLabel2', 'Email')

            .assert.visible('@emailInput2')
            .assert.attributeEquals('@emailInput2', 'type', 'text')

            .assert.visible('@relationshipLabel2')
            .assert.containsText('@relationshipLabel2', 'Relationship')

            .assert.visible('@relationshipSelect2')

            .assert.visible('@companyLabel2')
            .assert.containsText('@companyLabel2', 'Company')

            .assert.visible('@companyInput2')
            .assert.attributeEquals('@companyInput2', 'type', 'text')

            .assert.visible('@companyTitleLabel2')
            .assert.containsText('@companyTitleLabel2', 'Title')
            
            .assert.visible('@companyTitleInput2')
            .assert.attributeEquals('@companyTitleInput2', 'type', 'text')

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
            .assert.attributeEquals('@chooseRaceBtn', 'onclick', 'dorace(0)');

        client.frame(null);

        client.end();
    }
};
