import Login from "../pageObjects/loginPage.js";


describe("LoginTest", () => {

    it.skip('Valid creadentials', () => {
        cy.visit("https://sandbox-ops-portal.bettertrucks.com/account/login")
        const ln = new Login();

        ln.logIntoApplication("bettertrucks0@yopmail.com", "bettertrucks0@yopmail.com");
        cy.wait(2000);
        cy.title().should('eq', 'Better Trucks - Admin Portal')
        cy.url().should('eq', 'https://sandbox-ops-portal.bettertrucks.com/home')
    })

    it('Invalid creadentials', () => {
        cy.visit("https://sandbox-ops-portal.bettertrucks.com/account/login")
        const ln = new Login();

        ln.logIntoApplication("bettertrucks0@yopmail.com", "bettertrucks0@yopmail..com");
        cy.wait(2000);
        cy.title().should('not.eq', 'Better Trucks - Admin Portal')
        cy.url().should('not.eq', 'https://sandbox-ops-portal.bettertrucks.com/home')

    })

})