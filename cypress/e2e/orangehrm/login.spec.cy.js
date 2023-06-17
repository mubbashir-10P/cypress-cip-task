import loginPage from "../../pageObjects/loginPO/loginPage";
describe('Verify Login functionality of Orange HRM System',() =>{
    before(function(){
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
        })
    })

    it.skip("Should not be able to login to system with wrong credentials", ()=>{
        
    })
})