/// <reference types="cypress" />
require('cypress-xpath')
class addToCart {

    // visit() {
    //     cy.visit('https://www.crateandbarrel.com/furniture/sofas/1/filters/multicolor-sofas-firm-mid-72_to_108_inches~01004F4F66?hasAvailabilityCheck=false');
    // }

    selectItem() {
        const selectSofa = cy.get('[data-href="/barrett-103-3-seat-grande-track-arm-sofa/s658090"] > .product-details-wrapper > .product-info > .product-miniset-title').should('be.visible');
        selectSofa.click({force:true});
        return this
    }

    addCart() {
        const slideItemImage = cy.get(':nth-child(2) > .slick-initialized > .slick-next > .icon > use').should('be.visible');
        var i = 0;
        do {
            slideItemImage.click({force:true});
        } while (i >= 6);  
        const addToCart = cy.get('.add-to-cart-wrapper > .button > span').should('be.visible');
        addToCart.click({
            force: true
        });
        cy.wait(3000);
        const itemAdded = cy.get('.m-conf-item-count').should('have.text', '1 item added to your cart ');
        const cloreAlert = cy.get('#popup-close > .icon').should('be.visible');
        cloreAlert.click({
            force: true
        })
        return this
    }

    assertItem() {
        const cart = cy.get('.toggle-cart').should('be.visible');
        cart.click();
        const a = cy.get('.item-title > a').should('be.visible');
       // cy.get('.item-title > a').should('have.text', 'Barrett 103" 3-Seat Grande Track Arm Sofa');
        
        // const priceOnList = cy.get('.regPrice').contains(Text);
        // const sofaTitle = cy.xpath("//a[contains(text(),'Barrett 103' 3-Seat Grande Track Arm Sofa')]").should('have.text', 'Barrett 103" 3-Seat Grande Track Arm Sofa');
        // const priceOnCart = cy.get('.jsTotalPrice total').contains(Text);
        //expect(priceOnList).to.equal(priceOnCart);
        return this
    }
}
export default addToCart