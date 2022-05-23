import filter from "../fixtures/filter.json"
import { filterClassXPATH } from '../support/constants';

//Apply filters and verify filtered car brand
export const filter_Car = () => {
      cy.xpath(filterClassXPATH).eq(1).click()
      cy.xpath('//li[@id="downshift-1-item-2"]//div[@class="sc-eqPNPO bSnxMC"]')
      .should('have.text',filter.filterCar.brand).click()
      cy.xpath(filterClassXPATH).eq(2).click()
      cy.xpath('//li[@id="downshift-2-item-2"]//div[@class="sc-eqPNPO bSnxMC"]')
      .should('have.text',filter.filterCar.model).click()
      cy.xpath(filterClassXPATH).eq(3).click()
      cy.xpath('//li[@id="downshift-3-item-4"]//div[@class="sc-eqPNPO bSnxMC"]')
      .should('have.text',filter.filterCar.VehicleType).click()
      cy.xpath('//button[@class="sc-AnqlK kyzdGp"]').eq(0).click()
      cy.xpath('//li[@class="sc-ekkqgF bQbXLs"]').eq(0)
      .should('have.text',filter.filterCar.rate.from).click()
      cy.xpath('//button[@class="sc-AnqlK kyzdGp"]').eq(1).click()
      cy.xpath('//li[@class="sc-ekkqgF bQbXLs"]').eq(13)
      .should('have.text',filter.filterCar.rate.until).click()
      cy.xpath(filterClassXPATH).eq(11).click()
      cy.xpath('//li[@id="downshift-19-item-3"]')
      .should('have.text',filter.filterCar.condition).click()
      cy.get('h3[class="sc-dTLGrV gBlfhj"]').contains(filter.filterCar.brand)
}
