class Login {

    signInbtn    = "button[type='submit']";
    txtusername  = "input[id='username']";
    txtpassword  = "input[id='password']";
    submitbtn    = ".c63db4457>button";

    logIntoApplication(username,password)
    {
        cy.get(this.signInbtn).click();
        // cy.wait(2000);
        cy.get(this.txtusername).type(username);
        // cy.wait(2000);
        cy.get(this.txtpassword).type(password);
        // cy.wait(2000);
        cy.get(this.submitbtn).click();
        // cy.wait(2000);
    }

}

export default Login;