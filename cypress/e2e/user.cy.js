import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage  from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyinfoPage from '../pages/myinfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyinfoPage()

describe('Orange HRM tests', () => {
     
  it.only('User Info Update- Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()

    myinfoPage.accessMyInfo()
    

       
  })

  it('Login- Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })

})