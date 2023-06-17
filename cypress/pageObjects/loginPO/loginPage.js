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

    static verifyLoginIsSuccessfull(){
        cy.get("div.oxd-topbar-header-title h6").should('contain.text','Dashboard');
    }

    static verifyInvalidLoginErrorMessage(){
        cy.get("div.oxd-alert--error p.oxd-text").should('contain.text',"Invalid credentials");
    }
}