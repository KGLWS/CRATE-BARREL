/// <reference types="cypress" />
class globalSearch{

    visit(){
        cy.visit('https://www.crateandbarrel.com/')
    }
    
    sendKeys(value){
        const searchBox = cy.get('#header-search-input').should('be.visible');
        searchBox.clear();
        searchBox.click();
        searchBox.type(value);
        return this
    }

    enter(){
        const searchBtn = cy.get('#header-search-button').should('be.visible');
        searchBtn.click();
        return this
    }

    assertTitleResult(result){
        const resultTitle = cy.get('.spill-layout-title').should('be.visible');
        resultTitle.should('contain',result);
       return this
    }

    //get result slice,parce and assert
    assertNumResult(searchRes){
        const numberOfResult = cy.get('#totalSearchResults').should('be.visible');
        numberOfResult.then(($num) =>{
            let txt = $num.text();
                let searchResult=txt.slice(0,1);
                expect(searchResult).not.null;
                let numResult=parseInt(searchResult)
                expect(numResult).to.not.equal(0);
          cy.log(numResult);
        })
    } 
}
export default globalSearch