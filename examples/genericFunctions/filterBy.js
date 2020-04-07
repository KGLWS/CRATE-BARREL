/// <reference types="cypress" />
class filterBy {

    visit() {
        cy.visit('https://www.crateandbarrel.com/');
    }

    furnitureSection() {
        const furniture = cy.get('#Nav_Furniture').should('be.visible');
        furniture.click();
        cy.url().should('include', 'furniture');
        const sofas = cy.get(':nth-child(2) > ul > :nth-child(2) > .super-category-nav-sub').should('be.visible');
        sofas.click({
            force: true
        });
        cy.url().should('include', 'sofas');
    }

    filterDropDown1() {
        const filter1 = cy.get('#dropdown0').should('be.visible');
        filter1.click();
        const sofasCheckBox = cy.get('#dropdown-content0 > .filter-by > .filter-list-container > .filter-list > :nth-child(7) > .a11y-checkbox-label');
        sofasCheckBox.click();
        const filterApply = cy.get('#dropdown-content0 > .filter-by > .filter-list-container > .apply-filter').should('be.visible');
        filterApply.click();
        return this
    }

    filterDropDown2() {
        const filter2 = cy.get('#dropdown1 > .drop-down-button').should('be.visible');
        filter2.click();
        const colorCheckBox = cy.get('#dropdown-content1 > .filter-by > .filter-list-container > .filter-list > :nth-child(8) > .a11y-checkbox-label').contains('Multicolor');
        colorCheckBox.click();
        const filterApply = cy.get('#dropdown-content1 > .filter-by > .filter-list-container > .apply-filter').should('be.visible');
        filterApply.click();
        return this
    }

    filterDropDown3() {
        const filter3 = cy.get('#dropdown2 > .drop-down-button').should('be.visible');
        filter3.click();
        const widthCheckBox = cy.get('#dropdown-content2 > .filter-by > .filter-list-container > .filter-list > li > .a11y-checkbox-label').contains('inches');
        widthCheckBox.click({
            force: true
        });
        const filterApply = cy.get('#dropdown-content2 > .filter-by > .filter-list-container > .apply-filter').should('be.visible');
        filterApply.click({
            force: true
        });
        return this
    }

    filterDropDown4() {
        const filter4 = cy.get('#dropdown3 > .drop-down-button').should('be.visible');
        filter4.click();
        const softenessCheckBox1 = cy.get('#dropdown-content3 > .filter-by > .filter-list-container > .filter-list > :nth-child(1) > .a11y-checkbox-label').contains('Firm');
        softenessCheckBox1.click({
            force: true
        });
        const softenessCheckBox2 = cy.get('#dropdown-content3 > .filter-by > .filter-list-container > .filter-list > :nth-child(2) > .a11y-checkbox-label').contains('Mid');
        softenessCheckBox2.click({
            force: true
        });
        const filterApply = cy.get('#dropdown-content3 > .filter-by > .filter-list-container > .apply-filter').should('be.visible');
        filterApply.click({
            force: true
        });
        return this
    }

    assertFilterResult() {
        const countSofas = cy.get('.product-miniset-title').should('have.length', 2);
        return this
    }
}
    export default filterBy 