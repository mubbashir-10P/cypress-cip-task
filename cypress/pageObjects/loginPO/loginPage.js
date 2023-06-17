import BasePage from "../basePage";

export default class loginPage extends BasePage{
    static enterUserName(mailAddress){
        cy.get("input[name='username']").clear().type(mailAddress);
        this.logInfo("Info: username entered.")
    }

    static enterPassword(password){
        cy.get("input[name='password']").clear().type(password);
        this.logInfo("Info: password entered.")
    }

    static clickLoginButton(){
        cy.get("button[type='submit']").click();
    }
}