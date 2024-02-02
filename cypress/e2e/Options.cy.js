describe('Check all opotions', () => {
    it('get options', () => {
        cy.visit("https://dev-ops-portal.bettertrucks.com/account/login")
        cy.get("button[type='submit']").click()
        cy.get("input[id='username']").type("akshay.bardol@bettertrucks.com")
        cy.get("input[id='password']").type("AKbettertrucks.com")
        cy.xpath("(//button[@type='submit'])[2]").click()
        cy.get('your-element-selector').each(($element, index) => {
            cy.wrap($element).invoke('text').then((text) => {
                // Do something with 'text'
                cy.log(`Text of element ${index}: ${text}`);
            });
        });

    })
})