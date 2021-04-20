import InstitutionLRAPHistory from "./institutionLRAPHistory";

export const Institution = class InstitutionName {

    static expect() {
        return {
            informationModaltoBeVisible: () => {
                InstitutionLRAPHistory.instituteInformationModal()
                    .should('be.visible')
            },

            modalToBeVisible: () => {
                InstitutionLRAPHistory.institutionStudentTypeModal()
                    .should('be.visible')
                    .and('contain.text', 'Institution Student Type')
            },

            toBeVisible: () => {
                InstitutionLRAPHistory.searchedResult()
                    .should('be.visible')
            },

            toHaveExpectedName: (institutionName) => {
                InstitutionLRAPHistory.searchedResult()
                    .should("contain.text", institutionName)
            },

            toBeEnabled: () => {
                InstitutionLRAPHistory.saveButton()
                    .should('be.enabled')
            },

            toHaveCorrectDates: (institutionSortName, studentType) => {
                InstitutionLRAPHistory.institutionAwardDatesCaption()
                    .should('contain.text', institutionSortName + ' - ' + studentType)
            },

            toHaveCorrectInformation: (institutionSortName, studentType) => {
                InstitutionLRAPHistory.awardProcessSetupInformationCaption()
                    .should('contain.text', institutionSortName + ' - ' + studentType)
            },

            toHaveNoActivationButton: () => {
                InstitutionLRAPHistory.awardProcessSetupButtons()
                    .eq(0).should('not.exist')

            },

            toHaveActivationButton: () => {
                InstitutionLRAPHistory.awardProcessSetupButtons()
                    .eq(0)
                    .should('contain.text', "Activate")
            },

            toHaveEditButton: () => {
                InstitutionLRAPHistory.awardProcessSetupButtons()
                    .eq(1)
                    .should('contain.text', 'Edit')
            },

            editModalToBeVisible: () => {
                InstitutionLRAPHistory.editModal()
                    .should('be.visible')
            },

            photoToBeAdded: () => {
                cy.get('[class="toast toast-success"]')
                    .should('have.length', 6)
            },

            buttonToBeVisible: () => {
                InstitutionLRAPHistory.cancelButton()
                    .should('be.visible')
                    .and('contain.text', 'Cancel')
            },

            capTabToBeVisible: () => {
                InstitutionLRAPHistory.capAndWaitlistTab()
                    .should('be.visible')
            }
        }
    }
}


