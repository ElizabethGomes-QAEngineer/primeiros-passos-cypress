

import userData from '../fixtures/userData.json'


describe('Orange HRM Teste', () => {

  const SelectorsList = { 
    
    usernameField: "[name='username']" , 
    passwordField: "[name='password']" , 
    loginButton: "[type='submit']" , 
    sectionTittleTopBar:".oxd-topbar-header-breadcrumb",
    dashboardLayout: ".orangehrm-upgrade-layout",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField:"[name='firstName']",
    middleNameField:"[name='middleName']",
    lastNameField: "[name='lastName']" ,
    genericField: ".oxd-input--active",
    dataLicenseField:".oxd-input--active",
    submitButton:"[type='submit']",
    selectorSectionMyInfo: ".oxd-select-text--active",
    selectorNationality:":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon",
    selectorCountry:":nth-child(27)"
  
  }

  const userData= { userSucess: { username: 'Admin',
    password: 'admin123'
  }, 
  
  userFail:{ username:'teste', password:'teste'} }

  it.only('User Infor Update', () => {

    cy.visit('/auth/login')
    cy.get(SelectorsList.usernameField).type(userData.userSucess.username)
    cy.get(SelectorsList.passwordField).type(userData.userSucess.password)
    cy.get(SelectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(SelectorsList.dashboardLayout)
    cy.get(SelectorsList.myInfoButton).click()


    cy.get(SelectorsList.dataLicenseField)
    .should('have.length.greaterThan', 0) 
    .then($fields => {
      if ($fields.length) {
        cy.debug(); 
        debugger;
        
        cy.get($fields[0]).clear().type('2024-10-17'); 
      } else {
        cy.log('Elemento de data não encontrado');
      }
    });


    cy.get(SelectorsList.firstNameField).clear().type('firstNameTest')
    cy.get(SelectorsList.middleNameField).clear().type('middleNameTest')
    cy.get(SelectorsList.lastNameField).clear().type('lastNameTest')
    cy.get(SelectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(SelectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(SelectorsList.genericField).eq(6).clear().type('DriversLicenseTest')
    cy.get(SelectorsList.genericField).eq(8).clear().type('Nationality')
    cy.get(SelectorsList.submitButton).eq(0).click()
    cy.get(SelectorsList.selectorNationality).click()
    cy.get(SelectorsList.selectorCountry).click

  
    }) 

    

  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(SelectorsList.usernameField).type(userData.userFail.username)
    cy.get(SelectorsList.passwordField).type(userData.userFail.password)
    cy.get(SelectorsList.loginButton).click()
    cy.get(SelectorsList.wrongCredentialAlert)
   

})

  })
