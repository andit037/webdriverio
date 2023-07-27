const { Given, When, Then } = require('@wdio/cucumber-framework');

const SignUpPage    = require('../pageobjects/signUp.page');
const BussinessPage = require('../pageobjects/bussiness.page');



Given(/^I am on the (.*) registration page$/, async (category) => {
	await browser.url(`https://commerceos.staging.devpayever.com/registration/${category}`)
	await browser.pause(7000)
});

When(/^I insert signup with (.*) and (.*) and (.*) and (.*) and (.*)$/, async (firstname, lastname, email, password, confirm_password) => {
	await SignUpPage.signUp(firstname, lastname, email+Date.now()+'@gmail.com', password, confirm_password)
});


When(/^I click submit button$/, async () => {
	await SignUpPage.submitSignUp()	
});

When(/^I see register businees account page$/, async () => {
	await BussinessPage.checkBussinessTitle()
});

When(/^I insertxxx businees account with (.*) and (.*) and (.*) and (.*) and (.*) on (.*) page$/, async (company_name, phone_number, industries, num_phone, vat_number, category) => {
	await BussinessPage.bussiness(company_name, phone_number, industries, num_phone, vat_number, category)
});

Then(/^I see (.*) on dasboard page$/, async (listApp) => {
	await BussinessPage.submitGetStarted()
	await BussinessPage.validateListApps(listApp)
});