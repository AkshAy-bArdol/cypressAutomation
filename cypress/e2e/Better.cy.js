describe('Login Test', () => {
    it('Valid creadentials', () => {
        cy.visit("https://sandbox-ops-portal.bettertrucks.com/account/login")
        cy.get("button[type='submit']").click()
        cy.get("input[id='username']").type("bettertrucks0@yopmail.com")
        cy.get("input[id='password']").type("bettertrucks0@yopmail.com")
        cy.get(".c3fc7dc62>button").click()
        cy.wait(2000)
        cy.title().should('eq', 'Better Trucks - Admin Portal')
        cy.url().should('eq','https://sandbox-ops-portal.bettertrucks.com/home')
    })

/*    it('Invalid creadentials', () => {
        cy.visit("https://sandbox-ops-portal.bettertrucks.com/account/login")
        cy.get("button[type='submit']").click()
        cy.get("input[id='username']").type("bettertrucks0@yopmail.com")
        cy.get("input[id='password']").type("AKbettertruckslk.com")
        cy.get(".c3fc7dc62").click()
        cy.get("span[id = 'error-element-password']").invoke('text').should('contain','Wrong email or password')
        cy.title().should('not.eq', 'Better Trucks - Admin Portal')*/
        
    })
})