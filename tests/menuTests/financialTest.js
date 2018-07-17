module.exports = {
    tags: ['financialTest', 'menuTests'],

    'Financial Menu Test': (client) => {

        var page = client.page.login();

        page.navigate()
            .schoolLogin();

        client.frame(1);
        client.page.menu()
            .assert.visible('@financial')
            .assert.containsText('@financial', '\273 Financial')
            .assert.attributeEquals('@financial', 'href', page.url() + 
                '/schoolmenu.php#')

            .assert.hidden('@accountingMgr')

            .assert.hidden('@accountingMgrSchool')
            .assert.hidden('@accountingMgrSchoolChartOfAccounts')
            .assert.hidden('@accountingMgrSchoolActivityLogs')

            .assert.hidden('@accountingMgrFamilies')
            .assert.hidden('@accountingMgrFamiliesAccounts')
            .assert.hidden('@accountingMgrFamiliesBillingSetup')
            .assert.hidden('@accountingMgrFamiliesMonthlyCharges')
            .assert.hidden('@accountingMgrFamiliesReceivePayment')
            .assert.hidden('@accountingMgrFamiliesNotification')
            .assert.hidden('@accountingMgrFamiliesInvoices')

            .assert.hidden('@accountingMgrBanking')
            .assert.hidden('@accountingMgrBankingDeposits')
            .assert.hidden('@accountingMgrBankingRegisters')
            .assert.hidden('@accountingMgrBankingJournal')

            .assert.hidden('@accountingMgrEmployees')
            .assert.hidden('@accountingMgrEmployeesPayroll')
            .assert.hidden('@accountingMgrEmployeesPayrollByEmployee')
            .assert.hidden('@accountingMgrEmployeesPayrollByMonth')
            .assert.hidden('@accountingMgrEmployeesExpenses')
            .assert.hidden('@accountingMgrEmployeesExpensesSubmitted')
            .assert.hidden('@accountingMgrEmployeesExpensesApproved')
            .assert.hidden('@accountingMgrEmployeesExpensesPaid')

            .assert.hidden('@accountingMgrServices')
            .assert.hidden('@accountingMgrServicesDwolla')
            .assert.hidden('@accountingMgrServicesDwollaTransactions')
            .assert.hidden('@accountingMgrServicesDwollaConfiguration')
            .assert.hidden('@accountingMgrServicesPayJunction')
            .assert.hidden('@accountingMgrServicesPayJunctionInvoices')
            .assert.hidden('@accountingMgrServicesPayJunctionPayments')
            .assert.hidden('@accountingMgrServicesPayJunctionConvenienceFees')
            .assert.hidden('@accountingMgrServicesPayJunctionConfiguration')
            .assert.hidden('@accountingMgrServicesSmartTuition')
            .assert.hidden('@accountingMgrServicesSmartTuitionConfiguration')
            .assert.hidden('@accountingMgrServicesPayPal')
            .assert.hidden('@accountingMgrServicesPayPalOnlinePayments')
            .assert.hidden('@accountingMgrServicesPayPalInvoices')
            .assert.hidden('@accountingMgrServicesPayPalConfiguration')
            .assert.hidden('@accountingMgrServicesEFunds')
            .assert.hidden('@accountingMgrServicesEFundsPayments')
            .assert.hidden('@accountingMgrServicesEFundsTransactions')
            .assert.hidden('@accountingMgrServicesEFundsRemittance')
            .assert.hidden('@accountingMgrServicesEFundsConfiguration')

            .assert.hidden('@accountingMgrConfiguration')
            .assert.hidden('@accountingMgrReports')

            .assert.hidden('@cafeteriaMgr')
            .assert.hidden('@cafeteriaMgrFood')
            .assert.hidden('@cafeteriaMgrMenu')
            .assert.hidden('@cafeteriaMgrCycles')
            .assert.hidden('@cafeteriaMgrOrders')
            .assert.hidden('@cafeteriaMgrPricePlans')
            .assert.hidden('@cafeteriaMgrNotifications')
            .assert.hidden('@cafeteriaMgrAccounts')
            .assert.hidden('@cafeteriaMgrAccountsFamily')
            .assert.hidden('@cafeteriaMgrAccountsEmployee')
            .assert.hidden('@cafeteriaMgrReports')

            .assert.hidden('@childcareMgr')
            .assert.hidden('@childcareMgrAccounts')
            .assert.hidden('@childcareMgrDaily')
            .assert.hidden('@childcareMgrDailyCheckInOut')
            .assert.hidden('@childcareMgrDailyDailyCharges')
            .assert.hidden('@childcareMgrDailyPricePlans')
            .assert.hidden('@childcareMgrWeekly')
            .assert.hidden('@childcareMgrWeeklyCharges')
            .assert.hidden('@childcareMgrWeeklyBillingSetup')
            .assert.hidden('@childcareMgrWeeklyPricePlans')
            .assert.hidden('@childcareMgrMonthly')
            .assert.hidden('@childcareMgrMonthlyCharges')
            .assert.hidden('@childcareMgrMonthlyBillingSetup')
            .assert.hidden('@childcareMgrMonthlyPricePlans')
            .assert.hidden('@childcareMgrNotifications')
            .assert.hidden('@childcareMgrReports')

            .assert.hidden('@donationMgr')
            .assert.hidden('@donationMgrDonors')
            .assert.hidden('@donationMgrDonorsNewDonors')
            .assert.hidden('@donationMgrDonorsByContact')
            .assert.hidden('@donationMgrDonorsPledges')
            .assert.hidden('@donationMgrDonations')
            .assert.hidden('@donationMgrDonationsReceive')
            .assert.hidden('@donationMgrDonationsProcess')
            .assert.hidden('@donationMgrCampaigns')
            .assert.hidden('@donationMgrReports')

            .click('@financial')
            .assert.visible('@accountingMgr')
            .assert.containsText('@accountingMgr', '\273 Accounting Mgr')
            .assert.attributeEquals('@accountingMgr', 'href', page.url() + 
                '/schoolmenu.php#')
            
            .assert.visible('@cafeteriaMgr')
            .assert.containsText('@cafeteriaMgr', '\273 Cafeteria Mgr')
            .assert.attributeEquals('@cafeteriaMgr', 'href', page.url() + 
                '/schoolmenu.php#')
            
            .assert.visible('@childcareMgr')
            .assert.containsText('@childcareMgr', '\273 Childcare Mgr')
            .assert.attributeEquals('@childcareMgr', 'href', page.url() + 
                '/schoolmenu.php#')
            
            .assert.visible('@donationMgr')
            .assert.containsText('@donationMgr', '\273 Donation Mgr')
            .assert.attributeEquals('@donationMgr', 'href', page.url() + 
                '/schoolmenu.php#')

            .click('@accountingMgr')
            .assert.visible('@accountingMgrSchool')
            .assert.containsText('@accountingMgrSchool', '\273 School')
            .assert.attributeEquals('@accountingMgrSchool', 'href', page.url() +
                '/schoolmenu.php#')
            
            .assert.visible('@accountingMgrFamilies')
            .assert.containsText('@accountingMgrFamilies', '\273 Families')
            .assert.attributeEquals('@accountingMgrFamilies', 'href', page.url()
                + '/schoolmenu.php#')
            
            .assert.visible('@accountingMgrBanking')
            .assert.containsText('@accountingMgrBanking', '\273 Banking')
            .assert.attributeEquals('@accountingMgrBanking', 'href', page.url() 
                + '/schoolmenu.php#')
            
            .assert.visible('@accountingMgrEmployees')
            .assert.containsText('@accountingMgrEmployees', '\273 Employees')
            .assert.attributeEquals('@accountingMgrEmployees', 'href', 
                page.url() + '/schoolmenu.php#')
            
            .assert.visible('@accountingMgrServices')
            .assert.containsText('@accountingMgrServices', '\273 Services')
            .assert.attributeEquals('@accountingMgrServices', 'href', page.url()
                + '/schoolmenu.php#')
            
            .assert.visible('@accountingMgrConfiguration')
            .assert.containsText('@accountingMgrConfiguration', 'Configuration')
            .assert.attributeEquals('@accountingMgrConfiguration', 'href', 
                page.url() + '/superstatementcfg.php')
            
            .assert.visible('@accountingMgrReports')
            .assert.containsText('@accountingMgrReports', 'Reports')
            .assert.attributeEquals('@accountingMgrReports', 'href', 
                page.url() + '/reports.php?type=3')

            .click('@accountingMgrSchool')
            .assert.visible('@accountingMgrSchoolChartOfAccounts')
            .assert.containsText('@accountingMgrSchoolChartOfAccounts', 
                'Chart of Accounts')
            .assert.attributeEquals('@accountingMgrSchoolChartOfAccounts', 
                'href', page.url() + '/schoolaccounts.php')
            
            .assert.visible('@accountingMgrSchoolActivityLogs')
            .assert.containsText('@accountingMgrSchoolActivityLogs', 
                'Activity Logs')
            .assert.attributeEquals('@accountingMgrSchoolActivityLogs', 'href', 
                page.url() + '/acctactivity.php')

            .click('@accountingMgrSchool')
            .assert.hidden('@accountingMgrSchoolChartOfAccounts')
            .assert.hidden('@accountingMgrSchoolActivityLogs')

            .click('@accountingMgrFamilies')
            .assert.visible('@accountingMgrFamiliesCurrent')
            .assert.containsText('@accountingMgrFamiliesCurrent', 'Current')
            .assert.attributeEquals('@accountingMgrFamiliesCurrent', 'href', 
                page.url() + '/familyaccounting.php')
            
            .assert.visible('@accountingMgrFamiliesAccounts')
            .assert.containsText('@accountingMgrFamiliesAccounts', 'Accounts')
            .assert.attributeEquals('@accountingMgrFamiliesAccounts', 'href', 
                page.url() + '/familyaccountmgr.php')
            
            .assert.visible('@accountingMgrFamiliesBillingSetup')
            .assert.containsText('@accountingMgrFamiliesBillingSetup', 
                'Billing Setup')
            .assert.attributeEquals('@accountingMgrFamiliesBillingSetup', 
                'href', page.url() + '/familymonthlybilling.php')
            
            .assert.visible('@accountingMgrFamiliesMonthlyCharges')
            .assert.containsText('@accountingMgrFamiliesMonthlyCharges', 
                'Monthly Charges')
            .assert.attributeEquals('@accountingMgrFamiliesMonthlyCharges', 
                'href', page.url() + '/familymonthlycharges.php')
            
            .assert.visible('@accountingMgrFamiliesReceivePayment')
            .assert.containsText('@accountingMgrFamiliesReceivePayment', 
                'Receive Payment')
            .assert.attributeEquals('@accountingMgrFamiliesReceivePayment', 
                'href', page.url() + '/familypayment.php?task=payment')
            
            .assert.visible('@accountingMgrFamiliesNotification')
            .assert.containsText('@accountingMgrFamiliesNotification', 
                'Notification')
            .assert.attributeEquals('@accountingMgrFamiliesNotification', 
                'href', page.url() + '/accountnotification.php')
            
            .assert.visible('@accountingMgrFamiliesInvoices')
            .assert.containsText('@accountingMgrFamiliesInvoices', 'Invoices')
            .assert.attributeEquals('@accountingMgrFamiliesInvoices', 'href', 
                page.url() + '/acctinv.php')

            .click('@accountingMgrFamilies')
            .assert.hidden('@accountingMgrFamiliesCurrent')
            .assert.hidden('@accountingMgrFamiliesAccounts')
            .assert.hidden('@accountingMgrFamiliesBillingSetup')
            .assert.hidden('@accountingMgrFamiliesMonthlyCharges')
            .assert.hidden('@accountingMgrFamiliesReceivePayment')
            .assert.hidden('@accountingMgrFamiliesNotification')
            .assert.hidden('@accountingMgrFamiliesInvoices')

            .click('@accountingMgrBanking')
            .assert.visible('@accountingMgrBankingDeposits')
            .assert.containsText('@accountingMgrBankingDeposits', 'Deposits')
            .assert.attributeEquals('@accountingMgrBankingDeposits', 'href', 
                page.url() + '/schooldeposits.php')
            
            .assert.visible('@accountingMgrBankingRegisters')
            .assert.containsText('@accountingMgrBankingRegisters', 'Registers')
            .assert.attributeEquals('@accountingMgrBankingRegisters', 'href', 
                page.url() + '/schoolregister.php')
            
            .assert.visible('@accountingMgrBankingJournal')
            .assert.containsText('@accountingMgrBankingJournal', 'Journal')
            .assert.attributeEquals('@accountingMgrBankingJournal', 'href', 
                page.url() + '/acctjournals.php')

            .click('@accountingMgrBanking')
            .assert.hidden('@accountingMgrBankingDeposits')
            .assert.hidden('@accountingMgrBankingRegisters')
            .assert.hidden('@accountingMgrBankingJournal')

            .click('@accountingMgrEmployees')
            .assert.visible('@accountingMgrEmployeesPayroll')
            .assert.containsText('@accountingMgrEmployeesPayroll', 
                '\273 Payroll')
            .assert.attributeEquals('@accountingMgrEmployeesPayroll', 'href', 
                page.url() + '/schoolmenu.php#')
            
            .assert.visible('@accountingMgrEmployeesExpenses')
            .assert.containsText('@accountingMgrEmployeesExpenses', 
                '\273 Expenses')
            .assert.attributeEquals('@accountingMgrEmployeesExpenses', 'href', 
                page.url() + '/schoolmenu.php#')

            .click('@accountingMgrEmployeesPayroll')
            .assert.visible('@accountingMgrEmployeesPayrollByEmployee')
            .assert.containsText('@accountingMgrEmployeesPayrollByEmployee', 
                'by Employee')
            .assert.attributeEquals('@accountingMgrEmployeesPayrollByEmployee', 
                'href', page.url() + '/payrollemployee.php')
            
            .assert.visible('@accountingMgrEmployeesPayrollByMonth')
            .assert.containsText('@accountingMgrEmployeesPayrollByMonth', 
                'by Month')
            .assert.attributeEquals('@accountingMgrEmployeesPayrollByMonth', 
                'href', page.url() + '/payrollmonthly.php')

            .click('@accountingMgrEmployeesPayroll')
            .assert.hidden('@accountingMgrEmployeesPayrollByEmployee')
            .assert.hidden('@accountingMgrEmployeesPayrollByMonth')

            .click('@accountingMgrEmployeesExpenses')
            .assert.visible('@accountingMgrEmployeesExpensesSubmitted')
            .assert.containsText('@accountingMgrEmployeesExpensesSubmitted', 
                'Submitted')
            .assert.attributeEquals('@accountingMgrEmployeesExpensesSubmitted', 
                'href', page.url() + '/expenseaccounts.php?type=1')
            
            .assert.visible('@accountingMgrEmployeesExpensesApproved')
            .assert.containsText('@accountingMgrEmployeesExpensesApproved', 
                'Approved')
            .assert.attributeEquals('@accountingMgrEmployeesExpensesApproved', 
                'href', page.url() + '/expenseaccounts.php?type=2')
            
            .assert.visible('@accountingMgrEmployeesExpensesPaid')
            .assert.containsText('@accountingMgrEmployeesExpensesPaid', 'Paid')
            .assert.attributeEquals('@accountingMgrEmployeesExpensesPaid', 
                'href', page.url() + '/expenseaccounts.php?type=3')

            .click('@accountingMgrEmployeesExpenses')
            .assert.hidden('@accountingMgrEmployeesExpensesSubmitted')
            .assert.hidden('@accountingMgrEmployeesExpensesApproved')
            .assert.hidden('@accountingMgrEmployeesExpensesPaid')

            .click('@accountingMgrEmployees')
            .assert.hidden('@accountingMgrEmployeesPayroll')
            .assert.hidden('@accountingMgrEmployeesExpenses')

            .click('@accountingMgrServices')
            .assert.visible('@accountingMgrServicesDwolla')
            .assert.containsText('@accountingMgrServicesDwolla', '\273 Dwolla')
            .assert.attributeEquals('@accountingMgrServicesDwolla', 'href', 
                page.url() + '/schoolmenu.php#')
            
            .assert.visible('@accountingMgrServicesPayJunction')
            .assert.containsText('@accountingMgrServicesPayJunction', 
                '\273 PayJunction')
            .assert.attributeEquals('@accountingMgrServicesPayJunction', 'href',
                page.url() + '/schoolmenu.php#')
            
            .assert.visible('@accountingMgrServicesSmartTuition')
            .assert.containsText('@accountingMgrServicesSmartTuition', 
                '\273 Smart Tuition')
            .assert.attributeEquals('@accountingMgrServicesSmartTuition', 
                'href', page.url() + '/schoolmenu.php#')
            
            .assert.visible('@accountingMgrServicesPayPal')
            .assert.containsText('@accountingMgrServicesPayPal', '\273 PayPal')
            .assert.attributeEquals('@accountingMgrServicesPayPal', 'href', 
                page.url() + '/schoolmenu.php#')
            
            .assert.visible('@accountingMgrServicesEFunds')
            .assert.containsText('@accountingMgrServicesEFunds', '\273 E-Funds')
            .assert.attributeEquals('@accountingMgrServicesEFunds', 'href', 
                page.url() + '/schoolmenu.php#')

            .click('@accountingMgrServicesDwolla')
            .assert.visible('@accountingMgrServicesDwollaTransactions')
            .assert.containsText('@accountingMgrServicesDwollaTransactions', 
                'Transactions')
            .assert.visible('@accountingMgrServicesDwollaTransactions', 'href', 
                page.url() + '/dwolla.php')
            
            .assert.visible('@accountingMgrServicesDwollaConfiguration')
            .assert.containsText('@accountingMgrServicesDwollaConfiguration', 
                'Configuration')
            .assert.visible('@accountingMgrServicesDwollaConfiguration', 'href',
                page.url() + '/dwollacfg.php')

            .click('@accountingMgrServicesDwolla')
            .assert.hidden('@accountingMgrServicesDwollaTransactions')
            .assert.hidden('@accountingMgrServicesDwollaConfiguration')

            .click('@accountingMgrServicesPayJunction')
            .assert.visible('@accountingMgrServicesPayJunctionInvoices')
            .assert.containsText('@accountingMgrServicesPayJunctionInvoices', 
                'Invoices')
            .assert.attributeEquals('@accountingMgrServicesPayJunctionInvoices',
                'href', page.url() + '/payjunction.php?task=allinvoices')
            
            .assert.visible('@accountingMgrServicesPayJunctionPayments')
            .assert.containsText('@accountingMgrServicesPayJunctionPayments', 
                'Payments')
            .assert.attributeEquals('@accountingMgrServicesPayJunctionPayments',
                'href', page.url() + '/payjunction.php?task=allpayments')
            
            .assert.visible('@accountingMgrServicesPayJunctionConvenienceFees')
            .assert.containsText('@accountingMgrServicesPayJunctionConvenienceFees',
                'Convenience Fees')
            .assert.attributeEquals('@accountingMgrServicesPayJunctionConvenienceFees',
                'href', page.url() + '/payjunction.php?task=convenience')
            
            .assert.visible('@accountingMgrServicesPayJunctionConfiguration')
            .assert.containsText('@accountingMgrServicesPayJunctionConfiguration',
                'Configuration')
            .assert.attributeEquals('@accountingMgrServicesPayJunctionConfiguration',
                'href', page.url() + '/payjunctioncfg.php')

            .click('@accountingMgrServicesPayJunction')
            .assert.hidden('@accountingMgrServicesPayJunctionInvoices')
            .assert.hidden('@accountingMgrServicesPayJunctionPayments')
            .assert.hidden('@accountingMgrServicesPayJunctionConvenienceFees')
            .assert.hidden('@accountingMgrServicesPayJunctionConfiguration')

            .click('@accountingMgrServicesSmartTuition')
            .assert.visible('@accountingMgrServicesSmartTuitionConfiguration')
            .assert.containsText('@accountingMgrServicesSmartTuitionConfiguration',
                'Configuration')
            .assert.attributeEquals('@accountingMgrServicesSmartTuitionConfiguration',
                'href', page.url() + '/smarttuitioncfg.php')

            .click('@accountingMgrServicesSmartTuition')
            .assert.hidden('@accountingMgrServicesSmartTuitionConfiguration')

            .click('@accountingMgrServicesPayPal')
            .assert.visible('@accountingMgrServicesPayPalOnlinePayments')
            .assert.containsText('@accountingMgrServicesPayPalOnlinePayments', 
                'Online Payments')
            .assert.attributeEquals('@accountingMgrServicesPayPalOnlinePayments',
                'href', page.url() + '/paypal.php?task=allpayments')
            
            .assert.visible('@accountingMgrServicesPayPalInvoices')
            .assert.containsText('@accountingMgrServicesPayPalInvoices', 
                'Invoices')
            .assert.attributeEquals('@accountingMgrServicesPayPalInvoices', 
                'href', page.url() + '/paypal.php?task=allinvoices')
            
            .assert.visible('@accountingMgrServicesPayPalConfiguration')
            .assert.containsText('@accountingMgrServicesPayPalConfiguration', 
                'Configuration')
            .assert.attributeEquals('@accountingMgrServicesPayPalConfiguration',
                'href', page.url() + '/paypalcfg.php')

            .click('@accountingMgrServicesPayPal')
            .assert.hidden('@accountingMgrServicesPayPalOnlinePayments')
            .assert.hidden('@accountingMgrServicesPayPalInvoices')
            .assert.hidden('@accountingMgrServicesPayPalConfiguration')

            .click('@accountingMgrServicesEFunds')
            .assert.visible('@accountingMgrServicesEFundsPayments')
            .assert.containsText('@accountingMgrServicesEFundsPayments', 
                'Payments')
            .assert.attributeEquals('@accountingMgrServicesEFundsPayments', 
                'href', page.url() + '/efunds.php?task=allpayments')
            
            .assert.visible('@accountingMgrServicesEFundsTransactions')
            .assert.containsText('@accountingMgrServicesEFundsTransactions', 
                'Transactions')
            .assert.attributeEquals('@accountingMgrServicesEFundsTransactions', 
                'href', page.url() + '/efunds.php?task=allinvoices')
            
            .assert.visible('@accountingMgrServicesEFundsRemittance')
            .assert.containsText('@accountingMgrServicesEFundsRemittance', 
                'Remittance')
            .assert.attributeEquals('@accountingMgrServicesEFundsRemittance', 
                'href', page.url() + '/efundsremittance.php')
            
            .assert.visible('@accountingMgrServicesEFundsConfiguration')
            .assert.containsText('@accountingMgrServicesEFundsConfiguration', 
                'Configuration')
            .assert.attributeEquals('@accountingMgrServicesEFundsConfiguration',
                'href', page.url() + '/efundscfg.php')

            .click('@accountingMgrServicesEFunds')
            .assert.hidden('@accountingMgrServicesEFundsPayments')
            .assert.hidden('@accountingMgrServicesEFundsTransactions')
            .assert.hidden('@accountingMgrServicesEFundsRemittance')
            .assert.hidden('@accountingMgrServicesEFundsConfiguration')

            .click('@accountingMgrServices')
            .assert.hidden('@accountingMgrServicesDwolla')
            .assert.hidden('@accountingMgrServicesPayJunction')
            .assert.hidden('@accountingMgrServicesSmartTuition')
            .assert.hidden('@accountingMgrServicesPayPal')
            .assert.hidden('@accountingMgrServicesEFunds')

            .click('@accountingMgr')
            .assert.hidden('@accountingMgrSchool')
            .assert.hidden('@accountingMgrFamilies')
            .assert.hidden('@accountingMgrBanking')
            .assert.hidden('@accountingMgrEmployees')
            .assert.hidden('@accountingMgrServices')
            .assert.hidden('@accountingMgrConfiguration')
            .assert.hidden('@accountingMgrReports')

            .click('@cafeteriaMgr')
            .assert.visible('@cafeteriaMgrFood')
            .assert.containsText('@cafeteriaMgrFood', 'Food')
            .assert.attributeEquals('@cafeteriaMgrFood', 'href', page.url() + 
                '/lunchmeals.php?tab=0')
            
            .assert.visible('@cafeteriaMgrMenu')
            .assert.containsText('@cafeteriaMgrMenu', 'Menu')
            .assert.attributeEquals('@cafeteriaMgrMenu', 'href', page.url() + 
                '/lunchcal.php?tab=1')
            
            .assert.visible('@cafeteriaMgrCycles')
            .assert.containsText('@cafeteriaMgrCycles', 'Cycles')            
            .assert.attributeEquals('@cafeteriaMgrCycles', 'href', page.url() + 
                '/lunchcycle.php?tab=2')
            
            .assert.visible('@cafeteriaMgrOrders')
            .assert.containsText('@cafeteriaMgrOrders', 'Orders')
            .assert.attributeEquals('@cafeteriaMgrOrders', 'href', page.url() + 
                '/lunchorders.php?tab=3')
            
            .assert.visible('@cafeteriaMgrPricePlans')
            .assert.containsText('@cafeteriaMgrPricePlans', 'Price Plans')
            .assert.attributeEquals('@cafeteriaMgrPricePlans', 'href', 
                page.url() + '/lunchpriceplans.php')
            
            .assert.visible('@cafeteriaMgrNotifications')
            .assert.containsText('@cafeteriaMgrNotifications', 'Notifications')
            .assert.attributeEquals('@cafeteriaMgrNotifications', 'href', 
                page.url() + '/lunchnotification.php')
            
            .assert.visible('@cafeteriaMgrAccounts')
            .assert.containsText('@cafeteriaMgrAccounts', '\273 Accounts')
            .assert.attributeEquals('@cafeteriaMgrAccounts', 'href', page.url() 
                + '/schoolmenu.php#')
            
            .assert.visible('@cafeteriaMgrReports')
            .assert.containsText('@cafeteriaMgrReports', 'Reports')
            .assert.attributeEquals('@cafeteriaMgrReports', 'href', page.url() +
                '/reports.php?type=17')

            .click('@cafeteriaMgrAccounts')
            .assert.visible('@cafeteriaMgrAccountsFamily')
            .assert.containsText('@cafeteriaMgrAccountsFamily', 'Family')
            .assert.attributeEquals('@cafeteriaMgrAccountsFamily', 'href', 
                page.url() + '/lunchaccounts.php?task=family')
            
            .assert.visible('@cafeteriaMgrAccountsEmployee')
            .assert.containsText('@cafeteriaMgrAccountsEmployee', 'Employee')
            .assert.attributeEquals('@cafeteriaMgrAccountsEmployee', 'href', 
                page.url() + '/lunchaccounts.php?task=employee')

            .click('@cafeteriaMgrAccounts')
            .assert.hidden('@cafeteriaMgrAccountsFamily')
            .assert.hidden('@cafeteriaMgrAccountsEmployee')

            .click('@cafeteriaMgr')
            .assert.hidden('@cafeteriaMgrFood')
            .assert.hidden('@cafeteriaMgrMenu')
            .assert.hidden('@cafeteriaMgrCycles')
            .assert.hidden('@cafeteriaMgrOrders')
            .assert.hidden('@cafeteriaMgrPricePlans')
            .assert.hidden('@cafeteriaMgrNotifications')
            .assert.hidden('@cafeteriaMgrAccounts')
            .assert.hidden('@cafeteriaMgrReports')

            .click('@childcareMgr')
            .assert.visible('@childcareMgrAccounts')
            .assert.containsText('@childcareMgrAccounts', 'Accounts')
            .assert.attributeEquals('@childcareMgrAccounts', 'href', page.url() 
                + '/daycareaccounts.php')
            
            .assert.visible('@childcareMgrDaily')
            .assert.containsText('@childcareMgrDaily', '\273 Daily')
            .assert.attributeEquals('@childcareMgrDaily', 'href', page.url() +
                '/schoolmenu.php#')
            
            .assert.visible('@childcareMgrWeekly')
            .assert.containsText('@childcareMgrWeekly', '\273 Weekly')
            .assert.attributeEquals('@childcareMgrWeekly', 'href', page.url() + 
                '/schoolmenu.php#')
            
            .assert.visible('@childcareMgrMonthly')
            .assert.containsText('@childcareMgrMonthly', '\273 Monthly')
            .assert.attributeEquals('@childcareMgrMonthly', 'href', page.url() +
                '/schoolmenu.php#')
            
            .assert.visible('@childcareMgrNotifications')
            .assert.containsText('@childcareMgrNotifications', 'Notification')
            .assert.attributeEquals('@childcareMgrNotifications', 'href', 
                page.url() + '/childcarenotification.php')
            
            .assert.visible('@childcareMgrReports')
            .assert.containsText('@childcareMgrReports', 'Reports')
            .assert.attributeEquals('@childcareMgrReports', 'href', page.url() +
                '/reports.php?type=26')

            .click('@childcareMgrDaily')
            .assert.visible('@childcareMgrDailyCheckInOut')
            .assert.containsText('@childcareMgrDailyCheckInOut', 'Check In/Out')
            .assert.attributeEquals('@childcareMgrDailyCheckInOut', 'href',
                page.url() + '/daycarecheck.php')
            
            .assert.visible('@childcareMgrDailyDailyCharges')
            .assert.containsText('@childcareMgrDailyDailyCharges', 
                'Daily Charges')
            .assert.attributeEquals('@childcareMgrDailyDailyCharges', 'href', 
                page.url() + '/daycareorders.php?grade=99')
            
            .assert.visible('@childcareMgrDailyPricePlans')
            .assert.containsText('@childcareMgrDailyPricePlans', 'Price Plans')
            .assert.attributeEquals('@childcareMgrDailyPricePlans', 'href', 
                page.url() + '/daycarepriceplans.php')

            .click('@childcareMgrDaily')
            .assert.hidden('@childcareMgrDailyCheckInOut')
            .assert.hidden('@childcareMgrDailyDailyCharges')
            .assert.hidden('@childcareMgrDailyPricePlans')

            .click('@childcareMgrWeekly')
            .assert.visible('@childcareMgrWeeklyCharges')
            .assert.containsText('@childcareMgrWeeklyCharges', 'Charges')
            .assert.attributeEquals('@childcareMgrWeeklyCharges', 'href', 
                page.url() + '/daycarecharges.php')
            
            .assert.visible('@childcareMgrWeeklyBillingSetup')
            .assert.containsText('@childcareMgrWeeklyBillingSetup', 
                'Billing Setup')
            .assert.attributeEquals('@childcareMgrWeeklyBillingSetup', 'href', 
                page.url() + '/daycarebilling.php')
            
            .assert.visible('@childcareMgrWeeklyPricePlans')
            .assert.containsText('@childcareMgrWeeklyPricePlans', 'Price Plans')
            .assert.attributeEquals('@childcareMgrWeeklyPricePlans', 'href', 
                page.url() + '/daycareweeklyplans.php')

            .click('@childcareMgrWeekly')
            .assert.hidden('@childcareMgrWeeklyCharges')
            .assert.hidden('@childcareMgrWeeklyBillingSetup')
            .assert.hidden('@childcareMgrWeeklyPricePlans')

            .click('@childcareMgrMonthly')
            .assert.visible('@childcareMgrMonthlyCharges')
            .assert.containsText('@childcareMgrMonthlyCharges', 'Charges')
            .assert.attributeEquals('@childcareMgrMonthlyCharges', 'href', 
                page.url() + '/daycaremonthlycharges.php')
            
            .assert.visible('@childcareMgrMonthlyBillingSetup')
            .assert.containsText('@childcareMgrMonthlyBillingSetup', 
                'Billing Setup')
            .assert.attributeEquals('@childcareMgrMonthlyBillingSetup', 'href', 
                page.url() + '/daycaremonthlybilling.php')
            
            .assert.visible('@childcareMgrMonthlyPricePlans')
            .assert.containsText('@childcareMgrMonthlyPricePlans', 
                'Price Plans')
            .assert.attributeEquals('@childcareMgrMonthlyPricePlans', 'href', 
                page.url() + '/daycaremonthlyplans.php')

            .click('@childcareMgrMonthly')
            .assert.hidden('@childcareMgrMonthlyCharges')
            .assert.hidden('@childcareMgrMonthlyBillingSetup')
            .assert.hidden('@childcareMgrMonthlyPricePlans')

            .click('@childcareMgr')
            .assert.hidden('@childcareMgrAccounts')
            .assert.hidden('@childcareMgrDaily')
            .assert.hidden('@childcareMgrWeekly')
            .assert.hidden('@childcareMgrMonthly')
            .assert.hidden('@childcareMgrNotifications')
            .assert.hidden('@childcareMgrReports')

            .click('@donationMgr')
            .assert.visible('@donationMgrDonors')
            .assert.containsText('@donationMgrDonors', '\273 Donors')
            .assert.attributeEquals('@donationMgrDonors', 'href', page.url() + 
                '/schoolmenu.php#')
            
            .assert.visible('@donationMgrDonations')
            .assert.containsText('@donationMgrDonations', '\273 Donations')
            .assert.attributeEquals('@donationMgrDonations', 'href', page.url() 
                + '/schoolmenu.php#')
            
            .assert.visible('@donationMgrCampaigns')
            .assert.containsText('@donationMgrCampaigns', 'Campaigns')            
            .assert.attributeEquals('@donationMgrCampaigns', 'href', page.url() 
                + '/donorcampaigns.php')
            
            .assert.visible('@donationMgrReports')
            .assert.containsText('@donationMgrReports', 'Reports')
            .assert.attributeEquals('@donationMgrReports', 'href', page.url() + 
                '/reports.php?type=22')

            .click('@donationMgrDonors')
            .assert.visible('@donationMgrDonorsNewDonors')
            .assert.containsText('@donationMgrDonorsNewDonors', 'New Donors')
            .assert.attributeEquals('@donationMgrDonorsNewDonors', 'href', 
                page.url() + '/donors.php?task=new')
            
            .assert.visible('@donationMgrDonorsByContact')
            .assert.containsText('@donationMgrDonorsByContact', 'by Contact')            
            .assert.attributeEquals('@donationMgrDonorsByContact', 'href', 
                page.url() + '/donors.php?task=bycontact')
            
            .assert.visible('@donationMgrDonorsPledges')
            .assert.containsText('@donationMgrDonorsPledges', 'Pledges')
            .assert.attributeEquals('@donationMgrDonorsPledges', 'href', 
                page.url() + '/donorpledges.php')

            .click('@donationMgrDonors')
            .assert.hidden('@donationMgrDonorsNewDonors')
            .assert.hidden('@donationMgrDonorsByContact')
            .assert.hidden('@donationMgrDonorsPledges')

            .click('@donationMgrDonations')
            .assert.visible('@donationMgrDonationsReceive')
            .assert.containsText('@donationMgrDonationsReceive', 'Receive')
            .assert.attributeEquals('@donationMgrDonationsReceive', 'href', 
                page.url() + '/donordonations.php?task=receive')
            
            .assert.visible('@donationMgrDonationsProcess')
            .assert.containsText('@donationMgrDonationsProcess', 'Process')
            .assert.attributeEquals('@donationMgrDonationsProcess', 'href', 
                page.url() + '/donordonations.php?task=pending')

            .click('@donationMgrDonations')
            .assert.hidden('@donationMgrDonationsReceive')
            .assert.hidden('@donationMgrDonationsProcess')

            .click('@donationMgr')
            .assert.hidden('@donationMgrDonors')
            .assert.hidden('@donationMgrDonations')
            .assert.hidden('@donationMgrCampaigns')
            .assert.hidden('@donationMgrReports')

            .click('@financial')
            .assert.hidden('@accountingMgr')
            .assert.hidden('@cafeteriaMgr')
            .assert.hidden('@childcareMgr')
            .assert.hidden('@donationMgr');

        client.frame(null);

        client.end();
    }
};
