import { max_number_of_cars, min_number_of_cars } from "../support/constants"

export const go_to_find_car_page = () => {
    //visiting find Car or Autos Page via navigation link
    // when width size is >=1024
        cy.xpath('//a[@href="/autos"]',{timeout: 5000}).eq(0)
        .should('have.text','Auto finden').click()
}
export const validate_autos_page = () => {
    //validating the URL
        cy.url('https://www.instamotion.com/autos').should('exist')
    
    //Validating the number of cars on autos page
        cy.xpath('//div[@typeof="Car"]').should("have.length", max_number_of_cars);
        cy.xpath('//div[@typeof="Car"]').should("not.have.length", min_number_of_cars);
    
    //validating Sort functionality
        cy.get('input[value="Neueste Angebote zuerst"]').eq(0).should('be.visible'); 
}