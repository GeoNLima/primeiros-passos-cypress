import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage  from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyinfoPage from '../pages/myinfoPage'
import LoginFailPage from '../pages/loginfailPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyinfoPage()
const loginfailPage = new LoginFailPage()

describe('Orange HRM tests', () => {
     
  it('User Info Update- Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()

    myinfoPage.fillpersonalDetails('Dino', 'Silva', 'Sauro')
    myinfoPage.fillEmployeeDetails('dinossaur', '66666', '7788991','2025-12-25', '1976-11-21')
    myinfoPage.fillStatus()
    myinfoPage.saveForm()
           
  })

  it('Login- Fail', () => {
    
    loginfailPage.acessLoginPage()
    loginfailPage.loginWithUser('dino', 'sauro')


  })

})