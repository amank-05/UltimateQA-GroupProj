const { Given, When, Then, } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Commands = require("../Commands");
const bigPageElements = require("../POM/bigPage");

const commands = new Commands

const bigPageFeatures = new bigPageElements

Given(/^I am on Big page$/, async function() {
    await browser.url('https://ultimateqa.com/complicated-page');
    await browser.pause(2000);
});

When(/^I scroll and click on the Facebook link$/, async function() {
    await bigPageFeatures.clickFirstFacebookLink();
    await browser.pause(2000);
});

Then(/^I verify the website redirects to Facebook$/, async function() {
    expect (await commands.getWindowTitle()).to.include("Facebook")
    await browser.pause(2000);
});



When(/^I scroll to Section of Random Stuff$/, async function() {
    await bigPageFeatures.scrollToRandomStuff();
    await browser.pause(2000);
});

When(/^I fill out the name, email and message$/, async function() {
    await bigPageFeatures.typeName('R T');
    await bigPageFeatures.typeEmail('RAV@TIM.COM');
    await bigPageFeatures.typeMessage('How you doing');
    await browser.pause(2000);
});

When(/^I click on submit$/, async function() {
    await bigPageFeatures.clickSubmit();
    await browser.pause(2000);
});

Then(/^I verify the Captcha error is displayed$/, async function() {
    expect(await bigPageFeatures.isCaptchaErrorDisplayed(), 'Captcha error is NOT displayed').to.be.true;
    await browser.pause(2000);
});


When(/^I click on hide$/, async function() {
    await bigPageFeatures.clickHide();
    await browser.pause(2000);
});

Then(/^I verify all content is hidden$/, async function() {
    expect(await bigPageFeatures.isSkillsShowed(), 'Content IS displayed').to.be.false;
    await browser.pause(2000);
});

When(/^I click on show$/, async function() {
    await bigPageFeatures.clickShow();
    await browser.pause(2000);
});

Then(/^I verify all content is shown$/, async function() {
    expect(await bigPageFeatures.isSkillsShowed(), 'Content NOT displayed').to.be.true;
    await browser.pause(2000);
});