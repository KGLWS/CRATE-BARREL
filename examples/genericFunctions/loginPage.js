/// <reference types="cypress" />
class loginPage {

    visit() {
        cy.visit('https://www.crateandbarrel.com/');
    }

    signIn(value1, value2) {
        const account = cy.get('#header-account-signed-out-text');
        account.click({
            force: true
        });
        return this
    }

    alertClose() {
        cy.wait(3000);
        let xButton = cy.get('.web-icon-close').should('be.visible');
        let yButton = true;

        if (xButton === yButton) {
            xButton.click({
                force: true
            });
        }
        return this
    }

    fillEmail(usrn) {
        const userName = cy.get('#UserName');
        userName.clear({
            force: true
        });
        userName.type(usrn);
        return this
    }

    fillPassword(pwd) {
        const password = cy.get('#Password');
        password.clear({
            force: true
        });
        password.type(pwd);
        return this
    }

    uncheckRemember() {
        const rememberCheckBox = cy.get('.a11y-checkbox-label');
        rememberCheckBox.click({
            force: true
        });
        return this
    }

    submit() {
        const buttonSubmit = cy.get(':nth-child(10) > .button');
        buttonSubmit.click({
            force: true
        });
        return this
    }
}
export default loginPage