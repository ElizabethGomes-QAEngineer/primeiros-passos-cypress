class LoginPage {

    selectorsList () { 
    const Selectors = { 
    
        usernameField: "[name='username']" , 
        passwordField: "[name='password']" , 
        loginButton: "[type='submit']",
        wrongCredentialAlert: "[role='alert']",


    } 
    return Selectors; 

};
    


    acessLoginPage () {  cy.visit('/auth/login') }
    
    loginWithUser (username,password) 
    
    { cy.get(this.selectorsList().usernameField).type(username)
      cy.get(this.selectorsList().passwordField).type(password)
      cy.get(this.selectorsList().loginButton).click()
      
}

}

export default LoginPage