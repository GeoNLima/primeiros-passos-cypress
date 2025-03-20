import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage  from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM tests', () => {
  
  const selectorsList = {
   
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateFieldButton: ".--close",
    submitButton: ".orangehrm-left-space.oxd-button",
    nationalityArrow: ':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
    nationalityOption: '.oxd-select-dropdown > :nth-child(27) > span',
    maritalArrow: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
    maritalStatus: '.oxd-select-dropdown > :nth-child(2)',
    bloodtypeArrow: '.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon',
    bloodtypeOption: '.oxd-select-dropdown > :nth-child(2)',
    genderOption: ':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input'
    
    
  }

      
  it.only('User Info Update- Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    
    
    
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Astrogildo')
    cy.get(selectorsList.lastNameField).clear().type('Silvasauro')
    cy.get(selectorsList.genericField).eq(4).clear().type('dino')
    cy.get(selectorsList.genericField).eq(5).clear().type('54321')
    cy.get(selectorsList.genericField).eq(6).clear().type('66666')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-20-12')
    cy.get(selectorsList.dateFieldButton).click()
    cy.get(selectorsList.dateField).eq(1).clear().type('1976-21-11')
    cy.get(selectorsList.dateFieldButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('be.visible').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast')
    cy.get('#oxd-toaster_1')
    cy.get(selectorsList.nationalityArrow).click()
    cy.get(selectorsList.nationalityOption).click()
    cy.get(selectorsList.maritalArrow).click()
    cy.get(selectorsList.maritalStatus).click()
    cy.get(selectorsList.bloodtypeArrow).click()
    cy.get(selectorsList.bloodtypeOption).click()
    cy.get(selectorsList.genderOption).click()
    
  })

  it('Login- Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })

})