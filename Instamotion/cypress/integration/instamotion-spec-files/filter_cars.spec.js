/// <reference types="cypress" />
import { go_to_find_car_page } from "../../page.objects/find_cars";
import * as car_filtering from "../../page.objects/filter_cars";

describe("Apply filters and search for cars", () =>  {
    before(() =>  
    {
        cy.viewport(1024, 768);
        cy.visit("/");
        cy.accept_cookies()
        go_to_find_car_page();
    });

    it("filters cars based on brand, type, model and other available criteria", () =>  {
        car_filtering.filter_Car();
      }); 
});
