const Commands = require("../Commands");

const commands = new Commands

class bigPageElements{

    firstFacebookLink = '//li[@class="et_pb_social_media_follow_network_1 et_pb_social_icon et_pb_social_network_link  et-social-facebook"]'
    randomStuffLoc = '//*[@id="Section_of_Random_Stuff"]'
    nameLoc = '//*[@id="et_pb_contact_name_0"]'
    emailLoc = '//*[@id="et_pb_contact_email_0"]'
    messageLoc = '//*[@id="et_pb_contact_message_0"]'
    submitButLoc = '//p[contains(@class,"contact_field_2")]/following-sibling::div/button'
    captchaErrorLoc = '//*[text()="Captcha"]'
    hideButtonLoc = '//div[contains(@class, "sidebar_0")]//a[@data-label = "show"]'
    showButtonLoc = '//div[contains(@class, "sidebar_0")]//a[@data-label = "hide"]'
    skillsLoc = '//div[contains(@class, "sidebar_0")]//a[@href="#Skills_Improved"]'

    async clickFirstFacebookLink(){ 
        await commands.scrollAndClickWebElement(this.firstFacebookLink)
    }

    async scrollToRandomStuff(){ 
        await commands.scrollAndFindWebElement(this.randomStuffLoc)
    }

    async clickSubmit() {
        await commands.clickWebElement(this.submitButLoc)
    }

    async clickHide() {
        await commands.clickWebElement(this.hideButtonLoc)
    }

    async clickShow() {
        await commands.clickWebElement(this.showButtonLoc)
    }

    async typeName(name) {
        await commands.typeInWebElement(this.nameLoc, name)
    }

    async typeEmail(email) {
        await commands.typeInWebElement(this.emailLoc, email)
    }

    async typeMessage(message) {
        await commands.typeInWebElement(this.messageLoc, message)
    }

    async isCaptchaErrorDisplayed() {
        return await commands.isWebElementDisplayed(this.captchaErrorLoc)
    }

    async isSkillsShowed() {
        return await commands.isWebElementDisplayed(this.skillsLoc)
    }

}

module.exports = bigPageElements