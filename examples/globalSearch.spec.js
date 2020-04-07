/// <reference types="cypress" />
 import globalSearch from './genericFunctions/globalSearch';

 describe('Global search on main page',() =>{

    it('should assert search box returs proper value with "Dishes" and result >0 ',() =>{
        const sb= new globalSearch();
        sb.visit();
        sb.sendKeys('Dishes');
        sb.enter();
        sb.assertTitleResult('Dishes');
        sb.assertNumResult();
    })

    it('should assert search box returs proper value with "Tables" and result >0 ',() =>{
        const sb= new globalSearch();
        sb.visit();
        sb.sendKeys('Tables');
        sb.enter();
        sb.assertTitleResult('Tables');
        sb.assertNumResult();
    })

    it('should assert search box returs proper value with "Dining" and result >0 ',() =>{
        const sb= new globalSearch();
        sb.visit();
        sb.sendKeys('Dining');
        sb.enter();
        sb.assertTitleResult('Dining');
        sb.assertNumResult();
    })

    it('should assert search box returs proper value with "Dining" and result >0 ',() =>{
        const sb= new globalSearch();
        sb.visit();
        sb.sendKeys('Dining');
        sb.enter();
        sb.assertTitleResult('Dining');
        sb.assertNumResult();
    })
 })