class Commands {

    async findWebElement(locator)   {
        return await $(locator)
    }

    async findWebElementArray(locator)   {
        return await $$(locator)
    }

    async scroll(locator)   {
        return await $(locator).scrollIntoView()
    }

    async webElementAttribute(locator)    {
        const attr = await $(locator).getAttribute()
        return attr;
    }

    async webElementEnabled(locator)    {
        const enabled = await $(locator).isEnabled()
        return enabled;
    }

    async webElementDisplayed(locator)    {
        const displayed =  await $(locator).isDisplayed();
        return displayed;
    }

    async webElementSelected(locator)    {
        const selected = await $(locator).isSelected();
        return selected
    }

    async webElementText(locator)    {
        const text =  await $(locator).getText()     
        return text;
    }

    async clickWebElement(locator)      {
        return await $(locator).click()      
    }


    async enterValue(locator, data)     {
         return await $(locator).setValue(data)
    }

    async waitForElementDisplayed(locator) {
        if (!await $(locator).isDisplayed()) {
            await $(locator).waitForDisplayed({timeoutMsg: 'wait for displayed failed', timeout: 15000})
        } else {
            const displayed = await $(locator).isDisplayed()
            return displayed
        }
    }

    async waitForElementsEnabled(locator) {
        if (!await $$(locator).isEnabled()) {
            await $$(locator).waitForEnabled({timeoutMsg: 'wait for enabled failed', timeout: 15000})
        } else {
            const enabled = await $$(locator).isEnabled()
            return enabled
        }
    }

    async waitForElementClickable(locator)      {
        if (!await $(locator).click()) {
            await $(locator).waitForClickable({timeoutMsg: 'wait for clickable failed', timeout: 15000})        
        } else {
            return await $(locator).click() 
        }         
    }

}
module.exports = Commands;