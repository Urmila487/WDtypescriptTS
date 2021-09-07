import chaipage from "../pageobjects/register.page"
describe('My Register Test suite', () => {
    it('Register', () => {
        browser.url('http://www.practiceselenium.com/practice-form.html')
        browser.maximizeWindow()

        expect(chaipage.getHeader()).toHaveText('Practice Form')
        
        chaipage.enterFirstName('Urmila')
        chaipage.enterLastName('Vadi')
        chaipage.gender_radio.click()
        chaipage.exp_radio.click()
        chaipage.fav_chai.click()
        chaipage.about_chai.click()
        chaipage.selectContinent('Australia')
        chaipage.selectCommand('Wait Commands')
        chaipage.clickOnSubmitBtn()

        expect(chaipage.getHeader()).toHaveText("We're passionate about tea.")
    });

});