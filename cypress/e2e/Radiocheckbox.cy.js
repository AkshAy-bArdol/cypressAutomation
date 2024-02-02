describe("Check UI elements", () => {
    it("Checking Radio Buttons", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        //visibility of elements
        cy.get("input#male").should("be.visible")
        cy.get("input#female").should("be.visible")

        //selecting radio button

        cy.get("input#male").check().should("be.checked")
        cy.get("input#female").should("not.be.checked")

    })

    it("Checking Checkboxes", () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        //visibility of elements
        cy.get("input#monday").should("be.visible")

        //selecting chck box

        cy.get("input#monday").check().should("be.checked")
        cy.get("input#monday").uncheck().should("not.be.checked")

        cy.get("input.form-check-input[type=checkbox]").first().check().should("be.checked")
        cy.get("input.form-check-input[type=checkbox]").last().check().should("be.checked")

    })




})