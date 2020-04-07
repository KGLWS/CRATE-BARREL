/// <reference types="cypress" />

import filterBy from './genericFunctions/filterBy';
import loginPage from './genericFunctions/loginPage';
import addToCart from './genericFunctions/addToCart';

describe('Apply filters by sections',() =>{
     
    it('should assert filter by returning proper values selected by customer',()=>{
        const fb = new filterBy();
        const lp=new loginPage();
        const ar=new addToCart();
        fb.visit();
        //lp.alertClose();
        fb.furnitureSection();
       fb.filterDropDown1();
       fb.filterDropDown2();
       fb.filterDropDown3();
       fb.filterDropDown4();
       fb.assertFilterResult();
       ar.selectItem();
       ar.addCart();
      // ar.assertItem();
    })
})

