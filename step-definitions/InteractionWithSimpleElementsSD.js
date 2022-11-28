const { Given } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Commands = require("../Commands");
const command =  new Commands
const InteractionWithSimpleElements = require("../POM/InteractionWithSimpleElements");

const simpleElements = new InteractionWithSimpleElements 

Given(/^I am on UltimateQA automation landing page$/, async function() {
    await browser.url('/automation/');
    await browser.pause(2000)
});

Given(/^I click on Interaction with simple elements link$/, async function() {
    await simpleElements.clickInteractionsWithSimpleElements();
});

Given(/^I enter a name in name field$/, async function() {
    await simpleElements.enterName();
});

Given(/^I enter an email in email field$/, async function() {
    await simpleElements.enterEmail();
});

Given(/^I click "Email me!" button$/, async function() {
    await simpleElements.clickEmailMeBtn();
});

Given(/^I verify "Thanks for contacting us" message is displayed$/, async function() {
    expect(await simpleElements.thankYouText(), "Text messages do not match").to.equal("Thanks for contacting us")
});

Given(/^I scroll to tab and click on Tab 2$/, async function() {
    await simpleElements.tab2Link()
});

Given(/^I verify "tab 2 content" is displayed$/, async function() {
    expect(await simpleElements.tab2Text(), "Tab names do not match").to.equal("Tab 2 content")
});

Given(/^I click "(.*)" from radio button$/, async function(gender) {
   await simpleElements.selectRadioBtn(gender)
});

Given(/^I verify "(.*)" is selected$/, async function(gender) {
    expect(await simpleElements.verifySelectedRadioBtn(gender), "Gender selected does not match value expected").to.be.true;
});

Given(/^I select "(.*)" checkbox$/, async function(selection) {
    await simpleElements.selectCheckbox(selection)
 });

 Given(/^I verify "(.*)" checkbox is selected$/, async function(selection) {
    expect(await simpleElements.verifySelectCheckbox(selection), "Checkbox selected does not match value expected").to.be.true;
});

Given(/^I select "(.*)" from the dropdown menu$/, async function(selection) {
    await simpleElements.selectDropdown(selection)
 });

 Given(/^I verify "(.*)" is selected from the dropdown menu$/, async function(selection) {
    expect(await simpleElements.verifySelectionDropdown(selection), "Dropdown selected does not match value expected").to.be.true;
});