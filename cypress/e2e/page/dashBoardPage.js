class dashboardPage {
selectorList () {

    const selectors = { 

        sectionTittleTopBar:".oxd-topbar-header-breadcrumb",
        dashboardLayout: ".orangehrm-upgrade-layout",
        locationUrl:"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"


    } 
    return selectors;
 }

visitSectionTittleTopBar () {

const selectors = this.selectorsList ()

cy.get(selectors.sectionTittleTopBar)

return cy.get(selectors.sectionTittleTopBar)

} 

checkDashBoardLayout () { 

    cy.location('pathname').should('equal','/web/index.php/dashboard/index');

    cy.get(this.selectorList().dashboardLayout).should('be.visible');


} 

}



 

export default dashboardPage