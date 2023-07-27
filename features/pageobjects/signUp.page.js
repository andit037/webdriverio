/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage{
    /**
     * define selectors using getter methods
     */
    get clickFirstName () {
        return $('//peb-form-field-input[@class="ng-tns-c170-1 ng-star-inserted"]');
    }

    get inputFirstName () {
        return $('//input[@formcontrolname="firstName"]');
    }

    get clickLastName () {
        return $('//peb-form-field-input[@class="ng-tns-c170-2 ng-star-inserted"]');
    }

    get inputLastName () {
        return $('//input[@formcontrolname="lastName"]');
    }

    get clickEmail () {
        return $('div[class="label-container ng-tns-c170-3 form-label"]');
    }

    get inputEmail () {
        return $('//input[@formcontrolname="email"]');
    }

    get clickPassword () {
        return $('div[class="label-container ng-tns-c170-4 form-label"]');
    }

    get inputPassword () {
        return $('//input[@formcontrolname="password"]');
    }

    get clickConfirmPassword () {
        return $('div[class="label-container ng-tns-c170-5 form-label"]');
    }

    get inputConfirmPassword () {
        return $('//input[@formcontrolname="confirmPass"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async signUp (firstname, lastname, email, password, confirmPassword) {
        await this.inputFirstName.waitForDisplayed({timeout:30000})
        await this.clickFirstName.click()
        await this.inputFirstName.setValue(firstname);
        await this.clickLastName.click()
        await this.inputLastName.setValue(lastname);
        await this.clickEmail.click()
        await this.inputEmail.setValue(email);
        await this.clickPassword.click()
        await this.inputPassword.setValue(password);
        await this.clickConfirmPassword.click()
        await this.inputConfirmPassword.setValue(confirmPassword);
    }

    async submitSignUp () {
        await this.btnSubmit.waitForDisplayed({timeout:30000})
        await this.btnSubmit.click();
    }
}

module.exports = new SignUpPage();
