
/**
 * sub page containing specific selectors and methods for a specific page
 */
class BussinessPage{
    /**
     * define selectors using getter methods
     */
    get clickCompanyName () {
        return $('//div[@class="label-container ng-tns-c170-8 form-label"]');
    }

    get clickIndustry () {
        return $('//div[@class="label-container ng-tns-c170-11 form-label"]');
    }

    get inputCompanyName () {
        return $('//input[@formcontrolname="name"]');
    }
    
    get inputCompanyName2 () {
        return $('//input[@class="ng-tns-c170-8 ng-untouched ng-pristine ng-invalid"]');
    }
    get clickPhoneNumber () {
        return $('//div[@class="label-container ng-tns-c170-12 form-label"]');
    }

    get inputPhoneNumber () {
        return $('//input[@formcontrolname="phoneNumber"]');
    }

    get clickNumPhone () {
        return $('//div[@class="label-container ng-tns-c170-13 form-label"]');
    }

    get inputNumPhone () {
        return $('//input[contains(@class,"ng-star-inserted")]');
    }

    get clickVatNum () {
        return $('//div[@class="label-container ng-tns-c170-14 form-label"]');
    }

    get inputVatNum () {
        return $('//input[contains(@class,"ng-tns-c170-14")]');
    }

    get clickIndustries () {
        return $('//div[@class="label-container ng-tns-c170-11 form-label"]');
    }

    get titleBussiness (){
        return $("div.registration-header-title");
    }

    get btnGetStarted () {
        return $('button.welcome-screen-content-button');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async bussiness (companyName, phoneNumber, industries, num_phone, vat_number, category) {
        await this.clickCompanyName.waitForDisplayed({timeout:30000});
        await this.clickCompanyName.click();
        if (await category === "fashion" ) {
            await this.inputCompanyName.setValue(companyName);
            await this.clickPhoneNumber.click();
            await this.inputPhoneNumber.setValue(phoneNumber);
        } else if (await category === "santander") {
            await this.inputCompanyName2.setValue(companyName);
            await this.clickNumPhone.click();
            await this.inputNumPhone.setValue(num_phone);
            await this.clickVatNum.click();
            await this.inputVatNum.setValue(vat_number);
            await this.clickIndustries.click();
            while(!await (await $(`//div/span[contains(text(),"${industries}")]`)).isDisplayedInViewport()){
                await browser.execute(()=>{
                    var el = document.querySelector('div[role="listbox"]')
                    el.scrollTop = el.scrollTop + 200
            })
            }
            await $(`//div/span[contains(text(),"${industries}")]`).click()
        } else {
            console.log("do nothing")
        }   
    }

    async checkBussinessTitle () {
        await expect(await this.titleBussiness.getText()).to.equal('Create your free payever business account')
    }

    async submitGetStarted () {
        await this.btnGetStarted.waitForDisplayed({timeout:3000000})
        await this.btnGetStarted.click();
    }

    async validateListApps (listApp){
        await browser.pause(5000)
        const myArray = listApp.split(",");c
        const elems = await browser.$$('//div[@class="icons__title"]')
	    for await (const m of myArray) {
		    expect(await elems.map((elem) => elem.getText())).to.include(m)
	    }
    }
}

module.exports = new BussinessPage();
