import userData from '../fixtures/userData.json'

describe('Orange HRM tests', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateFieldButton: ".--close",
    submitButton: ".orangehrm-left-space.oxd-button"
    
  }

      
  it.only('User Info Update- Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
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
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast')
    cy.get('#oxd-toaster_1')
  })

  it('Login- Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })

})