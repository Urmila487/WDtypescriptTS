import Page from "./page";

class ChaiRegister extends Page{

    private get header(){ return $('//h1')}
    private get fname(){ return $('[name=firstname]')}
    private get lname(){ return $('[name=lastname]')}
    get gender_radio(){return $('#sex-1')}
    get exp_radio(){return $('#exp-3')}
    get fav_chai(){ return $('[name=BlackTea]')}
    get about_chai(){return $('#tool-0')}
    private get location(){return $('#continents')}
    private get work(){return $('#selenium_commands')}
    private get sub_btn(){return $('#submit')}

    getHeader(){
        return this.header
    }
    enterFirstName(firstname:string){
        ( this.fname).setValue(firstname)
    }

    enterLastName(lastname:string){
        ( this.lname).setValue(lastname)
    }

    selectContinent(continent:string){
        ( this.location).selectByVisibleText(continent)
    }

    selectCommand(command:string){
        ( this.work).selectByVisibleText(command)
    }

    clickOnSubmitBtn(){
         (this.sub_btn).click()
    }
    
}
export default new ChaiRegister()