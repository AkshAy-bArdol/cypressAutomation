describe('xpath', () => {
    it('testcase1', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath("//input[@name='username']").type("Admin")
        cy.xpath("//input[@name='password']").type("admin123")
        cy.xpath("//button[@type='submit']").click()
        cy.xpath("//input[@placeholder='Search']").type("Nick")
        cy.xpath("//span[@class='oxd-userdropdown-tab']").dblclick()
        cy.xpath("//a[text()='Logout']").click()
    })
    
})