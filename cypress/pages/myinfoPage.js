
class MyinfoPage {
    
    selectorsList(){
        const selectors = {
        
            firstNameField: "[name='firstName']",
            middleNameField: ".orangehrm-middlename",
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

        return selectors
    }

    fillpersonalDetails (firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

   fillEmployeeDetails (employeeID, otherId, driversLicense, licenseDate, birthDate) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeID)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicense)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseDate)
        cy.get(this.selectorsList().dateFieldButton).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type(birthDate)
        cy.get(this.selectorsList().dateFieldButton).click()
                
    }

    saveForm () {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('be.visible').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast')
        cy.get('#oxd-toaster_1')
    }

    fillStatus () {
        cy.get(this.selectorsList().nationalityArrow).click()
        cy.get(this.selectorsList().nationalityOption).click()
        cy.get(this.selectorsList().maritalArrow).click()
        cy.get(this.selectorsList().maritalStatus).click()
        cy.get(this.selectorsList().bloodtypeArrow).click()
        cy.get(this.selectorsList().bloodtypeOption).click()
        cy.get(this.selectorsList().genderOption).click()
    }

  
}

export default MyinfoPage