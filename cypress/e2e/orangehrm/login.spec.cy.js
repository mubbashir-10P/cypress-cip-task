import loginPage from "../../pageObjects/loginPO/loginPage";
describe('Verify Login functionality of Orange HRM System',() =>{
    beforeEach(function(){
        cy.fixture('testData').then(webUrl => {
            const url = webUrl.baseUrl;
            cy.visit(url);
        })
    })

    it("Should be able to login to system with correct credentials", ()=>{

        cy.fixture('testData').then(testData => {
            const username = testData.userName;
            const password = testData.password;

            loginPage.enterUserName(username);
            loginPage.enterPassword(password);
            loginPage.clickLoginButton();
            loginPage.verifyLoginIsSuccessfull();
        })
    })

    it("Should not be able to login to system with wrong credentials", ()=>{
       
            const username = "wrongUsername";
            const password = "wrongPassword";

            loginPage.enterUserName(username);
            loginPage.enterPassword(password);
            loginPage.clickLoginButton();
            loginPage.verifyInvalidLoginErrorMessage();
       
    })

    it("Should verify that required field message show when click on Login button only.", ()=> {
        loginPage.clickLoginButton();
        loginPage.getRequiredFieldErrorMessage();
        //expect (loginPage.getRequiredFieldErrorMessage()).to.equal(2);

    
    })
})