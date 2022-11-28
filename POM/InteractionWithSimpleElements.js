const { faker } = require("@faker-js/faker");
const Commands = require("../Commands");
const MyStringFunctions = require("../Utils/MyStringFunctions")
const command = new Commands

class InteractionWithSimpleElements{

    interactionsWithSimpleElementsLink = '//a[contains(text(), "Interactions")]'
    nameFieldLocator = '//input[@placeholder = "Name"]'
    emailFieldLocator = '//input[@placeholder = "Email Address"]'
    emailMeButtonLocator = '//button[contains(@class, "contact_submit")]'
    thankYouMessageLocator = '//div[contains(@class, "contact-message")]/p'
    tab2Locator = '//a[text() = "Tab 2"]'
    tab2TextLocator = '//div[contains(@class, "tab_1")]/div'
    radioBtnLocator= '//h4/span[text() = "Radio buttons"]'
    radioBtnInputLocatorStart = '//input[@name = "gender" and @value = "'
    radioBtnInputLocatorEnd = '"]'
    checkboxInputLocatorStart = '//input[@type = "checkbox" and @value = "'
    checkboxInputLocatorEnd = '"]'
    dropdownLocator = '//select'
    dropdownOptionsLocator = '//select/option'
    dropdownVerificationLocatorStart = '//option [@value = "'
    dropdownVerificationLocatorEnd = '"]'


    async clickInteractionsWithSimpleElements(){
        return await command.clickWebElement(this.interactionsWithSimpleElementsLink)
    }

    async enterName(name = faker.name.firstName())   {
        await command.scroll(this.emailFieldLocator);
        await browser.pause(2000)
        return await command.enterValue(this.nameFieldLocator, name)
    }

    async enterEmail(email = faker.internet.email())   {
        await browser.pause(2000)
        return await command.enterValue(this.emailFieldLocator, email)
    }

    async clickEmailMeBtn()  {
        await command.scroll(this.emailMeButtonLocator)
        await browser.pause(2000)
        return await command.clickWebElement(this.emailMeButtonLocator)
    }

    async thankYouText()    {
        await browser.pause(2000)
        await command.scroll(this.thankYouMessageLocator)
        await command.waitForElementDisplayed(this.thankYouMessageLocator)
        return await command.webElementText(this.thankYouMessageLocator)
    }

    async tab2Link()    {        
        await command.scroll(this.tab2Locator)
        await browser.pause(2000)
        return await command.clickWebElement(this.tab2Locator)
    }

    async tab2Text()    {
        await browser.pause(2000)
        await command.waitForElementDisplayed(this.tab2TextLocator)
        return await command.webElementText(this.tab2TextLocator)
    }

    async selectRadioBtn(gender)  {
        await command.scroll(this.radioBtnLocator);
        await browser.pause(2000);
        const selectGender = this.radioBtnInputLocatorStart+gender.toLowerCase()+this.radioBtnInputLocatorEnd;
        return await command.clickWebElement(selectGender)
    }

    async verifySelectedRadioBtn(gender)  {
        const selectGender = this.radioBtnInputLocatorStart+gender.toLowerCase()+this.radioBtnInputLocatorEnd;
        return await command.webElementSelected(selectGender)
    }

    async selectCheckbox(sentence)  {
        const sentenceSplit = sentence.split(' ');  
        const checkboxSelection = this.checkboxInputLocatorStart+MyStringFunctions.toTitleCase(sentenceSplit[3])+this.checkboxInputLocatorEnd;
        await browser.pause(2000)
        return await command.clickWebElement(checkboxSelection)
    }

    async verifySelectCheckbox(sentence)  {
        const sentenceSplit = sentence.split(' ');  
        const checkboxSelection = this.checkboxInputLocatorStart+MyStringFunctions.toTitleCase(sentenceSplit[3])+this.checkboxInputLocatorEnd;
        await browser.pause(2000)
        return await command.webElementSelected(checkboxSelection)
    }

    async selectDropdown(option)    {
        await command.clickWebElement(this.dropdownLocator);
        await browser.pause(2000)
        const dropdownMenu = await command.findWebElementArray(this.dropdownOptionsLocator)
        for (const dropdownOption of dropdownMenu) {
            const optionText = await command.webElementText(dropdownOption);
            if (optionText === MyStringFunctions.toTitleCase(option)) {
                return await command.clickWebElement(dropdownOption)
            }
        }
        await browser.pause(2000)
    }

    async verifySelectionDropdown(option)   {
        await command.clickWebElement(this.dropdownLocator);
        const dropdown = this.dropdownVerificationLocatorStart+option.toLowerCase()+this.dropdownVerificationLocatorEnd
        return await command.webElementSelected(dropdown)
    }




}
module.exports = InteractionWithSimpleElements;