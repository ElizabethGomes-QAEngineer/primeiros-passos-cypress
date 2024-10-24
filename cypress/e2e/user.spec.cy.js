

import testUserData from '../fixtures/userData.json'

import loginPage from './page/loginPage.js'

import dashboardPage from './page/dashBoardPage.js'

import menuPage from './page/menuPage.js'

import myInfor from'./page/myInfoPage.js'

import myInfoPage from './page/myInfoPage.js'


const Chance = require('chance')

const chance = new Chance()


const loginPageInstance= new loginPage();
const dashboardPageInstance= new dashboardPage();
const menuPageInstance= new menuPage();
const myInfoPageInstance = new myInfoPage();



describe('Orange HRM Teste', () => {


  it('User Infor Update', () => {

  loginPageInstance.acessLoginPage()

   const 
    
   userData = loginPageInstance.getUserData(); 

   cy.wait(2000)

   cy.get('body').then(($body) => {
   console.log($body.html());
    
   loginPageInstance.loginWithUser(userData.userSucess.username, userData.userSucess.password);
    
    dashboardPageInstance.checkDashBoardLayout()

    menuPageInstance.acessMyInfo()

    myInfoPageInstance.fillPersonalDetailsInfo (chance.first(),'middleName', chance.last(),chance.string())

    myInfoPageInstance.fillEmployeeFild (chance.string(),'otherId',chance.date({string: true, american: false}),'nationality')

    myInfoPageInstance.fillStatus()

    myInfoPageInstance.saveForm ()
 
  })

  })
    

  it('Login Fail', () => {
   
   loginPageInstance.acessLoginPage()
   const userFailData = loginPageInstance.getUserData().userFail
   loginPageInstance.loginWithUser(userFailData.username,userFailData.password)
   loginPageInstance.checkAcessInvalid()
   

});

})
