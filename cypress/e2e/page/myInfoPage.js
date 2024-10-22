class myInfoPage {

    selectorsList() { 

    const selectors= { 
         

        usernameField: "[name='username']" , 
        passwordField: "[name='password']" , 
        loginButton: "[type='submit']" , 
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

    };

    return selectors;

}



    fillPersonalDetailsInfo(firstName, middleName, lastName) {
            cy.get(this.selectorsList().firstNameField).clear().type(firstName);
            cy.get(this.selectorsList().middleNameField).clear().type(middleName);
            cy.get(this.selectorsList().lastNameField).clear().type(lastName);
        }
        


     
    fillEmployeeFild(employee,otherId, driversLicenseDate, nationality) { 
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employee);
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId);
        cy.get(this.selectorsList().genericField).eq(6).clear({ force: true }).type(driversLicenseDate);
        cy.get(this.selectorsList().genericField).eq(8).clear({ force: true }).type(nationality);

   }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true })

    }
    
    fillStatus() {
        cy.get(this.selectorsList().selectorNationality).click();
        cy.get(this.selectorsList().selectorCountry).first().click();
        cy.get(this.selectorsList().maritalStatus).click({force: true});
        cy.get(this.selectorsList().optionSelected).click;
    }


}


export default myInfoPage