

import testUserData from '../fixtures/userData.json'

import LoginPage from './page/loginPage.js'

import dashboardPage from './page/dashBoardPage.js'

import menuPage from './page/menuPage.js'


const loginPage= new LoginPage();
const dashboardPageInstance= new dashboardPage();
const menuPageInstance= new menuPage();

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
    selectorCountry:":nth-child(27)",
    maritalStatus:":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text",
    optionSelected:":nth-child(2)",
  
  }

  const userData= { userSucess: { username: 'Admin',
    password: 'admin123'
 }, 
  
 userFail:{ username:'teste', password:'teste'} }

  it.only('User Infor Update', () => {
    loginPage.acessLoginPage();
    loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password);
    

    dashboardPageInstance.checkDashBoardLayout()

    menuPageInstance.acessMyInfo()
 
    

    cy.get(SelectorsList.dataLicenseField)
   .should('have.length.greaterThan', 0) 
    .then($fields => {
    if ($fields.length) {
       cy.debug(); 
     debugger;
        
      cy.get($fields[0]).clear().type('2024-10-17'); 
     } else {
       cy.log('Elemento de data não encontrado');
      };

    })


   cy.get(SelectorsList.firstNameField).clear().type('firstNameTest')
   cy.get(SelectorsList.middleNameField).clear().type('middleNameTest')
   cy.get(SelectorsList.lastNameField).clear().type('lastNameTest')
   cy.get(SelectorsList.genericField).eq(4).clear().type('Employee')
   cy.get(SelectorsList.genericField).eq(5).clear().type('OtherIdTest')
   cy.get(SelectorsList.genericField).eq(6).clear().type('DriversLicenseTest')
   cy.get(SelectorsList.genericField).eq(8).clear().type('Nationality')
   cy.get(SelectorsList.submitButton).eq(0).click({force: true })
   cy.get(SelectorsList.selectorNationality).click()
   cy.get(SelectorsList.selectorCountry).click()
   cy.get(SelectorsList.maritalStatus).click({force: true})
   cy.get(SelectorsList.optionSelected).click
    
  
    }) ;

    

  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(SelectorsList.usernameField).type(userData.userFail.username)
    cy.get(SelectorsList.passwordField).type(userData.userFail.password)
    cy.get(SelectorsList.loginButton).click()
    cy.get(SelectorsList.wrongCredentialAlert)
   

});

})
