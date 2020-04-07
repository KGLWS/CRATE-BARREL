/// <reference types="cypress" />
import loginPage from './genericFunctions/loginPage';

describe('Customer logins',() =>{
    
    it('should assert customer login',()=>{
         const lp=new loginPage();
         lp.visit();
         lp.signIn();
         lp.fillEmail('eddie.kgma@gmail.com')
         lp.fillPassword('tEST20CYPRESS');
         lp.uncheckRemember();
         lp.submit();
    })
})
