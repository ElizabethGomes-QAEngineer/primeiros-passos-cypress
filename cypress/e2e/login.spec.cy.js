describe('Orange HRM Teste', () => {

  const SelectorsList = { 
    
    usernameField: "[name='username']" , 
    passwordField: "[name='password']" , 
    loginButton: "[type='submit']" , 
    sectionTittleTopBar:".oxd-topbar-header-breadcrumb",
    wrongCredentialAlert: "[role='alert']"

  
  }

  it('Login Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorsList.usernameField).type('Admin')
    cy.get(SelectorsList.passwordField).type('admin123')
    cy.get(SelectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(SelectorsList.sectionTittleTopBar).contains('Dashboard')
  
  })

  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorsList.usernameField).type('test')
    cy.get(SelectorsList.passwordField).type('test')
    cy.get(SelectorsList.loginButton).click()
    cy.get(SelectorsList.wrongCredentialAlert)
   

})

})
