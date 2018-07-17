module.exports = {
    tags: ['administrativeTests', 'attendanceTests', 
        'attendanceScaleTest'],

    'Attendance Scale Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@administrative')
            .click('@administrative')
            .assert.visible('@attendance')
            .click('@attendance')
            .assert.visible('@attendanceScale')
            .click('@attendanceScale');
        client.frame(null);

        client.frame(2);
        client.page.administrative.attendance.attendanceScale()
            .waitForElementVisible('@breadcrumb', 5000)
            .assert.visible('@breadcrumb')
            .assert.containsText('@breadcrumb', 
                'Administrative/Attendance/ Attendance Scale')

            .activeTab('Attendance')

            .assert.visible('@numericHeader')
            .assert.containsText('@numericHeader', '#')

            .assert.visible('@upperHeader')
            .assert.containsText('@upperHeader', 'Upper')

            .assert.visible('@lowerHeader')
            .assert.containsText('@lowerHeader', 'Lower')

            .assert.visible('@valueHeader')
            .assert.containsText('@valueHeader', 'Value')

            .assert.visible('@labelHeader')
            .assert.containsText('@labelHeader', 'Label')

            .assert.visible('@scale1Numeric')
            .assert.containsText('@scale1Numeric', '1')

            .assert.visible('@scale1Upper')
            .assert.containsText('@scale1Upper', '100.00')

            .assert.visible('@scale1Lower')
            .assert.containsText('@scale1Lower', '80.00')

            .assert.visible('@scale1Value')
            .assert.containsText('@scale1Value', '1')

            .assert.visible('@scale1Label')
            .assert.containsText('@scale1Label', 'Full Day')

            .assert.visible('@scale1EditBtn')
            .assert.containsText('@scale1EditBtn', 'Edit')
            .assert.attributeEquals('@scale1EditBtn', 'onclick', 'doEdit(1)')

            .assert.visible('@scale1DeleteBtn')
            .assert.attributeEquals('@scale1DeleteBtn', 'onclick', 
                'doDelete(1)')

            .assert.visible('@scale2Numeric')
            .assert.containsText('@scale2Numeric', '2')

            .assert.visible('@scale2Upper')
            .assert.containsText('@scale2Upper', '79.99')

            .assert.visible('@scale2Lower')
            .assert.containsText('@scale2Lower', '60.00')

            .assert.visible('@scale2Value')
            .assert.containsText('@scale2Value', '0.75')

            .assert.visible('@scale2Label')
            .assert.containsText('@scale2Label', '3/4 Day')

            .assert.visible('@scale2EditBtn')
            .assert.containsText('@scale2EditBtn', 'Edit')
            .assert.attributeEquals('@scale2EditBtn', 'onclick', 'doEdit(2)')

            .assert.visible('@scale2DeleteBtn')
            .assert.attributeEquals('@scale2DeleteBtn', 'onclick', 
                'doDelete(2)')

            .assert.visible('@scale3Numeric')
            .assert.containsText('@scale3Numeric', '3')

            .assert.visible('@scale3Upper')
            .assert.containsText('@scale3Upper', '59.99')

            .assert.visible('@scale3Lower')
            .assert.containsText('@scale3Lower', '40.00')

            .assert.visible('@scale3Value')
            .assert.containsText('@scale3Value', '0.5')

            .assert.visible('@scale3Label')
            .assert.containsText('@scale3Label', '1/2 Day')

            .assert.visible('@scale3EditBtn')
            .assert.containsText('@scale3EditBtn', 'Edit')
            .assert.attributeEquals('@scale3EditBtn', 'onclick', 'doEdit(3)')

            .assert.visible('@scale3DeleteBtn')
            .assert.attributeEquals('@scale3DeleteBtn', 'onclick', 
                'doDelete(3)')

            .assert.visible('@scale4Numeric')
            .assert.containsText('@scale4Numeric', '4')

            .assert.visible('@scale4Upper')
            .assert.containsText('@scale4Upper', '39.99')

            .assert.visible('@scale4Lower')
            .assert.containsText('@scale4Lower', '20.00')

            .assert.visible('@scale4Value')
            .assert.containsText('@scale4Value', '0.25')

            .assert.visible('@scale4Label')
            .assert.containsText('@scale4Label', '1/4 Day')

            .assert.visible('@scale4EditBtn')
            .assert.containsText('@scale4EditBtn', 'Edit')
            .assert.attributeEquals('@scale4EditBtn', 'onclick', 'doEdit(4)')

            .assert.visible('@scale4DeleteBtn')
            .assert.attributeEquals('@scale4DeleteBtn', 'onclick', 
                'doDelete(4)')

            .assert.visible('@scale5Numeric')
            .assert.containsText('@scale5Numeric', '5')

            .assert.visible('@scale5Upper')
            .assert.containsText('@scale5Upper', '19.99')

            .assert.visible('@scale5Lower')
            .assert.containsText('@scale5Lower', '0')

            .assert.visible('@scale5Value')
            .assert.containsText('@scale5Value', '0')

            .assert.visible('@scale5Label')
            .assert.containsText('@scale5Label', 'Absent')

            .assert.visible('@scale5EditBtn')
            .assert.containsText('@scale5EditBtn', 'Edit')
            .assert.attributeEquals('@scale5EditBtn', 'onclick', 'doEdit(5)')

            .assert.visible('@scale5DeleteBtn')
            .assert.attributeEquals('@scale5DeleteBtn', 'onclick', 
                'doDelete(5)')

            .assert.visible('@newScaleNumeric')

            .assert.visible('@newScaleUpper')

            .assert.visible('@newScaleLower')

            .assert.visible('@newScaleValue')

            .assert.visible('@newScaleLabel')

            .assert.visible('@newScaleAddBtn')
            .assert.attributeEquals('@newScaleAddBtn', 'value', 'Add');
            
        client.frame(null);

        client.end();
    }
};
