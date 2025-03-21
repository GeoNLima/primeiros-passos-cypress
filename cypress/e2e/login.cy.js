import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()


describe('Login Orange HRM tests', () => {
     
  it('Login- Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
  })

  it('Login- Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)    
  })

})