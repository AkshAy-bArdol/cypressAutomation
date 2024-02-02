describe('datatest', () => {
    let userdata;
    before(() => {
        cy.fixture("loginData").then((data) => {
            userdata = data;
        })
    })

    it('orangeHRM', () => {
        cy.visit("https://dev-ops-portal.bettertrucks.com")
        cy.xpath("//button[@type='submit']").click()
        cy.url()
        let currentUrl;

        cy.url().then((url) => {
            currentUrl = url;
            cy.log(currentUrl); // Log the URL to the Cypress command log
/*            cy.visit(currentUrl); // Visit the URL*/
        });

        
/*        cy.get("input[id='username']").type("akshay.bardol@bettertrucks.com")*/


/*        cy.get("input[id='username']").type("akshay.bardol@bettertrucks.com")
        cy.xpath("//input[@id='password']").type("AKbettertrucks.com")
        cy.xpath("(//button[@type='submit'])[2]").click()*/
/*        cy.get("input[placeholder='Username']").type(userdata.username)
        cy.get("input[placeholder='Password']").type(userdata.password)
        cy.get("button[type='submit']").click()
        cy.url().should('have.text',"hdgdg")*/
        
    })
})