

import userData from '../fixtures/userData.json'


describe('Orange HRM Teste', () => {

  const SelectorsList = { 
    
    usernameField: "[name='username']" , 
    passwordField: "[name='password']" , 
    loginButton: "[type='submit']" , 
    sectionTittleTopBar:".oxd-topbar-header-breadcrumb",
    dashboardLayout: ".orangehrm-upgrade-layout",
    wrongCredentialAlert: "[role='alert']"
  
  }

  const userData= { userSucess: { username: 'Admin',
    password: 'admin123'
  }, 
  
  userFail:{ username:'teste', password:'teste'} }

  it('Login Sucess', () => {

    cy.visit('/auth/login')
    cy.get(SelectorsList.usernameField).type(userData.userSucess.username)
    cy.get(SelectorsList.passwordField).type(userData.userSucess.password)
    cy.get(SelectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(SelectorsList.dashboardLayout)
  
  })

  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(SelectorsList.usernameField).type(userData.userFail.username)
    cy.get(SelectorsList.passwordField).type(userData.userFail.password)
    cy.get(SelectorsList.loginButton).click()
    cy.get(SelectorsList.wrongCredentialAlert)
   

})

})
